import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternRoutingModule } from './intern-routing.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternComponent } from './intern.component';
import {MatSelectModule} from '@angular/material/select';
import { AllTracksComponent } from './components/all-tracks/all-tracks.component';
import { CardComponent } from './components/card/card.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { PocComponent } from './components/poc/poc.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TrackTaskComponent } from './components/track-task/track-task.component';
import { ProjectTaskComponent } from './components/project-task/project-task.component';
import { TrackTaskDetailsComponent } from './components/track-task-details/track-task-details.component';
import { DiscussionFormComponent } from './components/discussion-form/discussion-form.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TrackTodoComponent } from './track-todo/track-todo.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProjectTodoComponent } from './project-todo/project-todo.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InternComponent,
    AllTracksComponent,
    CardComponent,
    AllProjectsComponent,
    PocComponent,
    TrackTaskComponent,
    ProjectTaskComponent,
    TrackTaskDetailsComponent,
    DiscussionFormComponent,
    TrackTodoComponent,
    ProjectTodoComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    InternRoutingModule,
    Ng2SearchPipeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    MatExpansionModule,
    MatMenuModule
  ]
})
export class InternModule { }
