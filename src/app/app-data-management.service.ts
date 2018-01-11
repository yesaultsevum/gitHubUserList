import { Injectable, Output, EventEmitter } from '@angular/core';
import { IUser } from './interfaces/IUser';
import { IRepository } from './interfaces/IRepository';

@Injectable()
export class AppDataManagementService {

  constructor() {}

  activeComponent: string;
  activeUser: IUser;
  activeRepos: IRepository;

  @Output() changeComponent: EventEmitter<string> = new EventEmitter();
  @Output() changeUser: EventEmitter<IUser> = new EventEmitter();
  @Output() changeRepos: EventEmitter<IRepository> = new EventEmitter();

  toggleComponent(component: string) {
    this.activeComponent = component;
    this.changeComponent.emit(this.activeComponent);
  }

  toggleUser(user: IUser) {
    this.activeUser = user;
    this.changeUser.emit(this.activeUser);
  }

  toggleActiveRepos(repos: IRepository) {
    this.activeRepos = repos;
    this.changeRepos.emit(this.activeRepos)
  }

}
