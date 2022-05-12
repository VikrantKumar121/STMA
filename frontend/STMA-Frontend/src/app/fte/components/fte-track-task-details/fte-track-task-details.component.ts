import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-fte-track-task-details',
  templateUrl: './fte-track-task-details.component.html',
  styleUrls: ['./fte-track-task-details.component.scss']
})
export class FteTrackTaskDetailsComponent implements OnInit {
  trackDetailsId:any
  trackDetails:any
  description:any
  links:any=[]
  name:any
  trackId:any

  constructor(private route:ActivatedRoute,private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log("params",params['id']);
      this.trackDetailsId=params['id'];
      this.trackId=params['trackId'];
   })
   this.authService.getTodoDetails(this.trackDetailsId).subscribe({
 
    next:(res:any)=>{
       this.trackDetails=res;
      console.log(" track details",this.trackDetails)
      this.description=res.description
      this.links=res.link
      this.name=res.name
      
    },
    error:(err:any)=>{
      console.log(err)
    }
     })

  }
  editTodo(){
    this.router.navigate(['FTE/edit-todo/'+this.trackDetailsId+"/"+this.trackId]);
  }

}
