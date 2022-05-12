import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-all-tracks',
  templateUrl: './all-tracks.component.html',
  styleUrls: ['./all-tracks.component.scss']
})
export class AllTracksComponent implements OnInit {
  tracks:any=[]

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.getAllTracks().subscribe({
  
      next:(res:any)=>{
         this.tracks=res;
        console.log("tracks",this.tracks)
        
      },
      error:(err:any)=>{
        console.log(err)
      }
       })
  }

}
