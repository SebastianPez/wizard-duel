(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/App.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  /* background-color: #282c34; */\n  min-height: 100vh;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.castSpellBtn {\n  height: 60px;\n  width: 150px;\n  background-color: darkblue;\n  color: white;\n  font-size: 20px;\n}\n\n\n.infoBar {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-evenly;\n          justify-content: space-evenly;\n  margin: 5%;\n  /* background:rgb(248, 200, 111); */\n  /* opacity: .5; */\n}\n\n.characterSection {\n  margin: 5%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n\n.health {\n  /* color: white; */\n  font-size: 30px;\n  font-weight: 900;\n  border-style: solid;\n  padding: 3%;\n}\n\ntd .spellName{\n  color:white;\n  font-size: 72px;\n}\n\n.spellsTable{\n  width: 100%;\n  overflow: scroll;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/SpellSetup.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/SpellSetup.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spellSetup {\n    /* display: flex; */\n    /* justify-content: first baseline; */\n    height: 50vmin;\n    /* width: 100%; */\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    color:white;\n}\n\nh1 {\n    /* width: 100%; */\n    margin-top:2%;\n    margin-bottom:2%;\n    text-align: center;\n    color:white;\n    padding: 0;\n    margin: 0;\n}\n\n.spell-selection {\n    margin-top: 5%;\n    width: 100%;\n    height: 100%;\n    margin-right: 5%;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    overflow: scroll;\n    overscroll-behavior-y: scroll;\n}\n\n.wizard-info {\n    width: 100%;\n    height: 15%;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    -webkit-align-items: center;\n            align-items: center;\n    position:fixed;\n    /* margin-right: 400px; */\n}\n\nh2 {\n    /* width: 100%; */\n    padding-left:10px;\n}\n\n.available-spells {\n    width:100%;\n}\n.available-spells div {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-align-items: baseline;\n            align-items: baseline;\n    padding: 0 2% 0 2%;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    height: 1.5%;\n}\n\n.castinfo{\n    margin-right:-40px;\n}\n\nh5{\n    height: 25px;\n    width: 140px;\n    background-color: rgb(50, 186, 238);\n    border-radius: 50%;\n    font-size: 1.5em;\n    text-align: center;\n    margin:0;\n}\n.circle-display1{\n    margin-right: 10px;\n}\n.circle-display2{\n    width: 280px;\n}\n.StartGame{\n    margin-top: 10%;\n}\n\n.circle-display3{\n    background-color: rgb(28, 189, 28);\n    border-radius: 50%;\n    font-size: 1em;\n    padding: 1em;\n    text-align: center;\n    color: white;\n    margin:0;\n}\n\n.purchased-spells {\n    width: 650px;\n    height:200px;\n    overflow: scroll;\n    overscroll-behavior-y: scroll;\n    background: rgba(57, 149, 128, 0.7);\n    margin-top: 20px;\n    margin-left: -5%;\n\n}\n.spellArray{\n    display:-webkit-flex;\n    display:flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    width: 100%;\n    padding-top: 2%;\n    /* columns: 2; */\n    font-size:40px;\n}\n\n.spellArray div{\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    padding-top:15px;\n    padding-bottom:15px;\n}\n\n.dot {\n    height: 25px;\n    width: 280px;\n    background-color: rgb(28, 189, 28);\n    border-radius: 50%;\n    font-size: 1.5em;\n    text-align: center;\n    padding:0 10px;\n    margin-right:8%;\n    font-weight:bold;\n}\n\n.dot2 {\n    background-color: rgb(28, 189, 28);\n    border-radius: 50%;\n    font-size: 1.5em;\n    text-align: center;\n    padding:0 10px;\n    font-weight:bold;\n    margin-top:200px;\n}\n\n.dot2#start{\n    font-size:40px;\n    color:white;\n    position:center;\n    padding:4px 1.5em;\n}\n/* h4{\n    display:none;\n} */\nh3{\n   font-size:24px;\n}\np{\n    background:none;\n    font-style: italic;\n    font-size: 24px;\n    padding-left: 4%;\n}\n\n#cast_limit{\n    width:240px;\n    padding-right:15px;\n}\n\n.bottom{\n    display:-webkit-flex;\n    display:flex;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    margin: 0 5%;\n    width: 100%;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/frog_cards.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/frog_cards.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".characterSelection{\n  display:-webkit-flex;\n  display:flex;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  width:100%;\n}\n.playerDiv{\n  display:-webkit-flex;\n  display:flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-align-items: center;\n          align-items: center;\n  background-size:cover;\n  height:  33vmin;\n  width: 33vmin;\n  background-image: url(/frog_card_template.png);\n}\n.health{\n  margin: 0;\n  background:white;\n}\n\n.opponentDiv{\n  display:-webkit-flex;\n  display:flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  background-size:cover;\n  height:  33vmin;\n  width: 33vmin;\n  background-image: url(/frog_card_template.png);\n}\n\n.myChar {\n  height: 200px;\n  width: 200px;\n  margin-top: 25%;\n}\n\n.opponentChar {\n  height: 200px;\n  width: 200px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/index.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/instructions.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/instructions.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dumbledoreSpeech {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n\n.mainTitle {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n\nhtml, body {\n    color: #333;\n    font-size: 16px;\n    line-height: 20px;\n}\nbody {\n    margin: 20px;\n}\n\nh1 {\n    line-height: 1.2;\n    margin-bottom: 35px;\n    text-align: center;\n}\n\n\n.speech-bubble {\n    background: #efefef;\n    border-radius: 4px;\n    font-size: 1.2rem;\n    line-height: 1.3;\n    margin: 0 auto 40px;\n    max-width: 400px;\n    padding: 15px;\n    position: relative;\n}\n\n.speech-bubble p {\n    font-family: 'Oswald', Helvetica Neue;\n    margin: 0 0 10px;\n}\n.speech-bubble p:last-of-type {\n    margin-bottom: 0;\n}\n\n.speech-bubble::after {\n    border-left: 20px solid transparent;\n    border-top: 20px solid #efefef;\n    bottom: -20px;\n    content: \"\";\n    position: absolute;\n    right: 300px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/login.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/login.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login{\n    display:-webkit-flex;\n    display:flex;\n}\n.leftLogin{\n    width:50%;\n    padding-top: 20px;\n}\n.dumbledoreSpeech{\n    -webkit-transform: scaleX(-1);\n            transform: scaleX(-1);\n}\n.instructions{\n    height:400px;\n}\n\n.right{\n    width:50%;\n}\n.loginForm {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: center;\n            justify-content: center;\n    color: white;\n    margin-top: 50%;\n}\n\n/* textarea{\n    height: 200px;\n    width: 100%;\n} */\n\n.input{\n    height: 50px;\n    width:300px;\n    font-size: 36px;\n    /* background:yellow; */\n}\n\nbody {\n    background-image: url('/deathly-hallows-wallpapers-24.jpg');\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/navigation.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/navigation.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navBar {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-evenly;\n            justify-content: space-evenly;\n    font-size: 30px;\n    color: white;\n    font-weight: 700;\n}\n\n.link {\n    margin: 2.4%;\n}\n\n.header {\n    width: 500px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/notificationBar.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/notificationBar.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notificationBar {\n    height: 300px;\n    width: 45%;\n    border-style: solid;\n    /* background:white; */\n    overflow: scroll;\n    color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/radio_button.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/radio_button.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".radio-label {\n  width: 100%;\n  margin-bottom: 1em;\n  text-align: center;\n}\n\n.radio-pillbox {\n  height: 2em;\n  width: 100%;\n  font-size: 1em;\n  border: 0;\n  border-radius: 75px;\n  overflow: hidden;\n\n  background: linear-gradient(  100deg,  #113d00 0%,  #2e4c90 30%,  #d9af00 70%,  #d02400 100%  );\n\n  color: #000000;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n}\n\n.radio-pillbox radiogroup {\n  height: 100%;\n  width: 100%;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.radio-pillbox radiogroup div {\n  width: 100%;\n  position: relative;\n}\n\n.radio-pillbox radiogroup div input {\n  -webkit-appearance: inherit;\n  width: 100%;\n  height: 100%;\n  transition: background 300ms ease-out;\n  margin: 0;\n  outline: 0;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.radio-pillbox radiogroup div input:checked {\n  color: #5f6982;\n  border: none;\n  box-shadow: inset 0 10px 50px rgba(25, 25, 25, 0.1);\n}\n\n.radio-pillbox radiogroup .first {\n  border-radius: 75px 0 0 75px;\n  border-left: none;\n}\n\n.radio-pillbox radiogroup .last { border-radius: 0 75px 75px 0; }\n\n.radio-pillbox radiogroup div label {\n  position: absolute;\n  top: 50%; /* top plus line-height centers text */\n  line-height: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.radio-pillbox input:focus { outline: 0; }\n\n.radio-pillbox label:after {\n  content: \"\\2714\";\n  display: inline-block;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms,  -webkit-transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms,  transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms,  transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22),  -webkit-transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);\n}\n\n.radio-pillbox input:checked + label:after {\n  margin-left: 12px;\n  -webkit-transform: scale(1.25);\n  transform: scale(1.25);\n  transition: margin 500ms, -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms,  -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;\n  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms,  margin 500ms, transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;\n  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms,  margin 500ms, transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms,  -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms,  -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/setup.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/setup.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".characterContainer{\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n}\n\n.textInfo {\n    padding-top: 2%;\n    padding-bottom: 2%;\n    color: white;\n}\n\n.charBtn {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n}\n.opponentDiv{\n    height:300px;\n}\n\n.armyName{\n    color: white;\n    text-align: center;\n    font-size: 36px;\n    font-style: normal;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/spellList.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/spellList.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spellsTable {\n    border: 1px solid black;\n    color: white;\n    /* background: white; */\n}\n\n#mainTable {\n    height: 230px;\n    width: 550px;\n    border-collapse: collapse;\n}\n\n.spellChoiceBtn {\n    height: 30px;\n    width: 75px;\n    background-color: darkblue;\n    color: white;\n    font-size: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");
/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Instructions */ "./src/Instructions.js");
/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navigation.js */ "./src/Navigation.js");
/* harmony import */ var _Login_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Login.js */ "./src/Login.js");
/* harmony import */ var _Setup_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Setup.js */ "./src/Setup.js");
/* harmony import */ var _SpellSetup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SpellSetup */ "./src/SpellSetup.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);






