import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
    selector: 'manifest',
    templateUrl: './ManiFest.html',
    styleUrls: ['../Styles/ManiFest.scss']
})
export class ManiFest implements OnInit {
    ManiFestArray = []
    constructor(public service: ApiServiceService) { }
    ngOnInit() {
        var days = [1, 2, 3, 4, 5, 6, 7]
        days.forEach(element => {
            var date = new Date();
            var last = new Date(date.getTime() - (element * 24 * 60 * 60 * 1000));
            let datee = `${last.getFullYear()}-${last.getMonth() + 1}-${last.getDate()}`
            this.service.retrieveManifest(datee).subscribe(res => {
                if (element == 1) { res.expend = true }
                else { res.expend = false }
                this.ManiFestArray.push(res)
            })
        })
        this.ManiFestArray.sort(function (o1, o2) {
            return o1.date > o2.date ? -1 : o1.date < o2.date ? 1 : 0;
        });
        console.log(this.ManiFestArray)
    }
}