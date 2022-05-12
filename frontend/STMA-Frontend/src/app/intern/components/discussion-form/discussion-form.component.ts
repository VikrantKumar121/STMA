import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  selector: 'app-discussion-form',
  templateUrl: './discussion-form.component.html',
  styleUrls: ['./discussion-form.component.scss']
})
export class DiscussionFormComponent implements OnInit {
//  @ViewChild(MatAccordion) accordion: MatAccordion;
   con:any=[]
   comment:any=[]
  refresh$=new BehaviorSubject<boolean>(true);
  trackId:any
  constructor( private authService:AuthenticationService,private route:ActivatedRoute) { }
  

// post=''
// show:any=false
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log("params",params['trackId']);
      this.trackId=params['trackId'];
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
  
  title:any;
  content:any;
  //track:any
  u:any={}
  c:any={}
 
  commment:any
  
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








}
