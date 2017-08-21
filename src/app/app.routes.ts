import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/core/home/home.component';
import { LoginComponent } from './components/core/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect URL
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
    ]
})

export class AppRouting { }
