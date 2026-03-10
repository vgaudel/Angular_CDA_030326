import { Routes } from '@angular/router';
import { Basic } from './basic/basic';
import { UserForm } from './user-form/user-form';
import { Welcome } from './welcome/welcome';
import { NotFound } from './not-found/not-found';
import { UserListComponent } from './user-list-component/user-list-component';
import { Login } from './login/login';
import { Pipes } from './pipes/pipes';
import { UserListComponentV2 } from './user-list-component-v2/user-list-component-v2';
import { SpaceFlightNews } from './space-flight-news/space-flight-news';

export const routes: Routes = [

    { path: 'welcome', component: Welcome },
    { path: '', redirectTo: '/welcome', pathMatch: 'full'},
    { path: 'basic', component: Basic},
    { path: 'user-form', component: UserForm},
    { path: 'users/:id', component: UserListComponent}, 
    { path: 'users-rest', component: UserListComponentV2},
    { path : 'space-news', component : SpaceFlightNews},
    { path : 'login', component: Login },
    { path : 'pipes', component: Pipes },
    //404 page not found ** => */*/*..../*
    {path: "**", component: NotFound}
];
 