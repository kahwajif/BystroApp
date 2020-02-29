import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component';
import { RecipeFindRecipeComponent } from './find-recipe/find-recipe.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeFindIngredientComponent,
        RecipeFindRecipeComponent
    ],
    imports: [
        CommonModule,
        RecipeRoutingModule
    ],
    providers: [
    ]
})

export class RecipeModule { }
