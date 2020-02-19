import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../shared/services/appsettings.service';

@Component({
    templateUrl: './home.component.html'
})

export class DefaultHomeComponent extends AppComponentBase implements OnInit, AfterViewInit {

    query: string = '';
    searchResults: any[] = [];
    baseUrl: string = '';
    savedFoods: any[] = [];


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
        this._settings.addSavedFood(food)
        this.searchResults = [];
        this.query = '';
        this.getSavedFoods();
    }

    removeFood = (food: any) => {
        this._settings.removeFood(food);
        this.getSavedFoods();
    }

    getSavedFoods = () => {
        this.savedFoods = this._settings.getSavedFoods();
        console.log(this.savedFoods)
    }

    onFoodsLoaded = (data: any) => {
        this.searchResults = data.results;
    }
}
