import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartPageComponent } from './org-chart-page.component';

describe('OrgChartPageComponent', () => {
  let component: OrgChartPageComponent;
  let fixture: ComponentFixture<OrgChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgChartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
