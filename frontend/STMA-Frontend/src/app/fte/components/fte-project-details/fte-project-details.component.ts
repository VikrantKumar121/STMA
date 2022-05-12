 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';
 import { takeLast,BehaviorSubject,switchMap } from 'rxjs';
 import { AuthenticationService } from 'src/app/services/authentication.service';
 import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { animate } from '@angular/animations';

 @Component({
   selector: 'app-fte-project-details',
   templateUrl: './fte-project-details.component.html',
   styleUrls: ['./fte-project-details.component.scss']
 })
 export class FteProjectDetailsComponent implements OnInit {

  
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
   
    commment:any;
    //dropdown
    dropdownList:any=[]
    dropdownSettings:any
    memberForm:any=FormGroup
  //dropdown end
    constructor(private formBuilder:FormBuilder,private router:Router,private route:ActivatedRoute,private authService:AuthenticationService) { }
  
    ngOnInit(): void {
      //for dropdwon
      this.initForm();

    
     
      this.dropdownSettings={
        singleSelection:false,
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        idField:'id',
        textField:'name',
        allowSearchFilter: true,
        itemsShowLimit: 2,
        maxHeight:80


 }



 this.authService.getAllUsers().subscribe({
 
  next:(res:any)=>{
    this.dropdownList=res;
     console.log("all users",res);
     console.log("dropswonlist",this.dropdownList)
    
  },
  error:(err:any)=>{
    console.log(err)
  }
   })
  





      //dropdwon end
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
        "email":"suryassingh@abc.com",
        "post":"Track Lead",
        "designation":"Sr Engineering Mgmt",
        "track":"Delivery"
      }
      ,
      {
        "name":"Arnav",
        "email":"arnkhan@abc.com",
        "post":"Tech Owner",
        "designation":"Software Engineer III",
        "track":"Delivery"
      }
      , {
        "name":"Masroor",
        "email":"mhamdani@abc.com",
        "post":"Tech direcator",
        "designation":"Sr Engineering Management Mast",
        "track":"Delivery"
      }
      
    ]
    status:any
  changeText(taskId:any,currentStatus:any,assigne:any){
    console.log("taskId",taskId);
    console.log("assig",assigne)
    console.log("userNam",this.userName)
    if(currentStatus=='Doing'){
      console.log("curren sta",currentStatus)
      this.status={
        status:"Done"
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
     else if(currentStatus=='Done'){
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
 

   
//for dropdown

getData(){
 
   
    this.authService.getAllUsers().subscribe({
 
      next:(res:any)=>{
         console.log("all users",res);
        
      },
      error:(err:any)=>{
        console.log(err)
      }
       })
}
initForm(){
  this.memberForm=this.formBuilder.group({
    members:['',[Validators.required]]
  })
}
onMemberSelect($event:any){
console.log('$event is',$event );
}
mem:any=[]
postMember:any={

}
  membersSubmit(){
     this.memberForm.value.members.forEach((e:any)=>{

      this.mem.push(e.id);
     })
  console.log("idsss",this.mem)
    console.log("mebers slected",this.memberForm.value.members);
    this.postMember={
      "project":this.projectId,
      "member_list":this.mem

    }
    console.log("postmember",this.postMember)
    this.authService.addProjectMember(this.postMember).subscribe({
 
      next:(res:any)=>{
         console.log("after adding project members",res);
        
      },
      error:(err:any)=>{
        console.log(err)
      }
       })
  } 
  
  deleteTask(taskId:any){
    this.authService.deleteTask(taskId).subscribe(res=>{
      console.log("task deleted");
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
  createTask(){
    this.router.navigate(['FTE/create-task/'+this.projectId])
  }
  editedTask:any={

  }
    editTask(taskId:any){

    // this.authService.editTask(this.editTask,taskId).subscribe({
     
    //   next:(res:any)=>{
    //      console.log("task created");
        
    //   },
    //   error:(err:any)=>{
    //     console.log(err)
    //   }
    //    })
    this.router.navigate(['FTE/edit-task/'+taskId+"/"+this.projectId])
    
    }

//end of component
 
 }
