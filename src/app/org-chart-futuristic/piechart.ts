import * as d3 from 'd3';

export class PieChart {
  getState: any;
  setState: any;

  // ================. BASE SETUP. ==============
  constructor() {
    const attrs = {
      id: 'ID' + Math.floor(Math.random() * 1000000),
      svgWidth: 400,
      svgHeight: 400,
      marginTop: 75,
      image: '',
      marginBottom: 75,
      marginRight: 105,
      marginLeft: 105,
      container: 'body',
      defaultFontSize: 12,
      percentCircleRadius: 14,
      labelMargin: 10,
      defaultTextFill: '#6F68A7',
      backCircleColor: '#EAF0FB',
      defaultFont: 'Helvetica',
      valueAccessor: (d) => d.value,
      round: (d, sum) => Math.round((d.data.value / sum) * 100),
      groupingText: `Count`,
      valueFormat: (d) => d3.format('.3s')(d),
      ctx: document.createElement('canvas').getContext('2d'),
      dimension: null,
      group: null,
      data: null,
      tooltip: (event, d) => {
        let items = d.data.items;
        if (!items) { items = [{ key: d.data.key, value: d.data.value }]; }
        return `
      <table style="font-size:12px">
<tr><th>Name</th><th>Value</th></tr>
        ${items
          .map(
            (t) =>
              `<tr><td style="padding-right:20px;">${t.key}</td><td>${t.value}</td></tr>`
          )
          .join('')}
      </table>
    `;
      },
      setData: (state) => {
        if (!state.group) { return state.data; }
        const dt = state.group.all();
        dt.sort((a, b) => (a.value > b.value ? -1 : 1));
        return dt;
      },
    };

    // Inner state props
    Object.assign(attrs, {
      calc: null,
      svg: null,
      chart: null,
      pie: null,
      arc: null,
      arcOuter: null,
    });

    this.getState = () => attrs;
    this.setState = (d) => Object.assign(attrs, d);
    Object.keys(attrs).forEach((key) => {
      // @ts-ignore
      this[key] = function(_): void {
        const str = `attrs['${key}'] = _`;
        if (!arguments.length) {
          // tslint:disable-next-line:no-eval
          return eval(`attrs['${key}'];`);
        }
        // tslint:disable-next-line:no-eval
        eval(str);
        return this;
      };
    });
    this.initializeEnterExitUpdatePattern();
  }

  initializeEnterExitUpdatePattern(): void {
    d3.selection.prototype.patternify = function(params): void {
      const container = this;
      const selector = params.selector;
      const elementTag = params.tag;
      const data = params.data || [selector];
      // Pattern in action
      let selection = container.selectAll('.' + selector).data(data, (d, i) => {
        if (typeof d === 'object') {
          if (d.id) {
            return d.id;
          }
        }
        return i;
      });
      selection.exit().remove();
      selection = selection.enter().append(elementTag).merge(selection);
      selection.attr('class', selector);
      return selection;
    };
  }

  // ================== RENDERING  ===================
  render(): PieChart {
    this.setDataProp();
    this.setDynamicContainer();
    this.calculateProperties();
    this.drawSvgAndWrappers();
    this.setLayouts();
    this.drawSlices();
    this.drawCenterTexts();
    this.attachEventHandlers();
    return this;
  }

  setDataProp(): void {
    const data = this.getData();
    this.setState({ data });
  }

  drawCenterTexts(): void {
    const {
      data,
      centerPoint,
      calc,
      defaultTextFill,
      valueFormat,
      centerText,
      groupingText,
      image,
      backCircleColor,
    } = this.getState();
    // @ts-ignore
    const sum = d3.sum(data, (d) => d.value);
    const fo = centerPoint
      .patternify({ tag: 'foreignObject', selector: 'center-for-text' })
      .attr('pointer-events', 'none')
      .attr('x', -calc.innerRadius)
      .attr('y', -calc.innerRadius)
      .attr('width', calc.innerRadius * 2)
      .attr('height', calc.innerRadius * 2);

    fo.patternify({ tag: 'xhtml:div', selector: 'for-center-div' })
      .html(`<div style="height:${
        calc.innerRadius * 2
      }px;display:flex;justify-content:center;align-items:center;text-align:center">
             <img height="${
        calc.innerRadius * 2 - 20
      }"  style="border:2px solid ${backCircleColor};border-radius:40px" width="${
        calc.innerRadius * 2 - 20
      }" src="${image}" />
</div>
          </div>`);
  }

