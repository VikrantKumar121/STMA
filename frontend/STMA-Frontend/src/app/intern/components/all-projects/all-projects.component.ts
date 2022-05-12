import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }
   projects:any=[]
  ngOnInit(): void {
    this.authService.getAllProjects().subscribe({
  
      next:(res:any)=>{
         this.projects=res;
        console.log("project",this.projects)
        console.log("id",res[0].id);
      },
      error:(err:any)=>{
        console.log(err)
      }
       })
  }

}
