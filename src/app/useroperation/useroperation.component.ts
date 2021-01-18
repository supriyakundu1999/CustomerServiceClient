import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsermanageService } from './usermanage.service'

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
        private userService: UsermanageService
    ) { }

    ngOnInit(): void {

        this.userInfoForm = this.formBuilder.group({
            csrfToken: ['', Validators.required],
            stuName: ['', Validators.required],
            class: ['', Validators.required],
            stream: ['', Validators.required]
        })

        this.getCSRFkey()
    }

    submitUserInfo(): void {
        console.log("Submit User Info fn called...")
        console.log(this.userInfoForm.value)
        this.userService.submitUserInfo(this.userInfoForm.value).subscribe(
            data => {
                console.log(data)
            },
            err => {
                console.log(err.error)
            }
        )
    }

    getCSRFkey(): void {
        this.userService.getCSRF_Token().subscribe(
            data => {
                console.log(data)
                this.csrfKey = data.csrfToken
                this.userInfoForm.patchValue({
                    csrfToken: data.csrfToken
                })
            },
            err => {
                console.log(err.error)
            }
        )
    }
}
