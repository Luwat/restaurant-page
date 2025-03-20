/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    width: 100%;
    height: 100vh;
    gap: 50px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/ cover fixed;
    font-family: Arial, Helvetica, sans-serif;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
body::-webkit-scrollbar {
    display: none;
}
#content {
    display: flex;
    flex-direction: column;
    width: inherit;
    height: inherit;
}
nav {
    position: sticky;
    text-align: center;
    width: 100%;
    height: 80px;
    background-color: #f8f8f8;
}
ul {
    display: flex;
    justify-content: center;
    font-size: 24px;
}
.nav-btn {
list-style: none; 
}
.nav-btn a {
    text-decoration: none;
    display: block;
    width: 150px;
    height: 80px;
    color: #028888;
    padding: 20px 0;
}
.nav-btn a:hover {
    background-color: #02202090;
    color: #f8f8f8;
}
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1 0 auto;
    color: #f8f8f8;
}
.div, .card {
    width: 50%;
    height: 300px;
    background-color: #022020cc;
    border-radius: 15px;
    box-shadow: 0 0 5px 1px #022020,
    inset 0 0 10px 5px, 
            inset 0 0 5px 10px #022020;
}
.div {
    text-align: center;
    padding: 50px;
}
.cards{
    width: 100%;
    margin: auto;
}
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 50px auto;
}
.menu-img {
    width: 30%;
    padding-left: 30px;
}
.menu-img img {
    width: 100%;
    height: auto;
    border-radius: 50%;
}
.menu-desc{
    width: 70%;
    padding: 15px;
}
.menu-desc h3 {
    text-align: center;
    font-size: xx-large;
    margin-bottom: 20px;
}
.menu-desc h3, .div h1 {
    color: #ffd700;
}
.menu-desc p, .div p {
    font-size: large;
}
h1 {
    font-size: 40px;
    margin-bottom: 30px;
}
@media screen and (max-width: 968px) {
    .div, .card {
        width: 70%;
        height: 300px;
    }
}
@media screen and (max-width: 767px) {
    .div, .card {
        width: 70%;
        height: 280px;
    }
    .card {
        gap: 5px;
    }
    .div h1 {
        font-size: x-large;
    }

    .menu-desc h3 {
        font-size: x-large;
        margin-bottom: 20px;
    }
    .menu-desc p, .div p {
        font-size: 16px;
    }
    .menu-img {
        width: 40%;
        padding-left: 15px;
    }
    .menu-desc{
        width: 60%;
    }
}
@media screen and (max-width: 480px) {
    .nav-btn a {
        width: 90px;
    }

    .div, .card {
        width: 90%;
        height: 230px;
    }

    .card {
        gap: 5px;
    }

    .div h1 {
        font-size: x-large;
    }

    .menu-desc h3 {
        font-size: large;
        margin-bottom: 20px;
    }
    .menu-desc p, .div p {
        font-size: small;
    }

    .menu-img {
        width: 35%;
        padding-left: 15px;
    }
    .menu-desc{
        width: 65%;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,aAAa;IACb,SAAS;IACT,uEAA8D;IAC9D,yCAAyC;IACzC,wBAAwB;IACxB,qBAAqB;AACzB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;AACA;AACA,gBAAgB;AAChB;AACA;IACI,qBAAqB;IACrB,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,cAAc;AAClB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,cAAc;IACd,cAAc;AAClB;AACA;IACI,UAAU;IACV,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB;;sCAEkC;AACtC;AACA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,cAAc;AAClB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI;QACI,UAAU;QACV,aAAa;IACjB;AACJ;AACA;IACI;QACI,UAAU;QACV,aAAa;IACjB;IACA;QACI,QAAQ;IACZ;IACA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;QAClB,mBAAmB;IACvB;IACA;QACI,eAAe;IACnB;IACA;QACI,UAAU;QACV,kBAAkB;IACtB;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI;QACI,WAAW;IACf;;IAEA;QACI,UAAU;QACV,aAAa;IACjB;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,gBAAgB;IACpB;;IAEA;QACI,UAAU;QACV,kBAAkB;IACtB;IACA;QACI,UAAU;IACd;AACJ","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody {\n    width: 100%;\n    height: 100vh;\n    gap: 50px;\n    background: url('./images/background.jpg') center/ cover fixed;\n    font-family: Arial, Helvetica, sans-serif;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\nbody::-webkit-scrollbar {\n    display: none;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    width: inherit;\n    height: inherit;\n}\nnav {\n    position: sticky;\n    text-align: center;\n    width: 100%;\n    height: 80px;\n    background-color: #f8f8f8;\n}\nul {\n    display: flex;\n    justify-content: center;\n    font-size: 24px;\n}\n.nav-btn {\nlist-style: none; \n}\n.nav-btn a {\n    text-decoration: none;\n    display: block;\n    width: 150px;\n    height: 80px;\n    color: #028888;\n    padding: 20px 0;\n}\n.nav-btn a:hover {\n    background-color: #02202090;\n    color: #f8f8f8;\n}\nmain {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex: 1 0 auto;\n    color: #f8f8f8;\n}\n.div, .card {\n    width: 50%;\n    height: 300px;\n    background-color: #022020cc;\n    border-radius: 15px;\n    box-shadow: 0 0 5px 1px #022020,\n    inset 0 0 10px 5px, \n            inset 0 0 5px 10px #022020;\n}\n.div {\n    text-align: center;\n    padding: 50px;\n}\n.cards{\n    width: 100%;\n    margin: auto;\n}\n.card {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    margin: 50px auto;\n}\n.menu-img {\n    width: 30%;\n    padding-left: 30px;\n}\n.menu-img img {\n    width: 100%;\n    height: auto;\n    border-radius: 50%;\n}\n.menu-desc{\n    width: 70%;\n    padding: 15px;\n}\n.menu-desc h3 {\n    text-align: center;\n    font-size: xx-large;\n    margin-bottom: 20px;\n}\n.menu-desc h3, .div h1 {\n    color: #ffd700;\n}\n.menu-desc p, .div p {\n    font-size: large;\n}\nh1 {\n    font-size: 40px;\n    margin-bottom: 30px;\n}\n@media screen and (max-width: 968px) {\n    .div, .card {\n        width: 70%;\n        height: 300px;\n    }\n}\n@media screen and (max-width: 767px) {\n    .div, .card {\n        width: 70%;\n        height: 280px;\n    }\n    .card {\n        gap: 5px;\n    }\n    .div h1 {\n        font-size: x-large;\n    }\n\n    .menu-desc h3 {\n        font-size: x-large;\n        margin-bottom: 20px;\n    }\n    .menu-desc p, .div p {\n        font-size: 16px;\n    }\n    .menu-img {\n        width: 40%;\n        padding-left: 15px;\n    }\n    .menu-desc{\n        width: 60%;\n    }\n}\n@media screen and (max-width: 480px) {\n    .nav-btn a {\n        width: 90px;\n    }\n\n    .div, .card {\n        width: 90%;\n        height: 230px;\n    }\n\n    .card {\n        gap: 5px;\n    }\n\n    .div h1 {\n        font-size: x-large;\n    }\n\n    .menu-desc h3 {\n        font-size: large;\n        margin-bottom: 20px;\n    }\n    .menu-desc p, .div p {\n        font-size: small;\n    }\n\n    .menu-img {\n        width: 35%;\n        padding-left: 15px;\n    }\n    .menu-desc{\n        width: 65%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Contact = (() => {
    const div =  document.createElement('div');
        div.setAttribute('class', 'div');
    const _h1 = document.createElement('h1');
        _h1.setAttribute('class', 'headline');
        _h1.textContent = 'Please contact us for more details about our services';
    const _p = document.createElement('p');
        _p.textContent = '08083334453';

        div.appendChild(_h1);
        div.appendChild(_p);

        const createDiv = () => {
            return div
        }
    return {
        createDiv,
    }
})();

const contact = Contact.createDiv();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Home = (() => {
    const div =  document.createElement('div');
        div.setAttribute('class', 'div');
    const _h1 = document.createElement('h1');
        _h1.setAttribute('class', 'headline');
        _h1.textContent = 'Welcome to the home of spices';
    const _p = document.createElement('p');
        _p.textContent = 'We are delighted to have you, We give a blend of pleasure and medicine for your utmost wellbeing.';

        div.appendChild(_h1);
        div.appendChild(_p);

        const createDiv = () => {
            return div
        }
    return {
        createDiv,
    }
})();

const headline = Home.createDiv();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headline);



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_CPS_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/CPS.jpg */ "./src/images/CPS.jpg");
/* harmony import */ var _images_GMPS_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/GMPS.jpeg */ "./src/images/GMPS.jpeg");
/* harmony import */ var _images_eps_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/eps.jpg */ "./src/images/eps.jpg");
/* harmony import */ var _images_OPS_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/OPS.jpg */ "./src/images/OPS.jpg");
/* harmony import */ var _images_CLPS_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/CLPS.jpg */ "./src/images/CLPS.jpg");
/* harmony import */ var _images_CFPS_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/CFPS.jpg */ "./src/images/CFPS.jpg");







