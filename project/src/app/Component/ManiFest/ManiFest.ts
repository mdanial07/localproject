import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'manifest',
    templateUrl: './ManiFest.html',
    styleUrls: ['../Styles/ManiFest.scss']
})
export class ManiFest implements OnInit {
    constructor() { }
    ngOnInit() { }
    ManiFestArray = [
        {
            day: 'Tuesday',
            date: 'Sept 11',
            year: '2011',
            expend: true,
            data: [
                {
                    cell: 'BM',
                    value: '28 FCL',
                }, {
                    cell: 'CL',
                    value: '102 FCL',
                }, {
                    cell: 'DCP',
                    value: '312 FCL',
                }, {
                    cell: 'KCP',
                    value: '642 FCL',
                }, {
                    cell: 'YP',
                    value: '1209 FCL',
                }
            ]
        }, {
            day: 'Monday',
            date: 'Sept 10',
            year: '2011',
            expend: false,
            data: [
                {
                    cell: 'BM',
                    value: '28 FCL',
                }, {
                    cell: 'CL',
                    value: '102 FCL',
                }, {
                    cell: 'DCP',
                    value: '312 FCL',
                }, {
                    cell: 'KCP',
                    value: '642 FCL',
                }, {
                    cell: 'YP',
                    value: '1209 FCL',
                }
            ]
        }, {
            day: 'Sunday',
            date: 'Sept 09',
            year: '2011',
            expend: false,
            data: []
        }, {
            day: 'Saturday',
            date: 'Sept 08',
            year: '2011',
            expend: false,
            data: []
        }

    ]
}
