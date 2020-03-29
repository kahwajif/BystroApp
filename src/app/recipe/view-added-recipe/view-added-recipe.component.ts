//put "custom recipes" in nav bar
import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../shared/services/appsettings.service';

@Component({
    templateUrl: './view-added-recipe.component.html'
})

export class RecipeViewAddedRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit{
    title = 'Custom Recipes';
    items: string[] = [];
    instructs: string[] = [];
    constructor(
        injector: Injector,
        private _http: HttpClient,
        private _settings: AppSettingsService
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {}
    ngOnInit() {}
    
}