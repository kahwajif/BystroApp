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
}