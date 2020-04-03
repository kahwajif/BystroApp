import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment'
import * as _ from 'lodash';
import { ShoppingListItem } from 'src/models/shopping-list-item.model';
import { Food } from 'src/models/food.model';
import { v4 as uuidv4 } from 'uuid';
import { Ingredient } from 'src/models/ingredient.model';
import { Recipe } from 'src/models/recipe.model';

@Injectable()
export class AppSettingsService {
  getBaseUrl(): string {
    return environment.baseUrl;
  }

  // FOODS ==============================================================================
  addSavedFood(food: Food) {
    var foods = this.getSavedFoods();
    food.dateAdded = new Date();
    foods.push(food);
    this.setSavedFoods(foods);
  }

  removeFood(food: Food) {
    var foods = this.getSavedFoods();
    _.remove(foods, f => f.name == food.name);
    this.setSavedFoods(foods);
  }

  getSavedFoods(): Food[] {
    let foods = localStorage.getItem('foods');
    return foods ? JSON.parse(foods) : [];
  }

  setSavedFoods(foods: Food[]) {
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
    this.setShoppingListItems(_.union(shoppingListItems, items));
  }

  addIngredientToShoppingList(ingredient: Ingredient) {
    var item = new ShoppingListItem().fromIngredient(ingredient);
    this.addShoppingListItem(item);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    var items = ingredients.map(ingredient => new ShoppingListItem().fromIngredient(ingredient));
    this.addShoppingListItems(items);
  }

  getShoppingListItems(): ShoppingListItem[] {
    let items = localStorage.getItem('shoppingListItems');
    return items ? JSON.parse(items) : [];
  }

  setShoppingListItems(items: ShoppingListItem[]) {
    localStorage.setItem('shoppingListItems', JSON.stringify(items));
  }

  updateShoppingListItem(item: ShoppingListItem) {
    var items = this.getShoppingListItems();
    var index = _.findIndex(items, i => i.uuid === item.uuid);
    items[index] = item;
    this.setShoppingListItems(items);
  }

  removeFromShoppingList(item: ShoppingListItem) {
    var items = this.getShoppingListItems();
    _.remove(items, i => i.uuid === item.uuid);
    this.setShoppingListItems(items);
  }

  removeSelectedShoppingListItems() {
    var items = this.getShoppingListItems().filter(i => !i.isSelected);
    this.setShoppingListItems(items);
  }
  // END SHOPPING LIST ITEMS ============================================================
  // CUSTOM RECIPES =====================================================================
  addCustomRecipe(recipe: Recipe) {
    var recipes = this.getCustomRecipes();
    recipes.push(recipe);
    this.setCustomRecipes(recipes);
  }

  getCustomRecipes(): Recipe[] {
    let recipes = localStorage.getItem('customRecipes');
    return recipes ? JSON.parse(recipes) : [];
  }

  setCustomRecipes(recipes: Recipe[]) {
    localStorage.setItem('customRecipes', JSON.stringify(recipes));
  }

  removeCustomRecipe(recipe: Recipe) {
    var recipes = this.getCustomRecipes();
    _.remove(recipes, i => i.id === recipe.id);
    this.setCustomRecipes(recipes);
  }

  updateCustomRecipe(recipe: Recipe) {
    var recipes = this.getCustomRecipes();
    var index = _.findIndex(recipes, i => i.id === recipe.id);
    recipes[index] = recipe;
    this.setCustomRecipes(recipes);
  }

  addOrUpdateCustomRecipe(recipe: Recipe) {
    var recipes = this.getCustomRecipes();
    let index = _.findIndex(recipes, i => i.id === recipe.id);
    if(index >= 0) {
      this.updateCustomRecipe(recipe);
    } else {
      this.addCustomRecipe(recipe);
    }
  }
  // END CUSTOM RECIPES =================================================================
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
  // SPICE RACK =========================================================================
  addToSpiceRack(food: Food) {
    var foods = this.getSpiceRack();
    food.dateAdded = new Date();
    foods.push(food);
    this.setSpiceRack(foods);
  }

  removeFromSpiceRack(food: Food) {
    var foods = this.getSpiceRack();
    _.remove(foods, f => f.name == food.name);
    this.setSpiceRack(foods);
  }

  getSpiceRack(): Food[] {
    let foods = localStorage.getItem('spice');
    return foods ? JSON.parse(foods) : [];
  }

  setSpiceRack(foods: Food[]) {
    localStorage.setItem('spice', JSON.stringify(foods));
  }
  // END SPICE RACK =========================================================================
}
