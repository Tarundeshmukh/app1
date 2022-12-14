import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpResponse } from '@angular/common/http'

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  isOpen=false
  subjects:any[]=[]

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  user = {
    name:"Tarun",
    age:24,
    gender:"Male",
    dob:new Date()
  }
  users=[];

  deleteRow(user, index){
    const observable = this.userService.deleteUser(user);
    observable.subscribe((response:any)=>{
      console.log(response);
      this.users.splice(index, 1)
    })
  }

  save(){
    this.user.dob= new Date(this.user.dob)
    const observable =  this.userService.createUser(this.user)
    observable.subscribe((response:any) => {
      console.log(response);
      this.users.push(response)
    },
    function(error){
      alert("something went wrong please Try Again!")
    })
    console.log("Hello user!");
    console.log(this.user.name);
    
  }
}