const Menu = (() => {

    const _menuBox = document.createElement('div');
    _menuBox.classList.add('cards');

    const _menus = [
        {
            image: _images_CPS_jpg__WEBPACK_IMPORTED_MODULE_0__,
            heading: 'CHICKEN PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: _images_GMPS_jpeg__WEBPACK_IMPORTED_MODULE_1__,
            heading: 'GOAT MEAT PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: _images_eps_jpg__WEBPACK_IMPORTED_MODULE_2__,
            heading: 'EGUSI PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: _images_OPS_jpg__WEBPACK_IMPORTED_MODULE_3__,
            heading: 'OFFALS PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: _images_CLPS_jpg__WEBPACK_IMPORTED_MODULE_4__,
            heading: 'COW LEG PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: _images_CFPS_jpg__WEBPACK_IMPORTED_MODULE_5__,
            heading: 'CATFISH PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
    ];

    const appendMenu = () => {
        _menus.map(menu => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            
            const menuDesc = document.createElement('div');
            menuDesc.setAttribute('class', 'menu-desc');
            
            const menuImg = document.createElement('div');
            menuImg.setAttribute('class', 'menu-img');
            
            const img = document.createElement('img');
            img.src = menu.image;

            const heading = document.createElement('h3');
            heading.textContent = menu.heading;
            
            const desc = document.createElement('p');
            desc.textContent = menu.description;
            menuImg.appendChild(img)
            menuDesc.appendChild(heading);
            menuDesc.appendChild(desc);

            card.appendChild(menuImg);
            card.appendChild(menuDesc);

            return _menuBox.appendChild(card);
        });

        return _menuBox;
    }

    return {
        appendMenu,
    }
})();

