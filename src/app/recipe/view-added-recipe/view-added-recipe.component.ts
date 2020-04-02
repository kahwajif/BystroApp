//put "custom recipes" in nav bar
import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { Recipe } from 'src/models/recipe.model';

@Component({
    templateUrl: './view-added-recipe.component.html'
})

export class RecipeViewAddedRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit{

    customRecipes: Recipe[] = [];
    Object = Object; //used for Recipe.ingredients objects

    constructor(
        injector: Injector,
        private _http: HttpClient,
        private _settings: AppSettingsService,
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {}
    ngOnInit() {
        this.customRecipes = this._settings.getCustomRecipes();
    }

    removeRecipe(recipe: Recipe){
        this._settings.removeCustomRecipe(recipe);//removes from local
        this.customRecipes = this.customRecipes.filter(i => i !== recipe);//removes from view
    }
}