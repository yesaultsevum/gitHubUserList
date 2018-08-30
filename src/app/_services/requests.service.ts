import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Constants } from '../constants';

@Injectable()
export class RequestsService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get(Constants.GITHUB_URL);
  }

  getUser(userLogin: string) {
    return this.http.get(`${Constants.GITHUB_URL}/${userLogin}`);
  }

  getUserPepos(reposUrl: string) {
    return this.http.get(reposUrl);
  }

  getReposBranches(branchesUrl: string) {
    return this.http.get(branchesUrl);
  }

  getReposCommits(commitsUrl: string) {
    return this.http.get(commitsUrl);
  }

}
