import { Component } from '@angular/core';
import { sideNavSlideTranition } from './animation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [sideNavSlideTranition]
})
export class AppComponent  {
  showContainer = true;
  showFullSidenav = false;
  justTheComponent = false;
  tabsPlacement = 'start';

  placementToggle(change: any) {
    change.checked === true ? this.tabsPlacement = 'start' : this.tabsPlacement = 'end';
  }

  onContentVisibilityChange(change: any) {
    console.log(change);
  }
}
