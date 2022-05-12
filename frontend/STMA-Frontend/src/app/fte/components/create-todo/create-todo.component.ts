import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';
import { DatePipe } from '@angular/common';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  pipe = new DatePipe('en-US');
  
  trackId:any;
  memberList : any;

  todoForm=new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    link: new FormArray([]),
    deadline:new FormControl('',Validators.required),
  })

  constructor(private fteAuthServices:FteAuthServicesService, private router:Router,public datepipe: DatePipe, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log("track id",params['id']);
      this.trackId=params['id'];
   })

  this.fteAuthServices.getAllUsersOfTrack(this.trackId).subscribe(res => {
    this.memberList = res;
  })
  

  }
  
  data:any

  get link(){
    return this.todoForm.get('link') as FormArray ;
  }

  addLink(link: HTMLInputElement): void{
    this.link.push(new FormControl(link.value));
    this.linkList.push(link.value);
    
  }

  linkList: any[] = []
  

  postTodo(){
    this.todoForm.value.link=this.fruits
    this.todoForm.value.deadline =this.datepipe.transform( this.todoForm.value.deadline, 'yyyy-MM-dd');

    this.data = this.todoForm.value
    this.data['track'] = this.trackId
    console.log('data', this.data)

     this.fteAuthServices.createTodo(this.data).subscribe({
 
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

