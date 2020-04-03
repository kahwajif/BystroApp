import { Component, Injector, OnInit, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component'
import { RecipeFindRecipeComponent } from './find-recipe/find-recipe.component'
import { RecipeViewRecipeComponent } from './view-recipe/view-recipe.component'
import { RecipeFavoriteRecipeComponent } from './favorite-recipes/favorite-recipes.component'
import { RecipeComponent } from './recipe.component';
import { RecipeCreateRecipeComponent } from './create-or-edit-recipe/create-recipe.component';
import { RecipeEditRecipeComponent } from './create-or-edit-recipe/edit-recipe.component';
import { RecipeCustomRecipesComponent } from './custom-recipes/custom-recipes.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'recipes',
                component: RecipeComponent,
                children: [
                    { path: 'find-ingredient', component: RecipeFindIngredientComponent },
                    { path: 'find-recipe', component: RecipeFindRecipeComponent },
                    { path: 'find-recipe/:id', component: RecipeViewRecipeComponent },
                    { path: 'favorite-recipes', component: RecipeFavoriteRecipeComponent },
                    { path: 'create-recipe', component: RecipeCreateRecipeComponent },
                    { path: 'edit-recipe/:id', component: RecipeEditRecipeComponent },
                    { path: 'custom-recipes', component: RecipeCustomRecipesComponent }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule { }
