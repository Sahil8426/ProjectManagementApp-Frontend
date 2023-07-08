import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { User } from 'src/app/models/adduser.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit{
  

  users:User[]=[];
  firstName:any;

  constructor(private userService: UsersService,private route:ActivatedRoute,private router:Router){
    
  }

  ngOnInit(): void {


    this.userService.getAllUsers()
    .subscribe({

      next:(users: any)=>{



        this.users = users;
        console.log(users);

      },

      error: (response: any)=>
      {
        console.log("response");
      }
    })
    

    
  }

  deleteuser(id:string)
  {

    this.userService.deleteuser(id)
    .subscribe({
      next:(response:any) =>{
        this.router.navigate(['viewuser']);
        window.location.reload();
       
      }
    })
  }

  Search(){
    if(this.firstName=="")
    {
      this.ngOnInit();
    }

    else{
      this.users = this.users.filter(res =>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
      })
    }
  }

}
