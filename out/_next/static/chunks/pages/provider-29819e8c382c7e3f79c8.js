;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8],
  {
    9967: function (e, i, s) {
      'use strict'
      s.d(i, {
        Z: function () {
          return c
        }
      })
      var t = s(5988),
        a = s(7294),
        n = (s(1664), s(5893))
      function r(e) {
        var i = e.itemInfo,
          s = e.type
        return (0, n.jsxs)('div', {
          className:
            t.default.dynamic([
              [
                '3443682309',
                [
                  'case-study' == s || ('blog' == s && '10px'),
                  'case-study' == s || ('blog' == s && 'drop-shadow(0 0px 10px lightgray)'),
                  i.width,
                  i.width / 1.4,
                  i.width / 1.7
                ]
              ]
            ]) + ' carousel-item',
          children: [
            (0, n.jsx)('img', {
              src: i.img,
              height: 125,
              width: 250,
              className: t.default.dynamic([
                [
                  '3443682309',
                  [
                    'case-study' == s || ('blog' == s && '10px'),
                    'case-study' == s || ('blog' == s && 'drop-shadow(0 0px 10px lightgray)'),
                    i.width,
                    i.width / 1.4,
                    i.width / 1.7
                  ]
                ]
              ])
            }),
            i.title &&
              (0, n.jsx)('p', {
                className:
                  t.default.dynamic([
                    [
                      '3443682309',
                      [
                        'case-study' == s || ('blog' == s && '10px'),
                        'case-study' == s || ('blog' == s && 'drop-shadow(0 0px 10px lightgray)'),
                        i.width,
                        i.width / 1.4,
                        i.width / 1.7
                      ]
                    ]
                  ]) + ' title',
                children: i.title
              }),
            i.bod &&
              (0, n.jsx)('p', {
                className:
                  t.default.dynamic([
                    [
                      '3443682309',
                      [
                        'case-study' == s || ('blog' == s && '10px'),
                        'case-study' == s || ('blog' == s && 'drop-shadow(0 0px 10px lightgray)'),
                        i.width,
                        i.width / 1.4,
                        i.width / 1.7
                      ]
                    ]
                  ]) + ' body',
                children: i.body
              }),
            (0, n.jsx)(t.default, {
              id: '3443682309',
              dynamic: [
                'case-study' == s || ('blog' == s && '10px'),
                'case-study' == s || ('blog' == s && 'drop-shadow(0 0px 10px lightgray)'),
                i.width,
                i.width / 1.4,
                i.width / 1.7
              ],
              children: [
                '.carousel-item.__jsx-style-dynamic-selector{padding:10px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}',
                'img.__jsx-style-dynamic-selector{border-radius:'
                  .concat('case-study' == s || ('blog' == s && '10px'), ';-webkit-filter:')
                  .concat(
                    'case-study' == s || ('blog' == s && 'drop-shadow(0 0px 10px lightgray)'),
                    ';filter:'
                  )
                  .concat(
                    'case-study' == s || ('blog' == s && 'drop-shadow(0 0px 10px lightgray)'),
                    ';height:auto;width:'
                  )
                  .concat(
                    i.width,
                    'px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}'
                  ),
                '.title.__jsx-style-dynamic-selector{max-width:250px;font-weight:700;height:50px;margin-top:10px;}',
                '.body.__jsx-style-dynamic-selector{max-width:250px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-top:20px;}',
                '@media (max-width:614px){img.__jsx-style-dynamic-selector{width:'.concat(
                  i.width / 1.4,
                  'px;}}'
                ),
                '@media (max-width:368px){img.__jsx-style-dynamic-selector{width:'.concat(
                  i.width / 1.7,
                  'px;}}'
                )
              ]
            })
          ]
        })
      }
      var l = function (e) {
          return (0, n.jsx)('svg', {
            fill: e.color,
            x: '0px',
            y: '0px',
            viewBox: '0 0 64 64',
            children: (0, n.jsx)('g', {
              children: (0, n.jsx)('path', {
                stroke: e.color,
                d: 'M18,64c-1,0-2-0.4-2.7-1.1c-1.6-1.5-1.7-4-0.2-5.7L38.9,32L15.1,6.7c-1.5-1.6-1.4-4.1,0.2-5.7s4.2-1.4,5.7,0.2L50,32 L21,62.7C20.2,63.6,19.1,64,18,64z'
              })
            })
          })
        },
        o = s(8168)
      function c(e) {
        var i,
          s,
          c = e.content,
          d = e.type,
          x = (0, a.useState)(0),
          g = x[0],
          m = x[1]
        ;(function () {
          return !0
        } && ((i = (0, o.G)('(min-width: 810px)')), (s = (0, o.G)('(max-width: 614px)'))),
          (0, a.useEffect)(
            function () {
              g + 2 == c.length && m(0)
            },
            [g]
          ))
        return !Array.isArray(c) || c.length <= 0
          ? null
          : (0, n.jsxs)('div', {
              className: 'jsx-271669678 container',
              children: [
                (0, n.jsxs)('div', {
                  className: 'jsx-271669678 carousel',
                  children: [
                    (0, n.jsx)('div', {
                      onClick: function () {
                        0 !== g && m(g - 1)
                      },
                      className: 'jsx-271669678 left-chevron',
                      children: (0, n.jsx)(l, { color: 0 === g ? 'grey' : 'black' })
                    }),
                    c.map(function (e, t) {
                      if (i) {
                        if (t == g || t == g + 1 || t == g + 2)
                          return (0, n.jsx)(r, { itemInfo: e, type: d }, t)
                      } else if (s) {
                        if (t == g || t == g + 1) return (0, n.jsx)(r, { itemInfo: e, type: d }, t)
                      } else if (t == g || t == g + 1)
                        return (0, n.jsx)(r, { itemInfo: e, type: d }, t)
                    }),
                    (0, n.jsx)('div', {
                      onClick: function () {
                        g !== c.length - 1 && m(g + 1)
                      },
                      className: 'jsx-271669678 right-chevron',
                      children: (0, n.jsx)(l, {})
                    })
                  ]
                }),
                (0, n.jsx)(t.default, {
                  id: '271669678',
                  children: [
                    '.container.jsx-271669678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:200px;max-width:800px;margin:0 auto;}',
                    '.carousel.jsx-271669678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}',
                    '.left-chevron.jsx-271669678{width:40px;height:40px;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);cursor:pointer;margin-right:40px;}',
                    '.right-chevron.jsx-271669678{width:40px;height:40px;cursor:pointer;margin-left:40px;}',
                    '@media (max-width:810px){.right-chevron.jsx-271669678,.left-chevron.jsx-271669678{width:35px;height:35px;}}',
                    '@media (max-width:614px){.right-chevron.jsx-271669678,.left-chevron.jsx-271669678{width:25px;height:25px;margin:0;}}',
                    '@media (max-width:368px){.right-chevron.jsx-271669678,.left-chevron.jsx-271669678{margin:0;width:20px;height:20px;}}'
                  ]
                })
              ]
            })
      }
    },
    3714: function (e, i, s) {
      'use strict'
      s.d(i, {
        Z: function () {
          return n
        }
      })
      var t = s(9008),
        a = s(5893)
      function n() {
        return (0, a.jsxs)(t.default, {
          children: [
            (0, a.jsx)('title', {
              children: 'DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform'
            }),
            (0, a.jsx)('link', { rel: 'icon', href: 'website-gh/favicon.ico' }),
            (0, a.jsx)('link', {
              rel: 'preload',
              href: '/website-gh/fonts/VarelaRound-Regular.ttf',
              as: 'font',
              crossOrigin: ''
            })
          ]
        })
      }
    },
    6560: function (e, i, s) {
      'use strict'
      s.d(i, {
        Z: function () {
          return l
        }
      })
      var t = s(5988),
        a = s(9920),
        n = s(8168),
        r = s(5893)
      function l(e) {
        var i,
          s = e.imgSrc,
          l = e.number,
          o = e.title,
          c = e.plus,
          d = (e.order, e.percent)
        i = (0, n.G)('(max-width: 775px)')
        var x = (0, a.useSpring)({
            from: { val: 0 },
            to: { val: 'number' == typeof l ? l : 0 },
            config: { duration: 2e3, config: a.config.molasses }
          }),
          g = (0, a.useSpring)({
            from: { opacity: 0, fontSize: i ? '5vw' : '30px', margin: 0, color: 'var(--blueDark)' },
            to: { opacity: 1, fontSize: i ? '5vw' : '30px' },
            config: { duration: 2e3, config: a.config.molasses }
          }),
          m = (0, a.useSpring)({
            from: { opacity: 0, fontSize: i ? '5vw' : '30px', margin: 0, color: 'var(--blueDark)' },
            to: { opacity: 1, fontSize: i ? '5vw' : '30px' },
            config: { duration: 2e3, delay: 1e3 }
          })
        return (0, r.jsxs)('div', {
          className: 'jsx-4085771882 div',
          children: [
            (0, r.jsx)('img', { src: s, className: 'jsx-4085771882' }),
            'number' === typeof l
              ? (0, r.jsxs)('div', {
                  style: { display: 'flex' },
                  className: 'jsx-4085771882',
                  children: [
                    (0, r.jsx)(a.animated.h1, {
                      style: g,
                      children:
                        isNaN(x) &&
                        x.val.to(function (e) {
                          return Math.floor(e).toLocaleString('en-US')
                        })
                    }),
                    (0, r.jsxs)(a.animated.h1, { style: m, children: [c && '+', d && '%'] })
                  ]
                })
              : (0, r.jsx)(a.animated.h1, { style: g, children: l }),
            (0, r.jsx)('span', { className: 'jsx-4085771882 title', children: o }),
            (0, r.jsx)(t.default, {
              id: '4085771882',
              children: [
                'img.jsx-4085771882{height:60px;}',
                '@media (max-width:500px){img.jsx-4085771882{height:40px;}}',
                '.div.jsx-4085771882{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                '.title.jsx-4085771882{text-align:center;font-size:18px;max-width:200px;color:var(--blueDark);}',
                '@media (max-width:800px){.title.jsx-4085771882{font-size:12px;}}'
              ]
            })
          ]
        })
      }
    },
    3512: function (e, i, s) {
      'use strict'
      var t = s(5988),
        a = (s(7294), s(5893))
      i.Z = function () {
        return (0, a.jsxs)('div', {
          style: { backgroundColor: 'var(--blueXLight)', width: '100%' },
          className: 'jsx-1388134335',
          children: [
            (0, a.jsxs)('div', {
              className: 'jsx-1388134335 provider-solutions inner-div',
              children: [
                (0, a.jsx)('h3', {
                  className: 'jsx-1388134335 title',
                  children: 'Provider Premium'
                }),
                (0, a.jsx)('h2', {
                  className: 'jsx-1388134335 title-h2',
                  children: 'Integrated Provider Solutions'
                }),
                (0, a.jsx)('p', {
                  className: 'jsx-1388134335',
                  children:
                    'Best in class SaaS, real-time, predictive platform for the entire surgical ecosystem'
                }),
                (0, a.jsxs)('div', {
                  className: 'jsx-1388134335 provider-solutions-row',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'jsx-1388134335 content',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'jsx-1388134335',
                          children: [
                            (0, a.jsx)('h4', {
                              className: 'jsx-1388134335',
                              children:
                                'Integrated Surgical Scheduling & Coordination Across Entire Care Team'
                            }),
                            (0, a.jsx)('div', {
                              className: 'jsx-1388134335 img-div',
                              children: (0, a.jsx)('img', {
                                src: '/website-gh/images/share-calendar.png',
                                className: 'jsx-1388134335'
                              })
                            }),
                            (0, a.jsx)('p', {
                              className: 'jsx-1388134335',
                              children: (0, a.jsxs)('ul', {
                                className: 'jsx-1388134335',
                                children: [
                                  (0, a.jsx)('li', {
                                    className: 'jsx-1388134335',
                                    children: 'Case scheduling & OR management'
                                  }),
                                  (0, a.jsx)('li', {
                                    className: 'jsx-1388134335',
                                    children: 'Image Sharing'
                                  }),
                                  (0, a.jsx)('li', {
                                    className: 'jsx-1388134335',
                                    children: 'EMR & Telehealth integration'
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        (0, a.jsx)('a', {
                          href: 'https://docspera.com/scheduling',
                          target: '_blank',
                          className: 'jsx-1388134335',
                          children: (0, a.jsx)('button', {
                            className: 'jsx-1388134335 view-product-btn',
                            children: 'View Scheduling Solutions'
                          })
                        })
                      ]
                    }),
                    (0, a.jsxs)('div', {
                      className: 'jsx-1388134335 content',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'jsx-1388134335',
                          children: [
                            (0, a.jsx)('h4', {
                              className: 'jsx-1388134335',
                              children: 'Surgical Dashboard for Managing Upcoming Cases'
                            }),
                            (0, a.jsx)('div', {
                              className: 'jsx-1388134335 img-div',
                              children: (0, a.jsx)('img', {
                                src: '/website-gh/images/product-shots/smart-scheduling.png',
                                className: 'jsx-1388134335'
                              })
                            }),
                            (0, a.jsx)('p', {
                              className: 'jsx-1388134335',
                              children: (0, a.jsxs)('ul', {
                                className: 'jsx-1388134335',
                                children: [
                                  (0, a.jsx)('li', {
                                    className: 'jsx-1388134335',
                                    children:
                                      'Real-time coordination between Clinic, OR Team & Device Rep'
                                  }),
                                  (0, a.jsx)('li', {
                                    className: 'jsx-1388134335',
                                    children:
                                      'Intelligent case backlog and cancellations re-booking'
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        (0, a.jsx)('a', {
                          href: 'https://docspera.com/or',
                          target: '_blank',
                          className: 'jsx-1388134335',
                          children: (0, a.jsx)('button', {
                            className: 'jsx-1388134335 view-product-btn',
                            children: 'View Management Solutions'
                          })
                        })
                      ]
                    }),
                    (0, a.jsxs)('div', {
                      className: 'jsx-1388134335 content',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'jsx-1388134335',
                          children: [
                            (0, a.jsx)('h4', {
                              className: 'jsx-1388134335',
                              children:
                                'Episode of Care Tracker for Post Operative Care Management '
                            }),
                            (0, a.jsx)('div', {
                              className: 'jsx-1388134335 img-div',
                              children: (0, a.jsx)('img', {
                                src: '/website-gh/images/product-shots/EOC.png',
                                className: 'jsx-1388134335'
                              })
                            }),
                            (0, a.jsx)('p', {
                              className: 'jsx-1388134335',
                              children: (0, a.jsxs)('ul', {
                                className: 'jsx-1388134335',
                                children: [
                                  (0, a.jsx)('li', {
                                    className: 'jsx-1388134335',
                                    children: 'Post-acute management and recovery coordination'
                                  }),
                                  (0, a.jsx)('li', {
                                    className: 'jsx-1388134335',
                                    children: 'Risk stratification & management'
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        (0, a.jsx)('a', {
                          href: 'https://docspera.com/eoc',
                          target: '_blank',
                          className: 'jsx-1388134335',
                          children: (0, a.jsx)('button', {
                            className: 'jsx-1388134335 view-product-btn',
                            children: 'View EOC Solutions'
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, a.jsx)(t.default, {
              id: '1388134335',
              children: [
                '.provider-solutions-row.jsx-1388134335{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}',
                '@media (max-width:1000px){.provider-solutions-row.jsx-1388134335{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}}',
                '.provider-solutions-row.jsx-1388134335>div.jsx-1388134335{margin:10px;padding:10px;-webkit-flex:1;-ms-flex:1;flex:1;background-color:white;-webkit-filter:drop-shadow(0 0px 10px lightgray);filter:drop-shadow(0 0px 10px lightgray);min-width:300px;border-radius:10px;padding:15px;}',
                '.content.jsx-1388134335{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}',
                '.img-div.jsx-1388134335{height:230px;background-color:transparent !important;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}',
                '.img-div.jsx-1388134335>img.jsx-1388134335{max-height:100%;max-width:100%;border-radius:10px;-webkit-filter:drop-shadow(0 0px 10px lightgray);filter:drop-shadow(0 0px 10px lightgray);}',
                '.provider-solutions-row.jsx-1388134335 h4.jsx-1388134335{text-align:center;height:90px;max-width:350px;margin:0 auto;padding-left:10px;padding-right:10px;}',
                '.provider-solutions-row.jsx-1388134335 h6.jsx-1388134335{color:var(--blueDark);font-size:16px;font-weight:500;margin:0;}',
                '.provider-solutions-row.jsx-1388134335 ul.jsx-1388134335{margin-left:-20px;}',
                '.provider-solutions-row.jsx-1388134335 p.jsx-1388134335{padding-left:10px;padding-right:10px;margin:0 auto;max-width:350px;}',
                '@media (max-width:650px){.provider-solutions-row.jsx-1388134335{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.provider-solutions-row.jsx-1388134335 div.jsx-1388134335{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}',
                'a.jsx-1388134335{-webkit-text-decoration:none;text-decoration:none;width:100%;}',
                '.view-product-btn.jsx-1388134335{background-color:var(--blueDocspera);border:none;border-radius:5px;color:white;padding:5px 10px;font-size:16px;font-weight:500;width:100%;height:40px;max-width:350px;display:block;margin:0 auto;}',
                'button.jsx-1388134335:hover{cursor:pointer;-webkit-filter:drop-shadow(0 5px 5px var(--blueSky));filter:drop-shadow(0 5px 5px var(--blueSky));-webkit-transform:translate(0,-3px);-ms-transform:translate(0,-3px);transform:translate(0,-3px);-webkit-transition:all 0.2s;transition:all 0.2s;}'
              ]
            })
          ]
        })
      }
    },
    4894: function (e, i, s) {
      'use strict'
      s.r(i),
        s.d(i, {
          default: function () {
            return g
          }
        })
      var t = s(5988),
        a = s(7294),
        n = s(9008),
        r = (s(3714), s(2857)),
        l = s(6560),
        o = s(9967),
        c = s(2651),
        d = s(3512),
        x = (s(8168), s(5893))
      function g() {
        if ('undefined' !== typeof document) {
          document.querySelector('.statistics')
          var e = document.querySelectorAll('.inner-div'),
            i = new IntersectionObserver(
              function (e, i) {
                e.forEach(function (e) {
                  console.log(e.target, 'translate?')
                })
              },
              { root: null, threshold: 0, rootMargin: '-150px' }
            )
          e.forEach(function (e) {
            i.observe(e)
          })
        } else console.log('NOPE')
        var s = [
            { img: 'athena-health.png', height: null, width: 220 },
            { img: 'prime.png', height: null, width: 120 },
            { img: 'modernizing-medicine.png', height: null, width: 190 },
            { img: 'medstrat.jpg', height: null, width: 190 },
            { img: 'CMS.jpg', height: 65, width: 220 },
            { img: 'centricity.png', height: null, width: 150 },
            { img: 'medent.png', height: null, width: 180 },
            { img: 'app-orchard.png', height: null, width: 150 },
            { img: 'elation-health.jpg', height: null, width: 190 },
            { img: 'next-gen.jpg', height: null, width: 140 },
            { img: 'e-clinical-works.jpg', height: null, width: 180 },
            { img: 'cerner.png', height: null, width: 170 },
            { img: 'allscripts.png', height: null, width: 170 },
            { img: 'drchrono.png', height: null, width: 140 },
            { img: 'greenway.png', height: null, width: 150 },
            { img: 'SRS.jpg', height: null, width: 120 }
          ],
          g = (0, a.useState)(!1),
          m = g[0],
          h = g[1],
          p = m ? s.length : 4,
          j = [
            { img: '/website-gh/images/logos/UCSF.png', width: 100 },
            { img: '/website-gh/images/logos/orthocare.jpg', width: 170 },
            { img: '/website-gh/images/logos/TMI.jpg', width: 170 },
            { img: '/website-gh/images/logos/webster.png', width: 160 },
            { img: '/website-gh/images/logos/emerge-ortho.jpg', width: 180 },
            { img: '/website-gh/images/logos/DOC.png', width: 150 },
            { img: '/website-gh/images/logos/mos.png', width: 170 },
            { img: '/website-gh/images/logos/CPO.png', width: 180 },
            { img: '/website-gh/images/logos/baylor.jpg', width: 160 },
            { img: '/website-gh/images/logos/childress.png', width: 200 },
            { img: '/website-gh/images/logos/trinity.png', width: 180 },
            { img: '/website-gh/images/logos/louisville.png', width: 170 },
            { img: '/website-gh/images/logos/washington.png', width: 200 },
            { img: '/website-gh/images/logos/englewood.png', width: 160 }
          ],
          w = (0, a.useState)(!1)
        w[0], w[1]
        return (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsxs)(n.default, {
              children: [
                (0, x.jsx)('title', {
                  className: 'jsx-3435324872',
                  children: 'DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform'
                }),
                (0, x.jsx)('link', {
                  rel: 'icon',
                  href: 'website-gh/favicon.ico',
                  className: 'jsx-3435324872'
                }),
                (0, x.jsx)('link', {
                  rel: 'preload',
                  href: '/website-gh/fonts/VarelaRound-Regular.ttf',
                  as: 'font',
                  crossOrigin: '',
                  className: 'jsx-3435324872'
                })
              ]
            }),
            (0, x.jsx)(r.Z, {}),
            (0, x.jsxs)('div', {
              className: 'jsx-3435324872 container',
              children: [
                (0, x.jsxs)('div', {
                  id: 'hero-div',
                  className: 'jsx-3435324872',
                  children: [
                    (0, x.jsx)('h2', {
                      id: 'hero-h2',
                      className: 'jsx-3435324872',
                      children:
                        'Intelligent Surgical Coordination: Enabling Efficiency and Profitability'
                    }),
                    (0, x.jsx)('p', {
                      id: 'hero-p',
                      className: 'jsx-3435324872',
                      children:
                        'DocSpera is an integrated surgical coordination solution to help manage coordination across multiple sites and teams, drive improved efficiencies and deliver better patient care.'
                    }),
                    (0, x.jsx)('img', {
                      src: '/website-gh/images/provider-art-work.png',
                      id: 'surgeon-doodle',
                      className: 'jsx-3435324872'
                    }),
                    (0, x.jsxs)('div', {
                      style: { marginBottom: 20 },
                      className: 'jsx-3435324872 statistics',
                      children: [
                        (0, x.jsxs)('div', {
                          className: 'jsx-3435324872',
                          children: [
                            (0, x.jsx)(l.Z, {
                              imgSrc: '/website-gh/images/surgeon-users.png',
                              number: 6e3,
                              title: 'Surgeons',
                              plus: !0
                            }),
                            (0, x.jsx)(l.Z, {
                              imgSrc: '/website-gh/images/patient-volume.png',
                              number: 1e5,
                              title: 'Monthly Patient Visits',
                              plus: !0
                            })
                          ]
                        }),
                        (0, x.jsxs)('div', {
                          className: 'jsx-3435324872',
                          children: [
                            (0, x.jsx)(l.Z, {
                              imgSrc: '/website-gh/images/practices.png',
                              number: 300,
                              title: 'Practices, ASCs and Hospitals',
                              plus: !0
                            }),
                            (0, x.jsx)(l.Z, {
                              imgSrc: '/website-gh/images/surgical-cases.png',
                              number: 35e4,
                              title: 'Surgical Cases',
                              plus: !0
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, x.jsx)('div', {
                  style: { backgroundColor: 'var(--blueXLight)' },
                  className: 'jsx-3435324872',
                  children: (0, x.jsxs)('div', {
                    id: 'seamless-integration',
                    className: 'jsx-3435324872 inner-div',
                    children: [
                      (0, x.jsx)('h2', {
                        className: 'jsx-3435324872',
                        children: 'Seamless Integration '
                      }),
                      (0, x.jsx)('img', {
                        src: '/website-gh/images/graphics/seamless-integration.png',
                        className: 'jsx-3435324872'
                      })
                    ]
                  })
                }),
                (0, x.jsx)('div', {
                  id: 'provider-solutions-inside-provider',
                  className: 'jsx-3435324872',
                  children: (0, x.jsx)(d.Z, {})
                }),
                (0, x.jsxs)('div', {
                  id: 'rapid-integration',
                  className: 'jsx-3435324872 inner-div',
                  children: [
                    (0, x.jsx)('h2', {
                      className: 'jsx-3435324872',
                      children: 'Rapid Integration & Deployment at Scale'
                    }),
                    (0, x.jsx)('p', {
                      className: 'jsx-3435324872',
                      children: 'Integrated with over 30 EMR and 3rd party systems'
                    }),
                    (0, x.jsxs)('div', {
                      className: 'jsx-3435324872 logos',
                      children: [
                        (0, x.jsxs)('div', {
                          className: 'jsx-3435324872',
                          children: [
                            s.slice(0, p).map(function (e) {
                              return (0,
                              x.jsx)('img', { src: '/website-gh/images/logos/'.concat(e.img), height: e.height, width: e.width, className: 'jsx-3435324872' })
                            }),
                            (0, x.jsx)('button', {
                              onClick: function () {
                                h(!m)
                              },
                              className: 'jsx-3435324872',
                              children: m ? 'View Less' : 'View More'
                            })
                          ]
                        }),
                        (0, x.jsxs)('div', {
                          className: 'jsx-3435324872',
                          children: [
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/athena-health.png',
                              width: 220,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/prime.png',
                              width: 120,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/modernizing-medicine.png',
                              width: 190,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/medstrat.jpg',
                              width: 190,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/CMS.jpg',
                              height: 65,
                              width: 100,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/centricity.png',
                              width: 150,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/medent.png',
                              width: 180,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/app-orchard.png',
                              width: 150,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/elation-health.jpg',
                              width: 190,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/next-gen.jpg',
                              width: 140,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/e-clinical-works.jpg',
                              width: 180,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/cerner.png',
                              width: 170,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/allscripts.png',
                              width: 170,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/drchrono.png',
                              width: 140,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/greenway.png',
                              width: 150,
                              className: 'jsx-3435324872'
                            }),
                            (0, x.jsx)('img', {
                              src: '/website-gh/images/logos/SRS.jpg',
                              width: 120,
                              className: 'jsx-3435324872'
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, x.jsx)('div', {
                  style: { backgroundColor: 'var(--blueXLight' },
                  className: 'jsx-3435324872',
                  children: (0, x.jsxs)('div', {
                    id: 'designed-for-providers',
                    className: 'jsx-3435324872 inner-div',
                    children: [
                      (0, x.jsx)('h2', {
                        className: 'jsx-3435324872',
                        children: 'Designed for Providers Like You'
                      }),
                      (0, x.jsxs)('div', {
                        className: 'jsx-3435324872',
                        children: [
                          (0, x.jsx)('img', {
                            id: 'mock-up-img',
                            src: '/website-gh/images/product-shots/mockups.png',
                            className: 'jsx-3435324872'
                          }),
                          (0, x.jsxs)('div', {
                            className: 'jsx-3435324872',
                            children: [
                              (0, x.jsxs)('div', {
                                className: 'jsx-3435324872 box',
                                children: [
                                  (0, x.jsx)('img', {
                                    src: '/website-gh/images/surgical.svg',
                                    className: 'jsx-3435324872'
                                  }),
                                  (0, x.jsxs)('div', {
                                    className: 'jsx-3435324872',
                                    children: [
                                      (0, x.jsx)('h4', {
                                        className: 'jsx-3435324872',
                                        children: 'Built for the Surgical Environment'
                                      }),
                                      (0, x.jsx)('p', {
                                        className: 'jsx-3435324872',
                                        children:
                                          'Used by thousands of surgeons across hundreds of institution with varying surgical pathways'
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, x.jsxs)('div', {
                                className: 'jsx-3435324872 box',
                                children: [
                                  (0, x.jsx)('img', {
                                    src: '/website-gh/images/graphics/security.svg',
                                    className: 'jsx-3435324872'
                                  }),
                                  (0, x.jsxs)('div', {
                                    className: 'jsx-3435324872',
                                    children: [
                                      (0, x.jsx)('h4', {
                                        className: 'jsx-3435324872',
                                        children: 'Secure'
                                      }),
                                      (0, x.jsx)('p', {
                                        className: 'jsx-3435324872',
                                        children:
                                          'Provider verified, SOC 2 level and HIPAA compliant'
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, x.jsxs)('div', {
                                className: 'jsx-3435324872 box',
                                children: [
                                  (0, x.jsx)('img', {
                                    src: '/website-gh/images/graphics/data-driven.svg',
                                    className: 'jsx-3435324872'
                                  }),
                                  (0, x.jsxs)('div', {
                                    className: 'jsx-3435324872',
                                    children: [
                                      (0, x.jsx)('h4', {
                                        className: 'jsx-3435324872',
                                        children: 'Driven by Data'
                                      }),
                                      (0, x.jsx)('p', {
                                        className: 'jsx-3435324872',
                                        children:
                                          'Comprehensive and longitudinal data across the continuum of care'
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, x.jsxs)('div', {
                                className: 'jsx-3435324872 box',
                                children: [
                                  (0, x.jsx)('img', {
                                    src: '/website-gh/images/graphics/integration.svg',
                                    className: 'jsx-3435324872'
                                  }),
                                  (0, x.jsxs)('div', {
                                    className: 'jsx-3435324872',
                                    children: [
                                      (0, x.jsx)('h4', {
                                        className: 'jsx-3435324872',
                                        children: 'Effortless Integration'
                                      }),
                                      (0, x.jsx)('p', {
                                        className: 'jsx-3435324872',
                                        children:
                                          'Web and mobile interface easily integrate with other critical systems'
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                }),
                (0, x.jsx)('div', {
                  style: { backgroundColor: 'var(--blueFaint' },
                  className: 'jsx-3435324872',
                  children: (0, x.jsxs)('div', {
                    className: 'jsx-3435324872 inner-div',
                    children: [
                      (0, x.jsx)('h2', {
                        style: { marginBottom: 50 },
                        className: 'jsx-3435324872',
                        children: 'Testimonials'
                      }),
                      (0, x.jsx)('div', {
                        id: 'testimonials',
                        className: 'jsx-3435324872',
                        children: [
                          {
                            quote:
                              'Dr. Mayle saves time, reduces redundant work and errors using DocSpera at California Pacific Orthopaedics (CPOSM).',
                            name: 'Robert E. Mayle, Jr MD',
                            location: 'California Pacific Orthopaedics (CPOSM)',
                            pic: 'RobertMaley.png'
                          },
                          {
                            quote:
                              'I do a fair bit of team coverage for athletic teams. Connecting w. the athletic trainers is a breeze, they love the real-time interaction and HIPAA compliance as well... Best under-recognized app on the market to keep busy docs organized. A true hidden gem',
                            name: 'Christopher Donaldson, MD',
                            location: 'Western Pennsylvania Orthopedic & Sport Medicine',
                            pic: 'ChristopherDonaldson.png'
                          },
                          {
                            quote:
                              'The DocSpera scheduling platform has been a tremendous asset to my surgical practice. The extremely user\xad friendly mobile app offers remarkable flexibility and provides seamless communication between the surgical team and industry reps, ensuring no preoperative planning or scheduling detail goes unrecognized',
                            name: 'Shane Seroyer, MD',
                            location: 'TMI Sports Medicine & Orthopedic Surgery Arlington',
                            pic: 'ShaneSeroyer.png'
                          },
                          {
                            quote:
                              'DocSpera has been an invaluable tool in my practice; it streamlined my transition into the bundle payment model with very little disruption in my practice workflow. Data collected from DocSpera has allowed us to improve clinical processes and procedures AND provided us with valuable information for commercial payor negotiations',
                            name: 'Aaron Salyapongse MD',
                            location: 'Stanford Health Care -\xad ValleyCare',
                            pic: 'AaronSalyapongse.png'
                          }
                        ].map(function (e, i) {
                          return (0,
                          x.jsxs)('div', { className: 'jsx-3435324872 testimonial', children: [(0, x.jsx)('img', { src: '/website-gh/images/testimonials/'.concat(e.pic), className: 'jsx-3435324872 testimonial-img' }), (0, x.jsxs)('div', { className: 'jsx-3435324872', children: [(0, x.jsxs)('p', { className: 'jsx-3435324872', children: ['"...', e.quote, '..."'] }), (0, x.jsxs)('span', { className: 'jsx-3435324872 name', children: [' - ', e.name] }), (0, x.jsx)('p', { className: 'jsx-3435324872 location', children: e.location })] })] }, i)
                        })
                      })
                    ]
                  })
                }),
                (0, x.jsxs)('div', {
                  className: 'jsx-3435324872 inner-div',
                  children: [
                    (0, x.jsx)('h2', {
                      style: { width: '100%', textAlign: 'center' },
                      className: 'jsx-3435324872',
                      children: 'Join 300+ Institutions Using DocSpera Across the US'
                    }),
                    (0, x.jsx)('div', {
                      className: 'jsx-3435324872 logos institutions',
                      children: (0, x.jsx)(o.Z, { type: 'logo', content: j })
                    })
                  ]
                })
              ]
            }),
            (0, x.jsx)(c.Z, {}),
            (0, x.jsx)(t.default, {
              id: '3435324872',
              children: [
                'h2.jsx-3435324872{margin-bottom:15px;z-index:10;}',
                '.container.jsx-3435324872 p.jsx-3435324872{margin-bottom:10px;}',
                '#hero-h2.jsx-3435324872{text-align:center;}',
                '#hero-p.jsx-3435324872{text-align:center;max-width:700px;margin:0 auto;}',
                '@media (max-width:800px){#hero-p.jsx-3435324872{max-width:90%;}#hero-h2.jsx-3435324872{max-width:90%;margin:0 auto;}}',
                '#hero-div.jsx-3435324872{display:block;margin-top:80px;}',
                '#surgeon-doodle.jsx-3435324872{box-sizing:border-box;max-height:50vh;max-width:100%;display:block;margin:0 auto;z-index:-10000;}',
                '#seamless-integration.jsx-3435324872>img.jsx-3435324872{display:block;max-width:550px;margin:0 auto;margin-top:50px;margin-bottom:-160px;}',
                '@media (max-width:620px){#seamless-integration.jsx-3435324872>img.jsx-3435324872{width:100%;margin-top:0;}}',
                '@media (max-width:800px){#provider-solutions-inside-provider.jsx-3435324872{padding-top:100px;background-color:var(--blueXLight);}}',
                '.logos.jsx-3435324872>div.jsx-3435324872:nth-child(1){display:none;}',
                '#designed-for-providers.jsx-3435324872>div.jsx-3435324872{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                '#mock-up-img.jsx-3435324872{max-height:400px;margin-right:50px;}',
                '#designed-for-providers.jsx-3435324872 .box.jsx-3435324872{border:2px solid var(--blueDocspera);margin:10px 0;padding:10px;border-radius:10px;-webkit-filter:drop-shadow(0 0px 5px lightgray);filter:drop-shadow(0 0px 5px lightgray);background-color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                '#designed-for-providers.jsx-3435324872 .box.jsx-3435324872 h4.jsx-3435324872{margin:0;}',
                '#designed-for-providers.jsx-3435324872 .box.jsx-3435324872 img.jsx-3435324872{width:50px;margin-right:20px;margin-left:5px;}',
                '#testimonials.jsx-3435324872{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}',
                '.testimonial.jsx-3435324872{width:47%;-webkit-filter:drop-shadow(0 0px 5px lightgray);filter:drop-shadow(0 0px 5px lightgray);background-color:white;border-radius:10px;margin:10px;padding:10px;}',
                '.testimonial.jsx-3435324872>div.jsx-3435324872{margin-left:20px;}',
                '.testimonial-img.jsx-3435324872{height:100px;border-radius:100px;display:block;margin:10px auto;margin-bottom:20px;}',
                '.location.jsx-3435324872{color:gray;}',
                '.logos.jsx-3435324872 div.jsx-3435324872{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:space-between;-ms-flex-line-pack:space-between;align-content:space-between;}',
                '.logos.jsx-3435324872 div.jsx-3435324872 img.jsx-3435324872:nth-child(4n-2),.logos.jsx-3435324872 div.jsx-3435324872 img.jsx-3435324872:nth-child(4n-1){justify-self:center;}',
                '.logos.jsx-3435324872 div.jsx-3435324872 img.jsx-3435324872:nth-child(4n){justify-self:end;}',
                '.institutions.jsx-3435324872 div.jsx-3435324872{grid-row-gap:20px;}',
                '@media (max-width:1000px) and (min-width:650px){.institutions.jsx-3435324872 div.jsx-3435324872:nth-child(2){display:none;}.institutions.jsx-3435324872 div.jsx-3435324872:nth-child(1){display:grid;}.institutions.jsx-3435324872 button.jsx-3435324872{background-color:white;border:1px solid gray;border-radius:10px;color:gray;padding:10px 50px;font-size:16px;margin:auto;grid-column:span 4;-webkit-filter:drop-shadow(0 5px 5px lightgray);filter:drop-shadow(0 5px 5px lightgray);cursor:pointer;}}',
                '@media (max-width:1025px){#designed-for-providers.jsx-3435324872>div.jsx-3435324872{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}#mock-up-img.jsx-3435324872{margin-bottom:40px;}}',
                '@media (max-width:890px){.logos.jsx-3435324872 img.jsx-3435324872{width:80%;}}',
                '@media (max-width:835px){.testimonial.jsx-3435324872{width:45%;}}',
                '@media (max-width:650px){.logos.jsx-3435324872 img.jsx-3435324872{width:60%;}.logos.jsx-3435324872 div.jsx-3435324872:nth-child(1)>img.jsx-3435324872:nth-child(5){height:75px;}.logos.jsx-3435324872>div.jsx-3435324872:nth-child(1){display:grid;}.logos.jsx-3435324872>div.jsx-3435324872:nth-child(2){display:none;}.logos.jsx-3435324872 div.jsx-3435324872{display:grid;grid-template-columns:repeat(2,1fr);grid-auto-rows:1fr;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logos.jsx-3435324872 div.jsx-3435324872 img.jsx-3435324872:nth-child(2n){justify-self:center;}.logos.jsx-3435324872 div.jsx-3435324872 img.jsx-3435324872:nth-child(2n-1){justify-self:center;}button.jsx-3435324872{background-color:white;border:1px solid gray;border-radius:10px;color:gray;padding:10px 50px;font-size:16px;margin:auto;grid-column:span 2;-webkit-filter:drop-shadow(0 5px 5px lightgray);filter:drop-shadow(0 5px 5px lightgray);cursor:pointer;}.testimonial.jsx-3435324872{width:100%;}#mock-up-img.jsx-3435324872{width:85%;}}',
                '@media (max-width:480px){.logos.jsx-3435324872 img.jsx-3435324872{width:50%;}.logos.jsx-3435324872 div.jsx-3435324872:nth-child(1)>img.jsx-3435324872:nth-child(5){height:75px;width:40%;}.logos.jsx-3435324872 div.jsx-3435324872{display:grid;grid-template-columns:1fr;grid-auto-rows:120px;}button.jsx-3435324872{grid-column:auto;}}'
              ]
            })
          ]
        })
      }
    },
    4796: function (e, i, s) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/provider',
        function () {
          return s(4894)
        }
      ])
    }
  },
  function (e) {
    e.O(0, [579, 920, 518, 774, 888, 179], function () {
      return (i = 4796), e((e.s = i))
      var i
    })
    var i = e.O()
    _N_E = i
  }
])
