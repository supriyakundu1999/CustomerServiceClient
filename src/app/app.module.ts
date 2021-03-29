import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { from } from 'rxjs';
@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        AgGridModule.withComponents([]),
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
