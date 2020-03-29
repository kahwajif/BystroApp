import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../shared/services/appsettings.service';
import * as _ from 'lodash';
import { Food } from 'src/models/food.model';

@Component({
    templateUrl: './home.component.html'
})

export class DefaultHomeComponent extends AppComponentBase implements OnInit, AfterViewInit {

    query: string = '';
    baseUrl: string = '';

    searchResults: any;
    savedFoods: Food[] = [];

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

    searchFood(): void {
        this._http.get(`${this.baseUrl}/api/food?limit=10&page=1&name=${this.query}`)
            .subscribe({
                next: this.onFoodsLoaded
            })
    }

    saveFood(food: Food): void {
        var savedFoods = this._settings.getSavedFoods();
        if(!_.find(savedFoods, { id: food.id })){
            this._settings.addSavedFood(food)
            this.searchResults = [];
            this.query = '';
            this.getSavedFoods();
        }
    }

    removeFood(food: Food): void {
        this._settings.removeFood(food);
        this.getSavedFoods();
    }

    getSavedFoods(): void {
        this.savedFoods = this._settings.getSavedFoods().sort((a,b) => {
            return Date.parse(b.dateAdded.toString()) - Date.parse(a.dateAdded.toString())
        });
    }

    saveToSpiceRack = (food: Food) => {
        this._settings.addToSpiceRack(food);
    }


    onFoodsLoaded = (data: any): void => {
        console.log(data)
        let savedFoods = this._settings.getSavedFoods();
        let savedFoodIds = savedFoods.map(food => food.id);
        this.searchResults = data.results.filter(result => !_.includes(savedFoodIds, result.id));
    }
}
