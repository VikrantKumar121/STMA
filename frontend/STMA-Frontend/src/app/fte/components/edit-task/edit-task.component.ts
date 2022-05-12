import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
     taskId:any
     taskDetails:any
     pipe = new DatePipe('en-US');
  
     projectId:any;
     assigneeList : any;
   
     taskForm=new FormGroup({
       name:new FormControl('',Validators.required),
       description:new FormControl('',Validators.required),
       priority:new FormControl('',Validators.required),
       type:new FormControl('',Validators.required),
       deadline:new FormControl('',Validators.required),
       assignee:new FormControl('',Validators.required)
     })
  constructor(private route:ActivatedRoute,private authService:AuthenticationService,private fteAuthServices:FteAuthServicesService,public datepipe: DatePipe,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log("taskId",params['id']);
      console.log("projectId",params['projectId']);
      this.taskId=params['id'];
      this.projectId=params['projectId']
      
   })
    this.authService.getTask(this.taskId).subscribe({
      next:(res:any)=>{
    this.taskDetails=res;
    console.log("task details",this.taskDetails)
    this.taskForm.controls['name'].setValue(this.taskDetails.name);
    this.taskForm.controls['description'].setValue(this.taskDetails.description);
    this.taskForm.controls['priority'].setValue(this.taskDetails.priority);
    this.taskForm.controls['type'].setValue(this.taskDetails.type);
    this.taskForm.controls['deadline'].setValue(this.taskDetails.deadline);
    this.taskForm.controls['assignee'].setValue(this.taskDetails.assignee);

      },
      error:(err:any)=>{
  console.log(err);
      }
      
    })
    this.authService.getAllInternsOfProject(this.projectId).subscribe((res:any) => {
      this.assigneeList = res;
    })
    








  }
    
  data:any

  editTask(){
    this.taskForm.value.deadline =this.datepipe.transform( this.taskForm.value.deadline, 'yyyy-MM-dd');

    this.data = this.taskForm.value
    this.data['project'] = this.projectId
    console.log('data', this.data)

     this.authService.editTask(this.data,this.taskId).subscribe({
 
       next:(res:any)=>{
    
         console.log("task edited",res)},
       error:(err:any)=>{
         console.log(err)
      }
       })
    
      //  this.fteAuthServices.getAllFteProjects().subscribe({
  
      //   next:(res:any)=>{
          
      //    console.log(res);
      //   },
      //   error:(err:any)=>{
      //     console.log(err)
      //   }
        //  })
        this.authService.getAllTasksOfProject(this.projectId).subscribe({
     
          next:(res:any)=>{
            
            console.log("after editing task project tasks are",res);
            
          },
          error:(err:any)=>{
            console.log(err)
          }
           })
    this.router.navigate(['FTE/project-details/'+this.projectId]);
  }

}
