import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { set } from '../store/ingredient.actions';
import { RecipeApiService } from '../recipe-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ingredientReducer } from '../store/ingredient.reducer';

@Component({
  selector: 'recipes-component',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  id: string = '';

  ingredients$: Observable<string>;
  isDataAvailable: boolean = false;

  constructor(
    private store: Store<{ ingredientReducer: string }>,
    private _apiservice: RecipeApiService,
    private route: ActivatedRoute
  ) {
    this.ingredients$ = store.select('ingredientReducer');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
        ? (params.get('id') as string)
        : ('' as string);
    });
    this._apiservice.getRecipesWithThisIngredient(this.id).then((response) => {
      this.store.dispatch(set({ newIngredients: response }));
      this.isDataAvailable = true;
      console.log('ok');
    });
  }
}
