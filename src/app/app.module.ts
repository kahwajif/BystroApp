import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';

// shared components
import { TopNavComponent } from './shared/nav/top-nav.component';
import { AppSettingsService } from './shared/services/appsettings.service'

// pages
import { DefaultHomeComponent } from './default/home/home.component';
import { RecipeModule } from './recipe/recipe.module';
import { DefaultMenuComponent } from './default/menu/menu.component';
import { DefaultShoppingListComponent } from './default/shopping-list/shopping-list.component';
import { DefaultSpiceRackComponent } from './default/spice-rack/spice-rack.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DefaultHomeComponent,
    DefaultMenuComponent,
    DefaultShoppingListComponent,
    DefaultSpiceRackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RecipeModule,
  ],
  providers: [AppSettingsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
