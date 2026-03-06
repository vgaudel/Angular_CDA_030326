import { Routes } from '@angular/router';
import { Basic } from './basic/basic';
import { UserForm } from './user-form/user-form';
import { Welcome } from './welcome/welcome';
import { NotFound } from './not-found/not-found';
import { UserListComponent } from './user-list-component/user-list-component';
import { Login } from './login/login';

export const routes: Routes = [

    { path: 'welcome', component: Welcome },
    { path: '', redirectTo: '/welcome', pathMatch: 'full'},
    { path: 'basic', component: Basic},
    { path: 'user-form', component: UserForm},
    { path: 'users/:id', component: UserListComponent},
    { path : 'login', component: Login },
    //404 page not found ** => */*/*..../*
    {path: "**", component: NotFound}
];
 