import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeModule } from './components/core/home/home.module';
import { LoginModule } from './components/core/login/login.module';

import { AppComponent } from './app.component';

import { AppRouting } from './app.routes';


@NgModule({
		declarations: [
			AppComponent
		],
		imports: [
			BrowserModule,
			AppRouting,
			HomeModule,
			LoginModule
		],
		providers: [],
		bootstrap: [AppComponent]
})

export class AppModule { }
