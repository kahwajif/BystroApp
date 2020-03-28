import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/models/recipe.model';
import * as _ from 'lodash';

@Component({
    templateUrl: './view-recipe.component.html',
    styleUrls: ['./view-recipe.component.less']
})

export class RecipeViewRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit {

    recipe: Recipe;
    savedRecipes: Recipe[] = [];
    isFavorite: boolean = false;

    constructor(
        injector: Injector,
        private _http: HttpClient,
        private _settings: AppSettingsService,
        private route: ActivatedRoute
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {

    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var id = params.get('id');
            this._http.get(`${this._settings.getBaseUrl()}/api/recipe/${id}`)
            .subscribe({
                next: this.onRecipeLoaded
            })
        });
    }

    toggleFavoriteRecipe = (recipe: Recipe) => {
        if(this.isRecipeInFavorites(recipe)) {
            this._settings.removeFavoriteRecipe(recipe)
        } else {
            this._settings.addFavoriteRecipe(recipe)
        }
        this.isFavorite = !this.isFavorite;
    }

    addIngredientsToShoppingList = (recipe: Recipe) => {
        this._settings.addIngredientsToShoppingList(recipe.ingredients);
    }

    onRecipeLoaded = (response: Recipe) => {
        this.recipe = response;
        this.isFavorite = this.isRecipeInFavorites(response);
    }

    isRecipeInFavorites(recipe: Recipe): boolean {
        var favoriteRecipes = this._settings.getFavoriteRecipes();
        return favoriteRecipes.filter(r => r.id === recipe.id).length > 0;
    }
}
