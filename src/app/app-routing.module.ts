import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultHomeComponent } from './default/home.component';
import { RecipeModule } from './recipe/recipe.module';

const appRoutes: Routes = [
    { path: '', component: DefaultHomeComponent },
    { 
        path: 'recipe', 
        loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule),
        data: { preload: true }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }