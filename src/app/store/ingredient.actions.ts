import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'recipe-front-model';

export const reset = createAction('[Ingredient Component] Reset');

export const set = createAction(
  '[Ingredient Component] Set',
  props<{ newIngredients: string }>()
);
