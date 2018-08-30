import {trigger, animate, style, transition, query, group} from '@angular/animations';

export const slideLeft = [
  query(':leave', style({ transform: 'translate3d(0%,0,0)' }), {optional:true}),
  query(':enter', style({ transform: 'translate3d(-100%,0,0)' }), {optional:true}),

  group([
    query(':leave', group([
      animate('3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(100%,0,0)' })), // y: '-100%'
    ]), {optional:true}),
    query(':enter', group([
      animate('3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
    ]), {optional:true})
  ])
];

export const slideRight = [
  query(':leave', style({ transform: 'translate3d(0%,0,0)'}),  {optional:true}),
  query(':enter', style({ transform: 'translate3d(100%,0,0)'}), {optional:true}),

  group([
    query(':leave', group([
      animate('3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(-100%,0,0)' })), // y: '-100%'
    ]), {optional:true}),
    query(':enter', group([
      animate('3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
    ]), {optional:true})
  ])
];

export const slideToLeftAnimation =
  trigger('slideToLeftAnimation', [

    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('.3s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),

    transition(':leave', [
      style({
        transform: 'translateX(0%)'
      }),
      animate('.3s ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
  ]);

export const slideToRightAnimation =
  trigger('slideToRightAnimation', [

    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('.3s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),

    transition(':leave', [
      style({
        transform: 'translateX(0%)'
      }),
      animate('.3s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
    ]),
  ]);
