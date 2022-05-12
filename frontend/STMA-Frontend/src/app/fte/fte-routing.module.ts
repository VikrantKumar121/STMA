import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from '../intern/components/all-projects/all-projects.component';

import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { CreateTrackComponent } from './components/create-track/create-track.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { FteAllProjectsComponent } from './components/fte-all-projects/fte-all-projects.component';
import { FteAllTracksComponent } from './components/fte-all-tracks/fte-all-tracks.component';
import { FteProfileComponent } from './components/fte-profile/fte-profile.component';
import { FteProjectDetailsComponent } from './components/fte-project-details/fte-project-details.component';
import { FteTrackDetailsComponent } from './components/fte-track-details/fte-track-details.component';
import { FteTrackTaskDetailsComponent } from './components/fte-track-task-details/fte-track-task-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FteComponent } from './fte.component';

const routes: Routes = [
  {
    path:'',
    component:FteComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'create-project',
        component:CreateProjectComponent
      },
      {
        path:'allProjects',
        component:FteAllProjectsComponent
      },
      {
        path:'create-track',
        component:CreateTrackComponent
      },
      {
        path:'allTracks',
        component:FteAllTracksComponent
      }
      ,{
        path:'profile',
        component:FteProfileComponent
      },
      {
        path:'project-details/:id',
        component:FteProjectDetailsComponent
      },
      {
        path:'create-task/:id',
        component:CreateTaskComponent
      },
      {
        path:'create-todo/:id',
        component:CreateTodoComponent
      },
      {
        path:'track-details/:id',
        component:FteTrackDetailsComponent
      },
      {
        path:'edit-task/:id/:projectId',
        component:EditTaskComponent

      },
      {
        path:'track-task-details/:id/:trackId',
        component:FteTrackTaskDetailsComponent
      },
      {
        path:'edit-todo/:id/:trackId',
        component:EditTodoComponent

      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FteRoutingModule { }
