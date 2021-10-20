import { Component, OnInit, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-templates2',
  templateUrl: './templates2.component.html',
  styleUrls: ['./templates2.component.css']
})
export class Templates2Component implements OnInit {
  @Input() headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}