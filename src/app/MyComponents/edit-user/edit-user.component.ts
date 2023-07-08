import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/adduser.model';

import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

   

  userDetails:User = {

    id:'',
    firstName:'',
  lastName:'',
  employeeID:0,

    
  }

  constructor(private route:ActivatedRoute,private userservice: UsersService
    ,private router:Router)
  {}


  ngOnInit(): void {
    

    this.route.paramMap.subscribe({

      next:(params) => {

       

        const id =  params.get('id');
        if (id)
        {
          this.userservice.getuser(id)
          .subscribe({

            next:(response:any) => {

              this.userDetails = response;


            }



          })

        }


      }


    })

  }


  updateuser()
  {
    this.userservice.updateuser(this.userDetails.id,this.userDetails)

    .subscribe({

      next:(response:any)=>{
        this.router.navigate(['/viewuser']);
      }

    });

  }

  deleteuser(id:string)
  {

    this.userservice.deleteuser(id)
    .subscribe({
      next:(response:any) =>{
        this.router.navigate(['viewtasks']);
       
      }
    })


  }


  

}
