import { NgModule } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { AppSettingsService } from './services/appsettings.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RecipeCardComponent
    ],
    exports: [
      RecipeCardComponent
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    providers: [AppSettingsService]
  })
  
  export class BystroCommonModule { }
  