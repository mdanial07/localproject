import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'blogs',
    templateUrl: './Blogs.html',
    styleUrls: ['../Styles/Blogs.scss']
})
export class Blogs implements OnInit {
    constructor(private http: HttpClient) { }
    Blog
    ngOnInit() {
        this.http.get('https://grainmarket.qubolt.com/api/admin/get/blogs').subscribe(res => {
            console.log(res)
            this.Blog = res
        })
    }
}
