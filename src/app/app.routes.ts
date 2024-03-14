import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';
import { QuestionmanagementComponent } from './questionmanagement/questionmanagement.component';
import { TimeComponent } from './time/time.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:'register',component:UserComponent},
    {path:'question',component:QuestionComponent},
    {path:'regiser',component:UserComponent},
    {path:'questionmanagement',component:QuestionmanagementComponent},
    {path:'time',component:TimeComponent},
];
