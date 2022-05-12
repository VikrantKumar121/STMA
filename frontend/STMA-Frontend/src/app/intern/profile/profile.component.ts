import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name:any
  email:any
  band:any
  deloitte_id:any
  hasedIn_id:any
  contact:any
  department:any
  designation:any
  dateOfJoining:any
  imageUrl:any

  constructor(private authService:AuthenticationService) { 
   // this.userName=localStorage.getItem('userName')
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
     
      next:(res:any)=>{
       console.log("profile",res);
       this.name=res.name;
       this.email=res.email;
       this.band=res.band;
       this.contact=res.phone_no;
       this.deloitte_id=res.deloitte_emp_id;
       this.hasedIn_id=res.hashedin_emp_id;
       this.department=res.department;
       this.designation=res.designation;
       this.dateOfJoining=res.date_of_joining;
       this.imageUrl=res.profile_pic;
      },
      error:(err:any)=>{
        console.log(err)
      }
       })
  }

}
