import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/createProject.model';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {


  
  projectDetails:Project = {

    id:'',
    projectName: '',
    priority: 0,
    managerName:'',
    startdate: new Date(),
   


  }
 
  constructor(private route:ActivatedRoute,private projectservice: ProjectService
    ,private router:Router)
  {}
 
 
 
  ngOnInit(): void {
    

    this.route.paramMap.subscribe({

      next:(params) => {

       

        const id =  params.get('id');
        if (id)
        {
          this.projectservice.getProject(id)
          .subscribe({

            next:(response:any) => {

              this.projectDetails = response;


            }



          })

        }


      }


    })

  }

  updateproject()
  {
    this.projectservice.updateproject(this.projectDetails.id,this.projectDetails)

    .subscribe({

      next:(response:any)=>{
        this.router.navigate(['/viewprojects']);
      }

    });

  }


}
