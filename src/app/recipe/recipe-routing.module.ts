import { Component, Injector, OnInit, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component'
import { RecipeFindRecipeComponent } from './find-recipe/find-recipe.component'
import { RecipeComponent } from './recipe.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: RecipeComponent,
                children: [
                    { path: 'find-ingredient', component: RecipeFindIngredientComponent },
                    { path: 'find-recipe', component: RecipeFindRecipeComponent },
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule { } 
