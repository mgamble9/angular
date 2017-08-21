import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user"
import { Appt } from "./../appt"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-new-appt',
  templateUrl: './new-appt.component.html',
  styleUrls: ['./new-appt.component.css']
})
export class NewApptComponent implements OnInit {

  current_user: User
  new_appt: Appt
  appt_time:String
  appt_date: String
  appt_list: Array<Appt>
  today = new Date()
  tzoffset: String
  min_time: String = "08:00"
  max_time: String = "17:00"
  min_date: String
  dd; mm; yyyy: Number

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.new_appt= new Appt
    // console.log(this.today)
    // console.log(this.new_appt)

    this.dd = this.today.getDate();
    this.mm = this.today.getMonth()+1; //January is 0!
    this.yyyy = this.today.getFullYear();
    if(this.dd<10){
        this.dd='0'+this.dd
    }
    if(this.mm<10){
        this.mm='0'+this.mm
    }
    this.min_date = this.yyyy+'-'+this.mm+'-'+this.dd
    this.tzoffset = "-0" + this.today.getTimezoneOffset()/60 + ":00"
    console.log(this.tzoffset)
    console.log(this.min_date)

    this.user_service.get_logged_in_user()
      .then(data => {
        if(data) {
          this.current_user = data
          console.log(this.current_user)
        } else {
          this.router.navigate(["/"])
        }
      })
      .catch(err => console.log(err))

    this.user_service.get_appt_list()
      .then(data => {
        if(data) {
          this.appt_list = data
          // console.log(this.appt_list)
        } else {
            // this.router.navigate(["/"])
          console.log("failed to get appt list")
        }
      })
      .catch(err => console.log(err))

  }

add_appt() {
    if (this.appt_time < "08:00") {
      console.log("appointments must be later then 8:00AM")
      return this.router.navigate(["/#new-appt"])
    }
    if (this.appt_time > "17:00") {
      console.log("appointments must be before then 5:00PM")
      return this.router.navigate(["/#new-appt"])
    }
    this.new_appt.patient = this.current_user.name
    let count = 0
    if (this.appt_list.length >0) {
      for (let x = 0; x<this.appt_list.length; x++) {
        let test_date_string = this.appt_list[x].date.slice(0,10)
        if (this.appt_date == test_date_string) {
          count += 1
        }
        if (count == 3) {
          console.log("3 appointments set already for that day")
          return this.router.navigate(["/#new-appt"])
        }
      }
    }
      console.log("sending new appt to server")
      this.new_appt.date = this.appt_date + "T" + this.appt_time + ":00" + this.tzoffset
      console.log(this.new_appt)
      this.user_service.add_appt(this.new_appt)
        .then((ok) => {
            console.log(ok)
            console.log("new appt uploaded to server")
            return this.router.navigate(["/"])
          })
        .catch(err => console.log(err))

  }
}
