import { Component, Injector, OnInit, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component'
import { RecipeFindRecipeComponent } from './find-recipe/find-recipe.component'
import { RecipeViewRecipeComponent } from './view-recipe/view-recipe.component'
import { RecipeFavRecipeComponent } from './fav-recipes/fav-recipes.component'
import { RecipeShoppingListComponent } from './shopping-list/shopping-list.component'
import { RecipeComponent } from './recipe.component';
import { RecipeAddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeViewAddedRecipeComponent } from './view-added-recipe/view-added-recipe.component';
import { RecipeSpiceRackComponent } from './spice-rack/spice-rack.component';

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
                    { path: 'add-recipe', component: RecipeAddRecipeComponent },
                    { path: 'view-added-recipe', component: RecipeViewAddedRecipeComponent },
                    { path: 'spice-rack', component: RecipeSpiceRackComponent }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule { }
