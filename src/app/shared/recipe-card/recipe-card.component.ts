import { AppComponentBase } from '@shared/app-component-base'
import { EventEmitter, Component, OnInit, ViewEncapsulation, Injector, Input, Output } from '@angular/core'
import { Recipe } from 'src/models/recipe.model';
import { AppSettingsService } from '../services/appsettings.service';

@Component({
    templateUrl: './recipe-card.component.html',
    selector: 'recipe-card',
    encapsulation: ViewEncapsulation.None
})

export class RecipeCardComponent extends AppComponentBase implements OnInit {
    @Input()
    recipe: Recipe;

    @Input()
    showRemoveButton: boolean = false;

    @Output()
    removeButtonClicked: EventEmitter<any> = new EventEmitter();

    constructor(
        injector: Injector,
        private _appSettingsService: AppSettingsService
    ) {
        super(injector);
    }

    ngOnInit(){

    }

    removeRecipe(event: Event, recipe: Recipe): void {
        event.preventDefault();

        this.removeButtonClicked.emit();

        event.stopPropagation();
    }
}
 