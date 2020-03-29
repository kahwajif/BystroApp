import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component';
import { RecipeFindRecipeComponent } from './find-recipe/find-recipe.component';
import { RecipeFavRecipeComponent } from './fav-recipes/fav-recipes.component';
import { RecipeShoppingListComponent } from './shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';
import { RecipeViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecipeAddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeViewAddedRecipeComponent } from './view-added-recipe/view-added-recipe.component';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeFindIngredientComponent,
        RecipeFindRecipeComponent,
        RecipeFavRecipeComponent,
        RecipeViewRecipeComponent,
        RecipeShoppingListComponent,
        RecipeAddRecipeComponent,
        RecipeViewAddedRecipeComponent
    ],
    imports: [
        CommonModule,
        RecipeRoutingModule
    ],
    providers: [
    ]
})

export class RecipeModule { }
