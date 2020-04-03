import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/models/recipe.model';

@Component({
    templateUrl: './custom-recipes.component.html'
})

export class RecipeCustomRecipesComponent extends AppComponentBase implements OnInit, AfterViewInit {

    recipes: Recipe[] = [];

    constructor(
        injector: Injector,
        private _settings: AppSettingsService
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {
        
    }

    ngOnInit() {
        this.recipes = this._settings.getCustomRecipes();
    }
}
