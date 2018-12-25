import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material'
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './Register.html',
    styleUrls: ['../Styles/Register.scss']
})
export class Register implements OnInit {
    constructor(private router: Router, private http: HttpClient, public snackBar: MatSnackBar) { }
    firstname; lastname; email; password; confirmpassword;
    ngOnInit() { }

    Register() {
        let obj = {
            first_name: this.firstname,
            last_name: this.lastname,
            email: this.email,
            password: this.password,
            c_password: this.confirmpassword
        }
        console.log(obj)
        this.http.post('https://grainmarket.qubolt.com/api/register', obj).subscribe(res => {
            console.log(res)
            this.snackBar.open("You successfully registered", "", {
                duration: 2000,
            });
            this.firstname = ""
            this.lastname = ""
            this.email = ""
            this.password = ""
            this.confirmpassword = ""
            this.router.navigate(["/"])
        })
        console.log('Register Yourself')
    }
}
