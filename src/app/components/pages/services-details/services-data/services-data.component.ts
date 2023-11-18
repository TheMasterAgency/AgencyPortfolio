import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-data',
  templateUrl: './services-data.component.html',
  styleUrls: ['./services-data.component.scss']
})
export class ServicesDataComponent implements OnInit {
    servicesCardsContent: any = [{
        title: 'Data Mining',
        content: 'Our Data Mining service uncovers hidden patterns within raw data, revealing valuable insights that drive informed decision-making. We provide you with a competitive advantage in understanding your industry\'s dynamics.',
    }, {
        title: 'Predictive Modeling',
        content: 'Beyond historical analysis, our Predictive Modeling service employs state-of-the-art machine learning models to foresee future outcomes, enabling your organization to proactively address challenges and confidently seize emerging opportunities.',
    }, {
        title: 'Data Visualization',
        content: 'Transforming complex data into compelling visual stories is the essence of our Data Visualization service. We create informative visualizations and interactive dashboards for data-driven decision-making.',
    }, {
        title: 'NLP & Computer Vision',
        content: 'Our NLP Analytics & Computer Vision service extracts insights from unstructured data (text, images, and videos) using advanced techniques, enabling more informed decision-making.',
    },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
