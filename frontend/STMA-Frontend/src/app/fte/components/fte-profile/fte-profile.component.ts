import { Component, OnInit } from '@angular/core';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';

@Component({
  selector: 'app-fte-profile',
  templateUrl: './fte-profile.component.html',
  styleUrls: ['./fte-profile.component.scss']
})
export class FteProfileComponent implements OnInit {
  name:any
  email:any
  band:any
  deloitte_id:any
  hasedIn_id:any
  contact:any
  department:any
  designation:any
  dateOfJoining:any

  constructor(private fteAuthService:FteAuthServicesService) { }

  ngOnInit(): void {
    this.fteAuthService.getProfile().subscribe({
     
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
      },
      error:(err:any)=>{
        console.log(err)
      }
       })
  }

}
