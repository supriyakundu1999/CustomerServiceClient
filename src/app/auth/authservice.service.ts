import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment'


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
        let url = environment.baseServerUrl + "account/login"

        return this.http.post<any>(
            url,
            userCredential,
            { headers: httpHeaders }
        )
    }
}
