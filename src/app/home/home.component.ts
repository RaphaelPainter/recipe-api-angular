import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { reset, set } from '../store/ingredient.actions';
import { Ingredient } from 'recipe-front-model';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ingredients$: Observable<string>;

  constructor(private store: Store<{ ingredients: string }>) {
    this.ingredients$ = store.select('ingredients');
  }

  ngOnInit(): void {
    let ingredients: string = `[
    {
        "id": "450e8400-e29b-41d4-a716-446655440000",
        "name": "Betterave rouge de Garonne",
        "season_start": 9,
        "season_end": 12,
        "image": "https://www.papillesetpupilles.fr/wp-content/uploads/2022/01/Betteraves-%C2%A9-supercat-shutterstock.jpg"
    },
    {
        "id": "450e8400-e29b-41d4-a716-446655440001",
        "name": "Blette",
        "season_start": 9,
        "season_end": 12,
        "image": "https://www.mangeons-local.bzh/wp-content/uploads/bette-carde.jpg"
    },
    {
        "id": "450e8400-e29b-41d4-a716-446655440002",
        "name": "Brocoli",
        "season_start": 9,
        "season_end": 12,
        "image": "https://resize.prod.docfr.doc-media.fr/s/1200/ext/eac4ff34/content/2022/7/5/brocoli-1000fdace663fd2b.jpeg"
    }
]`;
    this.store.dispatch(set({ newIngredients: ingredients }));
  }

  reset() {
    this.store.dispatch(reset());
  }
}
