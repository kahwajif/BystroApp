import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './fav-recipes.component.html'
})

export class RecipeFavRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit{

    savedRecipes: any[] = [];

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
        this.savedRecipes = this._settings.getSavedRecipes();
        console.log(this.savedRecipes.map(recipe => recipe.id))
        this._http.post(
                `${this._settings.getBaseUrl()}/api/fav-recipes`,
                {
                    recipeIds: this.savedRecipes.map(recipe => recipe.id),
                    page: 1,
                    limit: 10
                }
            )
            .subscribe({
                next: this.onSavedRecipesLoaded
            })
    }

    removeRecipe = (recipe: any) => {
        this._settings.removeRecipe(recipe);
        this.getSavedRecipes();
    }

    getSavedRecipes = () => {
        this.savedRecipes = this._settings.getSavedRecipes();
        console.log(this.savedRecipes)
    }

    onSavedRecipesLoaded = (res) => {
        this.savedRecipes = res.results;
    }

}

