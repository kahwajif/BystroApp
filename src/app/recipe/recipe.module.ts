import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { RecipeFindIngredientComponent } from './find-ingredient/find-ingredient.component';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeFindIngredientComponent
    ],
    imports: [
        RecipeRoutingModule
    ],
    providers: [
    ]
})

export class RecipeModule { }
