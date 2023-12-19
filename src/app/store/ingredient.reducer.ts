import { createReducer, on } from '@ngrx/store';
import { set } from './ingredient.actions';

export const initialState: string = '';

export const ingredientReducer = createReducer(
  initialState,
  on(set, (state, { newIngredients }) => newIngredients)
);
