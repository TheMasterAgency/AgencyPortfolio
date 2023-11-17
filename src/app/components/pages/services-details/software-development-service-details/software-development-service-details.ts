import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-development-service-details',
  templateUrl: './software-development-service-details.html',
  styleUrls: ['./software-development-service-details.scss']
})
export class SoftwareDevelopmentServiceDetails implements OnInit {
    servicesCardsContent: any = [{
        title: 'Real-time Keyword Data',
        content: 'Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet',
    },{
        title: 'Scalable Keyword Growth',
        content: 'Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet',
    },{
        title: 'ROI Obsessed Keywords',
        content: 'Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet',
    },{
        title: 'Total Keyword Growth Visibility',
        content: 'Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet',
    },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
