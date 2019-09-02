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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container align-items-center col-sm-4\">\r\n    <H1>MyCONTEXT Health</H1>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/patient-dashboard/patient-dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/patient-dashboard/patient-dashboard.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\r\n    <thead>\r\n        <tr>\r\n            <th>ID</th>\r\n            <th>Name</th>\r\n            <th>Salary</th>\r\n            <th>Age</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let employee of employees\">\r\n            <td>{{employee.id}}</td>\r\n            <td>{{employee.employee_name}}</td>\r\n            <td>{{employee.employee_salary}}</td>\r\n            <td>{{employee.employee_age}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container align-items-center col-sm-4\">\r\n<h2>Login</h2>\r\n<br>\r\n<form  \r\n      [formGroup]=\"form\"\r\n      (ngSubmit)=\"onSubmit(form.value)\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"username\"><strong>Username</strong></label>\r\n    <input formControlName=\"un\" type=\"email\" class=\"form-control\" id=\"username\" aria-describedby=\"usernmae\" placeholder=\"Enter your username\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"password\"> <strong>Password</strong></label>\r\n    <input formControlName=\"pw\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter your password\">\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Login</button>\r\n</form>\r\n\r\n<br>\r\n\r\n<a routerLink=\"/registration\">Create account</a>\r\n<br>\r\n<br>\r\n<br>\r\n<a routerLink=\"/patientlist\">Patient List</a>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/registration/registration.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/registration/registration.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container align-items-center col-sm-4\">\r\n    <h2>Registration</h2>\r\n    <br>\r\n        <input type=\"radio\" value=\"patient\" name=\"formType\" [(ngModel)]=\"selectedForm\" (change)=\"onFormTypeButtonClicked()\" checked>Patient&nbsp;\r\n        <input type=\"radio\" value=\"hospital\" name=\"formType\" [(ngModel)]=\"selectedForm\" (change)=\"onFormTypeButtonClicked()\">Hospital&nbsp;\r\n        <input type=\"radio\" value=\"buyer\" name=\"formType\" [(ngModel)]=\"selectedForm\" (change)=\"onFormTypeButtonClicked()\">Buyer\r\n    <br>\r\n    <br>\r\n    <form  \r\n          [formGroup]=\"form\"\r\n          (ngSubmit)=\"onSubmit(form.value)\">\r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"username\"><strong>Name</strong></label>\r\n        <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"name\" >\r\n      </div>\r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"address\"> <strong>Address</strong></label>\r\n        <input formControlName=\"address\" type=\"text\" class=\"form-control\" id=\"address\" >\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\"> <strong>Email</strong></label>\r\n        <input formControlName=\"email\" type=\"text\" class=\"form-control\" id=\"email\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"contact\"> <strong>Contact No</strong></label>\r\n        <input formControlName=\"contact\" type=\"text\" class=\"form-control\" id=\"contact\" >\r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"selectedForm=='patient'\" >\r\n        <label for=\"dob\"> <strong>Date of Birth</strong></label>\r\n        <input formControlName=\"dob\" type=\"text\" class=\"form-control\" id=\"dob\" >\r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"selectedForm=='patient'\">\r\n        <label for=\"bloodtype\"> <strong>Blood Type</strong></label>\r\n        <select class=\"form-control\" id=\"bloodtype\" formControlName=\"bloodtype\">\r\n            <option *ngFor=\"let key of keys;index as i;\" [value]=\"key\" [label]=\"key\"></option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"selectedForm=='patient'\">\r\n        <label> <strong>Gender</strong></label>\r\n        <div class=\"form-control\">\r\n          <label class=\"radio-inline\">\r\n            <input type=\"radio\" value=male name=\"gender\" formControlName=\"gender\">\r\n            Male &nbsp;&nbsp;\r\n          </label>\r\n          <label class=\"radio-inline\">\r\n            <input type=\"radio\" value=female name=\"gender\" formControlName=\"gender\">\r\n            Female\r\n          </label>\r\n        </div>\r\n       \r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"selectedForm=='buyer'||selectedForm=='hospital'\">\r\n        <label for=\"abn\"> <strong>ABN</strong></label>\r\n        <input formControlName=\"abn\" type=\"text\" class=\"form-control\" id=\"abn\" >\r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"selectedForm=='buyer'||selectedForm=='hospital'\">\r\n        <label for=\"website\"> <strong>Website</strong></label>\r\n        <input formControlName=\"website\" type=\"text\" class=\"form-control\" id=\"website\" >\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"username\"><strong>Username</strong></label>\r\n        <input formControlName=\"username\" type=\"text\" class=\"form-control\" id=\"username\" >\r\n      </div>\r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"password\"><strong>Password</strong></label>\r\n        <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"password\" >\r\n      </div>\r\n    \r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Register</button>\r\n    </form>\r\n    \r\n    <br>\r\n    \r\n    <a routerLink=\"/login\">Login Page</a>\r\n    \r\n    </div>\r\n    <br>\r\n    <br>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _patient_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient/patient-dashboard/patient-dashboard.component */ "./src/app/patient/patient-dashboard/patient-dashboard.component.ts");






