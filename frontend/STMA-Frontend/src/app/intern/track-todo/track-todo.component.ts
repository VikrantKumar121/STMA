import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeLast,BehaviorSubject,switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-track-todo',
  templateUrl: './track-todo.component.html',
  styleUrls: ['./track-todo.component.scss']
})
export class TrackTodoComponent implements OnInit {
trackId:any
trackTasks:any=[]
tracks:any=[]
trackName:any;
trackDescription:any
trackStartDate:any
trackEndDate:any
owner:any
con:any=[]
users:any=[]
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
    this.route.params.subscribe((params)=>{
      console.log("params",params['id']);
      this.trackId=params['id'];
   })
   this.authService.getAllTracks().subscribe(data=>{
    this.tracks=data
    this.tracks.forEach((element:any) => {
      if(element.id==this.trackId){
        this.trackName=element.name;
        this.trackDescription=element.description;
        this.trackEndDate=element.end_date;
        this.owner=element.owner_name;
        this.trackStartDate=element.start_date
  
      }
      
    });
  
  })
  
     this.authService.getAllTasksOfTrack(this.trackId).subscribe({
   
       next:(res:any)=>{
          this.trackTasks=res;
         console.log(" track tracks",this.trackTasks)
         
       },
       error:(err:any)=>{
         console.log(err)
       }
        })
        this.authService.getAllUsersOfTrack(this.trackId).subscribe({
   
          next:(res:any)=>{
             this.users=res;
            console.log(" members",this.users)
            
          },
          error:(err:any)=>{
            console.log(err)
          }
           })



        this.refresh$.pipe(switchMap(_=>this.authService.getDiscussion(this.trackId)))
    .subscribe(
      data=>{
       this.con=data;
       
       console.log("all post",this.con);
       console.log(this.con[0].comments[0].commment)
      }
     )
  }
  showTask=true
  showDiscuss=false
  showMembers=false
  showPoc=false

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
    "track":this.trackId
   
  }
  
  this.authService.createDiscussion(this.u).subscribe(data=>{
    console.log("data",data);
    this.refresh$.next(true)
  })
 
  console.log("created")

}
    
addComment(discussionId:any){
  this.c={
    "commment":this.commment,
    "discussion":discussionId
  }
  this.authService.createComment(this.c).subscribe(data=>{
    console.log("comm data",data)

  })
  this.refresh$.next(true);

  console.log("aadd",discussionId)
}

pin(){
  console.log("pin");
}

like(){
  console.log("like")
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






}
