import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HomeserviceService } from './homeservice.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    userId: string

    columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    constructor(
        private homeService: HomeserviceService
    ) { }

    ngOnInit(): void {
        this.homeService.fetchUserDetails().subscribe(
            data => {
                console.log(data)
                this.userId = data.userName
            },
            err => {
                console.log(err)
            }
        )
    }
}
