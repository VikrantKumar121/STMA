import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
userName:any;
imageUrl:any

  constructor(private observer: BreakpointObserver,private route:ActivatedRoute, private router:Router,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.userName=localStorage.getItem("userName");
    this.imageUrl=localStorage.getItem("profilePic");
   
   
  }

  ngAfterViewInit() {
  
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  dashboardNav() {
    this.router.navigate(['Intern/dashboard'])
  }

  allTracksNav() {
    this.router.navigate(['Intern/allTracks'])
  }

  allProjectNav() {
    this.router.navigate(['Intern/allProjects'])
  }
  poc(){
    this.router.navigate(['Intern/poc'])
  }
  pro(){
 
  }
  profile(){
    this.router.navigate(['Intern/profile'])
  }
  

}
