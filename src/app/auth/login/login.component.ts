import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private cookieService: CookieService) { }

    ngOnInit(): void {
    }

    login(): void {
        console.log("Login called......")
        this.cookieService.set('userId', 'sk', 1)
    }
}
