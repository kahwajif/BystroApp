import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component';
import { RecipeFindRecipeComponent } from './find-recipe/find-recipe.component';
import { CommonModule } from '@angular/common';
import { RecipeViewRecipeComponent } from './view-recipe/view-recipe.component';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeFindIngredientComponent,
        RecipeFindRecipeComponent,
        RecipeViewRecipeComponent
    ],
    imports: [
        CommonModule,
        RecipeRoutingModule
    ],
    providers: [
    ]
})

export class RecipeModule { }
