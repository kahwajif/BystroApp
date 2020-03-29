import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../shared/services/appsettings.service';

@Component({
    templateUrl: './add-recipe.component.html'
})

export class RecipeAddRecipeComponent extends AppComponentBase implements OnInit, AfterViewInit{

    title = 'Create Recipe'; 
    items: string[] = [];
    instructs: string[] = [];
    savedInstructions: string[]=[];
    savedIngredients: string[]=[];

    constructor(
        injector: Injector,
        private _http: HttpClient,
        private _settings: AppSettingsService
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {}
    ngOnInit() {}

    //add ingredient
    addItem(newItem) {
        if (newItem) {
                this.items.push(newItem);
        }
    }
    removeItem(item: string){
        this.items = this.items.filter(i => i !== item);
    }

    saveIngredient(ingredient: any){
        var savedFoods = this._settings.getSavedFoods();
        
    }

    //add instructions
    addInst(newInstruct) {
        if (newInstruct) {
                this.instructs.push(newInstruct);
        }
    }
    removeInst(instruct: string){
        this.instructs = this.instructs.filter(i => i !== instruct);
    }
    
}