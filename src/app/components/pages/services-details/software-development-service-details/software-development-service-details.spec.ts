import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopmentServiceDetails } from './software-development-service-details';

describe('ServiceDetailsLayoutComponent', () => {
  let component: SoftwareDevelopmentServiceDetails;
  let fixture: ComponentFixture<SoftwareDevelopmentServiceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareDevelopmentServiceDetails ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDevelopmentServiceDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
