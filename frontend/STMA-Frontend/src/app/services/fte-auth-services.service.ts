import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FteAuthServicesService {

  constructor(private http:HttpClient) { }
  baseUrl=environment.baseUrl
  getAllFteProjects(){
    return this.http.get(this.baseUrl+"userProject/");
  }
  createProject(project:any){
    return this.http.post(this.baseUrl+"project/",project);
  }
  getAllFteTracks(){
    return this.http.get(this.baseUrl+"userTrack/");
  }
  createTrack(track:any){
    return this.http.post(this.baseUrl+"track/",track);
  }
  getProfile(){
    return this.http.get(this.baseUrl+"user/profile/")
  }
  getAllUsersOfProject(projectId:any){
    return this.http.get(this.baseUrl+`project/${projectId}/user`)

  }
  createTask(data:any){
    return this.http.post(this.baseUrl+"task/",data);
  }

  createTodo(todo:any){
    return this.http.post(this.baseUrl+"todo/",todo);
  }
  getAllUsersOfTrack(trackId:any): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+`track/${trackId}/user`)

  }
}

