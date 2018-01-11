import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { RepositoryInformationComponent } from './repository-information/repository-information.component';

import { AppDataManagementService } from './app-data-management.service';
import { RequestsService } from './requests.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserInformationComponent,
    RepositoryInformationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppDataManagementService,
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
