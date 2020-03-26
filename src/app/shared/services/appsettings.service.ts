import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment'
import * as _ from 'lodash';

@Injectable()
export class AppSettingsService {
  // getBaseUrl(): Observable<string> {
  //     return of<string>(environment.baseUrl);
  // }

  getBaseUrl(): string {
    return environment.baseUrl;
  }

  addSavedFood(food: any) {
    var foods = this.getSavedFoods();
    foods.push(food);
    this.setSavedFoods(foods);
  }

  //add food to s.list
  addToShoppingList(food: any){
      var foods = this.getShoppingList();
      foods.push(food);
      this.setShoppingList(foods);
  }

  //add ingredient to s.list
  addIngToShoppingList(ing: any){
      var ings = this.getShoppingList();
      ings.push(ing);
      this.setShoppingList(ings);
  }

  getShoppingList(): any[] {
    let foods = localStorage.getItem('foodsList');
    return foods ? JSON.parse(foods) : [];
  }

  setShoppingList(foods: any[]) {
    localStorage.setItem('foodsList', JSON.stringify(foods));
  }

  removeFromShoppingList(food: any) {

    var foods = this.getShoppingList();
    _.remove(foods, f => f == food);
    this.setShoppingList(foods);
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

  addFavRecipe(recipe: any){
      var recipes = this.getSavedRecipes();
      recipes.push(recipe);
      this.setSavedRecipes(recipes);
  }

  getSavedRecipes(): any[] {
      let recipes = localStorage.getItem('recipes');
      return recipes ? JSON.parse(recipes) : [];
  }

  setSavedRecipes(recipes: any[]){
      localStorage.setItem('recipes', JSON.stringify(recipes));
  }

  removeRecipe(recipe: any) {
    var recipes = this.getSavedRecipes();
    _.remove(recipes, f => f.name == recipe.name);
    this.setSavedRecipes(recipes);
  }

}
