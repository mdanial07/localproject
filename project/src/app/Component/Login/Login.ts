import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './Login.html',
    styleUrls: ['../Styles/Login.scss']
})
export class Login implements OnInit {
    constructor(public route: Router, private http: HttpClient) { }
    email; password;
    ngOnInit() { }
    Login() {
        let obj = {
            email: this.email,
            password: this.password,
        }
        console.log(obj)
        this.http.post('https://grainmarket.qubolt.com/api/login', obj).subscribe(res => {
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res['success']))
            localStorage.setItem('UserData', JSON.stringify(res['user_data']))
            this.route.navigate(['/']);
        })
    }
}
