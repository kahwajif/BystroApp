import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { ShoppingListItem } from 'src/models/shopping-list-item.model';

@Component({
    templateUrl: './shopping-list.component.html'
})

export class RecipeShoppingListComponent extends AppComponentBase implements OnInit, AfterViewInit{

    shoppingListItems: ShoppingListItem[] = [];
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
        this.shoppingListItems = this._settings.getShoppingListItems();
        this.baseUrl = this._settings.getBaseUrl();
    }

    addFoodToShoppingList = (shoppingListItem: ShoppingListItem) => {
        var savedShoppingList = this._settings.getShoppingListItems();
        // if(!_.find(savedShoppingList, { id: food.id })){
        //     this._settings.addIngredientToShoppingList(food.name)
        //     this.searchResults = [];
        //     this.query = '';
        //     this.getShoppingList();
        // }
    }

    removeFromShoppingList = (shoppingListItem: ShoppingListItem) => {
        this._settings.removeFromShoppingList(shoppingListItem);
        this.getShoppingList();
    }

    getShoppingList = () => {
        this.shoppingListItems = this._settings.getShoppingListItems();
    }

    searchFood = () => {
        this._http.get(`${this.baseUrl}/api/food?limit=10&page=1&name=${this.query}`)
            .subscribe({
                next: this.onFoodsLoaded
            })
    }

    onFoodsLoaded = (data: any) => { 
        this.searchResults = data.results;
    }

}


