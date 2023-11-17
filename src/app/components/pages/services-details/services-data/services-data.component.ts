import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-data',
  templateUrl: './services-data.component.html',
  styleUrls: ['./services-data.component.scss']
})
export class ServicesDataComponent implements OnInit {
    servicesCardsContent: any = [{
        title: 'Data Mining',
        content: 'Uncovering hidden patterns and extracting valuable insights from raw data.',
    }, {
        title: 'Predictive Modeling',
        content: 'Developing machine learning models to anticipate future outcomes, aiding in informed decision-making.',
    }, {
        title: 'Data Visualization',
        content: 'Creation of informative data visualizations and interactive dashboards, breathing life into data representations.',
    }, {
        title: 'NLP Analytics & Computer Vision',
        content: 'Utilizing Natural Language Processing (NLP) and Computer Vision techniques to derive insights from unstructured data.',
    },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
