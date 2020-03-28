import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment'
import * as _ from 'lodash';
import { ShoppingListItem } from 'src/models/shopping-list-item.model';
import { Ingredient } from 'src/models/ingredient.model';
import { Food } from 'src/models/food.model';
import { v4 as uuidv4 } from 'uuid';
import { Recipe } from 'src/models/recipe.model';

@Injectable()
export class AppSettingsService {
  getBaseUrl(): string {
    return environment.baseUrl;
  }

  // FOODS ==============================================================================
  addSavedFood(food: any) {
    var foods = this.getSavedFoods();
    foods.push(food);
    this.setSavedFoods(foods);
  }

  removeFood(food: any) {
    var foods = this.getSavedFoods();
    _.remove(foods, f => f.name == food.name);
    this.setSavedFoods(foods);
  }

  getSavedFoods(): any[] {
    let foods = localStorage.getItem('foods');
    return foods ? JSON.parse(foods) : [];
  }

  setSavedFoods(foods: any[]) {
    localStorage.setItem('foods', JSON.stringify(foods));
  }
  // END FOODS ==========================================================================
  // SHOPPING LIST ITEMS ================================================================
  addShoppingListItem(item: ShoppingListItem) {
    var items = this.getShoppingListItems();
    items.push(item);
    this.setShoppingListItems(items);
  }

  addShoppingListItems(items: ShoppingListItem[]) {
    var shoppingListItems = this.getShoppingListItems();
    shoppingListItems.push(...items);
    this.setShoppingListItems(items);
    console.log(items);
    console.log(this.getShoppingListItems())
  }

  addIngredientToShoppingList(ingredient: Ingredient) {
    var item = new ShoppingListItem();
    item.description = `${ingredient.quantity} ${ingredient.unit} ${ingredient.food.name}`;
    item.isSelected = false;
    item.uuid = uuidv4();

    this.addShoppingListItem(item);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    var items = ingredients.map(ingredient => {
      var item = new ShoppingListItem();
      item.description = `${ingredient.quantity} ${ingredient.unit} ${ingredient.food.name}`;
      item.isSelected = false;
      item.uuid = uuidv4();
      return item;
    });

    this.addShoppingListItems(items);
  }

  getShoppingListItems(): ShoppingListItem[] {
    let items = localStorage.getItem('shoppingListItems');
    return items ? JSON.parse(items) : [];
  }

  setShoppingListItems(items: ShoppingListItem[]) {
    localStorage.setItem('shoppingListItems', JSON.stringify(items));
  }

  removeFromShoppingList(item: ShoppingListItem) {
    var items = this.getShoppingListItems();
    _.remove(items, i => i.uuid === item.uuid);
    this.setShoppingListItems(items);
  }
  // END SHOPPING LIST ITEMS ============================================================
  // FAVORITE RECIPES ===================================================================
  getFavoriteRecipes(): Recipe[] {
    let recipes = localStorage.getItem('favoriteRecipes');
    return recipes ? JSON.parse(recipes) : [];
  }

  addFavoriteRecipe(recipe: Recipe) {
    var recipes = this.getFavoriteRecipes();
    recipes.push(recipe);
    this.setFavoriteRecipes(recipes);
  }

  setFavoriteRecipes(recipes: Recipe[]) {
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipes));
  }
  
  removeFavoriteRecipe(recipe: Recipe) {
    var recipes = this.getFavoriteRecipes();
    _.remove(recipes, r => r.id == recipe.id);
    this.setFavoriteRecipes(recipes);
  }
  // END FAVORITE RECIPES ===============================================================
}
