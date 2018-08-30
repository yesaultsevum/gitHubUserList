import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestsService } from '../_services/requests.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IUserDetails } from '../_interfaces/IUser';
import { IRepository } from '../_interfaces/IRepository';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit, OnDestroy {

  constructor(
    private requestsService: RequestsService,
    private activateRoute: ActivatedRoute
  ) { }

  userFullInfo: IUserDetails;
  userRepositories: IRepository[];
  private subscription: Subscription = new Subscription();

  ngOnInit() {

    this.subscription.add(this.requestsService.getUser(this.activateRoute.snapshot.params['login'])
      .map((user: IUserDetails) => {
        this.userFullInfo = user;
        return user;
      })
      .mergeMap((user) => this.requestsService.getUserPepos(user.repos_url))
      .subscribe(
        (res: IRepository[]) => {
          this.userRepositories = res;
          return res;
        },
        (err) => { console.log(err.message); }
      )
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
