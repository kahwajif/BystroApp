import { AppComponentBase } from '@shared/app-component-base'
import { Component, OnInit, ViewEncapsulation, Injector, Input } from '@angular/core'

@Component({
    templateUrl: './spice-text.component.html',
    selector: 'spice-text',
    encapsulation: ViewEncapsulation.None
})


export class SpiceTextComponent extends AppComponentBase implements OnInit {
    @Input()
    foodTypeId: number;
    
    constructor(
        injector: Injector,
    ) {
        super(injector);
    }


    ngOnInit(){

    }
}
 