import { Component } from '@angular/core';
import { User } from '../user.service';
import { LoginService } from '../login.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      message:any="";
       subject:any="";
      user:User=new User('','',0,'');
  

      constructor(private loginservice:LoginService,private router:Router){}
      validate(){
        this.loginservice.ValidateUser(this.user).subscribe(answer=>{
          if(answer){
            this.router.navigate(['question']);
            sessionStorage.setItem("subject",this.subject);
            sessionStorage.setItem("username",this.user.username);
          }else{
         
            this.router.navigate(['login']); //we need to write [] because navigate method take array as parameter
            this.message="wrong credentials";
          }
        });
      }
}