var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/App.js";











var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));

    _this.chooseSpell = function (spell) {
      _this.setState({
        currentSpell: spell
      });
    };

    _this.chooseWizard = function (wizard) {
      _this.setState({
        myCharacter: wizard
      });
    };

    _this.setPlayerOptions = function (spells, position) {
      _this.setState({
        mySpells: spells,
        myPosition: position
      });
    };

    _this.newNotification = function (user, spell) {
      console.log("".concat(user, " and ").concat(spell));

      _this.setState({
        notifications: _this.state.notifications.concat("".concat(user, " has cast ").concat(spell, "."))
      });
    };

    _this.newUser = function (user) {
      _this.fetchData().then(function (_ref) {
        var _ref2 = Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
            wizards = _ref2[0].data.wizards.wizards,
            spells = _ref2[1].data.spells.spells;

        _this.setState({
          wizards: wizards,
          spells: spells,
          currentUser: user
        });
      }).catch(console.error);
    };

    _this.fetchData = function () {
      return Promise.all([_this.fetchWizards(), _this.fetchSpells()]);
    };

    _this.state = {
      mySpells: [],
      myPosition: 2,
      currentUser: '',
      spells: null,
      notifications: ['New player has joined', 'Player 1, your turn!'],
      myCharacter: null,
      opponentCharacter: null,
      wizards: null
    };
    return _this;
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "fetchSpells",
    value: function fetchSpells() {
      return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('/api/spells');
    }
  }, {
    key: "fetchWizards",
    value: function fetchWizards() {
      return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('/api/wizards');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Navigation_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Login_js__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, props, {
            newUser: _this2.newUser,
            state: _this2.state,
            loadDb: _this2.fetchData,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/game",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Game_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, {
            chooseSpell: _this2.chooseSpell,
            newNotification: _this2.newNotification,
            state: _this2.state,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/instructions",
        component: _Instructions__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/setup",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Setup_js__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({}, props, {
            state: _this2.state,
            chooseWizard: _this2.chooseWizard,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/spell_setup",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SpellSetup__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({}, props, {
            state: _this2.state,
            setPlayerOptions: _this2.setPlayerOptions,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/AvailableSpell.js":
/*!*******************************!*\
  !*** ./src/AvailableSpell.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/AvailableSpell.js";


var AvailableSpell =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AvailableSpell, _Component);

  function AvailableSpell() {
    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AvailableSpell);

    return Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AvailableSpell).apply(this, arguments));
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AvailableSpell, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name,
          description = _this$props.description,
          cast_limit = _this$props.cast_limit,
          cost = _this$props.cost,
          turns = _this$props.turns;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("container", {
        onClick: function onClick() {
          return _this.props.selectSpell(id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "castinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "circle-display1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Mana:", cost), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "circle-display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Turns:", turns))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "circle-display2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Limit:", cast_limit)));
    }
  }]);

  return AvailableSpell;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AvailableSpell);

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PlayerSpellList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlayerSpellList.js */ "./src/PlayerSpellList.js");
/* harmony import */ var _NotificationBar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NotificationBar.js */ "./src/NotificationBar.js");
/* harmony import */ var _MyCharacter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyCharacter.js */ "./src/MyCharacter.js");
/* harmony import */ var _OpponentCharacter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OpponentCharacter.js */ "./src/OpponentCharacter.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/Game.js";









