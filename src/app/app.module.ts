import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeoAgencyComponent } from './components/pages/seo-agency/seo-agency.component';
import { AiStartupComponent } from './components/pages/ai-startup/ai-startup.component';
import { MachineLearningComponent } from './components/pages/machine-learning/machine-learning.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NavbarStyleFourComponent } from './components/common/navbar-style-four/navbar-style-four.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { CaseStudyComponent } from './components/pages/case-study/case-study.component';
import { CaseStudyDetailsComponent } from './components/pages/case-study-details/case-study-details.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import {CrossedLineTitle} from './components/common/crossed-line-title/crossed-line-title';
import { ServicesDataComponent } from './components/pages/services-data/services-data.component';
import { SoftwareDevelopmentServiceDetails } from './components/pages/services-details/software-development-service-details/software-development-service-details';
import { ServicesTableComponent } from './components/pages/services-details/components/services-table/services-table.component';
import { ContentCardComponent } from './components/common/content-card/content-card.component';
import { ContentWidgetAreaComponent } from './components/common/content-widget-area/content-widget-area.component';
import { GetStartedAreaComponent } from './components/common/get-started-area/get-started-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SeoAgencyComponent,
    AiStartupComponent,
    MachineLearningComponent,
    PreloaderComponent,
    NavbarStyleOneComponent,
    FooterStyleOneComponent,
    NavbarStyleTwoComponent,
    FooterStyleTwoComponent,
    NavbarStyleThreeComponent,
    AboutComponent,
    NavbarStyleFourComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    TestimonialsComponent,
    CaseStudyComponent,
    CaseStudyDetailsComponent,
    ErrorComponent,
    SignInComponent,
    SignUpComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ComingSoonComponent,
    ServicesComponent,
    BlogDetailsComponent,
    BlogComponent,
    ContactComponent,
      CrossedLineTitle,
      ServicesDataComponent,
      SoftwareDevelopmentServiceDetails,
      ServicesTableComponent,
      ContentCardComponent,
      ContentWidgetAreaComponent,
      GetStartedAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
