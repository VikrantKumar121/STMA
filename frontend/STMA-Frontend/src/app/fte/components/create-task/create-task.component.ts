import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

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

  constructor(private fteAuthServices:FteAuthServicesService,private router:Router,public datepipe: DatePipe, private route:ActivatedRoute,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log("project id",params['id']);
      this.projectId=params['id'];
   })
    // this.refresh$.pipe(switchMap(_=>this.authService.getDiscussion(this.trackId)))
    // .subscribe(
    //   data=>{
    //    this.con=data;
       
    //    console.log("all post",this.con);
    //    console.log(this.con[0].comments[0].commment)
    //   }
    //  )
  //  }
  this.authService.getAllInternsOfProject(this.projectId).subscribe((res:any) => {
    this.assigneeList = res;
  })
  

  }
  
  data:any

  postTask(){
    this.taskForm.value.deadline =this.datepipe.transform( this.taskForm.value.deadline, 'yyyy-MM-dd');

    this.data = this.taskForm.value
    this.data['project'] = this.projectId
    console.log('data', this.data)

    this.fteAuthServices.createTask(this.data).subscribe({
 
      next:(res:any)=>{
    
        console.log("task created",res)},
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


    this.router.navigate(['FTE/project-details/'+this.projectId]);

  }

}
