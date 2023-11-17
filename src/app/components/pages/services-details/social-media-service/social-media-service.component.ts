import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-service',
  templateUrl: './social-media-service.component.html',
  styleUrls: ['./social-media-service.component.scss']
})
export class SocialMediaServiceComponent implements OnInit {

    servicesCardsContent: any = [{
        title: 'Social Media Strategy',
        content: 'Crafting a tailored social media strategy is at the heart of what we do. We work closely with our clients to understand their goals, target audience, and industry nuances, ensuring every post serves a purpose.',
    },{
        title: 'Content Creation',
        content: 'Our team of creative minds develops compelling and shareable content that resonates with your audience. From eye-catching visuals to compelling copy, we have got your content needs covered.',
    },{
        title: 'Community Management',
        content: 'Building a thriving online community is key to social media success. We engage with your audience, respond to comments, and foster meaningful connections that strengthen your brand presence.',
    },{
        title: 'Analytics and Reporting',
        content: 'Numbers tell a story, and we ensure you have access to the right ones. Our analytics and reporting services provide valuable insights into the performance of your social media campaigns, allowing for data-driven decisions.',
    },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
