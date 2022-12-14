"use strict";
(self["webpackChunkfirstAngular"] = self["webpackChunkfirstAngular"] || []).push([["src_app_Components_shopping-list_shopping_module_ts"],{

/***/ 362:
/*!*******************************************************!*\
  !*** ./src/app/Components/shared/ingredient.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ingredient": () => (/* binding */ Ingredient)
/* harmony export */ });
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


/***/ }),

/***/ 1422:
/*!***********************************************************************************!*\
  !*** ./src/app/Components/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingEditComponent": () => (/* binding */ ShoppingEditComponent)
/* harmony export */ });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ingredient.model */ 362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping.service */ 3412);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




const _c0 = ["nameInput"];
const _c1 = ["amountInput"];
const _c2 = ["f"];
class ShoppingEditComponent {
    constructor(shoppingService) {
        this.shoppingService = shoppingService;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscribtion = this.shoppingService.startedEditing.subscribe((index) => {
            this.editItemIndex = index;
            this.editItem = this.shoppingService.getIngredient(index);
            this.editMode = true;
            this.slForm.setValue({
                name: this.editItem.name,
                amount: this.editItem.amount,
            });
        });
    }
    onAddItem(f) {
        const value = f.value;
        const newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__.Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
        }
        else {
            this.shoppingService.onItemAdded(newIngredient);
        }
        this.resetForm();
    }
    onDeleteItem(f) {
        const value = f.value;
        const newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__.Ingredient(value.name, value.amount);
        this.shoppingService.onItemDeleted(newIngredient);
        this.resetForm();
    }
    onClearItem(f) {
        this.resetForm();
    }
    resetForm() {
        this.slForm.reset();
        this.editMode = false;
    }
}
ShoppingEditComponent.??fac = function ShoppingEditComponent_Factory(t) { return new (t || ShoppingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shopping_service__WEBPACK_IMPORTED_MODULE_1__.ShoppingService)); };
ShoppingEditComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ShoppingEditComponent, selectors: [["app-shopping-edit"]], viewQuery: function ShoppingEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.nameInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.amountInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.slForm = _t.first);
    } }, decls: 23, vars: 3, consts: [[1, "row"], [1, "col-xs-12"], [3, "ngSubmit"], ["f", "ngForm"], [1, "col-sm-5", "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "ngModel", "", "required", "", 1, "form-control"], ["nameInput", ""], [1, "col-sm-2", "form-group"], ["for", "amount"], ["type", "number", "id", "amount", "name", "amount", "ngModel", "", "required", "", "pattern", "^[1-9]+[0-9]*$", 1, "form-control"], ["amountInput", ""], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ShoppingEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function ShoppingEditComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx.onAddItem(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 0)(5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 8)(11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 0)(16, "div", 1)(17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ShoppingEditComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx.onAddItem(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ShoppingEditComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx.onDeleteItem(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ShoppingEditComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx.onClearItem(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.editMode ? "Update" : "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.editMode);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 388:
/*!*********************************************************************!*\
  !*** ./src/app/Components/shopping-list/shopping-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingListComponent": () => (/* binding */ ShoppingListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping.service */ 3412);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ 1422);





function ShoppingListComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ShoppingListComponent_a_5_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resetView"](ctx_r3.onEditItem(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate2"](" ", ingredient_r1.name, " (", ingredient_r1.amount, ")");
} }
class ShoppingListComponent {
    constructor(shoppingService) {
        this.shoppingService = shoppingService;
    }
    ngOnInit() {
        this.ingredients = this.shoppingService.getIngredients();
        this.ingredientsChanged = this.shoppingService.ingredientsChanged.subscribe((Ingredient) => {
            this.ingredients = Ingredient;
        });
    }
    ngOnDestroy() {
        this.ingredientsChanged.unsubscribe();
    }
    onEditItem(index) {
        this.shoppingService.startedEditing.next(index);
    }
}
ShoppingListComponent.??fac = function ShoppingListComponent_Factory(t) { return new (t || ShoppingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shopping_service__WEBPACK_IMPORTED_MODULE_0__.ShoppingService)); };
ShoppingListComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ShoppingListComponent, selectors: [["app-shopping-list"]], decls: 6, vars: 2, consts: [[1, "row"], [1, "col-xs-10"], [1, "list-grop"], ["class", "list-group-item", "style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 2, "cursor", "pointer", 3, "click"]], template: function ShoppingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "app-shopping-edit")(3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, ShoppingListComponent_a_5_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("@shoppingList", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.ingredients);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_1__.ShoppingEditComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('shoppingList', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    opacity: 1,
                    transition: 'transformX(0)',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 0, transition: 'transformX(-5%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(500),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => void', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('500ms 0.1s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 0, transition: 'transformX(-5%)' })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 712:
/*!*********************************************************************!*\
  !*** ./src/app/Components/shopping-list/shopping-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingRoutingModule": () => (/* binding */ ShoppingRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-list.component */ 388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{ path: '', component: _shopping_list_component__WEBPACK_IMPORTED_MODULE_0__.ShoppingListComponent }];
class ShoppingRoutingModule {
}
ShoppingRoutingModule.??fac = function ShoppingRoutingModule_Factory(t) { return new (t || ShoppingRoutingModule)(); };
ShoppingRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: ShoppingRoutingModule });
ShoppingRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ShoppingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3144:
/*!*************************************************************!*\
  !*** ./src/app/Components/shopping-list/shopping.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingModule": () => (/* binding */ ShoppingModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 8);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shopping_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-routing.module */ 712);
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.component */ 388);
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ 1422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class ShoppingModule {
}
ShoppingModule.??fac = function ShoppingModule_Factory(t) { return new (t || ShoppingModule)(); };
ShoppingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: ShoppingModule });
ShoppingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shopping_routing_module__WEBPACK_IMPORTED_MODULE_1__.ShoppingRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](ShoppingModule, { declarations: [_shopping_list_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingListComponent, _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_3__.ShoppingEditComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shopping_routing_module__WEBPACK_IMPORTED_MODULE_1__.ShoppingRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_Components_shopping-list_shopping_module_ts.js.map