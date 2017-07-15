import { Component } from '@angular/core';

class Email_object {
  email: string;
  importance: boolean;
  subject: string;
  comment: string;
  constructor(
    emailE: string,
    importanceE: boolean,
    subjectE: string,
    commentE: string) {
      this.email = emailE;
      this.importance = importanceE;
      this.subject = subjectE;
      this.comment = commentE;
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Dojo Mail';



  array_emails: any[] = [ new Email_object("BILL@gates.com", true,
    "New Windows", "Windows XI will launchin 2100"),
  new Email_object("ADA@lovelace.com", true, "Programming",
    "Enchantress of Numbers"),
  new Email_object("john@carmac.com", false, "Updated Algo",
    "New algorithm for shadow volumes")
  ];
}
