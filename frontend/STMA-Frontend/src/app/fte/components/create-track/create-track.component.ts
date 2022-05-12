import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-track',
  templateUrl: './create-track.component.html',
  styleUrls: ['./create-track.component.scss']
})
export class CreateTrackComponent implements OnInit {

  pipe = new DatePipe('en-US');
  todayWithPipe :any;

  constructor(private fteAuthServices:FteAuthServicesService,private router:Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
   
  }
  projectForm=new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    start_date:new FormControl('',Validators.required),
    end_date:new FormControl('',Validators.required)

  })
  postProject(){
    this.projectForm.value.start_date =this.datepipe.transform( this.projectForm.value.start_date, 'yyyy-MM-dd');
    this.projectForm.value.end_date =this.datepipe.transform( this.projectForm.value.end_date, 'yyyy-MM-dd');
   //this.projectForm.value.start_date =(this.projectForm.value.start_date).toISOString();
  //  this.todayWithPipe = this.pipe.transform(this.projectForm.value.start_date,'yyyy/MM/dd');
    this.fteAuthServices.createTrack(this.projectForm.value).subscribe({
 
      next:(res:any)=>{
    
        console.log("porject created",res)},
      error:(err:any)=>{
        console.log(err)
      }
       })
       this.fteAuthServices.getAllFteTracks().subscribe({
  
        next:(res:any)=>{
          
         console.log(res);
        },
        error:(err:any)=>{
          console.log(err)
        }
         })
    this.router.navigate(['FTE/allTracks']);
  }
}