var Game =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Game, _Component);

  function Game(props) {
    var _this;

    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Game);

    _this = Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Game).call(this, props));

    _this.endGame = function () {
      _this.setState({
        gameOver: true
      });
    };

    _this.choosePosition = function (e) {
      var numberified = Number(e.target.value);

      _this.setState({
        attackPosition: numberified
      }, function () {
        console.log(_this.state.attackPosition);
      });
    };

    _this.setOpponentChar = function (char) {
      _this.setState({
        opponentChar: JSON.parse(char)
      });
    };

    _this.chooseSpell = function (spell) {
      // this.setState({currentSpell: spell}, () => {
      //   console.log(this.state.currentSpell);
      // })
      _this.setState({
        currentSpell: spell
      });
    };

    _this.updateTurn = function () {
      _this.setState({
        myTurn: !_this.state.myTurn
      }, function () {
        console.log('Turn state is now: ', _this.state.myTurn);
      });
    };

    _this.opponentCast = function (state) {
      var _JSON$parse = JSON.parse(state),
          attackPosition = _JSON$parse.attackPosition,
          currentSpell = _JSON$parse.currentSpell;

      if (attackPosition === _this.props.state.myPosition) {
        if (_this.state.myDefence <= 0) {
          _this.setState({
            gameOver: true
          });

          _this.socket.emit('gameOver');

          console.log('YOU LOST!');
        }

        _this.takeDamage(currentSpell.power);
      }

      _this.updateTurn();
    };

    _this.takeDamage = function (power) {
      _this.setState({
        myDefence: _this.state.myDefence - power
      });
    };

    _this.boostDefence = function (power) {
      _this.setState({
        myDefence: _this.state.myDefence + power
      });
    };

    _this.endPlayerTurn = function () {
      if (_this.state.myTurn) {
        if (_this.state.currentSpell.name === 'Protego') {
          _this.boostDefence(_this.state.currentSpell.power);

          _this.socket.emit('defence', JSON.stringify(_this.state));
        } else {
          _this.socket.emit('attack', JSON.stringify(_this.state));
        }

        _this.updateTurn();

        _this.socket.emit('notification', JSON.stringify({
          notification: {
            user: _this.props.state.currentUser,
            spell: _this.state.currentSpell
          }
        }));
      }
    };

    _this.state = {
      opponentChar: null,
      myDefence: 10,
      opponentImg: '',
      myTurn: false,
      currentSpell: '',
      attackPosition: null,
      gameOver: false,
      currentUsers: 0
    };
    return _this;
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_11___default()('http://localhost:5000/');
      this.socket.on('updateCharacter', this.setOpponentChar);
      this.socket.on('newUser', this.socket.emit('updateCharacter', JSON.stringify(this.props.state.myCharacter)));
      this.socket.on('attack', this.opponentCast);
      this.socket.on('turnSetup', this.updateTurn);
      this.socket.on('defence', this.updateTurn);
      this.socket.on('endGame', this.endGame);
      this.socket.on('notification', this.incomingNotification);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log('current state', this.props.state)
      var _this$props$state = this.props.state,
          notifications = _this$props$state.notifications,
          myCharacter = _this$props$state.myCharacter;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.state.gameOver ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        to: "/setup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "GAME OVER!! Click to play again!") : ""), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "infoBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PlayerSpellList_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        chooseSpell: this.chooseSpell,
        userSpells: this.props.state.mySpells,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NotificationBar_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        notifications: notifications,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "characterSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_MyCharacter_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        characterInfo: myCharacter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("spellAnimation", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_OpponentCharacter_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        charImg: this.state.opponentChar ? this.state.opponentChar.right_image : '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "castSpellBtn",
        onClick: function onClick() {
          return _this2.endPlayerTurn();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Cast Spell"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, this.state.myDefence), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radio-pillbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("radiogroup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        value: "1",
        type: "radio",
        name: "radio-group",
        id: "test",
        onClick: this.choosePosition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        for: "test",
        className: "radio-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "1")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        value: "2",
        type: "radio",
        name: "radio-group",
        id: "test2",
        onClick: this.choosePosition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        for: "test2",
        className: "radio-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "2")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        value: "3",
        type: "radio",
        name: "radio-group",
        id: "test3",
        onClick: this.choosePosition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        for: "test3",
        className: "radio-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "3")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, this.props.state.message), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.fetchData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, this.state.myTurn ? 'Your turn' : 'Enemy Turn')));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/Instructions.js":
/*!*****************************!*\
  !*** ./src/Instructions.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_instructions_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/instructions.css */ "./src/styles/instructions.css");
