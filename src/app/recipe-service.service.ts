import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Ingredient } from 'recipe-front-model';
import { environment } from '../../environnement';
import { OAuthService } from 'angular-oauth2-oidc';
import { OAuthErrorEvent } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  async getRecipe(id: string) {
    const response = await fetch(`${environment.RECIPE_API_ROOT}/recipe/${id}`);

    if (response.ok) {
      const data = await response.json();
      return JSON.stringify(data) as string;
    }
    console.error('FAIL_FETCH_RECIPE', await response.text());
    throw new Error('Failed to fetch recipe. Please check the logs');
  }
  constructor(private _http: HttpClient, private _oauthService: OAuthService) {}

  async getSeasonalIngredients(): Promise<string> {
    const response = await fetch(`${environment.RECIPE_API_ROOT}/ingredient/`);

    if (response.ok) {
      const data = await response.json();
      return JSON.stringify(data) as string;
    }
    console.error('FAIL_FETCH_INGREDIENTS', await response.text());
    throw new Error('Failed to fetch ingredients. Please check the logs');
  }

  async getRecipesWithThisIngredient(id: string): Promise<string> {
    const response = await fetch(
      `${environment.RECIPE_API_ROOT}/recipe/withIngredient/${id}`
    );

    if (response.ok) {
      const data = await response.json();
      return JSON.stringify(data) as string;
    }
    console.error('FAIL_FETCH_RECIPES', await response.text());
    throw new Error('Failed to fetch recipes. Please check the logs');
  }
}
