import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    templateUrl: './home.component.html'
})

export class DefaultHomeComponent extends AppComponentBase implements OnInit, AfterViewInit {

    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {

    }

    ngOnInit() {

    }

}
