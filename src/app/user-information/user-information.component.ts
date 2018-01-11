import { Component, OnInit } from '@angular/core';
import { AppDataManagementService} from '../app-data-management.service';
import { RequestsService } from '../requests.service';

import { IUser, IUserDetails } from '../interfaces/IUser';
import { IRepository } from '../interfaces/IRepository';

@Component({
  selector: 'user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  constructor(
    private RequestsService: RequestsService,
    private AppDataManagementService: AppDataManagementService
  ) { }

  currentUser: IUserDetails;
  currentUserRepositories: IRepository[];

  ngOnInit() {
    this.AppDataManagementService.changeUser.subscribe((user: IUser) => {
      Promise.all([this.RequestsService.getUser(user.login), this.RequestsService.getUserPepos(user.repos_url)])
        .then((res: Array<any>) => {
          this.currentUser = res[0];
          this.currentUserRepositories = res[1];
          return res;
        })
        .catch((err) => {
          console.log(err);
          return err;
        })
    });
  }

  public showReposInfo = (repos: IRepository) => {
    this.AppDataManagementService.toggleActiveRepos(repos);
    this.AppDataManagementService.toggleComponent('REPOSITORY_INFORMATION');
  }

}
