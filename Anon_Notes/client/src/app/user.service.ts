import { Injectable } from '@angular/core';

import { Http } from "@angular/http" // added when ready to try sending data to server

import "rxjs"

import { Note } from "./note"


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  add_note(note: Note){ // returns a promise
    return this.http.post("/add_note", note)
        .map(data => data.json())
        .toPromise()
    }

  get_all_notes() {
    return this.http.get("/all_notes")
      .map(data => data.json())
      .toPromise()
  }

  // get_logged_in_user() {
  //   return this.http.get("/get_logged_in_user")
  //     .map(data => data.json())
  //     .toPromise()
  // }


}
