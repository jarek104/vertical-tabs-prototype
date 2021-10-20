import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  @ContentChild(TemplateRef, {static: true}) template;
  state = { xFromComponent: 0, yFromComponent: 0 }

  handleMouseMove(event) {
    this.state = {
      xFromComponent: event.clientX,
      yFromComponent: event.clientY
    }
  }

  constructor() { }

  ngOnInit() {
    console.log(this.template)
  }

}