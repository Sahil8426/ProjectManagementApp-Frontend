import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/viewtask.model';
import { TasksService } from 'src/app/services/tasks.service';
import swal from 'sweetalert';



@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
 
  addTaskRequest: Task ={
    id: '',
    projectName: '',
    taskName: '',
    priority: 0,
    startdate: new Date(),
    enddate:new Date()
  };

   


  

 constructor(private tasksService: TasksService){}
 
  ngOnInit(): void {
    
  }

  addTask(){


    this.tasksService.addTask(this.addTaskRequest)
    .subscribe({
      next:(tasks:any) =>{
        console.log(this.addTaskRequest);

        swal("Task added Successfully");


      },

      error: (response: any)=>
      {
        console.log("response");
      }
    })

   
  }

  

}
