import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is a another test',
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
