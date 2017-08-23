import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { AngularFireModule } from 'angularfire2';
import { fb } from '../firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './components/services/auth-guard.services';

import { HomeModule } from './components/core/home/home.module';
import { LoginModule } from './components/core/login/login.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';
import { AuthService } from './components/services/auth.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AppRouting,
        HomeModule,
        LoginModule,
        AngularFireModule.initializeApp(fb),
        AngularFireAuthModule
    ],
    providers: [
        AuthService, 
        AuthGuard
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
