import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UseroperationRoutingModule } from './useroperation-routing.module';
import { UseroperationComponent } from '../useroperation/useroperation.component';


@NgModule({
    declarations: [UseroperationComponent],
    imports: [
        CommonModule,
        UseroperationRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class UseroperationModule { }
