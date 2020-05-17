(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-detail/student-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-detail/student-detail.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h3>Student Details Page</h3><br>\n\n    <p>Student Id: {{this?.student?.studentId}}</p>\n    <p>First Name: {{this?.student?.firstName}}</p>\n    <p>Last Name: {{this?.student?.lastName}}</p>\n    <p>Street Address: {{this?.student?.streetAddress}}</p>\n    <p>Apartment Number: {{this?.student?.aptNumber}}</p>\n    <p>City: {{this?.student?.city}}</p>\n    <p>State: {{this?.student?.state}}</p>\n    <p>Zip: {{this?.student?.zip}}</p>\n    <p>Telephone Number: {{this?.student?.telephoneNumber}}</p>\n    <p>Email: {{this?.student?.email}}</p>\n    <p>Link to bio: {{this?.student?.linkToBio}}</p>\n    <p>Date of Survey: {{this?.student?.dateOfSurvey}}</p>\n    <p>Things You Liked: {{this?.student?.thingsYouLiked}}</p>\n    <p>How did you become interested in this university: {{this?.student?.interest}}</p>\n    <p>Comments: {{this?.student?.comments}}</p>\n    <p>Graduation Month: {{this?.student?.graduationMonth}}</p>\n    <p>Graduation Year: {{this?.student?.graduationYear}}</p>\n    <p>Likelihood to recommend: {{this?.student?.recommend}}</p>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n        <h1> Student Survey Form</h1>\n        <form autocomplete=\"on\">\n         <div class=\"form-group\">\n         <label>First Name :</label>\n         <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"newStudent.firstName\" required autofocus>\n         </div>\n         <div class=\"form-group\">\n         <label>Last Name :</label>\n         <input type=\"text\" name=\"lastName\" [(ngModel)]=\"newStudent.lastName\" class=\"form-control\" required >\n         </div>\n         <div class=\"form-group\">\n         <label>Student id :</label>\n         <input type=\"text\" name=\"studentId\" [(ngModel)]=\"newStudent.studentId\" class=\"form-control\" required>\n         </div>\n         <div class=\"form-group\">\n         <label>Street Address :</label>\n         <input type=\"text\" name= \"streetAddress\" [(ngModel)]=\"newStudent.streetAddress\" class=\"form-control\" >\n         </div>\n         <div class=\"form-group\">\n         <label>Apartment/Unit # :</label>\n         <input type=\"text\" name=\"apartment\" [(ngModel)]=\"newStudent.aptNumber\" class=\"form-control\" >\n         </div>\n         <div class=\"form-group\">\n         <label>City :</label>\n         <input type=\"text\" name=\"city\" [(ngModel)]=\"newStudent.city\" class=\"form-control\" >\n         </div>\n         <div class=\"form-group\">\n         <label>State :</label>\n         <input type=\"text\" name=\"state\" [(ngModel)]=\"newStudent.state\" class=\"form-control\" >   \n        </div>\n        <div class=\"form-group\">\n        <label>Zip :</label>\n        <input type=\"text\" name =\"zip\" [(ngModel)]=\"newStudent.zip\" class=\"form-control\" >\n        </div>\n        <div class=\"form-group\">\n        <label>Telephone Number :</label>\n        <input type=\"text\" name = \"telephoneNumber\"  [(ngModel)]=\"newStudent.telephoneNumber\" class=\"form-control\" required >\n        </div>\n        <div class=\"form-group\">\n        <label>Email :</label>\n        <input type=\"email\" name = \"email\" [(ngModel)]=\"newStudent.email\" class=\"form-control\"\n       placeholder=\"abc@gmail.com\" >\n        </div>\n        <div class=\"form-group\">\n        <label>Link to your bio :</label>\n        <input type=\"url\" name= \"linkToBio\" [(ngModel)]=\"newStudent.linkToBio\" class=\"form-control\" placeholder=\"enter a url\" >\n        </div>\n        <div class=\"form-group\">\n        <label>Date of Survey :</label>\n        <input type=\"date\" name=\"surveyDate\" [(ngModel)]=\"newStudent.dateOfSurvey\" class=\"form-control\" >\n        </div>\n        <div class=\"mb-3\">\n        <label>Things You Liked</label>\n        <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" name=\"thingsliked\"\n       value=\"student\" id=\"defaultCheck1\" (change)=\"onCheckboxChange($event, 'Students')\">\n        <label class=\"form-check-label\">Students\n        </label>\n        </div>\n        <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" name=\"thingsliked\"\n       value=\"location\" id=\"defaultCheck1\" (change)=\"onCheckboxChange($event, 'Location')\">\n       <label class=\"form-check-label\">Location\n        </label>\n        </div>\n        <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\"name=\"thingsliked\"\n       value=\"campus\" id=\"defaultCheck1\" (change)=\"onCheckboxChange($event, 'Campus')\">\n        <label class=\"form-check-label\">Campus</label>\n        </div>\n        <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" name=\"thingsliked\"\n       value=\"atmosphere \"id=\"defaultCheck1\" (change)=\"onCheckboxChange($event, 'Atmosphere')\">\n        <label class=\"form-check-label\">Atmosphere</label>\n        </div>\n        <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" name=\"thingsliked\" value=\"dorm room\" id=\"defaultCheck1\" \n        (change)=\"onCheckboxChange($event, 'Dorm Rooms')\">\n        <label class=\"form-check-label\">Dorm Rooms</label>\n        </div>\n        <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" name=\"thingsliked\"\n       value=\"sports\" id=\"defaultCheck1\" (change)=\"onCheckboxChange($event, 'Sports')\">\n        <label class=\"form-check-label\">Sports</label>\n        </div>\n        </div>\n        <div class=\"mb-3\">\n        <label>How did you become interested in this university</label>\n        <div class=\"radio\">\n        <label><input type=\"radio\" name=\"interest\" value=\"Friends\" [(ngModel)]=\"newStudent.interest\">Friends</label>\n        </div>\n        <div class=\"radio\">\n        <label><input type=\"radio\" name=\"interest\" value=\"Television\" [(ngModel)]=\"newStudent.interest\">Television</label>\n        </div>\n        <div class=\"radio\">\n        <label><input type=\"radio\" name=\"interest\" value=\"Internet\" [(ngModel)]=\"newStudent.interest\">Internet</label>\n        </div>\n        <div class=\"radio\">\n        <label><input type=\"radio\" name=\"interest\" value=\"Other\" [(ngModel)]=\"newStudent.interest\">Other</label>\n        </div>\n    </div>\n    <div class=\"form-group\">\n    <label for=\"comment\">Comment:</label>\n    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"newStudent.comments\" name=\"comments\" id=\"comment\" ></textarea>\n    </div>\n    <div class=\"form-group\">\n    <label for=\"month\">High School Graduation Month:</label>\n    <select class=\"form-control\" id=\"month\" [(ngModel)]=\"newStudent.graduationMonth\" name =\"month\" >\n    <option value=\"January\">January</option>\n    <option value=\"February\">February</option>\n    <option value=\"March\">March</option>\n    <option value=\"April\">April</option>\n    <option value=\"May\">May</option>\n    <option value=\"June\">June</option>\n    <option value=\"July\">July</option>\n    <option value=\"August\">August</option>\n    <option value=\"September\">September</option>\n    <option value=\"October\">October</option>\n    <option value=\"November\">November</option>\n    <option value=\"December\">December</option>\n    </select>\n    </div>\n    <div class=\"form-group\">\n    <label>Graduation Year :</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newStudent.graduationYear\" id =\"year\" name =\"year\" >\n    </div>\n    <div class=\"form-group\">\n    <label for=\"month\">How likely you reccomend this school:</label>\n    <select class=\"form-control\" [(ngModel)]=\"newStudent.recommend\" id=\"year\" name=\"likelyhood\">\n    <option>Very likely</option>\n    <option>Likely</option>\n    <option>Unlikely</option>\n    </select>\n    </div>\n    <div class=\"form-group\">\n            <label>Data (Enter 10 numbers seperated by comma) :</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"listofNumbers\" required name=\"data\">\n            </div>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"this.submitForm()\">Submit</button>\n           </form>\n           </div>\n\n       ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/win-lose-page/win-lose-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/win-lose-page/win-lose-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"this.mean > 90\">\n    Congratulations You Win Two Movie Tickets!\n</div>\n\n<div>\n    Mean: {{this.mean}}\n</div>\n\n<div>\n    Thank you for completing the survey. Your survey was sucessfully saved to the database.\n</div>\n\n<div>\n    List of all studentIds:\n</div>\n\n<div *ngFor=\"let studentId of this.students\">\n    <a routerLink=\"/student/{{studentId}}\">{{studentId}}</a>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/survey/survey.component.ts");
/* harmony import */ var _win_lose_page_win_lose_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./win-lose-page/win-lose-page.component */ "./src/app/win-lose-page/win-lose-page.component.ts");
/* harmony import */ var _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/student-detail/student-detail.component.ts");






