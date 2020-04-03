import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/models/recipe.model';

@Component({
    templateUrl: './favorite-recipes.component.html'
})

export class RecipeFavoriteRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit{

    favoriteRecipes: Recipe[] = [];

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
        this.favoriteRecipes = this._settings.getFavoriteRecipes();
    }

    removeFavoriteRecipe = (recipe: Recipe) => {
        this._settings.removeFavoriteRecipe(recipe);
        this.getFavoriteRecipes();
    }

    getFavoriteRecipes = () => {
        this.favoriteRecipes = this._settings.getFavoriteRecipes();
    }
}

