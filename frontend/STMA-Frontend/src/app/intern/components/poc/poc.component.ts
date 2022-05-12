import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {

  constructor() { }
  f:any;
  content:any=[
    {
      "name":"Suryash",
      "email":"suryassingh@deloitte.com",
      "post":"Track Lead",
      "designation":"DC Sr Engineering Mgmt",
      "track":"React"
    }
    ,
    {
      "name":"Arnav",
      "email":"arnkhan@deloitte.com",
      "post":"Tech Owner",
      "designation":"DC Software Engineer III",
      "track":"React"
    }
    , {
      "name":"Masroor",
      "email":"mhamdani@deloitte.com",
      "post":"HU direcator",
      "designation":"DC Sr Engineering Management Mast",
      "track":"- - -"
    }
    , {
      "name":"Vasudev Haralakere",
      "email":"vvenkateshmurthy@deloitte.com",
      "post":"Track lead",
      "designation":"DC Tech Architect",
      "track":"Spring Boot"
    }
    , {
      "name":"Swapna Gummanagundi",
      "email":"swmanjunath@deloitte.com",
      "post":"Track Lead",
      "designation":"DC Engineering Management Master",
      "track":"Angular"
    }
    , {
      "name":"Rahul",
      "email":"rahulrai@deloitte.com",
      "post":"Track lead",
      "designation":"DC Senior Tech Architect",
      "track":".NET"
    },
    {
      "name":"Ashwin",
      "email":"ashwinkumar2@deloitte.com",
      "post":"Track lead",
      "designation":"DC Engineering Management Master",
      "track":"Django"
    },
    {
      "name":"Pranav Jayadevan",
      "email":"pradev@deloitte.com",
      "post":"Track lead",
      "designation":"DC Engineering Management Master",
      "track":"Mobile Development"
    }
  ]

  ngOnInit(): void {
  }
   Search(){
     if(this.f==" "){
       return this.content;
     }
     else{
     this.content=this.content.filter((res:any)=>{
       return res.name.match(this.f);

     })
    }
   }
}