const routes = [
    { path: '', redirectTo: '/survey', pathMatch: 'full' },
    { path: 'survey', component: _survey_survey_component__WEBPACK_IMPORTED_MODULE_3__["SurveyComponent"] },
    { path: 'win-lose/:mean', component: _win_lose_page_win_lose_page_component__WEBPACK_IMPORTED_MODULE_4__["WinLosePageComponent"] },
    { path: 'student/:id', component: _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_5__["StudentDetailComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'SWEHW4';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/survey/survey.component.ts");
/* harmony import */ var _win_lose_page_win_lose_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./win-lose-page/win-lose-page.component */ "./src/app/win-lose-page/win-lose-page.component.ts");
/* harmony import */ var _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/student-detail/student-detail.component.ts");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student.service */ "./src/app/student.service.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _survey_survey_component__WEBPACK_IMPORTED_MODULE_7__["SurveyComponent"],
            _win_lose_page_win_lose_page_component__WEBPACK_IMPORTED_MODULE_8__["WinLosePageComponent"],
            _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_9__["StudentDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [_student_service__WEBPACK_IMPORTED_MODULE_10__["StudentService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/student-detail/student-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/student-detail/student-detail.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtZGV0YWlsL3N0dWRlbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/student-detail/student-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student-detail/student-detail.component.ts ***!
  \************************************************************/
/*! exports provided: StudentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailComponent", function() { return StudentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");




let StudentDetailComponent = class StudentDetailComponent {
    constructor(studentService, route) {
        this.studentService = studentService;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.studentService.getStudent(this.id).subscribe((student) => {
                this.student = student;
            });
        });
    }
};
StudentDetailComponent.ctorParameters = () => [
    { type: _student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
StudentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-detail/student-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-detail.component.scss */ "./src/app/student-detail/student-detail.component.scss")).default]
    })
], StudentDetailComponent);



