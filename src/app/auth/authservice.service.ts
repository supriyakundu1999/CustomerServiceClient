import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})
export class AuthserviceService {


    constructor(
        private cookieService: CookieService,
        private http: HttpClient
    ) { }

    loginService(userCredential: any): Observable<any> {

        let httpHeaders = new HttpHeaders({
            'content-type': "application/json",
            'session_id': this.cookieService.get('sessionID')

        })

        return this.http.post<any>(
            "http://localhost:8000/account/login",
            userCredential,
            { headers: httpHeaders }
        )
    }
}
