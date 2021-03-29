import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment'


@Injectable({
    providedIn: 'root'
})
export class UsermanageService {

    private httpHeaders = new HttpHeaders({
        'content-type': "application/json",
        'session_id': this.cookieService.get('sessionID')
    })

    constructor(
        private cookieService: CookieService,
        private http: HttpClient
    ) { }

    //TODO Get all user data

    submitUserInfo(userInfo: any): Observable<any> {

        let url = environment.baseServerUrl + "student/info"

        return this.http.post<any>(
            url,
            userInfo,
            { headers: this.httpHeaders }
        )
    }

    getCSRF_Token(): Observable<any> {
        let url = environment.baseServerUrl + "account/getCSRFToken"

        return this.http.get<any>(
            url,
            { headers: this.httpHeaders }
        )
    }
}
