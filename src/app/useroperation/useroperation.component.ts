import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-useroperation',
    templateUrl: './useroperation.component.html',
    styleUrls: ['./useroperation.component.css']
})
export class UseroperationComponent implements OnInit {

    userInfoForm: FormGroup
    csrfKey: String = ''

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {

        this.userInfoForm = this.formBuilder.group({
            csrfToken: [this.csrfKey, Validators.required],
            stuName: ['', Validators.required],
            class: ['', Validators.required],
            stream: ['', Validators.required]
        })
    }

    submitUserInfo(): void {
        console.log("Submit User Info fn called...")
        console.log(this.userInfoForm.value)
    }

}