/***/ }),

/***/ "./src/app/student.model.ts":
/*!**********************************!*\
  !*** ./src/app/student.model.ts ***!
  \**********************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Student {
}


/***/ }),

/***/ "./src/app/student.service.ts":
/*!************************************!*\
  !*** ./src/app/student.service.ts ***!
  \************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let StudentService = class StudentService {
    constructor(http) {
        this.http = http;
    }
    createStudent(student) {
        return this.http.post(`http://localhost:8080/students`, student, { withCredentials: true });
    }
    getStudent(i) {
        return this.http.get(`http://localhost:8080/students/${i}`, { withCredentials: true });
    }
    getStudents() {
        return this.http.get(`http://localhost:8080/students`, { withCredentials: true });
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], StudentService);



/***/ }),

/***/ "./src/app/survey/survey.component.scss":
/*!**********************************************!*\
  !*** ./src/app/survey/survey.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/survey/survey.component.ts":
/*!********************************************!*\
  !*** ./src/app/survey/survey.component.ts ***!
  \********************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student.model */ "./src/app/student.model.ts");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SurveyComponent = class SurveyComponent {
    constructor(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.newStudent = new _student_model__WEBPACK_IMPORTED_MODULE_2__["Student"]();
        this.thingsLiked = [];
    }
    ngOnInit() {
    }
    submitForm() {
        this.newStudent.thingsYouLiked = '[' + this.thingsLiked.join() + ']';
        console.log(this.newStudent);
        let mean = this.meanCalculator();
        // The Post request.
        this.studentService.createStudent(this.newStudent).subscribe(() => {
            this.router.navigate([`/win-lose/${mean}`]);
        });
    }
    meanCalculator() {
        let list = this.listofNumbers.split(',').map(Number);
        let mean = 0;
        for (let i = 0; i < list.length; i++) {
            mean += list[i];
        }
        return mean / list.length;
    }
    onCheckboxChange(event, value) {
        if (event.target.checked) {
            this.thingsLiked.push(value);
        }
        if (!event.target.checked) {
            let index = this.thingsLiked.indexOf(value);
            if (index > -1) {
                this.thingsLiked.splice(index, 1);
            }
        }
    }
};
SurveyComponent.ctorParameters = () => [
    { type: _student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-survey',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./survey.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./survey.component.scss */ "./src/app/survey/survey.component.scss")).default]
    })
], SurveyComponent);



/***/ }),

/***/ "./src/app/win-lose-page/win-lose-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/win-lose-page/win-lose-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbi1sb3NlLXBhZ2Uvd2luLWxvc2UtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/win-lose-page/win-lose-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/win-lose-page/win-lose-page.component.ts ***!
  \**********************************************************/
/*! exports provided: WinLosePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinLosePageComponent", function() { return WinLosePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");




let WinLosePageComponent = class WinLosePageComponent {
    constructor(studentService, route) {
        this.studentService = studentService;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.mean = +params['mean'];
        });
        this.studentService.getStudents().subscribe((students) => {
            this.students = students;
        });
    }
};
WinLosePageComponent.ctorParameters = () => [
    { type: _student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
WinLosePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-win-lose-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./win-lose-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/win-lose-page/win-lose-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./win-lose-page.component.scss */ "./src/app/win-lose-page/win-lose-page.component.scss")).default]
    })
], WinLosePageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sruthi/Documents/Study Materials/Sem 2/642/homeworks/Homework4/Frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map