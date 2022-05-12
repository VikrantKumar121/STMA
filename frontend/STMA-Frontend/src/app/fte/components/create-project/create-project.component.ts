import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';
import { DatePipe } from '@angular/common';


export class DateValidators {
  static dateLessThan(dateField1: string, dateField2: string, validatorField: { [key: string]: boolean }): ValidatorFn {
      return (c: AbstractControl): { [key: string]: boolean } | null => {
          const date1 = c.get(dateField1)?.value;
          const date2 = c.get(dateField2)?.value;
          if ((date1 !== null && date2 !== null) && date1 > date2) {
              return validatorField;
          }
          return null;
      };
  }
}


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
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

  }, DateValidators.dateLessThan('start_date', 'end_date', { 'start_date': true })
  )
  postProject(){
    this.projectForm.value.start_date =this.datepipe.transform( this.projectForm.value.start_date, 'yyyy-MM-dd');
    this.projectForm.value.end_date =this.datepipe.transform( this.projectForm.value.end_date, 'yyyy-MM-dd');
   //this.projectForm.value.start_date =(this.projectForm.value.start_date).toISOString();
  //  this.todayWithPipe = this.pipe.transform(this.projectForm.value.start_date,'yyyy/MM/dd');
    this.fteAuthServices.createProject(this.projectForm.value).subscribe({
 
      next:(res:any)=>{
    
        console.log("porject created",res)},
      error:(err:any)=>{
        console.log(err)
      }
       })
       this.fteAuthServices.getAllFteProjects().subscribe({
  
        next:(res:any)=>{
          
         console.log(res);
        },
        error:(err:any)=>{
          console.log(err)
        }
         })
    this.router.navigate(['FTE/allProjects']);
  }
}
