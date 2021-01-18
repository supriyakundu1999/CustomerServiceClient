import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { UseroperationComponent } from './useroperation.component'

const routes: Routes = [
    {
        path: '', component: UseroperationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UseroperationRoutingModule { }
