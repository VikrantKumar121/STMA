import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FteRoutingModule } from './fte-routing.module';
import { FteComponent } from './fte.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FteAllProjectsComponent } from './components/fte-all-projects/fte-all-projects.component';
import { FteCardComponent } from './components/fte-card/fte-card.component';
import { DatePipe } from '@angular/common';
import { FteProfileComponent } from './components/fte-profile/fte-profile.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import {MatSelectModule} from '@angular/material/select';
import { CreateTrackComponent } from './components/create-track/create-track.component';
import { FteAllTracksComponent } from './components/fte-all-tracks/fte-all-tracks.component';
import { FteProjectDetailsComponent } from './components/fte-project-details/fte-project-details.component'
import {MatExpansionModule} from '@angular/material/expansion';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { FteTrackDetailsComponent } from './components/fte-track-details/fte-track-details.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';

import { EditTaskComponent } from './components/edit-task/edit-task.component';
import {MatChipsModule} from '@angular/material/chips';
import { FteTrackTaskDetailsComponent } from './components/fte-track-task-details/fte-track-task-details.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';




@NgModule({
  declarations: [
    FteComponent,
    DashboardComponent,
    CreateProjectComponent,
    FteAllProjectsComponent,
    FteCardComponent,
    FteProfileComponent,
    CreateTaskComponent,
   
    CreateTrackComponent,
        FteAllTracksComponent,
        FteProjectDetailsComponent,

        FteTrackDetailsComponent,
        CreateTodoComponent,

        EditTaskComponent,
         FteTrackTaskDetailsComponent,
         EditTodoComponent,

    
  ],
  imports: [
    CommonModule,
    FteRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Ng2SearchPipeModule,
    MatExpansionModule,
    NgMultiSelectDropDownModule,
    MatSelectModule,
    MatChipsModule

  ],
  providers: [DatePipe]
})
export class FteModule { }
