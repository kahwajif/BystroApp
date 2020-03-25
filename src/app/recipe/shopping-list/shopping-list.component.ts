import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './shopping-list.component.html'
})

export class RecipeShoppingListComponent extends AppComponentBase implements OnInit, AfterViewInit{

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
        this.savedShoppingList = this._settings.getShoppingList();
        this._http.post(
                `${this._settings.getBaseUrl()}/api/shopping-list`,
                {
                    foodIds: this.savedShoppingList.map(food => food.id),
                }
            )
            .subscribe({
                next: this.onShoppingListLoaded
            })
    }

    removeFromShoppingList = (food: any) => {
        this._settings.removeFromShoppingList(food);
        this.getShoppingList();
    }

    getShoppingList = () => {
        this.savedShoppingList= this._settings.getShoppingList();
    }

    onShoppingListLoaded = (res) => {
        this.savedShoppingList = res.results;
    }



}


