import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'about-us',
    templateUrl: 'app/about.component.html',
    styleUrls: ['app/about.component.css']
})
export class AboutComponent implements OnInit {
    constructor(
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
    }

    goBack() {
        window.history.back();
    }
}