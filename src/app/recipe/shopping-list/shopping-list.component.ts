import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './shopping-list.component.html'
})

export class RecipeShoppingListComponent extends AppComponentBase implements OnInit, AfterViewInit{

    savedList: any[] = [];

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
        this.savedList = this._settings.getSavedFoods();
        console.log(this.savedList.map(recipe => recipe.id))
        this._http.post(
                `${this._settings.getBaseUrl()}/api/shopping-list`,
                {
                    recipeIds: this.savedList.map(food => food.id),
                }
            )
            .subscribe({
                next: this.onSavedShoppingListLoaded
            })
    }

    removeFood = (food: any) => {
        this._settings.removeFood(food);
        this.getSavedFoods();
    }

    getSavedFoods = () => {
        this.savedList= this._settings.getSavedFoods();
    }

    onSavedShoppingListLoaded = (res) => {
        this.savedList = res.results;
    }



}


