import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment'


@Injectable({
    providedIn: 'root'
})
export class HomeserviceService {

    constructor(
        private cookieService: CookieService,
        private http: HttpClient
    ) { }

    fetchUserDetails(): Observable<any> {

        let httpHeaders = new HttpHeaders({
            'content-type': "application/json",
            'session_id': this.cookieService.get('sessionID')
        })

        let url = environment.baseServerUrl + "fetchUserDetails"

        return this.http.get<any>(
            url,
            { headers: httpHeaders }
        )
    }

    fetchCarDetails(): Observable<any> {
        return this.http.get<any>("../../assets/data.json")
    }
}
