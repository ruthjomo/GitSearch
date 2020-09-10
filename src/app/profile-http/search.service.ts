import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  userName: string;
  repoName: string;
  clientId: string = "c604f8455e4d468ff329";
  clientSecret: string = "eef14ee9adb595d4d244aee1b9e98cc1b02e16f4";
  apikey: string = 'a10dd63b7121825e128bec2ead77a7dd56657c09'

  constructor(private http: HttpClient) {
    console.log('service is ready');

   }

   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }
  updateProfile(userName:string){
    this.userName =userName
  }
  UpdateRepo(repoName:string) {
    this.repoName = repoName;
  }

}