import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'newpost',
    templateUrl: './NewPost.html',
    styleUrls: ['../Styles/NewPost.scss']
})
export class NewPost implements OnInit {
    postText
    btnStatus
    constructor(private http: HttpClient, private router: Router) { }
    ngOnInit() { }
    submit() {
        if (this.postText != "" && this.postText != null && this.postText != undefined) {
            this.btnStatus = true
            let obj = {
                user_id: "1",
                post_category_id: "1",
                text: `${this.postText}`
            }
            this.http.post("http://grainmarket.qubolt.com/api/admin/post/post/save", obj).subscribe(res => {
                console.log(res)
                this.btnStatus = false
                this.router.navigate(["/"])
            }, error => {
                this.btnStatus = false
            })
        }
    }
}