import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constants } from './constants';

@Injectable()
export class RequestsService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get(Constants.GITHUB_URL).toPromise()
  }

  getUser(userLogin: string) {
    return this.http.get(`${Constants.GITHUB_URL}/${userLogin}`).toPromise()
  }

  getUserPepos(reposUrl: string) {
    return this.http.get(reposUrl).toPromise()
  }

  gerReposBranches(branchesUrl: string) {
    return this.http.get(branchesUrl).toPromise()
  }

  gerReposCommits(commitsUrl: string) {
    return this.http.get(commitsUrl).toPromise()
  }

}
