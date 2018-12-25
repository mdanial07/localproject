import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'profile',
    templateUrl: './Profile.html',
    styleUrls: ['../Styles/Profile.scss']
})
export class Profile implements OnInit {
    constructor(public route: Router, private http: HttpClient) { }
    profile = true;
    login = false;
    posts = []
    audio = []
    comment = []
    id = null
    showAddUser = true
    userDetails
    commentBtnStatus = []
    ngOnInit() {
        let token = JSON.parse(localStorage.getItem('token'));
        let user = JSON.parse(localStorage.getItem('UserData'));
        if (user) {
            this.userDetails = user
            console.log(user)
            this.id = user.id
        }
        console.log(token)
        if (token) {
            this.login = false;
            this.profile = true;
            console.log('Danial');
        } else {
            console.log('logout');
            this.login = true;
            this.profile = false;
        }
        this.getPosts();
    }
    Logout() {
        console.log('danial');
        localStorage.clear();
        this.route.navigate(['/']);
    }
    getPosts() {
        this.http.get(`${environment.url}api/admin/get/posts/${this.id}`).subscribe(res => {
            console.log(res)
            let postss = [];
            postss = [res]
            this.posts.map(element => {
                this.audio.push(environment.url + element.file.match(/uploads(.*)$/gm))
            })
            console.log(postss)
            postss[0].map(p => {
                if (p.likedByUsers.length == 0) {
                    p['userlike'] = false;
                }
                else {
                    p.likedByUsers.map(like => {
                        if (like == this.id) {
                            p['userlike'] = true;
                        } else {
                            p['userlike'] = false;
                        }
                    })
                }
            })
            console.log(res)
            this.posts = postss[0]
            console.log(this.posts)
        })
    }
}
