import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeLast,BehaviorSubject,switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-project-todo',
  templateUrl: './project-todo.component.html',
  styleUrls: ['./project-todo.component.scss']
})
export class ProjectTodoComponent implements OnInit {

  projectId:any
  projectTasks:any=[]
  projects:any=[]
  projectName:any;
  projectDescription:any
  projectStartDate:any
  projectEndDate:any
  owner:any
  con:any=[]
  users:any=[]
  userName:any
     comment:any=[]
    refresh$=new BehaviorSubject<boolean>(true);
    title:any;
    content:any;
    //track:any
    u:any={}
    c:any={}
   
    commment:any
  
    constructor(private router:Router,private route:ActivatedRoute,private authService:AuthenticationService) { }
  
    ngOnInit(): void {
      this.userName=localStorage.getItem("userName");
      this.route.params.subscribe((params)=>{
        console.log("params",params['id']);
        this.projectId=params['id'];
     })
     this.authService.getAllProjects().subscribe(data=>{
      this.projects=data
      this.projects.forEach((element:any) => {
        if(element.id==this.projectId){
          this.projectName=element.name;
          this.projectDescription=element.description;
          this.projectEndDate=element.end_date;
          this.owner=element.owner_name;
          this.projectStartDate=element.created_on
          this.projectStartDate=this.projectStartDate.substring(0,10);
        }
        
      });
    
    })
    
       this.authService.getAllTasksOfProject(this.projectId).subscribe({
     
         next:(res:any)=>{
            this.projectTasks=res;
           console.log(" track tracks",this.projectTasks)
           
         },
         error:(err:any)=>{
           console.log(err)
         }
          })
          this.authService.getAllUsersOfProject(this.projectId).subscribe({
     
            next:(res:any)=>{
               this.users=res;
              console.log(" members",this.users)
              
            },
            error:(err:any)=>{
              console.log(err)
            }
             })
  
  
  
          this.refresh$.pipe(switchMap(_=>this.authService.getProjectDiscussion(this.projectId)))
      .subscribe(
        data=>{
         this.con=data;
         
         console.log("all post of project",this.con);
         console.log(this.con[0].comments[0].commment)
        }
       )

    //status change
    















       //ngOnit end
    }

  
    

















    showTask=true
    showDiscuss=false
    showMembers=false
    showPoc=false
    likeClick=false
  
    dis(){
      this.showTask=false;
      this.showMembers=false;
      this.showDiscuss=true;
      this.showPoc=false
     
  
    }
    trackTask(){
  
      this.showDiscuss=false;
      this.showTask=true;
      this.showMembers=false;
      this.showPoc=false
  
  
    }
    members(){
      this.showMembers=true;
      this.showDiscuss=false;
      this.showTask=false,
      this.showPoc=false
    }
    pointOfContact(){
      this.showMembers=false;
      this.showDiscuss=false;
      this.showTask=false;
      this.showPoc=true
    }
      
  addConv(){
    this.u={
      "title":this.title,
      "content":this.content,
      "project":this.projectId
     
    }
    
    this.authService.createProjectDiscussion(this.u).subscribe(data=>{
      console.log("data project",data);
      this.refresh$.next(true)
    })
   
    console.log("created")
  
  }
      
  addComment(discussionId:any){
    this.c={
      "commment":this.commment,
      "discussion":discussionId
    }
    this.authService.createProjectComment(this.c).subscribe(data=>{
      console.log("comm data pro",data)
  
    })
    this.refresh$.next(true);
  
    console.log("aadd",discussionId)
  }
  
  pin(){
    console.log("pin");
  }
  y:any={

  }
  like(like:any){
    this.likeClick=true;
    this.y={
      "project_discussion": like

    }
    this.authService.createLike(this.y).subscribe({
     
      next:(res:any)=>{
       console.log("like res",res);
        
      },
      error:(err:any)=>{
        console.log(err)
      }
       })
      //  this.authService.createProjectDiscussion(this.projectId).subscribe({
     
      //   next:(res:any)=>{
      //    console.log("projectDiscussion",res);
          
      //   },
      //   error:(err:any)=>{
      //     console.log(err)
      //   }
      //    })
      this.refresh$.next(true);
  }
  unLike(){
    this.likeClick=false;
  }
  
  f:any
  
  
  discussf:any;
    contacts:any=[
      {
        "name":"Suryash",
        "email":"suryassingh@deloitte.com",
        "post":"Track Lead",
        "designation":"DC Sr Engineering Mgmt",
        "track":"React"
      }
      ,
      {
        "name":"Arnav",
        "email":"arnkhan@deloitte.com",
        "post":"Tech Owner",
        "designation":"DC Software Engineer III",
        "track":"React"
      }
      , {
        "name":"Masroor",
        "email":"mhamdani@deloitte.com",
        "post":"HU direcator",
        "designation":"DC Sr Engineering Management Mast",
        "track":"- - -"
      }
      , {
        "name":"Vasudev Haralakere",
        "email":"vvenkateshmurthy@deloitte.com",
        "post":"Track lead",
        "designation":"DC Tech Architect",
        "track":"Spring Boot"
      }
      , {
        "name":"Swapna Gummanagundi",
        "email":"swmanjunath@deloitte.com",
        "post":"Track Lead",
        "designation":"DC Engineering Management Master",
        "track":"Angular"
      }
      , {
        "name":"Rahul",
        "email":"rahulrai@deloitte.com",
        "post":"Track lead",
        "designation":"DC Senior Tech Architect",
        "track":".NET"
      },
      {
        "name":"Ashwin",
        "email":"ashwinkumar2@deloitte.com",
        "post":"Track lead",
        "designation":"DC Engineering Management Master",
        "track":"Django"
      },
      {
        "name":"Pranav Jayadevan",
        "email":"pradev@deloitte.com",
        "post":"Track lead",
        "designation":"DC Engineering Management Master",
        "track":"Mobile Development"
      }
    ]
    status:any
  changeText(taskId:any,currentStatus:any,assigne:any){
    console.log("taskId",taskId);
    console.log("assig",assigne)
    console.log("userNam",this.userName)
    if(currentStatus=='To_do'&&assigne==this.userName){
      console.log("curren sta",currentStatus)
      this.status={
        status:"Doing"
      }
      this.authService.changeStatusOfProjectTask(taskId,this.status).subscribe(res=>{
        console.log("response",res);
        this.authService.getAllTasksOfProject(this.projectId).subscribe({
     
          next:(res:any)=>{
             this.projectTasks=res;
            console.log(" track tracks",this.projectTasks)
            
          },
          error:(err:any)=>{
            console.log(err)
          }
           })
    })
    }
     else if(currentStatus=='Doing'&&assigne==this.userName){
      this.status={
        status:"To_do"
      }
      this.authService.changeStatusOfProjectTask(taskId,this.status).subscribe(res=>{
        console.log("response",res);
        this.authService.getAllTasksOfProject(this.projectId).subscribe({
     
          next:(res:any)=>{
             this.projectTasks=res;
            console.log(" track tracks",this.projectTasks)
            
          },
          error:(err:any)=>{
            console.log(err)
          }
           })
    })
     }
   
  
  }
 

}