const menu =  Menu.appendMenu();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact),
/* harmony export */   home: () => (/* binding */ home),
/* harmony export */   menu: () => (/* binding */ menu),
/* harmony export */   nav: () => (/* binding */ nav),
/* harmony export */   navBox: () => (/* binding */ navBox)
/* harmony export */ });
class Navbar {

    nav = document.createElement('nav');
    navBox = document.createElement('ul');
    navList = document.createElement('li');
    navLink = document.createElement('a');

    constructor(name, clas) {
        this.name = name;
        this.clas = clas
    }

    createLink() {

        this.navLink.textContent = this.name;
        this.navLink.setAttribute('href', `#${this.clas}`);
        this.navLink.setAttribute('class', this.clas);
        this.navList.setAttribute('class', 'nav-btn')
        this.navList.appendChild(this.navLink);

        return this.navBox.appendChild(this.navList);

    }
}

const nav = new Navbar().nav;
const navBox = new Navbar().navBox;

const home = new Navbar('Home', 'home').createLink();
const menu = new Navbar('Menu', 'menu').createLink();
const contact = new Navbar('Contact', 'contact').createLink();



/***/ }),

/***/ "./src/images/CFPS.jpg":
/*!*****************************!*\
  !*** ./src/images/CFPS.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8850c6a508e91f0cf2cf.jpg";

/***/ }),

