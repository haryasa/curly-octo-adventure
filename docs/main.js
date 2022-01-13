(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/i.putu.yudi.haryasa/Projects/org-chart/angular-d3-org-chart/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [["color", "primary"], [1, "example-container"], ["mode", "side", "opened", ""], ["mat-list-item", "", "routerLink", "/circle", "routerLinkActive", "mat-list-single-selected-option"], ["mat-list-item", "", "routerLink", "/futuristic", "routerLinkActive", "mat-list-single-selected-option"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "D3-org-chart Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Circles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Futuristic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDBCQUFBO0FBSEY7QUFLRTtFQUNFLFlBQUE7QUFISiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy5leGFtcGxlLXNwYWNlciB7XG4vLyAgZmxleDogMSAxIGF1dG87XG4vL31cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcblxuICBtYXQtZHJhd2VyIHtcbiAgICB3aWR0aDogMTYwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "XYj8":
/*!************************************************************!*\
  !*** ./src/app/org-chart-page/org-chart-page.component.ts ***!
  \************************************************************/
/*! exports provided: OrgChartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartPageComponent", function() { return OrgChartPageComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _org_chart_circle_org_chart_circle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../org-chart-circle/org-chart-circle.component */ "eRwA");
/* harmony import */ var _org_chart_futuristic_org_chart_futuristic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../org-chart-futuristic/org-chart-futuristic.component */ "dI3z");








function OrgChartPageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-org-chart-circle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.data);
} }
function OrgChartPageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-org-chart-futuristic", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r1.data);
} }
class OrgChartPageComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.prevIndex = 0;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => this.chartType = data === null || data === void 0 ? void 0 : data.chartType);
        d3__WEBPACK_IMPORTED_MODULE_0__["csv"]('https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv').then((data) => {
            this.data = data;
        });
    }
    toggleHighlightInterval() {
        if (this.intervalId) {
            this.stopHighlightInterval();
        }
        else {
            this.startHighlightInterval();
        }
    }
    startHighlightInterval() {
        this.highlightRandom();
        this.intervalId = setInterval(() => {
            this.highlightRandom();
        }, 2000);
    }
    highlightRandom() {
        const data = [...this.data];
        data[this.prevIndex]._highlighted = false;
        const index = Math.floor(Math.random() * 30);
        this.prevIndex = index;
        data[index]._centered = true;
        data[index]._expanded = true;
        data[index]._highlighted = true;
        this.data = [...data];
    }
    stopHighlightInterval() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
}
OrgChartPageComponent.ɵfac = function OrgChartPageComponent_Factory(t) { return new (t || OrgChartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
OrgChartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrgChartPageComponent, selectors: [["app-org-chart-page"]], decls: 6, vars: 4, consts: [[4, "ngIf"], [1, "fab-container"], ["mat-fab", "", "color", "primary", "aria-label", "Highlight interval", 3, "click"], [3, "data"]], template: function OrgChartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OrgChartPageComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrgChartPageComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgChartPageComponent_Template_button_click_3_listener() { return ctx.toggleHighlightInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartType === "circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartType === "futuristic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", !!ctx.intervalId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _org_chart_circle_org_chart_circle_component__WEBPACK_IMPORTED_MODULE_6__["OrgChartCircleComponent"], _org_chart_futuristic_org_chart_futuristic_component__WEBPACK_IMPORTED_MODULE_7__["OrgChartFuturisticComponent"]], styles: [".fab-container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 32px;\n  top: 32px;\n}\n.fab-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #2c2c2c;\n}\n.fab-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29yZy1jaGFydC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSx5QkFBQTtBQUNKO0FBQ0k7RUFDRSx5QkFBQTtBQUNOIiwiZmlsZSI6Im9yZy1jaGFydC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMycHg7XG4gIHRvcDogMzJweDtcblxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsIDQ0LCA0NCwgMSk7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "Yngm":
/*!**************************************************!*\
  !*** ./src/app/org-chart-futuristic/piechart.ts ***!
  \**************************************************/
/*! exports provided: PieChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChart", function() { return PieChart; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "iYt/");

class PieChart {
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
            valueFormat: (d) => d3__WEBPACK_IMPORTED_MODULE_0__["format"]('.3s')(d),
            ctx: document.createElement('canvas').getContext('2d'),
            dimension: null,
            group: null,
            data: null,
            tooltip: (event, d) => {
                let items = d.data.items;
                if (!items) {
                    items = [{ key: d.data.key, value: d.data.value }];
                }
                return `
      <table style="font-size:12px">
<tr><th>Name</th><th>Value</th></tr>
        ${items
                    .map((t) => `<tr><td style="padding-right:20px;">${t.key}</td><td>${t.value}</td></tr>`)
                    .join('')}
      </table>
    `;
            },
            setData: (state) => {
                if (!state.group) {
                    return state.data;
                }
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
            this[key] = function (_) {
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
    initializeEnterExitUpdatePattern() {
        d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.patternify = function (params) {
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
    render() {
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
    setDataProp() {
        const data = this.getData();
        this.setState({ data });
    }
    drawCenterTexts() {
        const { data, centerPoint, calc, defaultTextFill, valueFormat, centerText, groupingText, image, backCircleColor, } = this.getState();
        // @ts-ignore
        const sum = d3__WEBPACK_IMPORTED_MODULE_0__["sum"](data, (d) => d.value);
        const fo = centerPoint
            .patternify({ tag: 'foreignObject', selector: 'center-for-text' })
            .attr('pointer-events', 'none')
            .attr('x', -calc.innerRadius)
            .attr('y', -calc.innerRadius)
            .attr('width', calc.innerRadius * 2)
            .attr('height', calc.innerRadius * 2);
        fo.patternify({ tag: 'xhtml:div', selector: 'for-center-div' })
            .html(`<div style="height:${calc.innerRadius * 2}px;display:flex;justify-content:center;align-items:center;text-align:center">
             <img height="${calc.innerRadius * 2 - 20}"  style="border:2px solid ${backCircleColor};border-radius:40px" width="${calc.innerRadius * 2 - 20}" src="${image}" />
</div>
          </div>`);
    }
    setLayouts() {
        const { calc } = this.getState();
        const pie = d3__WEBPACK_IMPORTED_MODULE_0__["pie"]()
            .value((d) => d.value)
            .sort(null);
        const arc = d3__WEBPACK_IMPORTED_MODULE_0__["arc"]()
            .innerRadius(calc.innerRadius)
            .outerRadius(calc.radius)
            .padAngle(0.02)
            .cornerRadius(1);
        const arcOuter = d3__WEBPACK_IMPORTED_MODULE_0__["arc"]()
            // @ts-ignore
            .innerRadius(arc.outerRadius()() + 2)
            // @ts-ignore
            .outerRadius(arc.outerRadius()() + 5);
        const arcLabel = d3__WEBPACK_IMPORTED_MODULE_0__["arc"]()
            // @ts-ignore
            .innerRadius(arcOuter.outerRadius()())
            // @ts-ignore
            .outerRadius(arcOuter.outerRadius()() + 30);
        this.setState({ pie, arc, arcOuter, arcLabel });
    }
    attachEventHandlers() { }
    // Calculate what size will text take when drew
    getTextWidth(text, { fontSize = 14, fontWeight = 400 } = {}) {
        const { defaultFont, ctx } = this.getState();
        ctx.font = `${fontWeight || ''} ${fontSize}px ${defaultFont} `;
        const measurement = ctx.measureText(text);
        return measurement.width;
    }
    setDynamicContainer() {
        const attrs = this.getState();
        // Drawing containers
        const container = d3__WEBPACK_IMPORTED_MODULE_0__["select"](attrs.container);
        const containerRect = container.node().getBoundingClientRect();
        // if (containerRect.width > 0) attrs.svgWidth = containerRect.width;
        this.setState({ container });
    }
    drawSvgAndWrappers() {
        const { tooltip, container, svgWidth, svgHeight, defaultFont, calc } = this.getState();
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
            .attr('transform', 'translate(' + calc.chartLeftMargin + ',' + calc.chartTopMargin + ')');
        const centerPoint = chart
            .patternify({ tag: 'g', selector: 'center-point' })
            .attr('transform', 'translate(' + calc.chartWidth / 2 + ',' + calc.chartHeight / 2 + ')');
        this.setState({ chart, svg, centerPoint });
    }
    calculateProperties() {
        const attrs = this.getState();
        // Calculated properties
        const calc = {
            id: 'ID' + Math.floor(Math.random() * 1000000),
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
        if (calc.innerRadius < 100) {
            calc.innerRadius = calc.radius * 0.8;
        }
        this.setState({ calc });
    }
    // =================== API IMPLEMENTATION ===============
    getData() {
        const state = this.getState();
        const { setData } = state;
        return setData(state);
    }
    drawSlices() {
        const { round, labelMargin, defaultFontSize, centerPoint, pie, arc, arcOuter, backCircleColor, arcLabel, defaultTextFill, tip, percentCircleRadius, } = this.getState();
        const dataInitial = this.getData();
        const sum = d3__WEBPACK_IMPORTED_MODULE_0__["sum"](dataInitial, (d) => d.value);
        const minAllowed = 0.04;
        let data = dataInitial.filter((dataItem) => dataItem.value / sum >= minAllowed);
        const others = dataInitial.filter((dataItem) => dataItem.value / sum < minAllowed);
        if (others.length > 1) {
            data.push({
                key: 'Others',
                items: others,
                value: d3__WEBPACK_IMPORTED_MODULE_0__["sum"](others, (d) => d.value),
            });
        }
        else {
            data = dataInitial;
        }
        const pieData = pie(data);
        const right = pieData.filter((d) => this.isRightSide(d));
        const left = pieData.filter((d) => !this.isRightSide(d));
        pieData.forEach((d, i, arr) => {
            d.xOffset = 0;
            if ((i !== 0 && i !== arr.length - 1) || arr.length < 20) {
                d.yOffset = 0;
            }
            else {
                d.yOffset = -30;
            }
        });
        const process = (d, i, arr) => {
            if (i < 1) {
                return;
            }
            const prev = arr[i - 1];
            const curr = d;
            const yPrev = arcLabel.centroid(prev)[1] + prev.yOffset;
            const yCurr = arcLabel.centroid(curr)[1];
            console.log(yPrev, yCurr);
            if (this.isRightSide(curr) && yPrev + percentCircleRadius * 2 > yCurr) {
                console.log('is Righ Side');
                curr.yOffset = yPrev + percentCircleRadius * 2 - yCurr + 2;
            }
            else if (!this.isRightSide(curr) &&
                yPrev + percentCircleRadius * 2 > yCurr) {
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
            .on('mouseenter.tooltip', (event, d) => { })
            .on('mouseleave.tooltip', (d) => { })
            .on('mouseenter.color', function (event, d) {
            const color = d3__WEBPACK_IMPORTED_MODULE_0__["rgb"](that.getColor(d)).darker(0.5);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('fill', color);
        })
            .on('mouseleave.color', function (event, d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('fill', that.getColor(d));
        });
        pieG
            .patternify({
            tag: 'polyline',
            selector: 'pie-label-line',
            data: (d) => [d],
        })
            .attr('points', (d) => {
            let textWidth = this.getTextWidth(d.data.key || '', { fontSize: defaultFontSize }) +
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
            if (this.isRightSide(d)) {
                x += labelMargin - 5;
            }
            else {
                x -= labelMargin - 5;
            }
            return x + d.xOffset;
        })
            .attr('text-anchor', (d) => {
            if (this.isRightSide(d)) {
                return 'start';
            }
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
            let textWidth = this.getTextWidth(d.data.key || '', { fontSize: defaultFontSize }) +
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
            let textWidth = this.getTextWidth(d.data.key || '', { fontSize: defaultFontSize }) +
                labelMargin +
                percentCircleRadius;
            if (this.isRightSide(d)) {
                textWidth = -textWidth;
            }
            return arcLabel.centroid(this.correct(d))[0] - textWidth + d.xOffset;
        })
            .attr('cy', (d) => arcLabel.centroid(this.correct(d))[1] - 1.1 + d.yOffset);
        //  centroid = arcGenerator.centroid(d);
    }
    getLabelOpacity(pieItem) {
        if (Math.abs(pieItem.yOffset) > 130) {
            return 0;
        }
        return 1;
    }
    getColor(d) {
        if (!d.data) {
            // tslint:disable-next-line:no-debugger
            debugger;
        }
        return (d.data.color ||
            d3__WEBPACK_IMPORTED_MODULE_0__["schemeSet2"][this.hashCode(d.data.key + '') % d3__WEBPACK_IMPORTED_MODULE_0__["schemeSet2"].length]);
    }
    isRightSide(n) {
        const d = this.correct(n);
        const midAngle = (d.startAngle + d.endAngle) / 2;
        return midAngle <= Math.PI;
    }
    correct(d) {
        return Object.assign({}, d, {
            startAngle: d.startAngle,
            endAngle: d.endAngle,
        });
    }
    // Get hashcode from string
    hashCode(s) {
        let h;
        for (let i = 0; i < s.length; i++) {
            // tslint:disable-next-line:no-bitwise
            h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
        }
        return Math.abs(h);
    }
    // ===================
    // Method which renders initial html elements
    _doRender() {
        this._doRedraw();
        return this;
    }
    // Method which redraws graph after data change
    _doRedraw() {
        // if (this.hasFilter() && this._multiple) {
        // } else if (this.hasFilter()) {
        // } else {
        // }
        return this;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _org_chart_circle_org_chart_circle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./org-chart-circle/org-chart-circle.component */ "eRwA");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _org_chart_page_org_chart_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./org-chart-page/org-chart-page.component */ "XYj8");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _org_chart_futuristic_org_chart_futuristic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./org-chart-futuristic/org-chart-futuristic.component */ "dI3z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _org_chart_circle_org_chart_circle_component__WEBPACK_IMPORTED_MODULE_5__["OrgChartCircleComponent"],
        _org_chart_circle_org_chart_circle_component__WEBPACK_IMPORTED_MODULE_5__["OrgChartCircleComponent"],
        _org_chart_page_org_chart_page_component__WEBPACK_IMPORTED_MODULE_7__["OrgChartPageComponent"],
        _org_chart_futuristic_org_chart_futuristic_component__WEBPACK_IMPORTED_MODULE_11__["OrgChartFuturisticComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]] }); })();


/***/ }),

