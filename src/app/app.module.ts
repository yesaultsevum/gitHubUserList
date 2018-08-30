import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { RepositoryInformationComponent } from './repository-information/repository-information.component';

import { RequestsService } from './_services/requests.service';

const appRoutes: Routes = [
  {
    path: 'userList',
    component: UserListComponent,
    data: {
      animation: {
        value: 'userList'
      }
    }
  },
  {
    path: 'user/:login',
    component: UserInformationComponent,
    data: {
      animation: {
        value: 'user'
      }
    }
  },
  {
    path: 'user/:login/repos/:reposName',
    component: RepositoryInformationComponent,
    data: {
      animation: {
        value: 'repos'
      }
    }
  },
  { path: '**',   redirectTo: 'userList' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserInformationComponent,
    RepositoryInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
