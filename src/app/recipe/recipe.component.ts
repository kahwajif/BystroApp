import { OnInit, AfterViewInit, Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None
})

export class RecipeComponent extends AppComponentBase implements OnInit, AfterViewInit {

    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {

    }

    ngOnInit(): void {
    }
}
