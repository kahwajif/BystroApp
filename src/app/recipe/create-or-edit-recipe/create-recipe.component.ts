import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { Recipe } from 'src/models/recipe.model';
import { Ingredient } from 'src/models/ingredient.model';
import { Router } from '@angular/router';
import { Food } from 'src/models/food.model';

@Component({
    templateUrl: './create-or-edit-recipe.component.html'
})

export class RecipeCreateRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit{

    recipe: Recipe = new Recipe();
   
    newIngredient: Ingredient = new Ingredient();
    newInstruction: string = '';

    editIngredientIndex: number = -1;
    editInstructionIndex: number = -1;
    
    constructor(
        injector: Injector,
        private _http: HttpClient,
        private _settings: AppSettingsService,
        private _router: Router
    ) {
        super(injector);

        if(!this.recipe.name) {
            this.recipe.name = 'My Custom Recipe';
        }
        this.recipe.author = 'you';
    }

    ngAfterViewInit(): void {}

    ngOnInit() {
        
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