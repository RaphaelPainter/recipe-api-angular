import { Component, State, h } from '@stencil/core';

import {Ingredient} from './../../store';

@Component({
    tag: 'my-card',
    styleUrl: 'my-card.css',
    shadow: true,
})

export class MyCard {

  @State() ingredients: Ingredient[];

    connectedCallback(){
        let ingredients : Ingredient[] = []
        let ingredientJSON = JSON.parse(`{
        "id": "450e8400-e29b-41d4-a716-446655440000",
        "name": "Betterave rouge de Garonne",
        "season_start": 9,
        "season_end": 12,
        "image": "https://www.papillesetpupilles.fr/wp-content/uploads/2022/01/Betteraves-%C2%A9-supercat-shutterstock.jpg"
    }`);
        let ingredient = Ingredient.mapToClass(ingredientJSON);
        ingredients.push(ingredient)
        ingredients.push(ingredient)
        ingredients.push(ingredient)
        ingredients.push(ingredient)
        ingredients.push(ingredient)

        this.ingredients = ingredients
    }


    render(){
        return(<div class="my-card-wrapper">
            <div>state {JSON.stringify(this.ingredients)}</div>
            </div>);
    }
}


