import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-widget-area',
  templateUrl: './content-widget-area.component.html',
  styleUrls: ['./content-widget-area.component.scss']
})
export class ContentWidgetAreaComponent implements OnInit {
    @Input() image: String;

  constructor() { }

  ngOnInit(): void {
  }

}