/* harmony import */ var _styles_instructions_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_instructions_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/Instructions.js";



var Instructions =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Instructions, _Component);

  function Instructions() {
    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Instructions);

    return Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Instructions).apply(this, arguments));
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Instructions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "speech-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Welcome to Hogwarts!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "To play, choose a character on the setup page. From there you'll have to spend your Mana wisely to come up with a spell and defence strategy. After your setup is complete you will be pitted against an opponent in a wizard duel to the death. Take turns casting spells until one of you emerges victorious. Good luck!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "dumbledoreSpeech",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "https://i.ytimg.com/vi/X8rVAc5iAfk/hqdefault.jpg",
        alt: "dumbledore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      })));
    }
  }]);

  return Instructions;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Instructions);

/***/ }),

/***/ "./src/Login.js":
/*!**********************!*\
  !*** ./src/Login.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/login.css */ "./src/styles/login.css");
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_login_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/Login.js";




var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _Component);

  function Login(props) {
    var _this;

    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();

      _this.props.newUser(_this.state.user);
    };

    _this.state = {
      user: ''
    };
    return _this;
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.props.state.currentUser ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
        to: "/setup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "leftLogin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "speech-bubble",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Welcome to Hogwarts!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "To play, choose a character on the setup page. From there you'll have to spend your Mana wisely to come up with a spell and defence strategy. After your setup is complete you will be pitted against an opponent in a wizard duel to the death. Take turns casting spells until one of you emerges victorious. Good luck!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "dumbledoreSpeech",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "instructions",
        src: "/character_gifs/DI.gif",
        alt: "instructionsgif",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: "loginForm",
        onSubmit: this.handleSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "name",
        placeholder: "Your name",
        onChange: function onChange(event) {
          return _this2.setState({
            user: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "submit",
        variant: "outline-light",
        className: "login-button",
        value: "Alohomora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/MyCharacter.js":
/*!****************************!*\
  !*** ./src/MyCharacter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_frog_cards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/frog_cards.css */ "./src/styles/frog_cards.css");
/* harmony import */ var _styles_frog_cards_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_frog_cards_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/MyCharacter.js";



var MyCharacter =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyCharacter, _Component);

  function MyCharacter() {
    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyCharacter);

    return Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyCharacter).apply(this, arguments));
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyCharacter, [{
    key: "render",
    value: function render() {
      var characterInfo = this.props.characterInfo;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "characterSelection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "playerDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "myChar",
        src: characterInfo.right_image,
        alt: "my character",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "health",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "My Defence: ", characterInfo.health)));
    }
  }]);

  return MyCharacter;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MyCharacter);

