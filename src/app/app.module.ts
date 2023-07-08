import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddtaskComponent } from './MyComponents/addtask/addtask.component';
import { AddUserComponent } from './MyComponents/add-user/add-user.component';
import { CreateprojectComponent } from './MyComponents/createproject/createproject.component';
import { ViewtasksComponent } from './MyComponents/viewtasks/viewtasks.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './MyComponents/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './MyComponents/edit-task/edit-task.component';
import { DeleteTaskComponent } from './MyComponents/delete-task/delete-task.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewUsersComponent } from './MyComponents/view-users/view-users.component';
import { EditUserComponent } from './MyComponents/edit-user/edit-user.component';
import { ViewProjectsComponent } from './MyComponents/view-projects/view-projects.component';
import { EditProjectComponent } from './MyComponents/edit-project/edit-project.component';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';




@NgModule({
  declarations: [
    AppComponent,
   
    AddtaskComponent,
        AddUserComponent,
        CreateprojectComponent,
        ViewtasksComponent,
        LandingPageComponent,
        EditTaskComponent,
        DeleteTaskComponent,
       ViewUsersComponent,
       EditUserComponent,
       ViewProjectsComponent,
       EditProjectComponent,
       LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
