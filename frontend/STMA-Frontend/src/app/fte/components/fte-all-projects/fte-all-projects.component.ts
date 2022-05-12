import { Component, OnInit } from '@angular/core';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';

@Component({
  selector: 'app-fte-all-projects',
  templateUrl: './fte-all-projects.component.html',
  styleUrls: ['./fte-all-projects.component.scss']
})
export class FteAllProjectsComponent implements OnInit {

  constructor(private fteAuthService:FteAuthServicesService) { }
projects:any=[]
  ngOnInit(): void {
    this.fteAuthService.getAllFteProjects().subscribe({
  
      next:(res:any)=>{
         this.projects=res;
        console.log("fte project",this.projects)
        console.log("id",res[0].id);
      },
      error:(err:any)=>{
        console.log(err)
      }
       })
  }

}
