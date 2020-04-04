import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { Recipe } from 'src/models/recipe.model';
import { Ingredient } from 'src/models/ingredient.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Food } from 'src/models/food.model';
import * as _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

@Component({
    templateUrl: './create-or-edit-recipe.component.html'
})

export class RecipeEditRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit{
    
    recipe: Recipe = new Recipe();
   
    newIngredient: Ingredient = new Ingredient();
    newInstruction: string = '';

    editIngredientIndex: number = -1;
    editInstructionIndex: number = -1;
    
    constructor(
        injector: Injector,
        private _http: HttpClient,
        private _settings: AppSettingsService,
        private _router: Router,
        private route: ActivatedRoute
    ) {
        super(injector);

        if(!this.recipe.name) {
            this.recipe.name = 'My Custom Recipe';
        }
        this.recipe.author = 'you';
    }

    ngAfterViewInit(): void {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var id = params.get('id');

            var customRecipes = this._settings.getCustomRecipes();
            var recipeIndex = _.findIndex(customRecipes, r => r.id === id);

            if(recipeIndex >= 0) {
                this.recipe = customRecipes[recipeIndex];
            } else {
                this._http.get(`${this._settings.getBaseUrl()}/api/recipe/${id}`)
                .subscribe((response: Recipe) => {
                    this.recipe = response;
                    this.recipe.id = uuidv4();
                    this.recipe.name = `[Copy] ${this.recipe.name}`;
                    this.recipe.author = 'you';
                })
            }

        });
    }

    saveRecipe() {
        this._settings.addOrUpdateCustomRecipe(this.recipe);
        this._router.navigateByUrl(`/recipes/find-recipe/${this.recipe.id}`)
    }

    addIngredient() {
        if(this.newIngredient.name){
            this.newIngredient.food = new Food();
            this.newIngredient.food.name = this.newIngredient.name;
            this.recipe.ingredients.push(this.newIngredient);
            this.newIngredient = new Ingredient();
        }
    }

    removeIngredient(index: number) {
        this.recipe.ingredients.splice(index, 1);
    }

    addInstruction() {
        if(this.newInstruction) {
            this.recipe.instructions.push(this.newInstruction);
            this.newInstruction = '';
        }
    }

    removeInstruction(index: number) {
        this.recipe.instructions.splice(index, 1);
    }

    // prevent refreshing instructions form when change is added
    customTrackBy(index: number, obj: any): any {
        return index;
    }

}