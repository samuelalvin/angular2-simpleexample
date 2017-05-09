import { IUser } from "../interface/user";
import { mockUsers } from "../mockData/user";

import { Component, AfterViewChecked } from "@angular/core";

@Component({
  selector: "my-user-list",
  templateUrl: "/app/userList/user-list.html"
})

export class UserListComponent implements AfterViewChecked {
    private userList: IUser[] = []; 
    private startTime = 0;
    private endTime = 0;

    constructor() { }

    ngAfterViewChecked() {
        this.endTime = performance.now();
        let timeSpent = this.endTime - this.startTime;
        console.debug(timeSpent + "ms.");
    }

    addUsers() {
        this.startTime = performance.now();
        this.userList = mockUsers;
    }

    clearUsers() {
        this.startTime = performance.now();
        this.userList = [];
    }
}
