import { trigger, animate, style, group, query, transition, state } from '@angular/animations';

export const sideNavSlideTranition = trigger('sidenavAnimationSlide', [
  state('true', style({
    'width': '250px',
  })),
  state('false', style({
    'width': '66px'
  })),
  transition('false <=> true', animate('200ms ease'))
]);
