import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:'register',component:UserComponent},
    {path:'question',component:QuestionComponent},
    {path:'regiser',component:UserComponent},

];
