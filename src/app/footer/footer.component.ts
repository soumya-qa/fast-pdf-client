import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: []
})
export class FooterComponent implements OnInit {
    conpyrightTxt: string = 'Copyright © Your Website 2019';
    ngOnInit() {

    }
}