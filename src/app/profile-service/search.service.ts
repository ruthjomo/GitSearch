import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  userName: string;
  repoName: string;
  clientId: string = "9a67142bcc620287a7cf";
  clientSecret: string = "90b504378b551c01458c58629dbe9a041d02c8f1";
  apikey: string = 'f3bed2706dfe69705334dc104eb08f4c6c8d2c82'

  constructor(private http: HttpClient) {
    console.log('service is now ready');

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