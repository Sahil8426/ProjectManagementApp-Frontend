import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/createProject.model';
import { ProjectService } from 'src/app/services/project.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  projects:Project[]=[];

  projectName:any;

  constructor(private projectservice: ProjectService,private route:ActivatedRoute,private router:Router){
    
  }

  ngOnInit(): void {


    this.projectservice.getAllprojects()
    .subscribe({

      next:(projects: any)=>{



        this.projects = projects;
        console.log(projects);

      },

      error: (response: any)=>
      {
        console.log("response");
      }
    })

  }


  deleteProject(id:string)
  {

    this.projectservice.deleteProject(id)
    .subscribe({
      next:(response:any) =>{
       
    
        window.location.reload();
        
        swal("Deleted Successfully!");
       
      }
    })
  }

  Search(){
    if(this.projectName=="")
    {
      this.ngOnInit();
    }

    else{
      this.projects = this.projects.filter(res =>{
        return res.projectName.toLocaleLowerCase().match(this.projectName.toLocaleLowerCase())
      })
    }
  }



}

