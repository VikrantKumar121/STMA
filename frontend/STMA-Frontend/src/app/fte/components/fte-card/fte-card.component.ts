import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';

@Component({
  selector: 'app-fte-card',
  templateUrl: './fte-card.component.html',
  styleUrls: ['./fte-card.component.scss']
})
export class FteCardComponent implements OnInit {
  @Input() id:any;
@Input() category:string='';
allProjects:any=[];
allTracks:any=[];
allProjectTask:any=[]
allTrackTask:any=[]
u=0
@Input() projectId:any;
@Input() trackId:any
@Input() imageUrl:any
@Input() startDate:any
@Input() name:any
@Input() description:any
@Input() owner:any
@Input() date:any

  constructor(private router:Router,private route:ActivatedRoute,private fteAuthServices:FteAuthServicesService) { }

  ngOnInit(): void {
    this.startDate=this.startDate.substring(0,10);
  }
  details(){

    console.log("id",this.id);
    console.log("category",this.category)
    console.log("image url",this.imageUrl)
    
   if(this.category=='project-details'){
   
    this.router.navigate(['FTE/project-details/'+this.id]);
  
   }

   else if(this.category=='track-details'){
   
    this.router.navigate(['FTE/track-details/'+this.id]);
  
   }
   else if(this.category=='track-task-details'){
   
    this.router.navigate(['FTE/track-task-details/'+this.id+"/"+this.trackId]);
  
   }
}
}
