import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-track-task',
  templateUrl: './track-task.component.html',
  styleUrls: ['./track-task.component.scss']
})
export class TrackTaskComponent implements OnInit {
  trackId:any;
  trackTasks:any=[]
  tracks:any=[]
  trackName:any;
  trackDescription:any
  trackEndDate:any
  owner:any
  constructor(private authService:AuthenticationService,private route:ActivatedRoute,private router:Router) { }

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
      this.owner=element.owner;

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

  }
  discuss(){
    this.router.navigate(['/Intern/discuss/'+this.trackId])
  }

}
