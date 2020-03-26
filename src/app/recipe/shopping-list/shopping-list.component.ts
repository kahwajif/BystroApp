import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
    templateUrl: './shopping-list.component.html'
})

export class RecipeShoppingListComponent extends AppComponentBase implements OnInit, AfterViewInit{

    savedShoppingList: any[] = [];
    query: string = '';
    searchResults: any;
    baseUrl: string = '';


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
        this.savedShoppingList = this._settings.getShoppingList();
        this.baseUrl = this._settings.getBaseUrl();
        /*this._http.post(
                `${this._settings.getBaseUrl()}/api/shopping-list`,
                {
                    foodIds: this.savedShoppingList.map(food => food.id),
                }
            )
            .subscribe({
                next: this.onShoppingListLoaded
            })*/
    }

    searchFood = () => {
        this._http.get(`${this.baseUrl}/api/food?limit=10&page=1&name=${this.query}`)
            .subscribe({
                next: this.onShoppingListLoaded
            })
    }

    addFoodToShoppingList = (food: any) => {
        var savedShoppingList = this._settings.getShoppingList();
        if(!_.find(savedShoppingList, { id: food.id })){
            this._settings.addToShoppingList(food.name)
            this.searchResults = [];
            this.query = '';
            this.getShoppingList();
        }
    }

    removeFromShoppingList = (food: any) => {
        this._settings.removeFromShoppingList(food);
        this.getShoppingList();
    }

    getShoppingList = () => {
        this.savedShoppingList= this._settings.getShoppingList();
        console.log(this.savedShoppingList)
    }

    onShoppingListLoaded = (data:any) => { //res
        //this.savedShoppingList = res.results;
        let savedFoods = this._settings.getShoppingList();
        let savedFoodIds = savedFoods.map(food => food.id);
        this.searchResults = data.results.filter(result => !_.includes(savedFoodIds, result.id));
    }

}


