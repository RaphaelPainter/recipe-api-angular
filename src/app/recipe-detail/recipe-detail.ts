import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { set } from '../store/ingredient.actions';
import { RecipeApiService } from '../recipe-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ingredientReducer } from '../store/ingredient.reducer';

@Component({
  selector: 'recipes-detail-component',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  id: string = '';

  recipe$: Observable<string>;
  isDataAvailable: boolean = false;

  constructor(
    private store: Store<{ ingredientReducer: string }>,
    private _apiservice: RecipeApiService,
    private route: ActivatedRoute
  ) {
    this.recipe$ = store.select('ingredientReducer');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
        ? (params.get('id') as string)
        : ('' as string);
    });
    this._apiservice.getRecipe(this.id).then((response) => {
      this.store.dispatch(set({ newIngredients: response }));
      console.log(response);
      this.isDataAvailable = true;
      console.log('ok');
    });
  }
}
