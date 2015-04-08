(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".float-button {\r\n    position: fixed;\r\n    bottom: 40px;\r\n    right: 40px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>Photos Album</span>\r\n</mat-toolbar>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\" >\r\n  <app-post *ngFor=\"let p of posts\" [post]=\"p\"></app-post>\r\n</div>\r\n\r\n<button mat-fab color=\"primary\" class=\"float-button\" (click)=\"openDialog()\">\r\n  <mat-icon>add</mat-icon>\r\n</button>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-dialog/post-dialog.component */ "./src/app/post-dialog/post-dialog.component.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, postService) {
        this.dialog = dialog;
        this.postService = postService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.posts = this.postService.posts;
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_2__["PostDialogComponent"], {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.postService.save(result.post, result.arquivo);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./post-dialog/post-dialog.component */ "./src/app/post-dialog/post-dialog.component.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"],
                _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_18__["PostDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
            ],
            providers: [
                _post_service__WEBPACK_IMPORTED_MODULE_19__["PostService"]
            ],
            entryComponents: [
                _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_18__["PostDialogComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/post-dialog/post-dialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/post-dialog/post-dialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-dialog/post-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/post-dialog/post-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around left\">\r\n  <div fxLaylout=\"row\" fxLayoutAlign=\"space-between\">\r\n    <mat-form-field fxFlex=\"50\">\r\n      <input matInput placeholder=\"Your name\" [(ngModel)]=\"dados.post.name\">\r\n      <mat-hint>Type your name</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field fxFlex=\"40\">\r\n        <input matInput placeholder=\"Your email\"  [(ngModel)]=\"dados.post.email\">\r\n        <mat-hint>Type your email</mat-hint>\r\n      </mat-form-field>\r\n  </div>\r\n\r\n  <div fxLaylout=\"row\" fxLayoutAlign=\"space-between\">\r\n      <mat-form-field fxFlex=\"50\">\r\n        <input matInput placeholder=\"Title of the message\"  \r\n               [(ngModel)]=\"dados.post.title\">\r\n      </mat-form-field>\r\n  \r\n      <mat-form-field fxFlex=\"40\">\r\n          <input matInput placeholder=\"Subtitle of the message\"  \r\n                 [(ngModel)]=\"dados.post.subtitle\">\r\n      </mat-form-field>\r\n  </div>  \r\n  <mat-form-field>\r\n    <textarea matInput placeholder=\"Type the content of your message \"  \r\n              [(ngModel)]=\"dados.post.message\"></textarea>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<input type=\"file\" style=\"display: none;\" \r\n      (change)=\"changedfile($event)\" #fileinput>\r\n\r\n<button mat-stroked-button color=\"primary\" (click)=\"fileinput.click()\">\r\n  <mat-icon>add_a_photo</mat-icon>\r\n  Add a Photo\r\n</button>\r\n<p *ngIf=\"filename!=''\">\r\n  <strong>File: </strong>{{filename}}\r\n  <mat-icon color=\"primary\">done</mat-icon>\r\n</p>\r\n\r\n<br><br>\r\n\r\n<div style=\"text-align: center;\">\r\n  <button mat-button color=\"primary\" (click)=\"save()\">OK</button>\r\n  <button mat-button color=\"warn\" (click)=\"cancel()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/post-dialog/post-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/post-dialog/post-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: PostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDialogComponent", function() { return PostDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post */ "./src/app/post.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostDialogComponent = /** @class */ (function () {
    function PostDialogComponent(dialogref) {
        this.dialogref = dialogref;
        this.filename = '';
        this.dados = {
            post: new _post__WEBPACK_IMPORTED_MODULE_2__["Post"]("", "", "", "", "", ""),
            arquivo: null
        };
    }
    PostDialogComponent.prototype.ngOnInit = function () {
    };
    PostDialogComponent.prototype.changedfile = function (event) {
        // console.log(event.target.files[0]);
        this.filename = event.target.files[0].name;
        this.dados.arquivo = event.target.files[0];
    };
    PostDialogComponent.prototype.save = function () {
        this.dialogref.close(this.dados);
    };
    PostDialogComponent.prototype.cancel = function () {
        this.dialogref.close(null);
    };
    PostDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-dialog',
            template: __webpack_require__(/*! ./post-dialog.component.html */ "./src/app/post-dialog/post-dialog.component.html"),
            styles: [__webpack_require__(/*! ./post-dialog.component.css */ "./src/app/post-dialog/post-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], PostDialogComponent);
    return PostDialogComponent;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./src/app/post.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(http) {
        var _this = this;
        this.http = http;
        this.posts = [];
        this.http.get("/api/").subscribe(function (posts) {
            for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                var p = posts_1[_i];
                _this.posts.push(new _post__WEBPACK_IMPORTED_MODULE_2__["Post"](p.name, p.title, p.subtitle, p.email, p.message, p.file, p.id, p.likes));
            }
        });
    }
    PostService.prototype.save = function (post, file) {
        var _this = this;
        var uploadData = new FormData();
        uploadData.append('name', post.name);
        uploadData.append('email', post.email);
        uploadData.append('title', post.title);
        uploadData.append('subtitle', post.subtitle);
        uploadData.append('message', post.message);
        uploadData.append('file', file, file.name);
        this.http.post("/api", uploadData, { reportProgress: true, observe: 'events' })
            .subscribe(function (event) {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                // console.log(event);
                var p = event.body;
                _this.posts.push(new _post__WEBPACK_IMPORTED_MODULE_2__["Post"](p.name, p.title, p.subtitle, p.email, p.message, p.file, p.id, p.likes));
            }
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                console.log('UploadProgress');
                console.log(event);
            }
        });
    };
    PostService.prototype.like = function (id) {
        var _this = this;
        this.http.get('/api/like/' + id)
            .subscribe(function (event) {
            var p = _this.posts.find(function (p) { return p.id == id; });
            p.likes = event.likes;
        });
    };
    PostService.prototype.delete = function (id) {
        var _this = this;
        this.http.delete("/api/" + id)
            .subscribe(function (event) {
            // console.log(event);
            var i = _this.posts.findIndex(function (p) { return p.id == id; });
            if (i >= 0)
                _this.posts.splice(i, 1);
        });
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/post.ts":
/*!*************************!*\
  !*** ./src/app/post.ts ***!
  \*************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(name, title, subtitle, email, message, file, id, likes) {
        this.name = name;
        this.title = title;
        this.subtitle = subtitle;
        this.email = email;
        this.message = message;
        this.file = file;
        this.id = id;
        this.likes = likes;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    max-width: 300px;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxFlex class=\"card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar></div>\r\n    <mat-card-title>{{post.title}}</mat-card-title>\r\n    <mat-card-subtitle>{{post.subtitle}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <img mat-card-image src=\"/storage/{{post.file}}\" alt=\"Photo of a Shiba Inu\">\r\n  <mat-card-content>\r\n    <p>\r\n      {{post.message}}\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button (click)=\"like()\">\r\n      <mat-icon disabled aria-label=\"Like this photo\" *ngIf=\"post.likes===0\" [matBadge]=\"post.likes\" \r\n        matBadgeOverlap=\"false\" color=\"\">favorite_bord</mat-icon>\r\n      <mat-icon color=\"warn\" *ngIf=\"post.likes>0\" [matBadge]=\"post.likes\" \r\n        matBadgeColor=\"warn\" matBadgeOverlap=\"false\">favorite</mat-icon>\r\n    </button>\r\n    <button mat-button color=\"accent\" (click)=\"delete()\" color=\"warn\">APAGAR</button>\r\n    <a mat-button color=\"primary\" href=\"/storage/{{post.file}}\" download>\r\n      <mat-icon>cloud_download</mat-icon>\r\n    </a>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post */ "./src/app/post.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = /** @class */ (function () {
    function PostComponent(postService) {
        this.postService = postService;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.like = function () {
        this.postService.like(this.post.id);
    };
    PostComponent.prototype.delete = function () {
        this.postService.delete(this.post.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _post__WEBPACK_IMPORTED_MODULE_1__["Post"])
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostComponent);
    return PostComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pablo\Desktop\album\album-laravel-angular\resources\assets\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map