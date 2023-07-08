import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './MyComponents/add-user/add-user.component';
import { AddtaskComponent} from './MyComponents/addtask/addtask.component';
import {CreateprojectComponent } from './MyComponents/createproject/createproject.component';
import {ViewtasksComponent} from './MyComponents/viewtasks/viewtasks.component';
import { LandingPageComponent } from './MyComponents/landing-page/landing-page.component';
import { EditTaskComponent } from './MyComponents/edit-task/edit-task.component';
import { DeleteTaskComponent } from './MyComponents/delete-task/delete-task.component';
import { ViewUsersComponent } from './MyComponents/view-users/view-users.component';
import { EditUserComponent } from './MyComponents/edit-user/edit-user.component';
import { ViewProjectsComponent } from './MyComponents/view-projects/view-projects.component';
import { EditProjectComponent } from './MyComponents/edit-project/edit-project.component';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';

const routes: Routes = [
  {
    component:AddUserComponent,
    path:'adduser'
  },

  {
    component:AddtaskComponent,
    path:'addtask'
  },
  {
    component:CreateprojectComponent,
    path:"createproject"
  },

  {
    component:ViewtasksComponent,
    path:"viewtasks"
  },
  {
    component:LandingPageComponent,
    path:"landing-page"
  },
  {
    component:EditTaskComponent,
    path:"task/edittask/:id"
  },
  {
    component:DeleteTaskComponent,
    path:"delete"
  },
  {
    component:ViewUsersComponent,
    path:"viewuser"

  },
  {

    component:EditUserComponent,
    path:"edit-user"

  },
  {
    component:EditUserComponent,
    path:"user/edit-user/:id"
  },
  {
    component:ViewProjectsComponent,
    path:"viewprojects"
  },
  {
    component:EditProjectComponent,
    path:"projects/edit-project/:id"
  },
  {

    component:EditProjectComponent,
    path:"edit-project"

  },
  {

    component:LoginPageComponent,
    path:"login-page"

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
