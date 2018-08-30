import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {trigger, transition} from "@angular/animations";

import {slideLeft, slideRight} from "./_animations/router.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimations', [
      transition('userList => user', slideRight),
      transition('user => repos', slideRight),
      transition('repos => user', slideLeft),
      transition('user => userList', slideLeft),
    ])
  ]
})
export class AppComponent implements OnInit {

  route: string;

  constructor(
    private location: Location,
    private router: Router
  ) {
    router.events.subscribe(() => {
      this.route = location.path();
    });
  }

  ngOnInit() {}

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }

  back() {
    this.location.back();
  }


}
