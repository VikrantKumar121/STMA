import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private authService:AuthenticationService) { }
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
  // name:string='';
  // description:string='';
  // owner:string='';
  // date:string='';
  
  @Input() name:any
  @Input() description:any
  @Input() owner:any
  @Input() date:any
  
  
  ngOnInit(): void {
    this.startDate=this.startDate.substring(0,10);
   
   
  }
  details(){

    console.log("id",this.id);
    console.log("category",this.category)
    console.log("image url",this.imageUrl)
    if(this.category=='track'){
      
          this.router.navigate(['Intern/track/'+this.id]);
         
    }
   else if(this.category=='project'){
   
    this.router.navigate(['Intern/project/'+this.id]);
  

}
// else if(this.category=='track-task-details'){
//   this.router.navigate(['Intern/track-task-details/'+this.id]);
// }
else if(this.category=='track-task-details'){
  this.router.navigate(['Intern/track-task-details/'+this.id]);
}

  }

 
   




















}
