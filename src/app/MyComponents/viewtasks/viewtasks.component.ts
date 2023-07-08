import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/viewtask.model';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-viewtasks',
  templateUrl: './viewtasks.component.html',
  styleUrls: ['./viewtasks.component.css']
})


export class ViewtasksComponent  implements OnInit{

  filterTerm!: string;

  
 
  task: Task[] = [];
  taskName:any;

  
 

  constructor(private tasksService: TasksService,private route:ActivatedRoute,private router:Router ){

  }
 

  ngOnInit(): void {
    this.tasksService.getAlltasks()
    .subscribe({

      next:(task: any)=>{



        this.task = task;
        console.log(task);

      },

      error: (response: any)=>
      {
        console.log("response");
      }
    })
  }

   deletetask(id:string)
  {

    this.tasksService.deletetask(id)
    .subscribe({
      next:(response:any) =>{
        this.router.navigate(['/viewtasks']);
        window.location.reload();
      }
    })


  }

  Search(){
    if(this.taskName=="")
    {
      this.ngOnInit();
    }

    else{
      this.task = this.task.filter(res =>{
        return res.taskName.toLocaleLowerCase().match(this.taskName.toLocaleLowerCase())
      })
    }
  }

}