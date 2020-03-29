import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component';
import { RecipeFindRecipeComponent } from './find-recipe/find-recipe.component';
import { RecipeFavRecipeComponent } from './fav-recipes/fav-recipes.component';
import { RecipeShoppingListComponent } from './shopping-list/shopping-list.component';
import { CommonModule } from '@angular/common';
import { RecipeViewRecipeComponent } from './view-recipe/view-recipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeFindIngredientComponent,
        RecipeFindRecipeComponent,
        RecipeFavRecipeComponent,
        RecipeViewRecipeComponent,
        RecipeShoppingListComponent,
    ],
    imports: [
        CommonModule,
        RecipeRoutingModule,
        FormsModule
    ],
    providers: [
    ]
})

export class RecipeModule { }
