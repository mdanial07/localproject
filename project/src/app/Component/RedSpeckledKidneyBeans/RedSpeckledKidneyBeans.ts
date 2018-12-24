import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js';

@Component({
    selector: 'redspeckledkidneybeans',
    templateUrl: './RedSpeckledKidneyBeans.html',
    styleUrls: ['../Styles/RedSpeckledKidneyBeans.scss']
})
export class RedSpeckledKidneyBeans implements OnInit {
    constructor(private http: HttpClient) { }
    PricingDetails;
    myChart: any;
    graph;
    ngOnInit() {
        // this.http.get('https://grainmarket.qubolt.com/api/admin/get/tramodity/pricing/graph/10/2018-08-01/2018-08-30').subscribe(res => {
        //     console.log(res)
        //     this.graph = res['graphData']
        //     console.log(this.graph)
        // })
        // this.graph.map(res => {
        //     console.log(res)
        // })

        this.PricingDetails = JSON.parse(localStorage.getItem('item'));
        console.log(this.PricingDetails)

        this.myChart = new Chart('myChart', {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: 'Line Dataset',
                        data: [10, 14, 21, 18, 6, 16],
                        fill: 'start',
                        backgroundColor: [
                            'rgba(4, 45, 89, 0.6)',
                            'rgba(4, 45, 89, 0.6)',
                            'rgba(4, 45, 89, 0.6)',
                            'rgba(4, 45, 89, 0.6)',
                            'rgba(4, 45, 89, 0.6)',
                            'rgba(4, 45, 89, 0.6)',
                        ],
                        borderColor: [
                            'rgba(4, 45, 89, 1)',
                            'rgba(4, 45, 89, 1)',
                            'rgba(4, 45, 89, 1)',
                            'rgba(4, 45, 89, 1)',
                            'rgba(4, 45, 89, 1)',
                            'rgba(4, 45, 89, 1)',
                        ],
                    },
                    {
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        fill: 'start',
                        backgroundColor: [
                            'rgb(176, 177, 178, 0.5)',
                            'rgb(176, 177, 178, 0.5)',
                            'rgb(176, 177, 178, 0.5)',
                            'rgb(176, 177, 178, 0.5)',
                            'rgb(176, 177, 178, 0.5)',
                            'rgb(176, 177, 178, 0.5)',
                            'rgba(255, 99, 132, 0.5)',
                        ],
                        borderColor: [
                            'rgb(176, 177, 178, 1)',
                            'rgb(176, 177, 178, 1)',
                            'rgb(176, 177, 178, 1)',
                            'rgb(176, 177, 178, 1)',
                            'rgb(176, 177, 178, 1)',
                            'rgb(176, 177, 178, 1)',
                            'rgba(255, 99, 132, 1)'
                        ],
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