var routes = [
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'patientlist', component: _patient_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["PatientDashboardComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mycontext-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patient_patient_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient/patient.module */ "./src/app/patient/patient.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_3__["UserModule"],
                _patient_patient_module__WEBPACK_IMPORTED_MODULE_7__["PatientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/patient/patient-dashboard/patient-dashboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/patient/patient-dashboard/patient-dashboard.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  table, th, td {\r\n    border: 1px solid black;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9wYXRpZW50LWRhc2hib2FyZC9wYXRpZW50LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9wYXRpZW50LWRhc2hib2FyZC9wYXRpZW50LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/patient/patient-dashboard/patient-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/patient/patient-dashboard/patient-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: PatientDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDashboardComponent", function() { return PatientDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../patients.service */ "./src/app/patient/patients.service.ts");



var PatientDashboardComponent = /** @class */ (function () {
    function PatientDashboardComponent(patientService) {
        this.patientService = patientService;
    }
    PatientDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getAllEmployees().subscribe(function (empData) { return _this.employees = empData; });
    };
    PatientDashboardComponent.ctorParameters = function () { return [
        { type: _patients_service__WEBPACK_IMPORTED_MODULE_2__["PatientsService"] }
    ]; };
    PatientDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-dashboard',
            template: __webpack_require__(/*! raw-loader!./patient-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/patient/patient-dashboard/patient-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./patient-dashboard.component.css */ "./src/app/patient/patient-dashboard/patient-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_patients_service__WEBPACK_IMPORTED_MODULE_2__["PatientsService"]])
    ], PatientDashboardComponent);
    return PatientDashboardComponent;
}());



/***/ }),

/***/ "./src/app/patient/patient.module.ts":
/*!*******************************************!*\
  !*** ./src/app/patient/patient.module.ts ***!
  \*******************************************/
/*! exports provided: PatientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientModule", function() { return PatientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _patient_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patient/patient-dashboard/patient-dashboard.component */ "./src/app/patient/patient-dashboard/patient-dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _patients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patients.service */ "./src/app/patient/patients.service.ts");






var PatientModule = /** @class */ (function () {
    function PatientModule() {
    }
    PatientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_patient_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["PatientDashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_patients_service__WEBPACK_IMPORTED_MODULE_5__["PatientsService"]]
        })
    ], PatientModule);
    return PatientModule;
}());



/***/ }),

/***/ "./src/app/patient/patient.ts":
/*!************************************!*\
  !*** ./src/app/patient/patient.ts ***!
  \************************************/
/*! exports provided: Gender, Bloodtype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bloodtype", function() { return Bloodtype; });
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender || (Gender = {}));
var Bloodtype;
(function (Bloodtype) {
    Bloodtype["Opos"] = "O+";
    Bloodtype["Oneg"] = "O-";
    Bloodtype["Apos"] = "A+";
    Bloodtype["Aneg"] = "A-";
    Bloodtype["Bpos"] = "B+";
    Bloodtype["Bneg"] = "B-";
    Bloodtype["ABpos"] = "AB+";
    Bloodtype["ABneg"] = "AB-";
})(Bloodtype || (Bloodtype = {}));


/***/ }),

