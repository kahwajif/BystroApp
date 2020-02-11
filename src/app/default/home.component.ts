import { Component, Injector, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './home.component.html'
})

export class DefaultHomeComponent extends AppComponentBase implements OnInit, AfterViewInit {

    query: string = '';
    foods: any[] = [];

    constructor(
        injector: Injector,
        private _http: HttpClient
    ) {
        super(injector);
    }

    ngAfterViewInit(): void {

    }

    ngOnInit() {

    }

    searchFood = () => {
        this._http.get(`http://localhost:3000/api/food?limit=10&page=1&name=${this.query}`)
            .subscribe({
                next: this.onFoodsLoaded
            })
    }

    onFoodsLoaded = (data: any) => {
        this.foods = data.results;
    }
}
