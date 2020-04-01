import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import { Recipe } from 'src/models/recipe.model';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
    templateUrl: './add-recipe.component.html'
})

export class RecipeAddRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit{
    
    customRecipes: Recipe[] = []; //stores all the custom recipes
    recipeName: string;
    cookTime: number;
    prepTime: number;
    servings: number;
    recipeIngs: Recipe["ingredients"] = [];//stores ingredients of type Ingredient that contain name & quantity
    ingName: string;
    ingQuantity: string;
    instructs: string[] = [];
    OneInst: string;//holds the value of 1 instruction
    baseUrl: string = '';
    
    constructor(
        injector: Injector,
        private _http: HttpClient,
        private _settings: AppSettingsService
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {}
    ngOnInit() {
        this.baseUrl = this._settings.getBaseUrl();
        //this.getCustomRecipe();
    }

    //save the whole form
    saveCustomRecipe= () =>{
        var recipe = new Recipe();
        recipe.name = this.recipeName;
        recipe.ingredients = this.recipeIngs;
        recipe.instructions = this.instructs;
        recipe.cookTimeMinutes = this.cookTime;
        recipe.preparationTimeMinutes = this.prepTime;
        recipe.servings = this.servings;
        this._settings.addCustomRecipe(recipe);
        this.resetForm();
        this.getCustomRecipe();
    }
    resetForm(): void {
        this.recipeName = '';
        this.recipeIngs = [];
        this.instructs = [];
        this.cookTime=0;
        this.prepTime=0;
        this.servings=0;
    }
    getCustomRecipe = () => {
        this.customRecipes = this._settings.getCustomRecipes();
    }
    saveIngredients(ingredientName,ingredientQuantity){
        if(ingredientName && ingredientQuantity){
            var ingredient = new Ingredient();
            ingredient.name = this.ingName;
            ingredient.quantity = this.ingQuantity;
            this.recipeIngs.push(ingredient)
            this.ingName ='';
            this.ingQuantity='';
        }
    }
    removeIngredient(index){
        //we use splice because its an array of objects
        this.recipeIngs.splice(index, 1);
    }

    //save the instructions into instructs array
    instructionsToArray(instruction: string){
        if(instruction){
            this.instructs.push(instruction);
            this.OneInst = '';
        }
    } 

    removeInstruction(instruction: string){
        this.instructs = this.instructs.filter(i => i !== instruction);
    }
    
}