/***/ "./src/images/CLPS.jpg":
/*!*****************************!*\
  !*** ./src/images/CLPS.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a8ea87de14836889167.jpg";

/***/ }),

/***/ "./src/images/CPS.jpg":
/*!****************************!*\
  !*** ./src/images/CPS.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5410b17f3d9fcbfdd99.jpg";

/***/ }),

/***/ "./src/images/GMPS.jpeg":
/*!******************************!*\
  !*** ./src/images/GMPS.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c85c55ee0985a0f2a0b1.jpeg";

/***/ }),

/***/ "./src/images/OPS.jpg":
/*!****************************!*\
  !*** ./src/images/OPS.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3461717b6c5984b601a.jpg";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b507d796787e73745c8d.jpg";

/***/ }),

/***/ "./src/images/eps.jpg":
/*!****************************!*\
  !*** ./src/images/eps.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "819151ffab22b55e35bb.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







const restaurantPage = () => {

    const element = document.querySelector('#content');
    const main = document.createElement('main');
    
    _navbar__WEBPACK_IMPORTED_MODULE_1__.navBox.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_1__.home);
    _navbar__WEBPACK_IMPORTED_MODULE_1__.navBox.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_1__.menu);
    _navbar__WEBPACK_IMPORTED_MODULE_1__.navBox.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_1__.contact);
    _navbar__WEBPACK_IMPORTED_MODULE_1__.nav.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_1__.navBox);
    main.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__["default"]);
    
    element.appendChild(_navbar__WEBPACK_IMPORTED_MODULE_1__.nav);
    element.appendChild(main);

    const btns = document.querySelectorAll('.nav-btn');

    return btns.forEach(btn => {
        btn.addEventListener('click', e => {
            if (e.target.textContent === 'Home') {

                if (main.contains(_menu__WEBPACK_IMPORTED_MODULE_3__["default"])) {
                    return main.replaceChild(_home__WEBPACK_IMPORTED_MODULE_2__["default"], _menu__WEBPACK_IMPORTED_MODULE_3__["default"])
                } else if (main.contains(_contact__WEBPACK_IMPORTED_MODULE_4__["default"])) {
                    return main.replaceChild(_home__WEBPACK_IMPORTED_MODULE_2__["default"], _contact__WEBPACK_IMPORTED_MODULE_4__["default"])
                } else {
                    return main.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__["default"]);
                }

            } else if (e.target.textContent === 'Menu') {

                if (main.contains(_home__WEBPACK_IMPORTED_MODULE_2__["default"])) {
                    return main.replaceChild(_menu__WEBPACK_IMPORTED_MODULE_3__["default"], _home__WEBPACK_IMPORTED_MODULE_2__["default"])
                } else if (main.contains(_contact__WEBPACK_IMPORTED_MODULE_4__["default"])) {
                    return main.replaceChild(_menu__WEBPACK_IMPORTED_MODULE_3__["default"], _contact__WEBPACK_IMPORTED_MODULE_4__["default"])
                } else {
                    return main.appendChild(_menu__WEBPACK_IMPORTED_MODULE_3__["default"]);
                }

            } else if (e.target.textContent === 'Contact') {
                
                if (main.contains(_home__WEBPACK_IMPORTED_MODULE_2__["default"])) {
                    return main.replaceChild(_contact__WEBPACK_IMPORTED_MODULE_4__["default"], _home__WEBPACK_IMPORTED_MODULE_2__["default"])
                } else if (main.contains(_menu__WEBPACK_IMPORTED_MODULE_3__["default"])) {
                    return main.replaceChild(_contact__WEBPACK_IMPORTED_MODULE_4__["default"], _menu__WEBPACK_IMPORTED_MODULE_3__["default"])
                } else {
                    return main.appendChild(_contact__WEBPACK_IMPORTED_MODULE_4__["default"]);
                }

            }
            
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (restaurantPage());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUss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M0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyw2Q0FBUTtBQUMxQyw2Q0FBNkMsNkNBQVEsRUFBRSw2Q0FBUTtBQUMvRCxrQkFBa0IsdUJBQXVCLGdEQUFXO0FBQ3BELDZDQUE2Qyw2Q0FBUSxFQUFFLGdEQUFXO0FBQ2xFLGtCQUFrQjtBQUNsQiw0Q0FBNEMsNkNBQVE7QUFDcEQ7O0FBRUEsY0FBYzs7QUFFZCxrQ0FBa0MsNkNBQVE7QUFDMUMsNkNBQTZDLDZDQUFRLEVBQUUsNkNBQVE7QUFDL0Qsa0JBQWtCLHVCQUF1QixnREFBVztBQUNwRCw2Q0FBNkMsNkNBQVEsRUFBRSxnREFBVztBQUNsRSxrQkFBa0I7QUFDbEIsNENBQTRDLDZDQUFRO0FBQ3BEOztBQUVBLGNBQWM7QUFDZDtBQUNBLGtDQUFrQyw2Q0FBUTtBQUMxQyw2Q0FBNkMsZ0RBQVcsRUFBRSw2Q0FBUTtBQUNsRSxrQkFBa0IsdUJBQXVCLDZDQUFRO0FBQ2pELDZDQUE2QyxnREFBVyxFQUFFLDZDQUFRO0FBQ2xFLGtCQUFrQjtBQUNsQiw0Q0FBNEMsZ0RBQVc7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsZ0JBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ2FwOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvIGNvdmVyIGZpeGVkO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xufVxubmF2IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5uYXYtYnRuIHtcbmxpc3Qtc3R5bGU6IG5vbmU7IFxufVxuLm5hdi1idG4gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6ICMwMjg4ODg7XG4gICAgcGFkZGluZzogMjBweCAwO1xufVxuLm5hdi1idG4gYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMjAyMDkwO1xuICAgIGNvbG9yOiAjZjhmOGY4O1xufVxubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMSAwIGF1dG87XG4gICAgY29sb3I6ICNmOGY4Zjg7XG59XG4uZGl2LCAuY2FyZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjIwMjBjYztcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICMwMjIwMjAsXG4gICAgaW5zZXQgMCAwIDEwcHggNXB4LCBcbiAgICAgICAgICAgIGluc2V0IDAgMCA1cHggMTBweCAjMDIyMDIwO1xufVxuLmRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG4uY2FyZHN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4ubWVudS1pbWcge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLm1lbnUtaW1nIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tZW51LWRlc2N7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLm1lbnUtZGVzYyBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tZW51LWRlc2MgaDMsIC5kaXYgaDEge1xuICAgIGNvbG9yOiAjZmZkNzAwO1xufVxuLm1lbnUtZGVzYyBwLCAuZGl2IHAge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5oMSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjhweCkge1xuICAgIC5kaXYsIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5kaXYsIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICB9XG4gICAgLmNhcmQge1xuICAgICAgICBnYXA6IDVweDtcbiAgICB9XG4gICAgLmRpdiBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICB9XG5cbiAgICAubWVudS1kZXNjIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAubWVudS1kZXNjIHAsIC5kaXYgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLm1lbnUtaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIH1cbiAgICAubWVudS1kZXNje1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLm5hdi1idG4gYSB7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgIH1cblxuICAgIC5kaXYsIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIGdhcDogNXB4O1xuICAgIH1cblxuICAgIC5kaXYgaDEge1xuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgfVxuXG4gICAgLm1lbnUtZGVzYyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5tZW51LWRlc2MgcCwgLmRpdiBwIHtcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICB9XG5cbiAgICAubWVudS1pbWcge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgfVxuICAgIC5tZW51LWRlc2N7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFNBQVM7SUFDVCx1RUFBOEQ7SUFDOUQseUNBQXlDO0lBQ3pDLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQjs7c0NBRWtDO0FBQ3RDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsYUFBYTtJQUNqQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7UUFDVixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKSBjZW50ZXIvIGNvdmVyIGZpeGVkO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5uYXYge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxufVxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLm5hdi1idG4ge1xcbmxpc3Qtc3R5bGU6IG5vbmU7IFxcbn1cXG4ubmF2LWJ0biBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGNvbG9yOiAjMDI4ODg4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcbi5uYXYtYnRuIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyMDIwOTA7XFxuICAgIGNvbG9yOiAjZjhmOGY4O1xcbn1cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBjb2xvcjogI2Y4ZjhmODtcXG59XFxuLmRpdiwgLmNhcmQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIyMDIwY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICMwMjIwMjAsXFxuICAgIGluc2V0IDAgMCAxMHB4IDVweCwgXFxuICAgICAgICAgICAgaW5zZXQgMCAwIDVweCAxMHB4ICMwMjIwMjA7XFxufVxcbi5kaXYge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcbi5jYXJkc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLmNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXG59XFxuLm1lbnUtaW1nIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG4ubWVudS1pbWcgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubWVudS1kZXNje1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4ubWVudS1kZXNjIGgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubWVudS1kZXNjIGgzLCAuZGl2IGgxIHtcXG4gICAgY29sb3I6ICNmZmQ3MDA7XFxufVxcbi5tZW51LWRlc2MgcCwgLmRpdiBwIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuaDEge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2OHB4KSB7XFxuICAgIC5kaXYsIC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC5kaXYsIC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xcbiAgICB9XFxuICAgIC5jYXJkIHtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuICAgIC5kaXYgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWRlc2MgaDMge1xcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgICAubWVudS1kZXNjIHAsIC5kaXYgcCB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgLm1lbnUtaW1nIHtcXG4gICAgICAgIHdpZHRoOiA0MCU7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIH1cXG4gICAgLm1lbnUtZGVzY3tcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLm5hdi1idG4gYSB7XFxuICAgICAgICB3aWR0aDogOTBweDtcXG4gICAgfVxcblxcbiAgICAuZGl2LCAuY2FyZCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgfVxcblxcbiAgICAuY2FyZCB7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgfVxcblxcbiAgICAuZGl2IGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgfVxcblxcbiAgICAubWVudS1kZXNjIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuICAgIC5tZW51LWRlc2MgcCwgLmRpdiBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtaW1nIHtcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIH1cXG4gICAgLm1lbnUtZGVzY3tcXG4gICAgICAgIHdpZHRoOiA2NSU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBDb250YWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RpdicpO1xuICAgIGNvbnN0IF9oMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIF9oMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRsaW5lJyk7XG4gICAgICAgIF9oMS50ZXh0Q29udGVudCA9ICdQbGVhc2UgY29udGFjdCB1cyBmb3IgbW9yZSBkZXRhaWxzIGFib3V0IG91ciBzZXJ2aWNlcyc7XG4gICAgY29uc3QgX3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIF9wLnRleHRDb250ZW50ID0gJzA4MDgzMzM0NDUzJztcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoX2gxKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKF9wKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVEaXYgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGl2XG4gICAgICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVEaXYsXG4gICAgfVxufSkoKTtcblxuY29uc3QgY29udGFjdCA9IENvbnRhY3QuY3JlYXRlRGl2KCk7XG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsImNvbnN0IEhvbWUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2Jyk7XG4gICAgY29uc3QgX2gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgX2gxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGxpbmUnKTtcbiAgICAgICAgX2gxLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gdGhlIGhvbWUgb2Ygc3BpY2VzJztcbiAgICBjb25zdCBfcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgX3AudGV4dENvbnRlbnQgPSAnV2UgYXJlIGRlbGlnaHRlZCB0byBoYXZlIHlvdSwgV2UgZ2l2ZSBhIGJsZW5kIG9mIHBsZWFzdXJlIGFuZCBtZWRpY2luZSBmb3IgeW91ciB1dG1vc3Qgd2VsbGJlaW5nLic7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKF9oMSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChfcCk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlRGl2ID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRpdlxuICAgICAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlRGl2LFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IGhlYWRsaW5lID0gSG9tZS5jcmVhdGVEaXYoKTtcbmV4cG9ydCBkZWZhdWx0IGhlYWRsaW5lO1xuXG4iLCJpbXBvcnQgY2hpY2tlblBlcHBlclNvdXAgZnJvbSAnLi9pbWFnZXMvQ1BTLmpwZyc7XG5pbXBvcnQgZ29hdE1lYXRQZXBwZXJTb3VwIGZyb20gJy4vaW1hZ2VzL0dNUFMuanBlZyc7XG5pbXBvcnQgZWd1c2lQZXBwZXJTb3VwIGZyb20gJy4vaW1hZ2VzL2Vwcy5qcGcnO1xuaW1wb3J0IG9mZmFsc1BlcHBlclNvdXAgZnJvbSAnLi9pbWFnZXMvT1BTLmpwZyc7XG5pbXBvcnQgY293TGVnUGVwcGVyU291cCBmcm9tICcuL2ltYWdlcy9DTFBTLmpwZyc7XG5pbXBvcnQgY2F0ZmlzaFBlcHBlclNvdXAgZnJvbSAnLi9pbWFnZXMvQ0ZQUy5qcGcnO1xuXG5jb25zdCBNZW51ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IF9tZW51Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX21lbnVCb3guY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcblxuICAgIGNvbnN0IF9tZW51cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6IGNoaWNrZW5QZXBwZXJTb3VwLFxuICAgICAgICAgICAgaGVhZGluZzogJ0NISUNLRU4gUEVQUEVSIFNPVVAnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6IGdvYXRNZWF0UGVwcGVyU291cCxcbiAgICAgICAgICAgIGhlYWRpbmc6ICdHT0FUIE1FQVQgUEVQUEVSIFNPVVAnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6IGVndXNpUGVwcGVyU291cCxcbiAgICAgICAgICAgIGhlYWRpbmc6ICdFR1VTSSBQRVBQRVIgU09VUCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogb2ZmYWxzUGVwcGVyU291cCxcbiAgICAgICAgICAgIGhlYWRpbmc6ICdPRkZBTFMgUEVQUEVSIFNPVVAnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6IGNvd0xlZ1BlcHBlclNvdXAsXG4gICAgICAgICAgICBoZWFkaW5nOiAnQ09XIExFRyBQRVBQRVIgU09VUCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogY2F0ZmlzaFBlcHBlclNvdXAsXG4gICAgICAgICAgICBoZWFkaW5nOiAnQ0FURklTSCBQRVBQRVIgU09VUCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMnLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCBhcHBlbmRNZW51ID0gKCkgPT4ge1xuICAgICAgICBfbWVudXMubWFwKG1lbnUgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbWVudURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lbnVEZXNjLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1kZXNjJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lbnVJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWltZycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBtZW51LmltYWdlO1xuXG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBtZW51LmhlYWRpbmc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gbWVudS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIG1lbnVJbWcuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICAgICAgbWVudURlc2MuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgICAgICBtZW51RGVzYy5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobWVudURlc2MpO1xuXG4gICAgICAgICAgICByZXR1cm4gX21lbnVCb3guYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBfbWVudUJveDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhcHBlbmRNZW51LFxuICAgIH1cbn0pKCk7XG5cbmNvbnN0IG1lbnUgPSAgTWVudS5hcHBlbmRNZW51KCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiY2xhc3MgTmF2YmFyIHtcblxuICAgIG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNsYXMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jbGFzID0gY2xhc1xuICAgIH1cblxuICAgIGNyZWF0ZUxpbmsoKSB7XG5cbiAgICAgICAgdGhpcy5uYXZMaW5rLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLm5hdkxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke3RoaXMuY2xhc31gKTtcbiAgICAgICAgdGhpcy5uYXZMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLmNsYXMpO1xuICAgICAgICB0aGlzLm5hdkxpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtYnRuJylcbiAgICAgICAgdGhpcy5uYXZMaXN0LmFwcGVuZENoaWxkKHRoaXMubmF2TGluayk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubmF2Qm94LmFwcGVuZENoaWxkKHRoaXMubmF2TGlzdCk7XG5cbiAgICB9XG59XG5cbmNvbnN0IG5hdiA9IG5ldyBOYXZiYXIoKS5uYXY7XG5jb25zdCBuYXZCb3ggPSBuZXcgTmF2YmFyKCkubmF2Qm94O1xuXG5jb25zdCBob21lID0gbmV3IE5hdmJhcignSG9tZScsICdob21lJykuY3JlYXRlTGluaygpO1xuY29uc3QgbWVudSA9IG5ldyBOYXZiYXIoJ01lbnUnLCAnbWVudScpLmNyZWF0ZUxpbmsoKTtcbmNvbnN0IGNvbnRhY3QgPSBuZXcgTmF2YmFyKCdDb250YWN0JywgJ2NvbnRhY3QnKS5jcmVhdGVMaW5rKCk7XG5cbmV4cG9ydCB7bmF2LCBuYXZCb3gsIGhvbWUsIG1lbnUsIGNvbnRhY3R9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBuYXYsIG5hdkJveCwgaG9tZSwgbWVudSwgY29udGFjdCB9IGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBoZWFkbGluZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0JztcblxuXG5jb25zdCByZXN0YXVyYW50UGFnZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgXG4gICAgbmF2Qm94LmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIG5hdkJveC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBuYXZCb3guYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkJveCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idG4nKTtcblxuICAgIHJldHVybiBidG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdIb21lJykge1xuXG4gICAgICAgICAgICAgICAgaWYgKG1haW4uY29udGFpbnMobWVudVBhZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWluLnJlcGxhY2VDaGlsZChoZWFkbGluZSwgbWVudVBhZ2UpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYWluLmNvbnRhaW5zKGNvbnRhY3RQYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFpbi5yZXBsYWNlQ2hpbGQoaGVhZGxpbmUsIGNvbnRhY3RQYWdlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWluLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdNZW51Jykge1xuXG4gICAgICAgICAgICAgICAgaWYgKG1haW4uY29udGFpbnMoaGVhZGxpbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWluLnJlcGxhY2VDaGlsZChtZW51UGFnZSwgaGVhZGxpbmUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYWluLmNvbnRhaW5zKGNvbnRhY3RQYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFpbi5yZXBsYWNlQ2hpbGQobWVudVBhZ2UsIGNvbnRhY3RQYWdlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWluLmFwcGVuZENoaWxkKG1lbnVQYWdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdDb250YWN0Jykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChtYWluLmNvbnRhaW5zKGhlYWRsaW5lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFpbi5yZXBsYWNlQ2hpbGQoY29udGFjdFBhZ2UsIGhlYWRsaW5lKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFpbi5jb250YWlucyhtZW51UGFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1haW4ucmVwbGFjZUNoaWxkKGNvbnRhY3RQYWdlLCBtZW51UGFnZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFpbi5hcHBlbmRDaGlsZChjb250YWN0UGFnZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXN0YXVyYW50UGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==