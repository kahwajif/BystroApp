import { Component, Injector, OnInit, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component'
import { RecipeFindRecipeComponent } from './find-recipe/find-recipe.component'
import { RecipeViewRecipeComponent } from './view-recipe/view-recipe.component'
import { RecipeFavRecipeComponent } from './fav-recipes/fav-recipes.component'
import { RecipeShoppingListComponent } from './shopping-list/shopping-list.component'
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
                    { path: 'find-recipe/:id', component: RecipeViewRecipeComponent },
                    { path: 'fav-recipes', component: RecipeFavRecipeComponent },
                    { path: 'shopping-list', component: RecipeShoppingListComponent },
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule { }
