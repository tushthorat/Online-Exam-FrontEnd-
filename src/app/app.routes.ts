import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:"welcome",component:WelcomeComponent}
];
