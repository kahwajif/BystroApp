import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';

// shared components
import { TopNavComponent } from './shared/nav/top-nav.component';

// pages
import { DefaultHomeComponent } from './default/home.component';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DefaultHomeComponent
  ],
  imports: [
    AppRoutingModule,
    RecipeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
