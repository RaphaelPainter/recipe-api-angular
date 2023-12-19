import { createAction, props } from '@ngrx/store';

export const set = createAction(
  '[Ingredient Component] Set',
  props<{ newIngredients: string }>()
);
