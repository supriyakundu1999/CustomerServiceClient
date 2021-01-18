import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseroperationRoutingModule } from './useroperation-routing.module';
import { UseroperationComponent } from '../useroperation/useroperation.component';


@NgModule({
  declarations: [UseroperationComponent],
  imports: [
    CommonModule,
    UseroperationRoutingModule
  ]
})
export class UseroperationModule { }
