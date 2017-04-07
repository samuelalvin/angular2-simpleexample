import { IUser } from "../interface/user";
import { mockUsers } from "../mockData/user";

import { Component } from "@angular/core";

@Component({
  selector: "my-user-list",
  templateUrl: "/app/userList/user-list.html"
})

export class UserListComponent {
    private userList: IUser[]; 
    
    constructor() {
      this.userList = mockUsers; 
    }
}
