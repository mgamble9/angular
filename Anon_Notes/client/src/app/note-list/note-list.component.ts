import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from "./../note"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  // note_list: Array<Note>
  @Input() note_list;

  // constructor(private user_service: UserService, private router: Router) { }
  constructor() { }

  ngOnInit() {

   }

}