/***/ "./src/app/patient/patients.service.ts":
/*!*********************************************!*\
  !*** ./src/app/patient/patients.service.ts ***!
  \*********************************************/
/*! exports provided: PatientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsService", function() { return PatientsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PatientsService = /** @class */ (function () {
    function PatientsService(_http) {
        this._http = _http;
    }
    PatientsService.prototype.getAllEmployees = function () {
        return this._http.get("http://dummy.restapiexample.com/api/v1/employees");
    };
    PatientsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PatientsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientsService);
    return PatientsService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, _userService) {
        this.formBuilder = formBuilder;
        this._userService = _userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            un: this.formBuilder.control(''),
            pw: this.formBuilder.control('')
        });
    };
    LoginComponent.prototype.onSubmit = function (loginFormItem) {
        this._userService.doLogin(loginFormItem.un, loginFormItem.pw);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/registration/registration.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/registration/registration.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "./src/app/user/user.ts");
/* harmony import */ var _patient_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../patient/patient */ "./src/app/patient/patient.ts");






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, _userService) {
        this.formBuilder = formBuilder;
        this._userService = _userService;
        this.allBloodType = _patient_patient__WEBPACK_IMPORTED_MODULE_5__["Bloodtype"];
        this.keys = [];
        this.selectedForm = "patient";
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.keys = Object.values(this.allBloodType);
        this.form = this.formBuilder.group({
            name: this.formBuilder.control(''),
            usertype: this.formBuilder.control(_user__WEBPACK_IMPORTED_MODULE_4__["User_Type"].patient),
            username: this.formBuilder.control(''),
            password: this.formBuilder.control(''),
            contact: this.formBuilder.control(''),
            email: this.formBuilder.control(''),
            address: this.formBuilder.control(''),
            dob: this.formBuilder.control(''),
            gender: this.formBuilder.control(_patient_patient__WEBPACK_IMPORTED_MODULE_5__["Gender"].male),
            bloodtype: this.formBuilder.control(_patient_patient__WEBPACK_IMPORTED_MODULE_5__["Bloodtype"].Opos)
        });
    };
    RegistrationComponent.prototype.onFormTypeButtonClicked = function () {
        console.log(this.selectedForm);
        if (this.selectedForm == "patient") {
            this.form.addControl("dob", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""));
            this.form.addControl("gender", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_patient_patient__WEBPACK_IMPORTED_MODULE_5__["Gender"].male));
            this.form.addControl("bloodtype", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_patient_patient__WEBPACK_IMPORTED_MODULE_5__["Bloodtype"].Opos));
            this.form.removeControl("website");
            this.form.removeControl("abn");
            this.form.controls['usertype'].setValue(_user__WEBPACK_IMPORTED_MODULE_4__["User_Type"].patient);
        }
        else if (this.selectedForm == "hospital") {
            this.form.addControl("abn", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""));
            this.form.addControl("website", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""));
            this.form.removeControl("dob");
            this.form.removeControl("gender");
            this.form.removeControl("bloodtype");
            this.form.controls['usertype'].setValue(_user__WEBPACK_IMPORTED_MODULE_4__["User_Type"].hospital);
        }
        else if (this.selectedForm == "buyer") {
            this.form.addControl("abn", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""));
            this.form.addControl("website", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""));
            this.form.removeControl("dob");
            this.form.removeControl("gender");
            this.form.removeControl("bloodtype");
            this.form.controls['usertype'].setValue(_user__WEBPACK_IMPORTED_MODULE_4__["User_Type"].buyer);
        }
    };
    RegistrationComponent.prototype.onSubmit = function (formItem) {
        this._userService.doRegistration(formItem);
    };
    RegistrationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/user/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/user/user.ts");
/* harmony import */ var _patient_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patient/patient */ "./src/app/patient/patient.ts");




