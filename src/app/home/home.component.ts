import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    userId: string

    constructor(private cookieService: CookieService) { }

    ngOnInit(): void {
        this.userId = this.cookieService.get('userId');
        console.log("Cookie: " + this.userId)
    }

}
