import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { set } from '../store/ingredient.actions';
import { Ingredient } from 'recipe-front-model';
import { RecipeApiService } from './../recipe-service.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ingredients$: Observable<string>;
  isDataAvailable: boolean = false;

  constructor(
    private store: Store<{ ingredientReducer: string }>,
    private _apiservice: RecipeApiService
  ) {
    this.ingredients$ = store.select('ingredientReducer');
  }

  ngOnInit(): void {
    this._apiservice.getSeasonalIngredients().then((response) => {
      console.log(response);
      this.store.dispatch(set({ newIngredients: response }));
      this.isDataAvailable = true;
    });
  }
}
