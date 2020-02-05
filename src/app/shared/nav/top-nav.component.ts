import { AppComponentBase } from '@shared/app-component-base'
import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core'

@Component({
    templateUrl: './top-nav.component.html',
    selector: 'top-nav',
    encapsulation: ViewEncapsulation.None
})

export class TopNavComponent extends AppComponentBase implements OnInit {

    constructor(
        injector: Injector
    ) {
        super(injector);
    }


    ngOnInit(){

    }
}
 