import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './view-recipe.component.html'
})

export class RecipeViewRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit {

    recipe: any;
    savedRecipes: any[] = [];

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

    saveRecipe = (recipe: any) => {
        this._settings.addFavRecipe(recipe)
        this.getSavedRecipes();
    }

    removeRecipe = (recipe: any) => {
        this._settings.removeRecipe(recipe);
        this.getSavedRecipes();
    }

    getSavedRecipes = () => {
        this.savedRecipes = this._settings.getSavedRecipes();
        console.log(this.savedRecipes)
    }

    onRecipeLoaded = (res) => {
        this.recipe = res;
    }
}
