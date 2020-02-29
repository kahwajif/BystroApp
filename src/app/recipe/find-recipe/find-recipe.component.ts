import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './find-recipe.component.html'
})

export class RecipeFindRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit {

    savedFoods: any[] = [];
    recipes: any[] = [];

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
        this.savedFoods = this._settings.getSavedFoods();
        console.log(this.savedFoods.map(food => food.id))
        this._http.post(
                `${this._settings.getBaseUrl()}/api/recipe`,
                {
                    foodIds: this.savedFoods.map(food => food.id),
                    page: 1,
                    limit: 10
                }
            )
            .subscribe({
                next: this.onRecipesLoaded
            })
    }

    onRecipesLoaded = (res) => {
        console.log(res)
        this.recipes = res.results;
    }
}
