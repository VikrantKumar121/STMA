import { Component, OnInit } from '@angular/core';
import { FteAuthServicesService } from 'src/app/services/fte-auth-services.service';

@Component({
  selector: 'app-fte-all-tracks',
  templateUrl: './fte-all-tracks.component.html',
  styleUrls: ['./fte-all-tracks.component.scss']
})
export class FteAllTracksComponent implements OnInit {

 
  constructor(private fteAuthService:FteAuthServicesService) { }
tracks:any=[]
  ngOnInit(): void {
    this.fteAuthService.getAllFteTracks().subscribe({
  
      next:(res:any)=>{
         this.tracks=res;
        console.log("fte project",this.tracks)
        console.log("id",res[0].id);
      },
      error:(err:any)=>{
        console.log(err)
      }
       })
  }

}
