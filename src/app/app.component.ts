import { Component, OnInit } from '@angular/core';
import { AppDataManagementService } from './app-data-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private AppDataManagementService: AppDataManagementService
  ) {
    this.activeClass = 'USER_LIST';
  }

  activeClass: string;

  ngOnInit() {
    this.AppDataManagementService.changeComponent.subscribe((activeComponent: string) => {
      this.activeClass = activeComponent;
    });
  }

  back = () => {
    switch(this.activeClass){
      case 'USER_DETAILS':
        this.activeClass = 'USER_LIST';
        break;
      case 'REPOSITORY_INFORMATION':
        this.activeClass = 'USER_DETAILS';
        break;
      default:
        this.activeClass = 'USER_LIST';
        break;
    }

  }


}
