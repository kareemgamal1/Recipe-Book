"use strict";
(self["webpackChunkfirstAngular"] = self["webpackChunkfirstAngular"] || []).push([["src_app_Components_recipes_recipes_module_ts"],{

/***/ 8642:
/*!***********************************************!*\
  !*** ./src/app/Components/auth/auth.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 2734);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.user.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            const isAuth = !!user;
            if (isAuth)
                return true;
            return this.router.createUrlTree(['auth']);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3012:
/*!*****************************************************************************!*\
  !*** ./src/app/Components/recipes/recipe-detail/recipe-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailComponent": () => (/* binding */ RecipeDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipe.service */ 3253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dropdown.directive */ 6447);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function RecipeDetailComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ingredient_r1.name, " ", ingredient_r1.amount, " ");
} }
class RecipeDetailComponent {
    constructor(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.state = 'normal';
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.state = this.state == 'normal' ? 'changed' : 'normal';
            console.log(this.state);
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }
    onAddToShoppingList() {
        this.recipeService.addIngredients(this.recipe.ingredients);
    }
    onEdit() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
    onDelete() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['./recipes']);
    }
}
RecipeDetailComponent.ɵfac = function RecipeDetailComponent_Factory(t) { return new (t || RecipeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
RecipeDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecipeDetailComponent, selectors: [["app-recipe-detail"]], inputs: { recipe: "recipe" }, decls: 31, vars: 6, consts: [[1, "row"], [1, "col-xs-12"], ["height", "500px", 3, "src", "alt"], ["appDropdown", "", 1, "btn-group"], [1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], [2, "cursor", "pointer", 3, "click"], [3, "click"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]], template: function RecipeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0)(9, "div", 1)(10, "div", 3)(11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Manage Recipe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6)(15, "li")(16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_16_listener() { return ctx.onAddToShoppingList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "To Shopping list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li")(19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_19_listener() { return ctx.onEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Edit Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li")(22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_22_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Delete Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 0)(25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 0)(28, "div", 1)(29, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, RecipeDetailComponent_li_30_Template, 2, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@recipeSelected", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.recipe.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipe.ingredients);
    } }, dependencies: [_shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('recipeSelected', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('normal', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    opacity: 1,
                    transform: 'translateX(0)',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('changed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    opacity: 1,
                    transform: 'translateX(0)',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('normal<=>changed', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0, transform: 'translateX(-2%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('500ms 1ms ease-out'),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 4344:
/*!*************************************************************************!*\
  !*** ./src/app/Components/recipes/recipe-edit/recipe-edit.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeEditComponent": () => (/* binding */ RecipeEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipe.service */ 3253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function RecipeEditComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20)(6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeEditComponent_div_31_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onIngredientDeleted(i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r3);
} }
class RecipeEditComponent {
    constructor(route, router, recipeService) {
        this.route = route;
        this.router = router;
        this.recipeService = recipeService;
        this.editMode = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
    }
    initForm() {
        let recipeName = '';
        let recipeImgPath = '';
        let recipeDescription = '';
        let recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([]);
        if (this.editMode) {
            const recipe = this.recipeService.getRecipe(this.id);
            console.log(`${recipe}`);
            recipeName = recipe.name;
            recipeImgPath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                for (const ingredient of recipe.ingredients) {
                    recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
                        amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(ingredient.amount, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^[1-9]+[0-9]*$/),
                        ]),
                    }));
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            imagePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(recipeImgPath, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            ingredients: recipeIngredients,
        });
    }
    onAddIngredient() {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^[1-9]+[0-9]*$/),
            ]),
        }));
    }
    onReturn() {
        if (this.editMode)
            this.router.navigate(['./recipes', this.id]);
        else
            this.router.navigate(['./recipes']);
    }
    onSubmit() {
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.onReturn();
    }
    onCancel() {
        this.onReturn();
    }
    onIngredientDeleted(ingredientIndex) {
        this.recipeForm.get('ingredients').removeAt(ingredientIndex);
    }
    get controls() {
        return this.recipeForm.get('ingredients').controls;
    }
}
RecipeEditComponent.ɵfac = function RecipeEditComponent_Factory(t) { return new (t || RecipeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService)); };
RecipeEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipeEditComponent, selectors: [["app-recipe-edit"]], decls: 37, vars: 4, consts: [[1, "row"], [1, "col-xs-12"], [3, "formGroup", "ngSubmit"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "imagePath"], ["type", "text", "id", "imagePath", "formControlName", "imagePath", 1, "form-control"], ["imagePath", ""], ["alt", "", 1, "img-responsive", 3, "src"], ["for", "description"], ["name", "description", "id", "description", "rows", "6", "formControlName", "description", 1, "form-control"], ["formArrayName", "ingredients", 1, "col-xs-12"], ["class", "row", "style", "margin-top:10px;", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "row", 2, "margin-top", "10px", 3, "formGroupName"], [1, "col-xs-8"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "col-xs-2"], ["type", "number", "formControlName", "amount", 1, "form-control"]], template: function RecipeEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RecipeEditComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeEditComponent_Template_button_click_7_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "div", 5)(12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 0)(16, "div", 1)(17, "div", 5)(18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 9, 10)(22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 0)(24, "div", 1)(25, "div", 5)(26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 0)(30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RecipeEditComponent_div_31_Template, 8, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 0)(34, "div", 1)(35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeEditComponent_Template_button_click_35_listener() { return ctx.onAddIngredient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Add Ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.recipeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.recipeForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _r0.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.controls);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName], styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcV2ViJTIwRGV2XFxXZWIlMjBQcm9qZWN0c1xcQW5ndWxhciUyMHByb2plY3RzXFxmaXJzdEFuZ3VsYXJcXHNyY1xcYXBwXFxDb21wb25lbnRzXFxyZWNpcGVzXFxyZWNpcGUtZWRpdFxccmVjaXBlLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUscUJBQUE7QUNDRiIsImZpbGUiOiJyZWNpcGUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuIiwiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSJdfQ== */"] });


