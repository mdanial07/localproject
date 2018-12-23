import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
    selector: 'grainbazar',
    templateUrl: './GrainBazaar.html',
    styleUrls: ['../Styles/GrainBazaar.scss']
})
export class GrainBazar implements OnInit {
    constructor(public route: Router, private http: HttpClient) { }
    Pricing = []
    PricingDetails = []
    DaaArray = [
        {
            name: 'DCP',
            full: 'Desi Chickpea'
        }, {
            name: 'KCP',
            full: 'Kabuli Chickpeas'
        }, {
            name: 'Lentils',
            full: 'Red Lentils'
        }, {
            name: 'YP',
            full: 'Yellow Peas'
        }, {
            name: 'BMP SQ',
            full: 'Black Matpe SQ'
        }, {
            name: 'YP',
            full: 'Yellow Peas'
        }, {
            name: 'KCP',
            full: 'Kabuli Chickpeas'
        },
    ]
    ngOnInit() {
        this.http.get('https://grainmarket.qubolt.com/api/admin/get/tramodity/pricing').subscribe(res => {
            console.log(res)
            this.Pricing = res['data']
            this.Pricing.map((res, i) => {
                res['daalname'] = this.DaaArray[i]
                this.PricingDetails.push()
            })
        })
        console.log(this.PricingDetails)
        this.func_pkrnus();
    }

    // Black Matpe SQ: BMP SQ – This is Myanmar Origin
    // Red Lentils: Lentils – This is Canada Origin
    // Desi Chickpea: DCP – This is Australia origin
    // Kabuli Chickpeas: KCP
    // Yellow Peas: YP – This origin is Black Sea

    valuepkr = false; valueus = false; valuepkrus = true;
    pkr = ''; pkrus = ''; us = '';
    func_pkr() {
        this.valuepkr = true;
        this.valueus = false;
        this.valuepkrus = false;
        this.pkr = 'pkrus'
        this.pkrus = 'pkr'
        this.us = 'pkr'
    }
    func_us() {
        this.valueus = true;
        this.valuepkr = false;
        this.valuepkrus = false;
        this.pkr = 'pkr'
        this.pkrus = 'pkr'
        this.us = 'pkrus'
    }
    func_pkrnus() {
        this.valuepkrus = true;
        this.valuepkr = false;
        this.valueus = false;
        this.pkr = 'pkr'
        this.pkrus = 'pkrus'
        this.us = 'pkr'
    }
    SelectDaal(element) {
        console.log(element)
        localStorage.setItem('item', JSON.stringify(element))
        this.route.navigate(['/redspeckledkidneybeans']);
    }
}
