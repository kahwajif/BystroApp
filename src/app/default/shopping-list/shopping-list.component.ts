import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { ShoppingListItem } from 'src/models/shopping-list-item.model';
import { Food } from 'src/models/food.model';
import { $ } from 'protractor';

@Component({
    templateUrl: './shopping-list.component.html'
})

export class DefaultShoppingListComponent extends AppComponentBase implements OnInit, AfterViewInit{

    shoppingListItems: ShoppingListItem[] = [];
    searchResults: Food[] = [];
    baseUrl: string = '';

    quantity: string;
    description: string;
    foodId: string;

    hasSelectedItems: boolean = false;

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
        this.getShoppingList();
    }

    saveToShoppingList = () => {
        var item = new ShoppingListItem();
        item.quantity = this.quantity;
        item.description = this.description;
        item.foodId = this.foodId;
        this._settings.addShoppingListItem(item);
        this.resetForm();
        this.getShoppingList();
    }

    resetForm(): void {
        this.quantity = '';
        this.description = '';
        this.foodId = '';
    }

    removeFromShoppingList = (shoppingListItem: ShoppingListItem) => {
        this._settings.removeFromShoppingList(shoppingListItem);
        this.getShoppingList();
    }

    removeSelectedShoppingListItems(): void {
        this._settings.removeSelectedShoppingListItems();
        this.getShoppingList();
    }

    getShoppingList = () => {
        this.shoppingListItems = this._settings.getShoppingListItems();
        this.hasSelectedItems = this.shoppingListItems.filter(i => i.isSelected).length > 0;
    }

    searchFood = () => {
        this._http.get(`${this.baseUrl}/api/food?limit=10&page=1&name=${this.description}`)
            .subscribe({
                next: this.onFoodsLoaded
            })
    }

    setDescription(food: Food) {
        this.foodId = food.id;
        this.description = food.name;
        this.searchResults = [];
    }

    toggleItemIsSelected(item: ShoppingListItem) {
        item.isSelected = !item.isSelected;
        this._settings.updateShoppingListItem(item);
        this.getShoppingList();
    }

    onFoodsLoaded = (data: any) => { 
        this.searchResults = data.results;
    }

}


