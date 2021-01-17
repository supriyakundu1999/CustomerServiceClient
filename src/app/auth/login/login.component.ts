import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup

    constructor(
        private cookieService: CookieService,
        private formBuilder: FormBuilder,
        private auth: AuthserviceService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]]
        })
    }

    login(): void {
        console.log("Login called......", this.loginForm.value)
        // this.cookieService.set('userId', this.loginForm.value.userName, 1)
        this.auth.loginService(this.loginForm.value).subscribe(
            data => {
                console.log(data.body)
                console.log(data.headers.get('session_id'), data.headers)
                this.cookieService.set('sessionID', data.headers.get('session_id'), 1)
            },
            err => {
                console.log(err.error)
            }
        )
    }
}
