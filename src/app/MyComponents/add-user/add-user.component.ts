import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/adduser.model';
import { TasksService } from 'src/app/services/tasks.service';
import { UsersService } from 'src/app/services/users.service';
import swal from 'sweetalert';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

 addUserRequest: User = {

  id:'',
  firstName:'',
  lastName:'',
  employeeID:0
  


 }


 
  constructor(private userservice: UsersService ) {}

  ngOnInit(): void {
    
  }

  addUser(){


    this.userservice.addUser(this.addUserRequest)
    .subscribe({
      next:(users:any) =>{
        console.log(this.addUserRequest);
        swal(users.firstName+" "+users.lastName+" was added successfully!!! 😜");
      },

      error: (response: any)=>
      {
        console.log("response");
      }
    })

   
  }


  

}


