import { Component } from '@angular/core';
import { ApiService } from './api.service'; //import service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userExists = null;
  score = null;
  username = null;
  promise;

  constructor(private _apiService: ApiService){} // Dependency Injection

  calculateScore() {
    this.promise = this._apiService.retrieveGitHubUser(this.username)
    if (this.promise) {
      this.promise.then( (user) => {
        if (user.id) {
          this.userExists = true;
          this.score = user.public_repos + user.followers;
        } else {
          this.userExists = false;
          this.score = null;
        }
        this.username = null;
        console.log(this.username)
      })
      .catch( (err) => {
        this.userExists = false;
      });
    } else {
      this.userExists = false;
    }
  }


}
