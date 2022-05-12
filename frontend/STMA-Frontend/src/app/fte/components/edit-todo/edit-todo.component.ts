import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators, FormArray, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';
import { DatePipe } from '@angular/common';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  pipe = new DatePipe('en-US');
  
  todoId:any;
  memberList : any;
  todoDetails:any
  trackId:any

  todoForm=new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    // link: new FormArray([]),
    link:new FormControl('',Validators.required),
    deadline:new FormControl('',Validators.required),
  })


  constructor(private authService:AuthenticationService,private fteAuthServices:FteAuthServicesService, private router:Router,public datepipe: DatePipe, private route:ActivatedRoute) { }
  data:any
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log("todo id",params['id']);
      console.log("track id",params['trackId']);
      this.todoId=params['id'];
      this.trackId=params['trackId'];
   })
   this.authService.getTodo(this.todoId).subscribe({
    next:(res:any)=>{
  this.todoDetails=res;
  console.log("task details",this.todoDetails)
  console.log("task details for edit",this.todoDetails.deadline)
  console.log("task details for edit",this.todoDetails.link)
  this.todoForm.controls['name'].setValue(this.todoDetails.name);
  this.todoForm.controls['description'].setValue(this.todoDetails.description);
  this.todoForm.controls['deadline'].setValue(this.todoDetails.deadline);
  this.todoForm.controls['link'].setValue(this.todoDetails.link);
 
  
 

    },
    error:(err:any)=>{
console.log(err);
    }
    
  })

















  }
  postTodo(){
    this.todoForm.value.link=this.fruits
    this.todoForm.value.deadline =this.datepipe.transform( this.todoForm.value.deadline, 'yyyy-MM-dd');

    this.data = this.todoForm.value
    this.data['track'] = this.trackId
    console.log('data', this.data)

     this.authService.editTodo(this.data,this.todoId).subscribe({
 
      next:(res:any)=>{
    
        console.log("todo created",res)},
       error:(err:any)=>{
        console.log(err)
      }
        })

     this.router.navigate(['FTE/track-details/'+this.trackId]);
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits:any= [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit:any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }










}
