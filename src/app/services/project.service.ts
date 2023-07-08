import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Project } from '../models/createProject.model';
import { Observable } from 'rxjs';
import { Task } from '../models/viewtask.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseApiUrl: string  = environment.baseApiUrl;

  constructor(private http: HttpClient) { 
}

getAllprojects():Observable<Project[]>
{

 return  this.http.get<Project[]>(this.baseApiUrl+'/api/Projects');
}




addProject(createProjectRequest:Project):Observable<Project>
{
return this.http.post<Project>(this.baseApiUrl+'/api/projects',createProjectRequest);
}

getProject(id: string):Observable<Project>
{
return this.http.get<Project>(this.baseApiUrl+'/api/Projects/'+ id);
}

updateproject(id:string,updateprojectrequest:Project):
Observable<Project>{

return this.http.put<Project>(this.baseApiUrl+'/api/Projects/'+ id, updateprojectrequest);

}

deleteProject(id:string):Observable<Project>{

  return this.http.delete<Project>(this.baseApiUrl+'/api/Projects/'+ id);

}


 
}
