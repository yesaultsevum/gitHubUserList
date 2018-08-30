import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


import { RequestsService } from '../_services/requests.service';
import { IUser } from '../_interfaces/IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit, OnDestroy {

  constructor(
    private requestsService: RequestsService,
  ) { }

  userList: IUser[];
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription.add(this.requestsService.getUsers()
      .subscribe(
        (result: IUser[]) => { this.userList = result; },
        err => { console.log(err.message); }
      ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