  setLayouts(): void {
    const { calc } = this.getState();

    const pie = d3
      .pie()
      .value((d: any) => d.value)
      .sort(null);

    const arc = d3
      .arc()
      .innerRadius(calc.innerRadius)
      .outerRadius(calc.radius)
      .padAngle(0.02)
      .cornerRadius(1);

    const arcOuter = d3
      .arc()
      // @ts-ignore
      .innerRadius(arc.outerRadius()() + 2)
      // @ts-ignore
      .outerRadius(arc.outerRadius()() + 5);

    const arcLabel = d3
      .arc()
      // @ts-ignore
      .innerRadius(arcOuter.outerRadius()())
      // @ts-ignore
      .outerRadius(arcOuter.outerRadius()() + 30);

    this.setState({ pie, arc, arcOuter, arcLabel });
  }

  attachEventHandlers(): void {}

  // Calculate what size will text take when drew
  getTextWidth(text, { fontSize = 14, fontWeight = 400 } = {}): number {
    const { defaultFont, ctx } = this.getState();
    ctx.font = `${fontWeight || ''} ${fontSize}px ${defaultFont} `;
    const measurement = ctx.measureText(text);
    return measurement.width;
  }

  setDynamicContainer(): void {
    const attrs = this.getState();

    // Drawing containers
    const container = d3.select(attrs.container);
    const containerRect = container.node().getBoundingClientRect();
    // if (containerRect.width > 0) attrs.svgWidth = containerRect.width;
    this.setState({ container });
  }

  drawSvgAndWrappers(): void {
    const { tooltip, container, svgWidth, svgHeight, defaultFont, calc } =
      this.getState();

    // Draw SVG
    const svg = container
      .patternify({
        tag: 'svg',
        selector: 'svg-chart-container',
      })
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .attr('font-family', defaultFont);

    // Add container g element
    const chart = svg
      .patternify({
        tag: 'g',
        selector: 'chart',
      })
      .attr(
        'transform',
        'translate(' + calc.chartLeftMargin + ',' + calc.chartTopMargin + ')'
      );

    const centerPoint = chart
      .patternify({ tag: 'g', selector: 'center-point' })
      .attr(
        'transform',
        'translate(' + calc.chartWidth / 2 + ',' + calc.chartHeight / 2 + ')'
      );

    this.setState({ chart, svg, centerPoint });
  }

  calculateProperties(): void {
    const attrs = this.getState();

    // Calculated properties
    const calc = {
      id: 'ID' + Math.floor(Math.random() * 1000000), // id for event handlings,
      chartTopMargin: attrs.marginTop,
      chartLeftMargin: attrs.marginLeft,
      chartWidth: null,
      chartHeight: null,
      radius: null,
      innerRadius: null,
    };
    calc.chartWidth = attrs.svgWidth - attrs.marginRight - calc.chartLeftMargin;
    calc.chartHeight =
      attrs.svgHeight - attrs.marginBottom - calc.chartTopMargin;
    calc.radius = Math.min(calc.chartWidth, calc.chartHeight) / 2;
    calc.innerRadius = calc.radius * 0.7;
    if (calc.innerRadius < 100) { calc.innerRadius = calc.radius * 0.8; }

    this.setState({ calc });
  }

  // =================== API IMPLEMENTATION ===============
  getData(): any {
    const state = this.getState();
    const { setData } = state;
    return setData(state);
  }

