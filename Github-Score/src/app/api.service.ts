import { Injectable } from '@angular/core';

// required to run HTTP requests
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class ApiService {

  constructor(private _http: Http) { } //edited constructor to add Http

  // function that gets json data for username from API
  retrieveGitHubUser(username) {
    if (username) {
      return this._http.get(`https://api.github.com/users/${username}`)
      .map( data => data.json() )
      .toPromise();
    }
  }
}
