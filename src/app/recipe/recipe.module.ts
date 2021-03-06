import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component';
import { RecipeFindRecipeComponent } from './find-recipe/find-recipe.component';
import { RecipeViewRecipeComponent } from './view-recipe/view-recipe.component';
import { FormsModule } from '@angular/forms';
import { RecipeEditRecipeComponent } from './create-or-edit-recipe/edit-recipe.component';
import { RecipeCustomRecipesComponent } from './custom-recipes/custom-recipes.component';
import { RecipeCreateRecipeComponent } from './create-or-edit-recipe/create-recipe.component';
import { RecipeFavoriteRecipeComponent } from './favorite-recipes/favorite-recipes.component';
import { BystroCommonModule } from '../shared/bystro-common.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeFindIngredientComponent,
        RecipeFindRecipeComponent,
        RecipeFavoriteRecipeComponent,
        RecipeViewRecipeComponent,
        RecipeCreateRecipeComponent,
        RecipeEditRecipeComponent,
        RecipeCustomRecipesComponent
    ],
    imports: [
        BystroCommonModule,
        CommonModule,
        RecipeRoutingModule,
        FormsModule
    ],
    providers: [
    ]
})

export class RecipeModule { }
