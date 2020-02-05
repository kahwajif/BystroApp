import { Component, Injector, OnInit, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component'
import { RecipeComponent } from './recipe.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: RecipeComponent,
                children: [
                    { path: 'find', component: RecipeFindIngredientComponent },
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule { } 