  drawSlices(): void {
    const {
      round,
      labelMargin,
      defaultFontSize,
      centerPoint,
      pie,
      arc,
      arcOuter,
      backCircleColor,
      arcLabel,
      defaultTextFill,
      tip,
      percentCircleRadius,
    } = this.getState();
    const dataInitial = this.getData();
    const sum = d3.sum(dataInitial, (d: any) => d.value);
    const minAllowed = 0.04;
    let data = dataInitial.filter(
      (dataItem) => dataItem.value / sum >= minAllowed
    );
    const others = dataInitial.filter(
      (dataItem) => dataItem.value / sum < minAllowed
    );
    if (others.length > 1) {
      data.push({
        key: 'Others',
        items: others,
        value: d3.sum(others, (d: any) => d.value),
      });
    } else {
      data = dataInitial;
    }

    const pieData = pie(data);
    const right = pieData.filter((d) => this.isRightSide(d));
    const left = pieData.filter((d) => !this.isRightSide(d));
    pieData.forEach((d, i, arr) => {
      d.xOffset = 0;
      if ((i !== 0 && i !== arr.length - 1) || arr.length < 20) {
        d.yOffset = 0;
      } else {
        d.yOffset = -30;
      }
    });

    const process = (d, i, arr) => {
      if (i < 1) { return; }
      const prev = arr[i - 1];
      const curr = d;

      const yPrev = arcLabel.centroid(prev)[1] + prev.yOffset;
      const yCurr = arcLabel.centroid(curr)[1];
      console.log(yPrev, yCurr);
      if (this.isRightSide(curr) && yPrev + percentCircleRadius * 2 > yCurr) {
        console.log('is Righ Side');
        curr.yOffset = yPrev + percentCircleRadius * 2 - yCurr + 2;
      } else if (
        !this.isRightSide(curr) &&
        yPrev + percentCircleRadius * 2 > yCurr
      ) {
        curr.yOffset = yPrev + percentCircleRadius * 2 - yCurr + 2;
        if (arr.length > 4) {
          if (i < 4 + arr.length / 10) {
            // curr.xOffset = -10-arr.length/2*1;
          }
          if (arr.length > 9) {
            curr.xOffset = 0;
          }
        }

        console.log('is not Righ Side', this.isRightSide(curr));
      }
    };
    right.forEach(process);
    left.reverse().forEach(process);

    const that = this;
    centerPoint
      .patternify({
        tag: 'path',
        selector: 'pie-background',
        data: pie([{ value: 1 }]),
      })
      .attr('d', arcOuter)
      .attr('fill', backCircleColor);

    const pieG = centerPoint.patternify({
      tag: 'g',
      selector: 'pie-wrapper',
      data: pieData,
    });

    pieG
      .patternify({ tag: 'path', selector: 'pie-paths', data: (d) => [d] })
      .attr('d', arc)
      .attr('cursor', 'pointer')
      .attr('fill', (d) => that.getColor(d))
      .on('mouseenter.tooltip', (event, d) => {})
      .on('mouseleave.tooltip', (d) => {})
      .on('mouseenter.color', function(event, d): void {
        const color = d3.rgb(that.getColor(d)).darker(0.5);
        d3.select(this).attr('fill', color as any);
      })
      .on('mouseleave.color', function(event, d): void {
        d3.select(this).attr('fill', that.getColor(d));
      });

    pieG
      .patternify({
        tag: 'polyline',
        selector: 'pie-label-line',
        data: (d) => [d],
      })
      .attr('points', (d) => {
        let textWidth =
          this.getTextWidth(d.data.key || '', { fontSize: defaultFontSize }) +
          labelMargin;
        if (this.isRightSide(d)) {
          textWidth = -textWidth;
        }
        return `
    ${arc.centroid(d)[0]},
    ${arc.centroid(d)[1]}
    ${arcLabel.centroid(this.correct(d))[0] + d.xOffset},
    ${arcLabel.centroid(this.correct(d))[1] + d.yOffset}
    ${arcLabel.centroid(this.correct(d))[0] - textWidth + d.xOffset},
    ${arcLabel.centroid(this.correct(d))[1] + d.yOffset}
`;
      })
      .attr('stroke', defaultTextFill)
      .attr('fill', 'none')
      .attr('pointer-events', 'none')
      .style('opacity', this.getLabelOpacity);

    pieG
      .patternify({
        tag: 'circle',
        selector: 'pie-center-points',
        data: (d) => [d],
      })
      .attr('cx', (d) => arc.centroid(d)[0])
      .attr('cy', (d) => arc.centroid(d)[1])
      .style('opacity', this.getLabelOpacity)
      .attr('fill', '#FFFFFF')
      .attr('r', 2)
      .attr('pointer-events', 'none');

    pieG
      .patternify({ tag: 'text', selector: 'pie-texts', data: (d) => [d] })
      .text((d) => d.data.key)
      .attr('x', (d) => {
        let x = arcLabel.centroid(this.correct(d))[0];
        if (this.isRightSide(d)) { x += labelMargin - 5; }
        else { x -= labelMargin - 5; }
        return x + d.xOffset;
      })
      .attr('text-anchor', (d) => {
        if (this.isRightSide(d)) { return 'start'; }
        return 'end';
      })
      .attr('font-size', defaultFontSize)
      .attr('y', (d) => arcLabel.centroid(this.correct(d))[1] - 4 + d.yOffset)
      .attr('fill', defaultTextFill)
      .style('opacity', this.getLabelOpacity);

    pieG
      .patternify({
        tag: 'text',
        selector: 'pie-percent-texts',
        data: (d) => [d],
      })
      .text((d) => round(d, sum) + '%')
      .attr('alignment-baseline', 'middle')
      .attr('x', (d) => {
        let textWidth =
          this.getTextWidth(d.data.key || '', { fontSize: defaultFontSize }) +
          labelMargin +
          percentCircleRadius;
        if (this.isRightSide(d)) {
          textWidth = -textWidth;
        }
        return arcLabel.centroid(this.correct(d))[0] - textWidth + d.xOffset;
      })
      .attr('y', (d) => arcLabel.centroid(this.correct(d))[1] + d.yOffset)
      .attr('text-anchor', 'middle')
      .attr('font-size', 11)
      .attr('fill', defaultTextFill)
      .style('opacity', this.getLabelOpacity);

    pieG
      .patternify({
        tag: 'circle',
        selector: 'pie-percent-circle',
        data: (d) => [d],
      })
      .attr('stroke', defaultTextFill)
      .attr('r', percentCircleRadius)
      .style('opacity', this.getLabelOpacity)
      .attr('fill', 'none')
      .attr('cx', (d) => {
        let textWidth =
          this.getTextWidth(d.data.key || '', { fontSize: defaultFontSize }) +
          labelMargin +
          percentCircleRadius;
        if (this.isRightSide(d)) {
          textWidth = -textWidth;
        }
        return arcLabel.centroid(this.correct(d))[0] - textWidth + d.xOffset;
      })
      .attr(
        'cy',
        (d) => arcLabel.centroid(this.correct(d))[1] - 1.1 + d.yOffset
      );

    //  centroid = arcGenerator.centroid(d);
  }

  getLabelOpacity(pieItem): number {
    if (Math.abs(pieItem.yOffset) > 130) {
      return 0;
    }
    return 1;
  }
  getColor(d): any {
    if (!d.data) {
      // tslint:disable-next-line:no-debugger
      debugger;
    }
    return (
      d.data.color ||
      d3.schemeSet2[this.hashCode(d.data.key + '') % d3.schemeSet2.length]
    );
  }
  isRightSide(n): boolean {
    const d = this.correct(n);
    const midAngle = (d.startAngle + d.endAngle) / 2;
    return midAngle <= Math.PI;
  }

  correct(d): any {
    return Object.assign({}, d, {
      startAngle: d.startAngle,
      endAngle: d.endAngle,
    });
  }
  // Get hashcode from string
  hashCode(s): number {
    let h;
    for (let i = 0; i < s.length; i++) {
      // tslint:disable-next-line:no-bitwise
      h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }
  // ===================

  // Method which renders initial html elements
  _doRender(): PieChart {
    this._doRedraw();
    return this;
  }

  // Method which redraws graph after data change
  _doRedraw(): PieChart {
    // if (this.hasFilter() && this._multiple) {
    // } else if (this.hasFilter()) {
    // } else {
    // }
    return this;
  }
}
