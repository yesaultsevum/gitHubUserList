import { Component, OnInit } from '@angular/core';
import { AppDataManagementService} from '../app-data-management.service';
import { RequestsService } from '../requests.service';

import { IRepository } from '../interfaces/IRepository';

@Component({
  selector: 'repository-information',
  templateUrl: './repository-information.component.html',
  styleUrls: ['./repository-information.component.css']
})
export class RepositoryInformationComponent implements OnInit {

  constructor(
    private RequestsService: RequestsService,
    private AppDataManagementService: AppDataManagementService
  ) { }

  selectedRepos: IRepository;
  selectedReposBranches: Array<Object>;
  selectedReposCommits: Array<Object>;

  ngOnInit() {
    this.AppDataManagementService.changeRepos.subscribe((repos: IRepository) => {

      let branchesUrl = repos.branches_url.substring(0, repos.branches_url.indexOf('{'));
      let commitsUrl = repos.commits_url.substring(0, repos.commits_url.indexOf('{'));
      this.selectedRepos = repos;
      Promise.all([this.RequestsService.gerReposBranches(branchesUrl), this.RequestsService.gerReposCommits(commitsUrl)])
        .then((res: Array<any>) => {
          this.selectedReposBranches = res[0];
          this.selectedReposCommits = res[1];
          return res;
        })
        .catch((err) => {
          console.log(err);
          return err;
        })
    });
  }

}
