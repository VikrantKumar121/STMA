import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userName:any
  //baseUrl="http://468f-2409-4053-603-d437-9d87-b1f1-c93e-5aa.ngrok.io/"
  baseUrl=environment.baseUrl
  constructor(private http: HttpClient) { }

  login(userdata:any) {
  
   return this.http.post(this.baseUrl+"user/token/",userdata);


  }
  getAllProjects(){
    return this.http.get(this.baseUrl+"userProject/");
  }
  getAllTracks(){
    return this.http.get(this.baseUrl+"userTrack/");
  }
  getAllTasksOfProject(projectId:any){
    return this.http.get(this.baseUrl+`project/${projectId}/task/`);
  }
  getAllTasksOfTrack(trackId:any){
    return this.http.get(this.baseUrl+`track/${trackId}/todo/`);
    
  }
//discussion
  // getDiscussion(){
  //   return of(this.con)
  // }

  //  addDiscussion(na:any){
  //    this.con=[...this.con,{
  //      name:na,
  //      email:"abce@gamil"

  //    }]
  //  }

   getDiscussion(trackId:any){
     return this.http.get(this.baseUrl+`trackDiscussion/${trackId}`)
   }
   
   createDiscussion(discussion:any){
      console.log("crestae disc",discussion);
      const url=this.baseUrl+"discussion/";
      console.log("url",url);
     return this.http.post(url,discussion);
  
   }
   createComment(comment:any){
    return this.http.post(this.baseUrl+"comments/",comment);
   }
   getTodoDetails(trackDetailsId:any){
    return this.http.get(this.baseUrl+`todo/${trackDetailsId}`)
  }
  getAllUsersOfTrack(trackId:any){
    return this.http.get(this.baseUrl+`track/${trackId}/user`)

  }
  getAllInternsOfProject(projectId:any){
    return this.http.get(this.baseUrl+`project/${projectId}/intern`)

  }
  getAllUsersOfProject(projectId:any){
    return this.http.get(this.baseUrl+`project/${projectId}/user`)

  }
  changeStatusOfProjectTask(taskId:any,status:any){
    return this.http.patch(this.baseUrl+`task/${taskId}/changeStatus/`,status);
  }
  getProjectDiscussion(projectId:any){
    return this.http.get(this.baseUrl+`project/${projectId}/discussion/`)
  }
  
  createProjectDiscussion(discussion:any){
     console.log("crestae disc",discussion);
     const url=this.baseUrl+"projectDiscussion/";
     console.log("url",url);
    return this.http.post(url,discussion);
 
  }
  createProjectComment(comment:any){
    return this.http.post(this.baseUrl+"discussionComments/",comment);
   }
   getProfile(){
    return this.http.get(this.baseUrl+"user/profile/");
   }
   createLike(like:any){
     return this.http.post(this.baseUrl+"likeDiscussion/",like);
   }
   getAllUsers(){
    return this.http.get(this.baseUrl+'user/allUser/');
  }
  addProjectMember(members:any){
    return this.http.post(this.baseUrl+"bulkProjectMember/",members);
  }
  addTrackMember(members:any){
    return this.http.post(this.baseUrl+"bulkTrackMember/",members);
  }
  deleteTask(taskId:any){
    return this.http.delete(this.baseUrl+`task/${taskId}`);
  }
  editTask(task:any,taskId:any){
    return this.http.put(this.baseUrl+`task/${taskId}`,task);
  }
  getTask(taskId:any){
    return this.http.get(this.baseUrl+`task/${taskId}`)
  }
  editTodo(todo:any,todoId:any){
    return this.http.put(this.baseUrl+`todo/${todoId}`,todo);
  }
  getTodo(todoId:any){
    return this.http.get(this.baseUrl+`todo/${todoId}`);
  }
}
