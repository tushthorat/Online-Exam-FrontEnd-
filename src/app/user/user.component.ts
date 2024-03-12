import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user:User=new User('','',0,'');
  users:User[]=[];
  message:string="";

  // User[] users={};

  constructor(private service:UserService){}
  ngOnInit(): void 
  {
    this.getAllUsers();
  }

  saveUser()
  {
    this.service.saveUser(this.user).subscribe();
  }

  getAllUsers()
  {
    this.service.getAllUsers().subscribe(userarray=>this.users=userarray);
  }

  getUser()
  {
    this.service.getUser(this.user.username).subscribe(userobject=>this.user=userobject);
  }
  
  // [ user[] ] Observable object given by getAllUsers()

  // User user=query.list().get(0);


  deleteUser()
  {
    this.service.deleteUser(this.user.username).subscribe(message=>this.message="object deleted");
  }
}
