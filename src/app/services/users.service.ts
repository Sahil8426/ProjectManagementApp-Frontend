import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/adduser.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl: string  = environment.baseApiUrl;

  constructor(private http: HttpClient) { 
}

getAllUsers():Observable<User[]>
    {

     return  this.http.get<User[]>(this.baseApiUrl+'/api/AddUser');
    }

    addUser(addUserRequest:User):Observable<User>
    {
      return this.http.post<User>(this.baseApiUrl+'/api/AddUser',addUserRequest);
    }

    getuser(id: string):Observable<User>
  {
    return this.http.get<User>(this.baseApiUrl+'/api/AddUser/'+ id);
  }

  updateuser(id:string,updateuserrequest:User):
  Observable<User>{

    return this.http.put<User>(this.baseApiUrl+'/api/AddUser/'+ id, updateuserrequest);

  }

  deleteuser(id:string):Observable<User>{

    return this.http.delete<User>(this.baseApiUrl+'/api/AddUser/'+ id);

  }


}