/***/ }),

/***/ "./src/Navigation.js":
/*!***************************!*\
  !*** ./src/Navigation.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_navigation_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/navigation.css */ "./src/styles/navigation.css");
/* harmony import */ var _styles_navigation_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_navigation_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/Navigation.js";




var Navigation =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation, _Component);

  function Navigation() {
    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    return Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation).apply(this, arguments));
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "header",
        src: "https://fontmeme.com/permalink/190502/bb8fb54ee7eceec3e1a778427c288146.png",
        alt: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/Notifcation.js":
/*!****************************!*\
  !*** ./src/Notifcation.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_navigation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/navigation.css */ "./src/styles/navigation.css");
/* harmony import */ var _styles_navigation_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_navigation_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/Notifcation.js";



var Notification =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Notification, _Component);

  function Notification() {
    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Notification);

    return Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Notification).apply(this, arguments));
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Notification, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, this.props.message));
    }
  }]);

  return Notification;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/NotificationBar.js":
/*!********************************!*\
  !*** ./src/NotificationBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_notificationBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/notificationBar.css */ "./src/styles/notificationBar.css");
/* harmony import */ var _styles_notificationBar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_notificationBar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Notifcation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Notifcation.js */ "./src/Notifcation.js");





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/NotificationBar.js";




var NotificationBar =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NotificationBar, _Component);

  function NotificationBar() {
    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationBar);

    return Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NotificationBar).apply(this, arguments));
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationBar, [{
    key: "render",
    value: function render() {
      console.log('nav bar', this.props.notifications);
      var notificationArray = this.props.notifications.map(function (msg) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Notifcation_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          message: msg,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "notificationBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, notificationArray);
    }
  }]);

  return NotificationBar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NotificationBar);

