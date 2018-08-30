import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestsService } from '../_services/requests.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-repository-information',
  templateUrl: './repository-information.component.html',
  styleUrls: ['./repository-information.component.css']
})
export class RepositoryInformationComponent implements OnInit, OnDestroy {

  constructor(
    private requestsService: RequestsService,
    private activateRoute: ActivatedRoute,
  ) {
    this.login = this.activateRoute.snapshot.params['login'];
    this.reposName = this.activateRoute.snapshot.params['reposName'];
  }

  login: string;
  reposName: string;
  branches: Array<Object>;
  commits: Array<Object>;

  private subscription: Subscription = new Subscription();

  ngOnInit() {
    const url = `https://api.github.com/repos/${this.login}/${this.reposName}/`;
    this.subscription.add(
        Observable.forkJoin([
          this.requestsService.getReposBranches(url + 'branches'),
          this.requestsService.getReposCommits(url + 'commits')
        ])
          .subscribe(
            (res: Array<any>)  => {
              this.branches = res[0];
              this.commits = res[1];
              return res;
            },
            err => { console.log(err.message); }
          )
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