/***/ }),

/***/ 474:
/*!*************************************************************************************!*\
  !*** ./src/app/Components/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeItemComponent": () => (/* binding */ RecipeItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function (a0) { return [a0]; };
class RecipeItemComponent {
    constructor() { }
}
RecipeItemComponent.ɵfac = function RecipeItemComponent_Factory(t) { return new (t || RecipeItemComponent)(); };
RecipeItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeItemComponent, selectors: [["app-recipe-item"]], inputs: { recipe: "recipe", index: "index" }, decls: 8, vars: 7, consts: [["routerLinkActive", "active", 1, "list-group-item", "clearfix", 3, "routerLink"], [1, "pull-left"], [1, "list-group-item-heading"], [1, "list-group-item-text"], [1, "pull-right"], [2, "max-height", "50px", 3, "src", "alt"]], template: function RecipeItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.index));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.name);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtaXRlbS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 767:
/*!*************************************************************************!*\
  !*** ./src/app/Components/recipes/recipe-list/recipe-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeListComponent": () => (/* binding */ RecipeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipe.service */ 3253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ 474);






function RecipeListComponent_app_recipe_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-recipe-item", 3);
} if (rf & 2) {
    const recipeEl_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("recipe", recipeEl_r1)("index", i_r2)("@recipe", undefined);
} }
class RecipeListComponent {
    constructor(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.recipeService.recipesChanged.subscribe((recipes) => {
            this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    }
}
RecipeListComponent.ɵfac = function RecipeListComponent_Factory(t) { return new (t || RecipeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
RecipeListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecipeListComponent, selectors: [["app-recipe-list"]], decls: 3, vars: 1, consts: [[1, "row"], [1, "col-s-12"], [3, "recipe", "index", 4, "ngFor", "ngForOf"], [3, "recipe", "index"]], template: function RecipeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RecipeListComponent_app_recipe_item_2_Template, 1, 3, "app-recipe-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_1__.RecipeItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('recipe', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    opacity: 1,
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0, transition: 'transformX(-5%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(1000),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('* => void', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('500ms 0.1s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0, transition: 'transformX(-5%)' })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 4842:
/*!***************************************************************************!*\
  !*** ./src/app/Components/recipes/recipe-start/recipe-start.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeStartComponent": () => (/* binding */ RecipeStartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipe.service */ 3253);


class RecipeStartComponent {
    constructor(RecipeService) {
        this.RecipeService = RecipeService;
        this.message = 'Please Select Recipe!';
        if (this.RecipeService.getRecipes().length === 0) {
            this.message = 'Please add/fetch recipes!';
        }
        else {
        }
    }
}
RecipeStartComponent.ɵfac = function RecipeStartComponent_Factory(t) { return new (t || RecipeStartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService)); };
RecipeStartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipeStartComponent, selectors: [["app-recipe-start"]], decls: 2, vars: 1, template: function RecipeStartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1498:
/*!****************************************************************!*\
  !*** ./src/app/Components/recipes/recipes-resolver.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesResolverService": () => (/* binding */ RecipesResolverService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/data-storage.service */ 7667);
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.service */ 3253);



