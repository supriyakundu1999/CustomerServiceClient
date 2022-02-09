import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid-checkbox',
  template: `<input type="checkbox" [(ngModel)]="checkBoxVal" (change)="changeValue()">`,
})
export class CheckboxRendererComponent {

  private params: any
  checkBoxVal:boolean

  agInit(params: any): void {
    this.params = params
    this.checkBoxVal = params.value
  }

  changeValue(): void {
    // this.params.data.chBox = this.checkBoxVal;
    this.params.setValue(this.checkBoxVal, 'chBox')
    this.params.api.refreshCells(this.params)
  }
}