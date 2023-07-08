import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Task } from '../models/viewtask.model';
import { Observable } from 'rxjs/internal/Observable';

import { Project } from '../models/createProject.model';


@Injectable({
  providedIn: 'root'
})
export class TasksService {


  baseApiUrl: string  = environment.baseApiUrl;

  constructor(private http: HttpClient) { 

    

  }

  getAlltasks():Observable<Task[]>
    {

     return  this.http.get<Task[]>(this.baseApiUrl+'/api/AddTask');
    }

  
  addTask(addTaskRequest:Task):Observable<Task>
  {
    return this.http.post<Task>(this.baseApiUrl+'/api/AddTask',addTaskRequest);
  }

  addProject(createProjectRequest:Project):Observable<Project>
  {
    return this.http.post<Project>(this.baseApiUrl+'/api/projects',createProjectRequest);
  }

  gettask(id: string):Observable<Task>
  {
    return this.http.get<Task>(this.baseApiUrl+'/api/AddTask/'+ id);
  }

  updatetask(id:string,updateemployeerequest:Task):
  Observable<Task>{

    return this.http.put<Task>(this.baseApiUrl+'/api/AddTask/'+ id, updateemployeerequest);

  }

  deletetask(id:string):Observable<Task>{

    return this.http.delete<Task>(this.baseApiUrl+'/api/AddTask/'+ id);

  }

  
}


