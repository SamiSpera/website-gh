"use strict";
exports.id = 967;
exports.ids = [967];
exports.modules = {

/***/ 967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Carousel)
});

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/CarouselItem.js




function CarouselItem({
  itemInfo,
  type
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: style_default().dynamic([["949936191", [type == 'case-study' || type == 'blog' && '10px', type == 'case-study' || type == 'blog' && 'drop-shadow(0 0px 10px lightgray)', itemInfo.width, itemInfo.width / 1.2, itemInfo.width / 1.7]]]) + " " + 'carousel-item',
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: itemInfo.img,
      height: 125,
      width: 250,
      className: style_default().dynamic([["949936191", [type == 'case-study' || type == 'blog' && '10px', type == 'case-study' || type == 'blog' && 'drop-shadow(0 0px 10px lightgray)', itemInfo.width, itemInfo.width / 1.2, itemInfo.width / 1.7]]])
    }), itemInfo.title && /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: style_default().dynamic([["949936191", [type == 'case-study' || type == 'blog' && '10px', type == 'case-study' || type == 'blog' && 'drop-shadow(0 0px 10px lightgray)', itemInfo.width, itemInfo.width / 1.2, itemInfo.width / 1.7]]]) + " " + 'title',
      children: itemInfo.title
    }), itemInfo.bod && /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: style_default().dynamic([["949936191", [type == 'case-study' || type == 'blog' && '10px', type == 'case-study' || type == 'blog' && 'drop-shadow(0 0px 10px lightgray)', itemInfo.width, itemInfo.width / 1.2, itemInfo.width / 1.7]]]) + " " + 'body',
      children: itemInfo.body
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "949936191",
      dynamic: [type == 'case-study' || type == 'blog' && '10px', type == 'case-study' || type == 'blog' && 'drop-shadow(0 0px 10px lightgray)', itemInfo.width, itemInfo.width / 1.2, itemInfo.width / 1.7],
      children: [".carousel-item.__jsx-style-dynamic-selector{padding:10px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", `img.__jsx-style-dynamic-selector{border-radius:${type == 'case-study' || type == 'blog' && '10px'};-webkit-filter:${type == 'case-study' || type == 'blog' && 'drop-shadow(0 0px 10px lightgray)'};filter:${type == 'case-study' || type == 'blog' && 'drop-shadow(0 0px 10px lightgray)'};height:auto;width:${itemInfo.width}px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}`, ".title.__jsx-style-dynamic-selector{max-width:250px;font-weight:700;height:50px;margin-top:10px;}", ".body.__jsx-style-dynamic-selector{max-width:250px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-top:20px;}", `@media (max-width:614px){img.__jsx-style-dynamic-selector{width:${itemInfo.width / 1.2}px;}}`, `@media (max-width:368px){img.__jsx-style-dynamic-selector{width:${itemInfo.width / 1.7}px;}}`]
    })]
  });
}
;// CONCATENATED MODULE: ./components/Chevron.js



const Chevron = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    fill: props.color,
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64",
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        stroke: props.color,
        d: "M18,64c-1,0-2-0.4-2.7-1.1c-1.6-1.5-1.7-4-0.2-5.7L38.9,32L15.1,6.7c-1.5-1.6-1.4-4.1,0.2-5.7s4.2-1.4,5.7,0.2L50,32 L21,62.7C20.2,63.6,19.1,64,18,64z"
      })
    })
  });
};

/* harmony default export */ const components_Chevron = (Chevron);
// EXTERNAL MODULE: ./hooks/useMedia.js
var useMedia = __webpack_require__(168);
;// CONCATENATED MODULE: ./components/Carousel.js








function Carousel({
  content,
  type
}) {
  const {
    0: current,
    1: setCurrent
  } = (0,external_react_.useState)(0);

  const isBrowser = () => false;

  let tabletSize, mobileSize;

  if (isBrowser) {
    tabletSize = (0,useMedia/* useMedia */.G)('(min-width: 810px)');
    mobileSize = (0,useMedia/* useMedia */.G)('(max-width: 614px)');
  } // content = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     img: type === 'blog' ? 'website-gh/images/blog-post.png' : 'website-gh/images/case-study.png',
  //     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit'
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     img: type === 'blog' ? 'website-gh/images/blog-post.png' : 'website-gh/images/case-study.png',
  //     title: 'qui est esse',
  //     body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat'
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     img: type === 'blog' ? 'website-gh/images/blog-post.png' : 'website-gh/images/case-study.png',
  //     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  //     body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel '
  //   }
  // ]


  (0,external_react_.useEffect)(() => {
    if (current + 2 == content.length) {
      console.log('current!:', current);
      setCurrent(0);
    }
  }, [current]);

  const nextSlide = () => {
    if (current !== content.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousSlide = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };

  if (!Array.isArray(content) || content.length <= 0) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-488190957" + " " + 'container',
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-488190957" + " " + 'carousel',
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: () => previousSlide(),
        className: "jsx-488190957" + " " + 'left-chevron',
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Chevron, {
          color: current === 0 ? 'grey' : 'black'
        })
      }), content.map((item, idx) => {
        console.log('idx', idx);

        if (tabletSize) {
          if (idx == current || idx == current + 1 || idx == current + 2) {
            console.log(current);
            return /*#__PURE__*/jsx_runtime_.jsx(CarouselItem, {
              itemInfo: item,
              type: type
            }, idx);
          }
        } else if (mobileSize) {
          if (idx == current) {
            console.log(current);
            return /*#__PURE__*/jsx_runtime_.jsx(CarouselItem, {
              itemInfo: item,
              type: type
            }, idx);
          }
        } else if (idx == current || idx == current + 1) {
          console.log(current);
          return /*#__PURE__*/jsx_runtime_.jsx(CarouselItem, {
            itemInfo: item,
            type: type
          }, idx);
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: () => nextSlide(),
        className: "jsx-488190957" + " " + 'right-chevron',
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Chevron, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "488190957",
      children: [".container.jsx-488190957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:200px;max-width:800px;margin:0 auto;}", ".carousel.jsx-488190957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}", ".left-chevron.jsx-488190957{width:40px;height:40px;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);cursor:pointer;margin-right:40px;}", ".right-chevron.jsx-488190957{width:40px;height:40px;cursor:pointer;margin-left:40px;}", "@media (max-width:810px){.right-chevron.jsx-488190957,.left-chevron.jsx-488190957{width:35px;height:35px;}}", "@media (max-width:614px){.right-chevron.jsx-488190957,.left-chevron.jsx-488190957{width:25px;height:25px;}}", "@media (max-width:368px){.right-chevron.jsx-488190957,.left-chevron.jsx-488190957{margin:0;width:20px;height:20px;}}"]
    })]
  });
}

/***/ })

};
;