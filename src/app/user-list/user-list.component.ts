import { Component, OnInit } from '@angular/core';

import { AppDataManagementService} from '../app-data-management.service';
import { RequestsService } from '../requests.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  constructor(
    private AppDataManagementService: AppDataManagementService,
    private RequestsService: RequestsService
  ) {

  }

  public showUserDetails = (user) => {
    this.AppDataManagementService.toggleUser(user);
    this.AppDataManagementService.toggleComponent('USER_DETAILS');
  };

  userList: IUser[];

  ngOnInit() {
    this.RequestsService.getUsers()
      .then((res : IUser[]) => {
        this.userList = res;
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
