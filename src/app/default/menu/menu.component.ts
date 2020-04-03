import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../shared/services/appsettings.service';
import * as _ from 'lodash';
import { Food } from 'src/models/food.model';

@Component({
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})

export class DefaultMenuComponent extends AppComponentBase implements OnInit, AfterViewInit {

    constructor(
        injector: Injector,
        private _http: HttpClient,
        private _settings: AppSettingsService
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {

    }

    ngOnInit() {

    }

}
