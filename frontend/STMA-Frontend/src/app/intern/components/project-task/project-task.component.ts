import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss']
})
export class ProjectTaskComponent implements OnInit {
    projectId:any;
    projectTasks:any=[]
    projectName:any;
    projectDescription:any
    projectEndDate:any
    owner:any
    projects:any=[]
    todo:any=[]
    doing:any=[]
    done:any=[]
  constructor(private authService:AuthenticationService,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
       console.log("params",params['id']);
       this.projectId=params['id'];
       
    })
   this.authService.getAllProjects().subscribe(data=>{
     this.projects=data;
     this.projects.forEach((element:any) => {
      if(element.id==this.projectId){
        this.projectName=element.name;
        this.projectDescription=element.description;
        this.projectEndDate=element.end_date;
        this.owner=element.owner;
 
      }
      
    });
     
   })
   this.projects.forEach((element:any) => {
     if(element.id==this.projectId){
       this.projectName=element.name;
       this.projectDescription=element.description;
       this.projectEndDate=element.end_date;
       this.owner=element.owner;

     }
     
   });



    this.authService.getAllTasksOfProject(this.projectId).subscribe({
  
      next:(res:any)=>{
         this.projectTasks=res;
        console.log(" project tracks",this.projectTasks)
        this.projectTasks.forEach((e:any)=>{
      
          if(e.status=='To_do'){
            this.todo.push(e);
          }
          console.log("todo",this.todo)
        })
        this.projectTasks.forEach((e:any)=>{
          if(e.status=='Doing'){
            this.doing.push(e);
          }
        })
        this.projectTasks.forEach((e:any)=>{
          if(e.status=='Done'){
            this.done.push(e);
          }
        })
    
        
      },
      error:(err:any)=>{
        console.log(err)
      }
       })


    this.projectTasks.forEach((e:any)=>{
      
      if(e.status=='To_do'){
        this.todo.push(e);
      }
      console.log("todo",this.todo)
    })
    this.projectTasks.forEach((e:any)=>{
      if(e.status=='Doing'){
        this.doing.push(e);
      }
    })
    this.projectTasks.forEach((e:any)=>{
      if(e.status=='Done'){
        this.done.push(e);
      }
    })


  }
//   this.projectTasks.forEach((e:any) => {
//     if(e.status==3){
//       this.testing.push(e);
//     }
  
// });

}
