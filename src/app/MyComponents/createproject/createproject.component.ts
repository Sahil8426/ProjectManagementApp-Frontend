import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/createProject.model';
import { TasksService } from 'src/app/services/tasks.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

  createProjectRequest:Project ={
    id:'',
    projectName: '',
    priority: 0,
   managerName: '',
  startdate:new Date()
    
  }

  constructor(private tasksService: TasksService){}
 
  ngOnInit(): void {
    
  }

  addProject(){


    this.tasksService.addProject(this.createProjectRequest)
    .subscribe({
      next:(projects:any) =>{
        console.log(this.createProjectRequest);
        swal(projects.projectName+" was created successfully!!! 😜");
      },

      error: (response: any)=>
      {
        console.log("response");
      }
    })

   
  }


}
