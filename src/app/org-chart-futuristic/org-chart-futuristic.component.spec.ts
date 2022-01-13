import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartFuturisticComponent } from './org-chart-futuristic.component';

describe('OrgChartFuturisticComponent', () => {
  let component: OrgChartFuturisticComponent;
  let fixture: ComponentFixture<OrgChartFuturisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgChartFuturisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartFuturisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