class RecipesResolverService {
    constructor(DataStorage, RecipeService) {
        this.DataStorage = DataStorage;
        this.RecipeService = RecipeService;
    }
    resolve(route, state) {
        const recipes = this.RecipeService.getRecipes();
        if (recipes.length === 0) {
            return this.DataStorage.fetchRecipes();
        }
        else {
            return recipes;
        }
    }
}
RecipesResolverService.ɵfac = function RecipesResolverService_Factory(t) { return new (t || RecipesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_0__.DataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_recipe_service__WEBPACK_IMPORTED_MODULE_1__.RecipeService)); };
RecipesResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RecipesResolverService, factory: RecipesResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3416:
/*!**************************************************************!*\
  !*** ./src/app/Components/recipes/recipes-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesRoutingModule": () => (/* binding */ RecipesRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.guard */ 8642);
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ 3012);
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ 4344);
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ 4842);
/* harmony import */ var _recipes_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes-resolver.service */ 1498);
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes.component */ 1586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    {
        path: '',
        component: _recipes_component__WEBPACK_IMPORTED_MODULE_5__.RecipesComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: [
            { path: '', component: _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_3__.RecipeStartComponent },
            {
                path: 'new',
                component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__.RecipeEditComponent,
                data: { animation: 'recipeNew' },
            },
            {
                path: ':id',
                component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__.RecipeDetailComponent,
                resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_4__.RecipesResolverService],
                data: { animation: 'recipeDetail' },
            },
            {
                path: ':id/edit',
                component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__.RecipeEditComponent,
                resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_4__.RecipesResolverService],
                data: { animation: 'recipeEdit' },
            },
        ],
    },
];
class RecipesRoutingModule {
}
RecipesRoutingModule.ɵfac = function RecipesRoutingModule_Factory(t) { return new (t || RecipesRoutingModule)(); };
RecipesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RecipesRoutingModule });
RecipesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RecipesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 1586:
/*!*********************************************************!*\
  !*** ./src/app/Components/recipes/recipes.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesComponent": () => (/* binding */ RecipesComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/data-storage.service */ 7667);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ 767);





class RecipesComponent {
    constructor(dataStorage, router, route, contexts) {
        this.dataStorage = dataStorage;
        this.router = router;
        this.route = route;
        this.contexts = contexts;
        this.state = 'normal';
        this.id = 0;
    }
    onChangeState() {
        this.state = this.state == 'normal' ? 'changed' : 'normal';
    }
    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
        this.onChangeState();
    }
    getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}
RecipesComponent.ɵfac = function RecipesComponent_Factory(t) { return new (t || RecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_0__.DataStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ChildrenOutletContexts)); };
RecipesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecipesComponent, selectors: [["app-recipes"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-xs-12"], [3, "click"], [1, "col-md-5"], [1, "col-md-7"], [1, "test"]], template: function RecipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipesComponent_Template_button_click_2_listener() { return ctx.onNewRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "New Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-recipe-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 5)(10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@routeAnimations", ctx.getRouteAnimationData());
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__.RecipeListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVzLmNvbXBvbmVudC5jc3MifQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('recipes', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('normal', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    opacity: 1,
                    transform: 'translateX(0)',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void=>*', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0.8s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(-3%)',
                            opacity: 0,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(-1.5%)',
                            opacity: 0.5,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(-0.5%)',
                            opacity: 0.7,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(0)',
                            opacity: 1,
                        }),
                    ])),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('*=>void', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 0, transform: 'translateX(-3%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(500),
                ]),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('routeAnimations', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('normal', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    opacity: 1,
                    transform: 'translateX(0)',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('*<=>*', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0.8s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(-3%)',
                            opacity: 0,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(-1.5%)',
                            opacity: 0.5,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(-0.5%)',
                            opacity: 0.7,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(0)',
                            opacity: 1,
                        }),
                    ])),
                ]),
                // transition('recipeDetail<=>recipeDetail'),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void=>*', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0.8s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(-3%)',
                            opacity: 0,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(-1.5%)',
                            opacity: 0.5,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(-0.5%)',
                            opacity: 0.7,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                            transform: 'translateX(0)',
                            opacity: 1,
                        }),
                    ])),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('*=>void', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({ opacity: 0, transform: 'translateX(-2%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(500),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 1531:
/*!******************************************************!*\
  !*** ./src/app/Components/recipes/recipes.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesModule": () => (/* binding */ RecipesModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 8);
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ 3012);
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ 4344);
/* harmony import */ var _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-list/recipe-item/recipe-item.component */ 474);
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ 767);
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ 4842);
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes-routing.module */ 3416);
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes.component */ 1586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class RecipesModule {
}
RecipesModule.ɵfac = function RecipesModule_Factory(t) { return new (t || RecipesModule)(); };
RecipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RecipesModule });
RecipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _recipes_routing_module__WEBPACK_IMPORTED_MODULE_6__.RecipesRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RecipesModule, { declarations: [_recipes_component__WEBPACK_IMPORTED_MODULE_7__.RecipesComponent,
        _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__.RecipeListComponent,
        _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__.RecipeDetailComponent,
        _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_3__.RecipeItemComponent,
        _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__.RecipeStartComponent,
        _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__.RecipeEditComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _recipes_routing_module__WEBPACK_IMPORTED_MODULE_6__.RecipesRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_Components_recipes_recipes_module_ts.js.map