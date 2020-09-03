import { Component, OnInit } from '@angular/core';
import { SearchService } from '../profile-service/search.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  repos: any;
  userName: any = 'ruthjomo'

  constructor(private profileService:SearchService) {

   }

   findProfile(){
    this.profileService.updateProfile(this.userName);

    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
    this.profile= profile      
    });

    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
    this.repos= repos;      
    
    })
  }

  ngOnInit(){
    this.findProfile()
  }

}