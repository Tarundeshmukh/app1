import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  user = {
    name:"Tarun",
    age:24,
    gender:"Male"
  }

  save(){

    const observable =  this.userService.createUser(this.user)
    observable.subscribe(response => {
      console.log(response);
      
    })
    console.log("Hello user!");
    console.log(this.user.name);
    
  }
}
