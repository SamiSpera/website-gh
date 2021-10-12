"use strict";
exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NumberScroll)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(821);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(168);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function NumberScroll({
  imgSrc,
  number,
  title,
  plus,
  order,
  percent
}) {
  const isBrowser = () => false;

  let tabletSize;

  if (isBrowser) {
    tabletSize = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__/* .useMedia */ .G)('(max-width: 775px)');
  }

  const spring = (0,react_spring__WEBPACK_IMPORTED_MODULE_1__.useSpring)({
    from: {
      val: 0
    },
    to: {
      val: typeof number == 'number' ? number : 0
    },
    config: {
      duration: 2000,
      config: react_spring__WEBPACK_IMPORTED_MODULE_1__.config.molasses
    }
  });
  const styles = (0,react_spring__WEBPACK_IMPORTED_MODULE_1__.useSpring)({
    from: {
      opacity: 0,
      fontSize: tabletSize ? '5vw' : '3vw',
      margin: 0,
      color: 'var(--blueDocspera)'
    },
    to: {
      opacity: 1,
      fontSize: tabletSize ? '5vw' : '3vw'
    },
    config: {
      duration: 2000,
      config: react_spring__WEBPACK_IMPORTED_MODULE_1__.config.molasses
    }
  });
  const plusStyles = (0,react_spring__WEBPACK_IMPORTED_MODULE_1__.useSpring)({
    from: {
      opacity: 0,
      fontSize: tabletSize ? '5vw' : '3vw',
      margin: 0,
      color: 'var(--blueDocspera)'
    },
    to: {
      opacity: 1
    },
    config: {
      duration: 2500
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "jsx-2020587524" + " " + 'div',
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
      src: imgSrc,
      className: "jsx-2020587524"
    }), typeof number === 'number' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        display: 'flex'
      },
      className: "jsx-2020587524",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__.animated.h1, {
        style: styles,
        children: isNaN(spring) && spring.val.to(val => Math.floor(val))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_spring__WEBPACK_IMPORTED_MODULE_1__.animated.h1, {
        style: tabletSize ? plusStyles : plusStyles,
        children: [plus && '+', percent && '%']
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__.animated.h1, {
      style: tabletSize ? styles : styles,
      children: number
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      className: "jsx-2020587524" + " " + 'title',
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2020587524",
      children: ["img.jsx-2020587524{height:12vw;}", "@media (min-width:1000px){img.jsx-2020587524{height:100px;}}", ".div.jsx-2020587524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".title.jsx-2020587524{text-align:center;font-size:18px;max-width:200px;}", "@media (max-width:800px){.title.jsx-2020587524{font-size:12px;}}"]
    })]
  });
}

/***/ })

};
;