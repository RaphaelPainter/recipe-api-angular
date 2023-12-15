import { createReducer, on } from '@ngrx/store';
import { reset, set } from './ingredient.actions';
import { Components } from 'acme-components-sample-shirzooa';
import { Ingredient } from 'recipe-front-model';

export const initialState: string = '';

export const ingredientReducer = createReducer(
  initialState,
  on(reset, (state) => ''),
  on(set, (state, { newIngredients }) => newIngredients)
);
