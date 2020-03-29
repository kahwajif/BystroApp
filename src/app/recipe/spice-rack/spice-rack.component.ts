import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/models/food.model';

@Component({
    templateUrl: './spice-rack.component.html'
})

export class RecipeSpiceRackComponent extends AppComponentBase implements OnInit, AfterViewInit{

    spiceRack: Food[] = [];

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

    removeFromSpiceRack = (food: Food) => {
        this._settings.removeFromSpiceRack(food);
        this.getSpiceRack();
    }

    getSpiceRack = () => {
        this.spiceRack= this._settings.getSpiceRack();
    }
}