/***/ }),

/***/ "./src/OpponentCharacter.js":
/*!**********************************!*\
  !*** ./src/OpponentCharacter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_frog_cards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/frog_cards.css */ "./src/styles/frog_cards.css");
/* harmony import */ var _styles_frog_cards_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_frog_cards_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/OpponentCharacter.js";



var OpponentCharacter =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OpponentCharacter, _Component);

  function OpponentCharacter() {
    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OpponentCharacter);

    return Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OpponentCharacter).apply(this, arguments));
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OpponentCharacter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "characterSelection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "opponentDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "myChar",
        src: this.props.charImg,
        alt: "my character",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      })));
    }
  }]);

  return OpponentCharacter;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OpponentCharacter);

/***/ }),

/***/ "./src/PlayerSpellList.js":
/*!********************************!*\
  !*** ./src/PlayerSpellList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Spell_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Spell.js */ "./src/Spell.js");
/* harmony import */ var _styles_spellList_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/spellList.css */ "./src/styles/spellList.css");
/* harmony import */ var _styles_spellList_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_spellList_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/PlayerSpellList.js";




var PlayerSpellList =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PlayerSpellList, _Component);

  function PlayerSpellList() {
    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PlayerSpellList);

    return Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PlayerSpellList).apply(this, arguments));
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PlayerSpellList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var spellArray = this.props.userSpells.map(function (spell) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Spell_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: spell.name,
          description: spell.description,
          power: spell.power,
          limit: spell.limit,
          chooseSpell: _this.props.chooseSpell,
          spellObj: spell,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
        className: "spellsTable",
        id: "mainTable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("thead", {
        className: "spellsTable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        className: "spellsTable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Select a Spell to cast"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
        classname: "spellBody",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, spellArray));
    }
  }]);

  return PlayerSpellList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PlayerSpellList);

/***/ }),

/***/ "./src/Setup.js":
/*!**********************!*\
  !*** ./src/Setup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _OpponentCharacter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OpponentCharacter.js */ "./src/OpponentCharacter.js");
