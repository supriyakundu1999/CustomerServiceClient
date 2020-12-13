import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup

    constructor(
        private cookieService: CookieService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]]
        })
    }

    login(): void {
        console.log("Login called......", this.loginForm.value)
        this.cookieService.set('userId', this.loginForm.value.userName, 1)
    }
}
