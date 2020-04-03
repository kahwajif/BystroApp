import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultHomeComponent } from './default/home/home.component';
import { RecipeModule } from './recipe/recipe.module';
import { DefaultMenuComponent } from './default/menu/menu.component';
import { DefaultShoppingListComponent } from './default/shopping-list/shopping-list.component';
import { DefaultSpiceRackComponent } from './default/spice-rack/spice-rack.component';

const appRoutes: Routes = [
    { path: '', component: DefaultHomeComponent },
    { path: 'menu', component: DefaultMenuComponent },
    { path: 'shopping-list', component: DefaultShoppingListComponent },
    { path: 'spice-rack', component: DefaultSpiceRackComponent },
    { 
        path: 'recipes', 
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