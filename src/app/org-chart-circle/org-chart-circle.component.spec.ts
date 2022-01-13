import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartCircleComponent } from './org-chart-circle.component';

describe('OrgChartCircleComponent', () => {
  let component: OrgChartCircleComponent;
  let fixture: ComponentFixture<OrgChartCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgChartCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
