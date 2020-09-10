import { Component, OnInit } from '@angular/core';
import { SearchService } from '../profile-http/search.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  reposItems: any[];
  reposName: string='Githubsearch';

  constructor(private profileService:SearchService) {

   }

   findRepo() {
     this.profileService.UpdateRepo(this.reposName);
     this.profileService.searchrepos().subscribe(repo => {

      this.reposItems = repo['items'];
      console.log(this.reposItems);
     })
   }

  ngOnInit() {
    this.findRepo()
  }

}