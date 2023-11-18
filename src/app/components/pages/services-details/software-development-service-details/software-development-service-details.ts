import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-development-service-details',
  templateUrl: './software-development-service-details.html',
  styleUrls: ['./software-development-service-details.scss']
})
export class SoftwareDevelopmentServiceDetails implements OnInit {
    servicesCardsContent: any = [{
        title: 'Digital Transformation services',
        content: 'Safeguard the future success of your company and stay competitive in the global market',
    },{
        title: 'Web and mobile development',
        content: 'Deliver maximum value to your business with stunning custom web or mobile software',
    },{
        title: 'Cloud-based app development',
        content: 'Effortlessly speed up development, improve final product quality, and increase productivity',
    },{
        title: 'Improved business processes\n',
        content: 'Boost employee productivity by providing effective management tools for your business operations',
    },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
