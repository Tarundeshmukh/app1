import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    name:"Tarun",
    age:24
  }

  save(){
    console.log("Hello user!");
    console.log(this.user.name);
    
  }
}
