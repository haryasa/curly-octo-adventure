import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-org-chart-page',
  templateUrl: './org-chart-page.component.html',
  styleUrls: ['./org-chart-page.component.scss']
})
export class OrgChartPageComponent implements OnInit {
  chartType: string;
  intervalId: number;
  prevIndex = 0;
  data: any[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => this.chartType = data?.chartType);
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    ).then((data) => {
      this.data = data;
    });
  }

  toggleHighlightInterval(): void {
    if (this.intervalId) {
      this.stopHighlightInterval();
    } else {
      this.startHighlightInterval();
    }
  }

  private startHighlightInterval(): void {
    this.highlightRandom();
    this.intervalId = setInterval(() => {
      this.highlightRandom();
    }, 2000);
  }

  private highlightRandom(): void {
    const data = [...this.data];
    data[this.prevIndex]._highlighted = false;
    const index = Math.floor(Math.random() * 30);
    this.prevIndex = index;
    data[index]._centered = true;
    data[index]._expanded = true;
    data[index]._highlighted = true;
    this.data = [...data];
  }

  private stopHighlightInterval(): void {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

}
