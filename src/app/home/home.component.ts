import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HomeserviceService } from './homeservice.service'
// import 'ag-grid-enterprise';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    userId: string

    columnDefs = [
        { field: 'make', rowGroup: true },
        { field: 'price' }
    ];

    rowData: any[] = [
        { make: 'Toyota', model: 'Celica1', price: 35000 },
        { make: 'Toyota', model: 'Celica2', price: 34000 },
        { make: 'Toyota', model: 'Celica3', price: 36000 },
        { make: 'Ford', model: 'Mondeo1', price: 38000 },
        { make: 'Ford', model: 'Mondeo2', price: 31000 },
        { make: 'Ford', model: 'Mondeo3', price: 33000 },
        { make: 'Ford', model: 'Mondeo4', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    autoGroupColumnDef = {
        headerName: 'Model',
        field: 'model',
        cellRenderer: 'agGroupCellRenderer',

    };

    public gridApi;
    public gridColumnApi;
    public defaultColDef;

    public groupDefaultExpanded;
    public getDataPath;


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
