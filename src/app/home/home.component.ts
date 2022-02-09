import { Component, OnInit } from '@angular/core';
import { CellValueChangedEvent, CheckboxSelectionComponent, GridOptions } from 'ag-grid-community';
import { from } from 'rxjs';
import { CheckboxRendererComponent } from '../Utils/check-box-renderer.component';
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
        { field: 'make', editable: true},
        { field: 'model', editable: true},
        { field: 'price', editable: true},
        { field: 'chBox', cellRendererFramework: CheckboxRendererComponent, editable: false},
    ];

    rowData: any[] = [];

    gridOptions:GridOptions = {
        rowData: this.rowData,
        columnDefs: this.columnDefs,
        onCellValueChanged: event => this.gridValueChange(event)
    }

    constructor(
        private homeService: HomeserviceService
    ) {}

    ngOnInit(): void {
        this.homeService.fetchUserDetails().subscribe(
            data => {
                console.log(data)
                this.userId = data.userName
            },
            err => {
                console.error(err)
            }
        )
        this.loadGridData()
    }

    loadGridData(): void {
        this.homeService.fetchCarDetails().subscribe(
            data => {
                this.rowData = data;
                this.gridOptions.api.setRowData(this.rowData)
            }
        )
    }

    gridValueChange($event: CellValueChangedEvent): void {
        console.log("============= Value Change in Grid =============")
        console.log("Col Id: " + $event.column.getColId())
        console.log("Old Val: " + $event.oldValue)
        console.log("New Val: " + $event.newValue)
        console.log($event.data)
    }

}
