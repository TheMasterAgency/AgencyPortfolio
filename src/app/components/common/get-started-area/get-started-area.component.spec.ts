import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedAreaComponent } from './get-started-area.component';

describe('GetStartedAreaComponent', () => {
  let component: GetStartedAreaComponent;
  let fixture: ComponentFixture<GetStartedAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStartedAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
