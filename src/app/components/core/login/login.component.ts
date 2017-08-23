import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { CustomValidators } from 'ng2-validation';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {
    loginForm: FormGroup;
    errorMessage: boolean;

    constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
        this.createLoginForm();
    }

    createLoginForm() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, CustomValidators.email]],
            password: ['', Validators.required]
        });
    }
    login() {
        this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
            .then(data => {
                console.log('Nice, it worked!');
                localStorage.clear();
                sessionStorage.setItem("userToken", JSON.stringify(data));
                this.router.navigate(['home']);
            })
            .catch(err => {
                console.log('Something zzzwent wrong:', err.message);
                this.errorMessage = true;
            });
    }
}
