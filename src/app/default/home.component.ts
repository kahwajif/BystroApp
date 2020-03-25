import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../shared/services/appsettings.service';
import * as _ from 'lodash';

@Component({
    templateUrl: './home.component.html'
})

export class DefaultHomeComponent extends AppComponentBase implements OnInit, AfterViewInit {

    query: string = '';
    searchResults: any;
    baseUrl: string = '';
    savedFoods: any[] = [];
    savedShoppingList: any[] = [];


    constructor(
        injector: Injector,
        private _http: HttpClient,
        private _settings: AppSettingsService
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {

    }

    ngOnInit() {
        this.baseUrl = this._settings.getBaseUrl();
        this.getSavedFoods();
    }

    searchFood = () => {
        this._http.get(`${this.baseUrl}/api/food?limit=10&page=1&name=${this.query}`)
            .subscribe({
                next: this.onFoodsLoaded
            })
    }

    saveFood = (food: any) => {
        var savedFoods = this._settings.getSavedFoods();
        if(!_.find(savedFoods, { id: food.id })){
            this._settings.addSavedFood(food)
            this.searchResults = [];
            this.query = '';
            this.getSavedFoods();
        }
    }

    addFoodToShoppingList = (food: any) => {
        var savedShoppingList = this._settings.getShoppingList();
        if(!_.find(savedShoppingList, { id: food.id })){
            this._settings.addToShoppingList(food)
            this.searchResults = [];
            this.query = '';
            //this.getShoppingList();
        }
    }

    removeFood = (food: any) => {
        this._settings.removeFood(food);
        this.getSavedFoods();
    }

    getSavedFoods = () => {
        this.savedFoods = this._settings.getSavedFoods();
    }

    onFoodsLoaded = (data: any) => {
        let savedFoods = this._settings.getSavedFoods();
        let savedFoodIds = savedFoods.map(food => food.id);
        this.searchResults = data.results.filter(result => !_.includes(savedFoodIds, result.id));
    }
}
