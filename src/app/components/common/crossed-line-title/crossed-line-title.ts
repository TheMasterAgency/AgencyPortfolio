import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'crossed-line-title',
  templateUrl: './crossed-line-title.html',
  styleUrls: ['./crossed-line-title.scss']
})
export class CrossedLineTitle {

    @Input() titleTinyPart: string;
    @Input() titleBoldPart: string;

}
