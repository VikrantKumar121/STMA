import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-track-task-details',
  templateUrl: './track-task-details.component.html',
  styleUrls: ['./track-task-details.component.scss']
})
export class TrackTaskDetailsComponent implements OnInit {
  trackDetailsId:any
  trackDetails:any
  description:any
  links:any=[]
  name:any
  constructor(private route:ActivatedRoute,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log("params",params['id']);
      this.trackDetailsId=params['id'];
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

  

}
