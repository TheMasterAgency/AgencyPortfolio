import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWidgetAreaComponent } from './content-widget-area.component';

describe('ContentWidgetAreaComponent', () => {
  let component: ContentWidgetAreaComponent;
  let fixture: ComponentFixture<ContentWidgetAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWidgetAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWidgetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