/* harmony import */ var _styles_setup_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/setup.css */ "./src/styles/setup.css");
/* harmony import */ var _styles_setup_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_setup_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/Setup.js";





var Setup =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Setup, _Component);

  function Setup() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Setup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Setup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.lightWizardObj = null;
    _this.darkWizardObj = null;

    _this.randomCharacter = function () {
      var wizards = _this.props.state.wizards;
      var lightImgs = [];
      var darkImgs = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = wizards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var wizard = _step.value;

          if (wizard.army === 'Death Eater') {
            darkImgs.push(wizard);
          } else {
            lightImgs.push(wizard);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _this.lightWizardObj = lightImgs[Math.floor(Math.random() * lightImgs.length)];
      _this.darkWizardObj = darkImgs[Math.floor(Math.random() * darkImgs.length)];
    };

    return _this;
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Setup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.randomCharacter(); // console.log(this.props.state.myCharacter)

      return this.props.state.myCharacter ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
        to: "/spell_setup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "textInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, " ", this.props.state.currentUser, " choose your army!!!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "characterContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "armyName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Dumbledore's Army"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_OpponentCharacter_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        charImg: this.lightWizardObj.left_image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.lightWizardObj.name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "armyName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Death Eater"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_OpponentCharacter_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        charImg: this.darkWizardObj.right_image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.darkWizardObj.name))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "charBtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.chooseWizard(_this2.lightWizardObj);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "button to choose character"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.chooseWizard(_this2.darkWizardObj);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "button to choose character")));
    }
  }]);

  return Setup;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Setup);

/***/ }),

/***/ "./src/Spell.js":
/*!**********************!*\
  !*** ./src/Spell.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_spellList_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/spellList.css */ "./src/styles/spellList.css");
/* harmony import */ var _styles_spellList_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_spellList_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/Spell.js";



var Spell =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Spell, _Component);

  function Spell() {
    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Spell);

    return Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Spell).apply(this, arguments));
  }

  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Spell, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          spellObj = _this$props.spellObj,
          name = _this$props.name,
          description = _this$props.description,
          power = _this$props.power,
          limit = _this$props.limit;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        className: "spellsTable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "spellName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "spellsDescription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "spellsPower",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, power), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "spellsLimit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, limit), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "spellChoiceBtn",
        onClick: function onClick() {
          return _this.props.chooseSpell(spellObj);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Summon Magic!"))));
    }
  }]);

  return Spell;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Spell);

/***/ }),

/***/ "./src/SpellSetup.js":
/*!***************************!*\
  !*** ./src/SpellSetup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AvailableSpell_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AvailableSpell.js */ "./src/AvailableSpell.js");
/* harmony import */ var _styles_spellList_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/spellList.css */ "./src/styles/spellList.css");
/* harmony import */ var _styles_spellList_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_spellList_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_SpellSetup_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/SpellSetup.css */ "./src/styles/SpellSetup.css");
/* harmony import */ var _styles_SpellSetup_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_SpellSetup_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_radio_button_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/radio_button.css */ "./src/styles/radio_button.css");
/* harmony import */ var _styles_radio_button_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_radio_button_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/SpellSetup.js";







