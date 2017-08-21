import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent }     from './login.component';


@NgModule({
    imports: [
        BrowserModule,
        NgbModule
    ],
    declarations: [
        LoginComponent
    ],
    bootstrap: [LoginComponent]
})

export class LoginModule { }
