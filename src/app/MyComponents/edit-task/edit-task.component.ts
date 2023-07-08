import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/viewtask.model';
import { TasksService } from 'src/app/services/tasks.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
 

  taskDetails:Task = {

    id: '',
    projectName: '',
    taskName: '',
    priority: 0,
    startdate: new Date(),
    enddate:new Date()


  }
 
  constructor(private route:ActivatedRoute,private taskservice: TasksService
    ,private router:Router)
  {}
 
 
 
  ngOnInit(): void {
    

    this.route.paramMap.subscribe({

      next:(params) => {

       

        const id =  params.get('id');
        if (id)
        {
          this.taskservice.gettask(id)
          .subscribe({

            next:(response:any) => {

              this.taskDetails = response;


            }



          })

        }


      }


    })

  }


  updatetask()
  {
    this.taskservice.updatetask(this.taskDetails.id,this.taskDetails)

    .subscribe({

      next:(response:any)=>{
        this.router.navigate(['/viewtasks']);
      }

    });

  }

  deletetask(id:string,projectName:string)
  {

    this.taskservice.deletetask(id)
    .subscribe({
      next:(response:any) =>{
        this.router.navigate(['viewtasks']);
        swal("Deleted Successfully "+projectName);
      }
    })


  }

  

  

  

}