var SpellSetup =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SpellSetup, _Component);

  function SpellSetup(props) {
    var _this;

    Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SpellSetup);

    _this = Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SpellSetup).call(this, props));

    _this.choosePosition = function (e) {
      var numberified = Number(e.target.value);

      _this.setState({
        playerPosition: numberified
      }, function () {// console.log(this.state.playerPosition);
      });
    };

    _this.findSpell = function (id) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.props.state.spells[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var spell = _step.value;

          if (id === spell.id && _this.state.playerMana >= spell.cost) {
            var updatedSpells = _this.state.chosenSpells;
            updatedSpells.push(spell);

            _this.setState({
              chosenSpell: updatedSpells,
              playerMana: _this.state.playerMana - spell.cost
            }); // console.log("Found the spell");
            // console.log('========');
            // console.log('BOOYA', this.state);

          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    _this.selectSpell = function (id) {
      _this.findSpell(id);
    };

    _this.removeSpell = function (id) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _this.state.chosenSpells[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var spell = _step2.value;

          if (id === spell.id) {
            var updatedSpells = _this.state.chosenSpells;
            updatedSpells.pop(spell);

            _this.setState({
              chosenSpell: updatedSpells,
              playerMana: _this.state.playerMana + spell.cost
            });
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    };

    _this.state = {
      playerMana: 10,
      playerPosition: 2,
      chosenSpells: []
    };
    return _this;
  } // choosePosition = (positionNumber) => {
  //     this.setState({ playerPosition: positionNumber });
  // }


  Object(_Users_kiraporter_LIGHTHOUSELABS_Assignments_duel_duel_react_front_end_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SpellSetup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var spellArray = this.props.state.spells.map(function (spell) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AvailableSpell_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          id: spell.id,
          name: spell.name,
          description: spell.description,
          cast_limit: spell.cast_limit,
          cost: spell.cost,
          turns: spell.turns,
          selectSpell: _this2.selectSpell,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }));
      });
      var chosenSpellArray = this.state.chosenSpells.map(function (spell) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.removeSpell(spell.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, spell.name);
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "spellSetup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "wizard-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.props.state.myCharacter.name, "'s Spells"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Arm Yourself!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "dot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Remaining Mana:", this.state.playerMana)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("container", {
        className: "spell-selection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "available-spells",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, spellArray)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("container", {
        className: "purchased-spells",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Your battle spells!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "spellArray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, chosenSpellArray)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bottom-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("container", {
        className: "playerPositioning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Choose your wizard's position")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radio-pillbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("radiogroup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        value: "1",
        type: "radio",
        name: "radio-group",
        id: "test",
        onClick: this.choosePosition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        for: "test",
        className: "radio-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "1")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        value: "2",
        type: "radio",
        name: "radio-group",
        id: "test2",
        onClick: this.choosePosition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        for: "test2",
        className: "radio-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "2")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        value: "3",
        type: "radio",
        name: "radio-group",
        id: "test3",
        onClick: this.choosePosition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        for: "test3",
        className: "radio-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "3")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "StartGame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
        className: "dot2",
        to: "/game",
        id: "start",
        onClick: function onClick() {
          return _this2.props.setPlayerOptions(_this2.state.chosenSpells, _this2.state.playerPosition);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Start Game!"))))));
    }
  }]);

  return SpellSetup;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SpellSetup);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/SpellSetup.css":
/*!***********************************!*\
  !*** ./src/styles/SpellSetup.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./SpellSetup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/SpellSetup.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./SpellSetup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/SpellSetup.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./SpellSetup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/SpellSetup.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/frog_cards.css":
/*!***********************************!*\
  !*** ./src/styles/frog_cards.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./frog_cards.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/frog_cards.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./frog_cards.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/frog_cards.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./frog_cards.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/frog_cards.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/instructions.css":
/*!*************************************!*\
  !*** ./src/styles/instructions.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./instructions.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/instructions.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./instructions.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/instructions.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./instructions.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/instructions.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/login.css":
/*!******************************!*\
  !*** ./src/styles/login.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/login.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/login.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/login.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/navigation.css":
/*!***********************************!*\
  !*** ./src/styles/navigation.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./navigation.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/navigation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./navigation.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/navigation.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./navigation.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/navigation.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/notificationBar.css":
/*!****************************************!*\
  !*** ./src/styles/notificationBar.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./notificationBar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/notificationBar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./notificationBar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/notificationBar.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./notificationBar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/notificationBar.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/radio_button.css":
/*!*************************************!*\
  !*** ./src/styles/radio_button.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./radio_button.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/radio_button.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./radio_button.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/radio_button.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./radio_button.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/radio_button.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/setup.css":
/*!******************************!*\
  !*** ./src/styles/setup.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./setup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/setup.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./setup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/setup.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./setup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/setup.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/spellList.css":
/*!**********************************!*\
  !*** ./src/styles/spellList.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./spellList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/spellList.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./spellList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/spellList.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./spellList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/spellList.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kiraporter/LIGHTHOUSELABS/Assignments/duel/duel/react-front-end/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map