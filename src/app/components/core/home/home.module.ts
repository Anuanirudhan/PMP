import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        BrowserModule,
        DataTableModule
    ],
    declarations: [
        HomeComponent
    ],
    bootstrap: [HomeComponent]
})

export class HomeModule { }