/***/ "dI3z":
/*!************************************************************************!*\
  !*** ./src/app/org-chart-futuristic/org-chart-futuristic.component.ts ***!
  \************************************************************************/
/*! exports provided: OrgChartFuturisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartFuturisticComponent", function() { return OrgChartFuturisticComponent; });
/* harmony import */ var d3_org_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-org-chart */ "l+w8");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _piechart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piechart */ "Yngm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const _c0 = ["chartContainer"];
class OrgChartFuturisticComponent {
    constructor() {
        this.index = 0;
        this.compact = 0;
        this.actNdCent = 0;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (!this.chart) {
            this.chart = new d3_org_chart__WEBPACK_IMPORTED_MODULE_0__["OrgChart"]();
        }
        this.updateChart();
    }
    ngOnChanges() {
        this.updateChart();
    }
    updateChart() {
        if (!this.data) {
            return;
        }
        if (!this.chart) {
            return;
        }
        this.data.forEach((d) => {
            const val = Math.round(d.name.length / 2);
            d.progress = [...new Array(val)].map(() => Math.random() * 25 + 5);
        });
        this.chart
            .container(this.chartContainer.nativeElement)
            .data(this.data)
            // .svgHeight(window.innerHeight - 10)
            .nodeHeight((d) => 170)
            .nodeWidth((d) => {
            if (d.depth === 0) {
                return 500;
            }
            return 330;
        })
            .childrenMargin((d) => 90)
            .compactMarginBetween((d) => 65)
            .compactMarginPair((d) => 100)
            .neightbourMargin((a, b) => 50)
            .siblingsMargin((d) => 100)
            .buttonContent(({ node, state }) => {
            return `<div style="color:#2CAAE5;border-radius:5px;padding:3px;font-size:10px;margin:auto auto;background-color:#040910;border: 1px solid #2CAAE5"> <span style="font-size:9px">${node.children
                ? `<i class="fas fa-angle-up"></i>`
                : `<i class="fas fa-angle-down"></i>`}</span> ${node.data._directSubordinates}  </div>`;
        })
            .linkUpdate(function (data, i, arr) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this)
                .attr('stroke', (d) => d.data._upToTheRootHighlighted ? '#14760D' : '#2CAAE5')
                .attr('stroke-width', (d) => d.data._upToTheRootHighlighted ? 15 : 1);
            if (data.data._upToTheRootHighlighted) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).raise();
            }
        })
            .nodeContent((d, index, arr, state) => {
            const svgStr = `<svg width=150 height=75  style="background-color:none"> <path d="M 0,15 L15,0 L135,0 L150,15 L150,60 L135,75 L15,75 L0,60" fill="#2599DD" stroke="#2599DD"/> </svg>`;
            return `
                          <div class="left-top" style="position:absolute;left:-10px;top:-10px">  ${svgStr}</div>
                          <div class="right-top" style="position:absolute;right:-10px;top:-10px">  ${svgStr}</div>
                          <div class="right-bottom" style="position:absolute;right:-10px;bottom:-14px">  ${svgStr}</div>
                          <div class="left-bottom" style="position:absolute;left:-10px;bottom:-14px">  ${svgStr}</div>
                          <div style="font-family: 'Inter'; background-color:#040910;sans-serif; position:absolute;margin-top:-1px; margin-left:-1px;width:${d.width}px;height:${d.height}px;border-radius:0px;border: 2px solid #2CAAE5">

                             <div class="pie-chart-wrapper" style="margin-left:-10px;margin-top:5px;width:320px;height:300px"></div>

                            <div style="color:#2CAAE5;position:absolute;right:15px;top:-20px;">
                              <div style="font-size:15px;color:#2CAAE5;margin-top:32px"> ${d.data.name} </div>
                              <div style="font-size:10px;"> ${d.data.positionName || ''} </div>
                              <div style="font-size:10px;"> ${d.data.id || ''} </div>
                              ${d.depth === 0
                ? `                              <br/>
                              <div style="max-width:200px;font-size:10px;">
                                A corporate history of Ian is a chronological account of a business or other co-operative organization he founded.  <br><br>Usually it is produced in written format but it can also be done in audio or audiovisually
                              </div>`
                : ''}

                            </div>

                            <div style="position:absolute;left:-5px;bottom:10px;">
                              <div style="font-size:10px;color:#2CAAE5;margin-left:20px;margin-top:32px"> Progress </div>
                              <div style="color:#2CAAE5;margin-left:20px;margin-top:3px;font-size:10px;">
                                <svg width=150 height=30> ${d.data.progress
                .map((h, i) => {
                return `<rect  width=10 x="${i * 12}" height=${h}  y=${30 - h} fill="#B41425"/>`;
            })
                .join('')}  </svg>
                                </div>
                            </div>
                          </div>

  `;
        })
            .nodeUpdate(function (d, i, arr) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this)
                .select('.node-rect')
                .attr('stroke', (d2) => d2.data._highlighted || d2.data._upToTheRootHighlighted
                ? '#14760D'
                : 'none')
                .attr('stroke-width', d.data._highlighted || d.data._upToTheRootHighlighted ? 40 : 1);
            const pieChartWrapperNode = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this)
                .select('.pie-chart-wrapper')
                .node();
            const val = (d.data.name.length * 5) % 100; // Dummy calc
            // General pie chart invocation code
            new _piechart__WEBPACK_IMPORTED_MODULE_3__["PieChart"]()
                .data([
                { key: 'plan', color: '#6EC2EA', value: val },
                { key: 'exec', color: '#0D5AAF', value: 100 - val },
            ])
                .container(pieChartWrapperNode)
                .svgHeight(200)
                .svgWidth(320)
                .marginTop(40)
                .image(d.data.imageUrl)
                .backCircleColor('#1F72A7')
                .defaultFont('Inter')
                .render();
        })
            .render();
        const url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QMaAyMA1SdmlAAAAVRJREFUeNrt26FOw2AUhuFTElzrETNLMNPtJVRVVFbtlnYXKGQFqldANo3EoLDUITazzCxBTNBk53lv4M+XJ/ndKZ52L9uft9eP+Oeqbtgs8O7+cbWO36/PiIgmwd4ojsdIU9n2l7XzNBYZNj9Eos6oTRbcdMAZAwxYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmABBizAAqwFgZ/fv+slHl7q3aobNpn2proujIgo276ep/HgixZgARZgARZgAQYswAIswAIswAIswIAFWIAFWIAFWIABC7AAC7AAC7D+AHZdeN97XRf6ogVYgAVYgAVYgAELsAALsAALsAADFmABFmABFmABFmDAAizAAizAAqxrYNeF973XdaEvWoAFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgAQYswAIswAKsW0p1m1S2/WXtPI1Fhs0nxU1Jj2yxm2sAAAAASUVORK5CYII=`;
        const replaced = url.replace(/(\r\n|\n|\r)/gm, '');
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.svg-chart-container')
            .style('background', 'radial-gradient(circle at center, #04192B 0, #000B0E 100%) url("https://raw.githubusercontent.com/bumbeishvili/coronavirus.davidb.dev/master/glow.png")')
            .style('background-image', `url(${replaced}), radial-gradient(circle at center, #04192B 0, #000B0E 100%)`);
    }
    swapLayout() {
        this.chart.layout(['right', 'bottom', 'left', 'top'][this.index++ % 4]).render().fit();
    }
    compactLayout() {
        this.chart.compact(!!(this.compact++ % 2)).render().fit();
    }
    // centerActive(): void {
    //   console.log(this.actNdCent);
    //   this.chart.setActiveNodeCentered(!!(this.actNdCent++ % 2)).render();
    // }
    downloadPdf() {
        this.chart.exportImg({
            full: true,
            save: false,
            onLoad: (base64) => {
                const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({
                    orientation: 'landscape'
                });
                const img = new Image();
                img.src = base64;
                img.onload = () => {
                    pdf.addImage(img, 'JPEG', 5, 5, 595 / 3, ((img.height / img.width) * 595) / 3);
                    pdf.save('chart.pdf');
                };
            },
        });
    }
}
OrgChartFuturisticComponent.ɵfac = function OrgChartFuturisticComponent_Factory(t) { return new (t || OrgChartFuturisticComponent)(); };
OrgChartFuturisticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OrgChartFuturisticComponent, selectors: [["app-org-chart-futuristic"]], viewQuery: function OrgChartFuturisticComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
    } }, inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 87, vars: 0, consts: [["id", "chartContainer"], ["chartContainer", ""], [1, "action-buttons"], [1, "btn", "btn-action-button", "waves-effect", "waves-light", 3, "click"], [1, "fas", "fa-chevron-down"], [1, "fas", "fa-chevron-up"], [1, "fas", "fa-folder-plus"], [1, "fas", "fa-user-times"], [1, "fas", "fa-sync"], [1, "fas", "fa-retweet"], [1, "fas", "fa-sitemap"], [1, "fas", "fa-compress-arrows-alt"], [1, "fas", "fa-highlighter"], [1, "fas", "fa-route"], [1, "fas", "fa-eraser"], [1, "fas", "fa-expand"], [1, "far", "fa-images"], [1, "fas", "fa-file-download"], [1, "fas", "fa-angle-double-down"], [1, "fas", "fa-angle-double-up"], [1, "far", "fa-file-pdf"], [1, "fas", "fa-project-diagram"], [1, "fas", "fa-minus"], [1, "fas", "fa-plus"]], template: function OrgChartFuturisticComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_3_listener() { return ctx.chart.setExpanded("O-6164").render(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Expand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_7_listener() { return ctx.chart.setExpanded("O-6164", false).render(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_11_listener() { return ctx.chart.addNode({ imageUrl: "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg", id: "root child", parentId: "O-6066", name: "test", progress: [25, 20, 15, 10] }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Add Node ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_15_listener() { return ctx.chart.removeNode("O-6067"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_19_listener() { return ctx.chart.fit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " fit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_23_listener() { return ctx.swapLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " swap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_27_listener() { return ctx.compactLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " compact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_31_listener() { return ctx.chart.setCentered("O-6162").render(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " center ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_35_listener() { return ctx.chart.setHighlighted("O-6162").render(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_39_listener() { return ctx.chart.setUpToTheRootHighlighted("O-6162").render().fit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " mark root ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_43_listener() { return ctx.chart.clearHighlighting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " clear mark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); return ctx.chart.fullscreen(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_51_listener() { return ctx.chart.exportImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " export img ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_55_listener() { return ctx.chart.exportImg({ full: true }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " export full img ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_59_listener() { return ctx.chart.exportSvg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " export svg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_63_listener() { return ctx.chart.expandAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " expand all");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_67_listener() { return ctx.chart.collapseAll().fit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " collapse all");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_71_listener() { return ctx.downloadPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " export pdf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_75_listener() { return ctx.chart.connections([{ from: "O-6069", to: "O-6070", label: "Conflicts of interest" }]).render(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, " add link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_79_listener() { return ctx.chart.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, " zoom out");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OrgChartFuturisticComponent_Template_button_click_83_listener() { return ctx.chart.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, " zoom in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n#chartContainer[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n#chartContainer[_ngcontent-%COMP%]     > svg {\n  height: 100%;\n}\n\n[_nghost-%COMP%]     .btn {\n  margin: 3px;\n  color: inherit;\n  text-transform: uppercase;\n  word-wrap: break-word;\n  white-space: normal;\n  cursor: pointer;\n  border: 0;\n  border-radius: 0.125rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  padding: 0.84rem 2.14rem;\n  font-size: 0.81rem;\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n}\n\n[_nghost-%COMP%]     .btn-action-button {\n  text-transform: lowercase;\n  font-size: 11px !important;\n  border-radius: 7px !important;\n  color: white !important;\n  padding: 4px 5px !important;\n  background-color: #1d2643 !important;\n}\n\n[_nghost-%COMP%]     .action-buttons {\n  position: absolute;\n  bottom: 10px;\n  right: 35px;\n}\n\n[_nghost-%COMP%]     .svg-chart-container:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: radial-gradient(circle at center, #04192b 0, #000b0e 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29yZy1jaGFydC1mdXR1cmlzdGljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFSTtFQUNFLFlBQUE7QUFBTjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUdBLDZFQUFBO0VBTUEscUlBQUE7RUFLQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQVZKOztBQWFFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0FBWEo7O0FBY0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWko7O0FBZUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esc0VBQUE7QUFiSiIsImZpbGUiOiJvcmctY2hhcnQtZnV0dXJpc3RpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2NoYXJ0Q29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIDo6bmctZGVlcCB7XG4gICAgPiBzdmcge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDNweDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2IoMCAwIDAgLyAxNiUpLFxuICAgIDAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICBwYWRkaW5nOiAwLjg0cmVtIDIuMTRyZW07XG4gICAgZm9udC1zaXplOiAwLjgxcmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB9XG5cbiAgLmJ0bi1hY3Rpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDRweCA1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyNjQzICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDM1cHg7XG4gIH1cblxuICAuc3ZnLWNoYXJ0LWNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsICMwNDE5MmIgMCwgIzAwMGIwZSAxMDAlKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "eRwA":
/*!****************************************************************!*\
  !*** ./src/app/org-chart-circle/org-chart-circle.component.ts ***!
  \****************************************************************/
/*! exports provided: OrgChartCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartCircleComponent", function() { return OrgChartCircleComponent; });
/* harmony import */ var d3_org_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-org-chart */ "l+w8");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const _c0 = ["chartContainer"];
class OrgChartCircleComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        if (!this.chart) {
            this.chart = new d3_org_chart__WEBPACK_IMPORTED_MODULE_0__["OrgChart"]();
        }
        this.updateChart();
    }
    ngOnChanges() {
        this.updateChart();
    }
    updateChart() {
        if (!this.data) {
            return;
        }
        if (!this.chart) {
            return;
        }
        this.chart
            .container(this.chartContainer.nativeElement)
            .data(this.data)
            .rootMargin(100)
            .nodeWidth((d) => 210)
            .nodeHeight((d) => 140)
            .childrenMargin((d) => 130)
            .compactMarginBetween((d) => 75)
            .compactMarginPair((d) => 80)
            .linkUpdate(function (linkData, i, arr) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this)
                .attr('stroke', (d) => d.data._upToTheRootHighlighted ? '#152785' : 'lightgray')
                .attr('stroke-width', (d) => d.data._upToTheRootHighlighted ? 5 : 1.5)
                .attr('stroke-dasharray', '4,4');
            if (linkData.data._upToTheRootHighlighted) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).raise();
            }
        })
            .nodeContent((d, i, arr, state) => {
            const colors = [
                '#6E6B6F',
                '#18A8B6',
                '#F45754',
                '#96C62C',
                '#BD7E16',
                '#802F74',
            ];
            const color = colors[d.depth % colors.length];
            const imageDim = 80;
            const lightCircleDim = 95;
            const outsideCircleDim = 110;
            return `
          <div style="background-color:white; position:absolute;width:${d.width}px;height:${d.height}px;">
              <div style="background-color:${color};position:absolute;margin-top:-${outsideCircleDim / 2}px;margin-left:${d.width / 2 - outsideCircleDim / 2}px;border-radius:100px;width:${outsideCircleDim}px;height:${outsideCircleDim}px;"></div>
              <div style="background-color:#ffffff;position:absolute;margin-top:-${lightCircleDim / 2}px;margin-left:${d.width / 2 - lightCircleDim / 2}px;border-radius:100px;width:${lightCircleDim}px;height:${lightCircleDim}px;"></div>
              <img src=" ${d.data.imageUrl}" style="position:absolute;margin-top:-${imageDim / 2}px;margin-left:${d.width / 2 - imageDim / 2}px;border-radius:100px;width:${imageDim}px;height:${imageDim}px;" />
              <div class="card" style="top:${outsideCircleDim / 2 + 10}px;position:absolute;height:30px;width:${d.width}px;background-color:#3AB6E3;">
                <div style="background-color:${color};height:28px;text-align:center;padding-top:10px;color:#ffffff;font-weight:bold;font-size:16px">
                    ${d.data.name}
                </div>
                <div style="background-color:#F0EDEF;height:28px;text-align:center;padding-top:10px;color:#424142;font-size:16px">
                    ${d.data.positionName}
                </div>
              </div>
          </div>
        `;
        })
            .render();
    }
}
OrgChartCircleComponent.ɵfac = function OrgChartCircleComponent_Factory(t) { return new (t || OrgChartCircleComponent)(); };
OrgChartCircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrgChartCircleComponent, selectors: [["app-org-chart-circle"]], viewQuery: function OrgChartCircleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
    } }, inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["id", "chartContainer"], ["chartContainer", ""]], template: function OrgChartCircleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n#chartContainer[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n#chartContainer[_ngcontent-%COMP%]     > svg {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29yZy1jaGFydC1jaXJjbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVJO0VBQ0UsWUFBQTtBQUFOIiwiZmlsZSI6Im9yZy1jaGFydC1jaXJjbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNjaGFydENvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcblxuICA6Om5nLWRlZXAge1xuICAgID4gc3ZnIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _org_chart_page_org_chart_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./org-chart-page/org-chart-page.component */ "XYj8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        redirectTo: 'circle',
        pathMatch: 'full'
    },
    {
        path: 'circle',
        component: _org_chart_page_org_chart_page_component__WEBPACK_IMPORTED_MODULE_1__["OrgChartPageComponent"],
        data: {
            chartType: 'circle'
        }
    },
    {
        path: 'futuristic',
        component: _org_chart_page_org_chart_page_component__WEBPACK_IMPORTED_MODULE_1__["OrgChartPageComponent"],
        data: {
            chartType: 'futuristic'
        }
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map