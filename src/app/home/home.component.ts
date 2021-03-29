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

    // autoGroupColumnDef = {
    //     headerName: 'Model',
    //     field: 'model',
    //     cellRenderer: 'agGroupCellRenderer',

    // };

    public gridApi;
    public gridColumnApi;
    public defaultColDef;
    public autoGroupColumnDef;
    public groupDefaultExpanded;
    public getDataPath;


    constructor(
        private homeService: HomeserviceService
    ) {
        this.rowData = [
            {
                orgHierarchy: ['Erica Rogers'],
                jobTitle: 'CEO',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],
                jobTitle: 'Exec. Vice President',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker'],
                jobTitle: 'Director of Operations',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Esther Baker',
                    'Brittany Hanson',
                ],
                jobTitle: 'Fleet Coordinator',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Esther Baker',
                    'Brittany Hanson',
                    'Leah Flowers',
                ],
                jobTitle: 'Parts Technician',
                employmentType: 'Contract',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Esther Baker',
                    'Brittany Hanson',
                    'Tammy Sutton',
                ],
                jobTitle: 'Service Technician',
                employmentType: 'Contract',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Esther Baker',
                    'Derek Paul',
                ],
                jobTitle: 'Inventory Control',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland'],
                jobTitle: 'VP Sales',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Francis Strickland',
                    'Morris Hanson',
                ],
                jobTitle: 'Sales Manager',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Francis Strickland',
                    'Todd Tyler',
                ],
                jobTitle: 'Sales Executive',
                employmentType: 'Contract',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Francis Strickland',
                    'Bennie Wise',
                ],
                jobTitle: 'Sales Executive',
                employmentType: 'Contract',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Francis Strickland',
                    'Joel Cooper',
                ],
                jobTitle: 'Sales Executive',
                employmentType: 'Permanent',
            },
        ];
        this.columnDefs = [{ field: 'jobTitle' }, { field: 'employmentType' }];
        this.defaultColDef = { flex: 1 };
        this.autoGroupColumnDef = {
            headerName: 'Organisation Hierarchy',
            minWidth: 300,
            cellRendererParams: { suppressCount: true },
        };
        this.groupDefaultExpanded = -1;
        this.getDataPath = function (data) {
            return data.orgHierarchy;
        };
    }

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


    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }


}
