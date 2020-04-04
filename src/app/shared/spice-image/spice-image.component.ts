import { AppComponentBase } from '@shared/app-component-base'
import { Component, OnInit, ViewEncapsulation, Injector, Input } from '@angular/core'

@Component({
    templateUrl: './spice-image.component.html',
    selector: 'spice-image',
    encapsulation: ViewEncapsulation.None
})


export class SpiceImageComponent extends AppComponentBase implements OnInit {
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
 