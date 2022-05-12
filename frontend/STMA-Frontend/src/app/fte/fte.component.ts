import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fte',
  templateUrl: './fte.component.html',
  styleUrls: ['./fte.component.scss']
})
export class FteComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  userName:any
  imageUrl:any

  constructor(private observer: BreakpointObserver,private router:Router) { }

  ngOnInit(): void {
    this.userName=localStorage.getItem('userName');
    this.imageUrl=localStorage.getItem('profilePic')
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
    this.router.navigate(['FTE/dashboard'])
  }
  toCreateProject(){
    this.router.navigate(['FTE/create-project'])
  }
    profile(){
      this.router.navigate(['FTE/profile'])
    }
    allProjects(){
      this.router.navigate(['FTE/allProjects']);
    }
 toCreateTrack(){
  this.router.navigate(['FTE/create-track'])
 }
allTracks(){
  this.router.navigate(['FTE/allTracks'])
}



}