var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            { user_id: "p1000", user_type: _user__WEBPACK_IMPORTED_MODULE_2__["User_Type"].patient, username: "parag", password: "parag123" },
            { user_id: "p1001", user_type: _user__WEBPACK_IMPORTED_MODULE_2__["User_Type"].patient, username: "sukhi", password: "sukhi123" },
            { user_id: "h2000", user_type: _user__WEBPACK_IMPORTED_MODULE_2__["User_Type"].hospital, username: "namrata", password: "namrata123" },
            { user_id: "h2001", user_type: _user__WEBPACK_IMPORTED_MODULE_2__["User_Type"].hospital, username: "sanka", password: "sanka123" },
            { user_id: "b3000", user_type: _user__WEBPACK_IMPORTED_MODULE_2__["User_Type"].buyer, username: "vamsi", password: "vamsi123" },
            { user_id: "b3001", user_type: _user__WEBPACK_IMPORTED_MODULE_2__["User_Type"].buyer, username: "musa", password: "musa123" }
        ];
        this.patients = [{ user_id: "p1000", name: "Parag Shrestha", dob: "11/11/1990", blood_type: "A+",
                contact_number: "0445566778", email: "abc@goas.com", gender: _patient_patient__WEBPACK_IMPORTED_MODULE_3__["Gender"].male, address: "Main St, Blackburn" }];
        this.hospitals = [{ user_id: "h2000", name: "ABC Hospital", contact_number: "102456214", abn: 112234,
                address: "high st, boxhill", website: "www.abchospital.com.au", email: "hospita@abc.com" }];
        this.buyers = [{ user_id: "b3000", name: "XYZ Research Facility", contact_number: "998877450", abn: 122558,
                address: "bourke st, flinders", website: "www.researchfacility.com.au", email: "facility@research.com" }];
    }
    ;
    UserService.prototype.doLogin = function (un, pw) {
        if (this.users.filter(function (e) { return e.username == un; }).length > 0) {
            if (this.users.filter(function (e) { return e.username == un && e.password == pw; }).length > 0) {
                console.log("login successful");
            }
            else {
                console.log("incorrect password");
            }
        }
        else {
            console.log("username not found");
        }
        return "";
    };
    UserService.prototype.doRegistration = function (formItem) {
        if (formItem.usertype == "patient") {
            var newUser = { user_id: "p1234", user_type: formItem.usertype, username: formItem.username, password: formItem.password };
            this.users.push(newUser);
            this.patients.push({ user_id: "p1234",
                name: formItem.name,
                dob: formItem.dob,
                blood_type: formItem.bloodtype,
                contact_number: formItem.contact,
                address: formItem.address,
                email: formItem.email,
                gender: formItem.gender });
        }
        else if (formItem.usertype == "hospital") {
            var newUser = { user_id: "h1234", user_type: formItem.usertype, username: formItem.username, password: formItem.password };
            this.users.push(newUser);
            this.hospitals.push({ user_id: "h1234",
                name: formItem.name,
                contact_number: formItem.contact,
                address: formItem.address,
                email: formItem.email,
                website: formItem.website,
                abn: formItem.abn
            });
        }
        else if (formItem.usertype == "buyer") {
            var newUser = { user_id: "b1234", user_type: formItem.usertype, username: formItem.username, password: formItem.password };
            this.users.push(newUser);
            this.buyers.push({ user_id: "b1234",
                name: formItem.name,
                contact_number: formItem.contact,
                address: formItem.address,
                email: formItem.email,
                website: formItem.website,
                abn: formItem.abn
            });
        }
        console.log(this.users);
        console.log(this.patients);
        console.log(this.hospitals);
        console.log(this.buyers);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.ts":
/*!******************************!*\
  !*** ./src/app/user/user.ts ***!
  \******************************/
/*! exports provided: User_Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User_Type", function() { return User_Type; });
var User_Type;
(function (User_Type) {
    User_Type["patient"] = "patient";
    User_Type["hospital"] = "hospital";
    User_Type["buyer"] = "buyer";
})(User_Type || (User_Type = {}));


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Namrata\Trimester 2\Project Analysis and Design\Code\Parag_code\mycontext\mycontext-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map