import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaServiceComponent } from './social-media-service.component';

describe('SocialMediaServiceComponent', () => {
  let component: SocialMediaServiceComponent;
  let fixture: ComponentFixture<SocialMediaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
