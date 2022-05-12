import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
    
  })

  constructor(private route:ActivatedRoute, private router:Router, private authenticationservice:AuthenticationService) { }

  ngOnInit(): void {
  }
 wrong=false
  login(){
    //this.loginForm.value.email=this.loginForm.value.email+"@deloitte.com";
    this.authenticationservice.login(this.loginForm.value).subscribe({
      next:(res:any)=>{
        console.log("res",res);
        console.log("token",res.token)
        if(res.token){
          localStorage.clear();
          // localStorage.setItem("userData",JSON.stringify(res));
          // console.log(JSON.parse(localStorage.getItem("userData")||'{}'));
          localStorage.setItem("token",res.token);
          localStorage.setItem("role",res.role);
          localStorage.setItem("user_id",res.user_id);
          localStorage.setItem("email",res.email);
          localStorage.setItem("userName",res.user_name);
          localStorage.setItem("profilePic",res.profile_pic);
          this.authenticationservice.userName=res.user_name
          // this.router.navigate(['/dashboard']);
          if(res.role==='Intern') {
            this.router.navigate(['Intern/dashboard']);
          }
          if(res.role==='FTE') {
            this.router.navigate(['FTE/dashboard']);
          }
        }
      }
      ,
      error:(err:any)=>{
       // console.log("err",err);
     //  window.alert("wrong Credentials");
       this.wrong=true
      }
    })
  }

}
