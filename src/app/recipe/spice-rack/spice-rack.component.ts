import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/models/food.model';
import * as _ from 'lodash';

@Component({
    templateUrl: './spice-rack.component.html'
})

export class RecipeSpiceRackComponent extends AppComponentBase implements OnInit, AfterViewInit{

    query: string = '';
    spiceRack: Food[] = [];
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
        this.spiceRack = this._settings.getSpiceRack();
    }

    searchSpice(): void {
        this._http.get(`${this.baseUrl}/api/food?limit=10&page=1&name=${this.query}&foodTypeId=1`)
            .subscribe({
                next: this.onSpiceRackLoaded
            })
    }

    saveSpice(food: Food): void {
        var savedSpices = this._settings.getSpiceRack();
        if(!_.find(savedSpices, { id: food.id })){
            this._settings.addToSpiceRack(food)
            this.searchResults = [];
            this.query = '';
            this.getSpiceRack();
        }
    }

    removeFromSpiceRack = (food: Food) => {
        this._settings.removeFromSpiceRack(food);
        this.getSpiceRack();
    }

    getSpiceRack = () => {
        this.spiceRack= this._settings.getSpiceRack();
    }

    onSpiceRackLoaded = (data: any) => {
        this.searchResults = data.results;
    }
}
