import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from "./note"
import { UserService } from "./user.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  new_note = new Note
  note_list: Array<Note>
  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.user_service.get_all_notes()
      .then(data => {
        this.note_list = data
        console.log(this.note_list)
      })
      .catch(err => console.log(err))
  }

  add_note() {
    console.log(this.new_note)
    this.user_service.add_note(this.new_note)
      .then(() => {
        console.log("dont need to go anywhere")
        this.user_service.get_all_notes()
          .then(data => {
            this.note_list = data
            console.log(this.note_list)
          })
          .catch(err => console.log(err))
        this.router.navigate(['/'])
      })
      .catch(err => console.log(err))
    this.new_note = new Note
  }
}
