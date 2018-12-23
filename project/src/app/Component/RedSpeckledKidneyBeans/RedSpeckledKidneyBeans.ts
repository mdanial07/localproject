import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'redspeckledkidneybeans',
    templateUrl: './RedSpeckledKidneyBeans.html',
    styleUrls: ['../Styles/RedSpeckledKidneyBeans.scss']
})
export class RedSpeckledKidneyBeans implements OnInit {
    constructor(private http: HttpClient) { }
    PricingDetails
    ngOnInit() {
        this.PricingDetails = JSON.parse(localStorage.getItem('item'));
        console.log(this.PricingDetails)
    }
}
