import { Component, OnInit, ViewChild, ContentChild, TemplateRef, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements AfterViewInit {
  @ViewChild(TemplateRef, {static: false}) template;

  state = { x: 0, y: 0 };
  constructor() {
    console.log('hi')
   }

  handleMouseMove(event) {
    this.state = {
      x: event.clientX,
      y: event.clientY
    }
  }

  ngAfterViewInit() {
    console.log('wenis', this.template)
  }

}