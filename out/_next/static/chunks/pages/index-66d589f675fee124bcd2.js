;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
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
      function x(e) {
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
        r = s(8168)
      function c(e) {
        var i,
          s,
          c = e.content,
          o = e.type,
          d = (0, a.useState)(0),
          p = d[0],
          m = d[1]
        ;(function () {
          return !0
        } && ((i = (0, r.G)('(min-width: 810px)')), (s = (0, r.G)('(max-width: 614px)'))),
          (0, a.useEffect)(
            function () {
              p + 2 == c.length && m(0)
            },
            [p]
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
                        0 !== p && m(p - 1)
                      },
                      className: 'jsx-271669678 left-chevron',
                      children: (0, n.jsx)(l, { color: 0 === p ? 'grey' : 'black' })
                    }),
                    c.map(function (e, t) {
                      if (i) {
                        if (t == p || t == p + 1 || t == p + 2)
                          return (0, n.jsx)(x, { itemInfo: e, type: o }, t)
                      } else if (s) {
                        if (t == p || t == p + 1) return (0, n.jsx)(x, { itemInfo: e, type: o }, t)
                      } else if (t == p || t == p + 1)
                        return (0, n.jsx)(x, { itemInfo: e, type: o }, t)
                    }),
                    (0, n.jsx)('div', {
                      onClick: function () {
                        p !== c.length - 1 && m(p + 1)
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
        x = s(5893)
      function l(e) {
        var i,
          s = e.imgSrc,
          l = e.number,
          r = e.title,
          c = e.plus,
          o = (e.order, e.percent)
        i = (0, n.G)('(max-width: 775px)')
        var d = (0, a.useSpring)({
            from: { val: 0 },
            to: { val: 'number' == typeof l ? l : 0 },
            config: { duration: 2e3, config: a.config.molasses }
          }),
          p = (0, a.useSpring)({
            from: { opacity: 0, fontSize: i ? '5vw' : '30px', margin: 0, color: 'var(--blueDark)' },
            to: { opacity: 1, fontSize: i ? '5vw' : '30px' },
            config: { duration: 2e3, config: a.config.molasses }
          }),
          m = (0, a.useSpring)({
            from: { opacity: 0, fontSize: i ? '5vw' : '30px', margin: 0, color: 'var(--blueDark)' },
            to: { opacity: 1, fontSize: i ? '5vw' : '30px' },
            config: { duration: 2e3, delay: 1e3 }
          })
        return (0, x.jsxs)('div', {
          className: 'jsx-4085771882 div',
          children: [
            (0, x.jsx)('img', { src: s, className: 'jsx-4085771882' }),
            'number' === typeof l
              ? (0, x.jsxs)('div', {
                  style: { display: 'flex' },
                  className: 'jsx-4085771882',
                  children: [
                    (0, x.jsx)(a.animated.h1, {
                      style: p,
                      children:
                        isNaN(d) &&
                        d.val.to(function (e) {
                          return Math.floor(e).toLocaleString('en-US')
                        })
                    }),
                    (0, x.jsxs)(a.animated.h1, { style: m, children: [c && '+', o && '%'] })
                  ]
                })
              : (0, x.jsx)(a.animated.h1, { style: p, children: l }),
            (0, x.jsx)('span', { className: 'jsx-4085771882 title', children: r }),
            (0, x.jsx)(t.default, {
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
    5108: function (e, i, s) {
      'use strict'
      s.r(i),
        s.d(i, {
          default: function () {
            return p
          }
        })
      var t = s(5988),
        a = s(9008),
        n = s(2857),
        x = s(1664),
        l = (s(7294), s(5893)),
        r = s(6560),
        c = s(9967),
        o = s(2651),
        d = s(8168)
      function p() {
        var e
        return (
          function () {
            return !0
          } && (e = (0, d.G)('(max-width: 1100px)')),
          (0, l.jsxs)('div', {
            className: 'jsx-2926398022 container',
            children: [
              (0, l.jsxs)(a.default, {
                children: [
                  (0, l.jsx)('title', {
                    className: 'jsx-2926398022',
                    children:
                      'DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform'
                  }),
                  (0, l.jsx)('link', {
                    rel: 'icon',
                    href: 'website-gh/favicon.ico',
                    className: 'jsx-2926398022'
                  }),
                  (0, l.jsx)('link', {
                    rel: 'preload',
                    href: '/website-gh/fonts/VarelaRound-Regular.ttf',
                    as: 'font',
                    crossOrigin: '',
                    className: 'jsx-2926398022'
                  })
                ]
              }),
              (0, l.jsx)(n.Z, {}),
              (0, l.jsxs)('div', {
                className: 'jsx-2926398022',
                children: [
                  (0, l.jsx)('div', {
                    id: 'landing-bg-div',
                    className: 'jsx-2926398022',
                    children: (0, l.jsx)('img', {
                      id: 'landing-bg',
                      src: '/website-gh/images/iPad-landing.png',
                      className: 'jsx-2926398022'
                    })
                  }),
                  (0, l.jsx)('div', {
                    id: 'hero-h1',
                    className: 'jsx-2926398022',
                    children: (0, l.jsx)('h1', {
                      className: 'jsx-2926398022',
                      children: 'Intelligent Surgical Planning Software from Diagnosis to Recovery'
                    })
                  }),
                  (0, l.jsxs)('div', {
                    className: 'jsx-2926398022 statistics',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'jsx-2926398022',
                        children: [
                          (0, l.jsx)(r.Z, {
                            imgSrc: '/website-gh/images/patient-volume.png',
                            number: 1e5,
                            title: 'Monthly Patient Volume',
                            plus: !0
                          }),
                          (0, l.jsx)(r.Z, {
                            imgSrc: '/website-gh/images/surgeon-users.png',
                            number: 6e3,
                            title: 'Surgeon Users',
                            plus: !0
                          })
                        ]
                      }),
                      (0, l.jsxs)('div', {
                        className: 'jsx-2926398022',
                        children: [
                          (0, l.jsx)(r.Z, {
                            imgSrc: '/website-gh/images/graphics/episodic-cases.png',
                            number: 35e4,
                            title: 'Episodic Cases'
                          }),
                          (0, l.jsx)(r.Z, {
                            imgSrc: '/website-gh/images/practices.png',
                            number: 300,
                            title: 'Practices, ASCs & Hospitals',
                            plus: !0
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, l.jsx)('div', {
                className: 'jsx-2926398022 inner-div',
                children: e
                  ? (0, l.jsxs)('div', {
                      id: 'vision-section',
                      className: 'jsx-2926398022',
                      children: [
                        (0, l.jsx)('h2', {
                          style: { marginBottom: 35, maxWidth: 550, textAlign: 'center' },
                          className: 'jsx-2926398022',
                          children:
                            'Our Vision is to Address Priorities and Unmet Needs Through a Patient\u2019s Surgical Journey'
                        }),
                        (0, l.jsx)('div', {
                          id: 'iphone-calendar-div',
                          className: 'jsx-2926398022',
                          children: (0, l.jsx)('img', {
                            id: 'iphone-calendar',
                            src: '/website-gh/images/product-shots/iphone-calendar.png',
                            className: 'jsx-2926398022'
                          })
                        }),
                        (0, l.jsx)('div', {
                          id: 'timeline-div',
                          className: 'jsx-2926398022',
                          children: (0, l.jsx)('img', {
                            id: 'timeline-graphic',
                            src: '/website-gh/images/graphics/timeline-graphic.png',
                            className: 'jsx-2926398022'
                          })
                        })
                      ]
                    })
                  : (0, l.jsxs)('div', {
                      id: 'vision-section',
                      className: 'jsx-2926398022',
                      children: [
                        (0, l.jsx)('div', {
                          id: 'iphone-calendar-div',
                          className: 'jsx-2926398022',
                          children: (0, l.jsx)('img', {
                            id: 'iphone-calendar',
                            src: '/website-gh/images/product-shots/iphone-calendar.png',
                            className: 'jsx-2926398022'
                          })
                        }),
                        (0, l.jsxs)('div', {
                          id: 'timeline-div',
                          className: 'jsx-2926398022',
                          children: [
                            (0, l.jsx)('h2', {
                              className: 'jsx-2926398022',
                              children:
                                'Our Vision is to Address Priorities and Unmet Needs Through a Patient\u2019s Surgical Journey'
                            }),
                            (0, l.jsx)('img', {
                              id: 'timeline-graphic',
                              src: '/website-gh/images/graphics/timeline-graphic.png',
                              className: 'jsx-2926398022'
                            })
                          ]
                        })
                      ]
                    })
              }),
              (0, l.jsx)('div', {
                style: { backgroundColor: 'var(--blueXLight)' },
                className: 'jsx-2926398022',
                children: (0, l.jsxs)('div', {
                  id: 'connecting-section',
                  className: 'jsx-2926398022 inner-div',
                  children: [
                    (0, l.jsxs)('div', {
                      id: 'words-div',
                      className: 'jsx-2926398022',
                      children: [
                        (0, l.jsx)('h1', {
                          className: 'jsx-2926398022',
                          children: 'DocSpera Integrated Care Coordination Platform'
                        }),
                        (0, l.jsxs)('h2', {
                          className: 'jsx-2926398022',
                          children: [
                            'Connecting ',
                            (0, l.jsx)('b', { className: 'jsx-2926398022', children: 'Surgeons' }),
                            ', ',
                            (0, l.jsx)('br', { className: 'jsx-2926398022' }),
                            ' ',
                            (0, l.jsx)('b', {
                              className: 'jsx-2926398022',
                              children: 'Care Teams'
                            }),
                            ' & ',
                            (0, l.jsx)('b', {
                              className: 'jsx-2926398022',
                              children: 'Medical Device Co.'
                            })
                          ]
                        }),
                        (0, l.jsx)('p', {
                          style: { maxWidth: 420, marginLeft: -20 },
                          className: 'jsx-2926398022',
                          children: (0, l.jsxs)('ul', {
                            className: 'jsx-2926398022',
                            children: [
                              (0, l.jsx)('li', {
                                className: 'jsx-2926398022',
                                children:
                                  'Single institution-agnostic interface managing cases from surgery decision to recovery'
                              }),
                              (0, l.jsx)('li', {
                                className: 'jsx-2926398022',
                                children: 'Seamlessly integrates with EMR systems and PACS'
                              }),
                              (0, l.jsx)('li', {
                                className: 'jsx-2926398022',
                                children:
                                  'Current and reliable supply chain signaling for improved logistics and support.'
                              }),
                              (0, l.jsx)('li', {
                                className: 'jsx-2926398022',
                                children:
                                  'Enable early intervention with predictive indicators for patient compliance, discharge info, & readmission'
                              })
                            ]
                          })
                        })
                      ]
                    }),
                    (0, l.jsx)('img', {
                      id: 'connecting-graphic',
                      src: '/website-gh/images/graphics/connected-graphic.png',
                      className: 'jsx-2926398022'
                    })
                  ]
                })
              }),
              (0, l.jsx)('div', {
                style: { backgroundColor: 'var(--blueSky)' },
                className: 'jsx-2926398022',
                children: (0, l.jsxs)('div', {
                  className: 'jsx-2926398022 inner-div',
                  children: [
                    (0, l.jsx)('h2', {
                      className: 'jsx-2926398022 products-h2',
                      children: 'View our solutions for...'
                    }),
                    (0, l.jsxs)('div', {
                      className: 'jsx-2926398022 product-section',
                      children: [
                        (0, l.jsxs)('div', {
                          className: 'jsx-2926398022 box',
                          children: [
                            (0, l.jsxs)('h4', {
                              className: 'jsx-2926398022',
                              children: [
                                (0, l.jsx)('img', {
                                  src: '/website-gh/images/surgeon-users.png',
                                  className: 'jsx-2926398022'
                                }),
                                'Providers'
                              ]
                            }),
                            (0, l.jsxs)('p', {
                              className: 'jsx-2926398022',
                              children: [
                                (0, l.jsx)('span', {
                                  className: 'jsx-2926398022',
                                  children: '\u279c'
                                }),
                                ' Episode of Care'
                              ]
                            }),
                            (0, l.jsxs)('p', {
                              className: 'jsx-2926398022',
                              children: [
                                (0, l.jsx)('span', {
                                  className: 'jsx-2926398022',
                                  children: '\u279c'
                                }),
                                ' Prioritized Rebooking'
                              ]
                            }),
                            (0, l.jsxs)('p', {
                              className: 'jsx-2926398022',
                              children: [
                                (0, l.jsx)('span', {
                                  className: 'jsx-2926398022',
                                  children: '\u279c'
                                }),
                                ' Data Intelligence & RWD Insights'
                              ]
                            }),
                            (0, l.jsx)(x.default, {
                              href: '/provider',
                              children: (0, l.jsxs)('button', {
                                className: 'jsx-2926398022',
                                children: [
                                  'View Provider Products',
                                  ' ',
                                  (0, l.jsx)('img', {
                                    src: '/website-gh/images/graphics/chevron.png',
                                    className: 'jsx-2926398022 chevron-img'
                                  })
                                ]
                              })
                            })
                          ]
                        }),
                        (0, l.jsxs)('div', {
                          className: 'jsx-2926398022 box',
                          children: [
                            (0, l.jsxs)('h4', {
                              className: 'jsx-2926398022',
                              children: [
                                (0, l.jsx)('img', {
                                  src: '/website-gh/images/medical-device.png',
                                  className: 'jsx-2926398022'
                                }),
                                'Medical Device'
                              ]
                            }),
                            (0, l.jsxs)('p', {
                              className: 'jsx-2926398022',
                              children: [
                                (0, l.jsx)('span', {
                                  className: 'jsx-2926398022',
                                  children: '\u279c'
                                }),
                                ' Advanced Case Notification'
                              ]
                            }),
                            (0, l.jsxs)('p', {
                              className: 'jsx-2926398022',
                              children: [
                                (0, l.jsx)('span', {
                                  className: 'jsx-2926398022',
                                  children: '\u279c'
                                }),
                                ' Integrated Provider Solutions'
                              ]
                            }),
                            (0, l.jsxs)('p', {
                              className: 'jsx-2926398022',
                              children: [
                                (0, l.jsx)('span', {
                                  className: 'jsx-2926398022',
                                  children: '\u279c'
                                }),
                                ' Data Intelligence & RWD Insights'
                              ]
                            }),
                            (0, l.jsx)(x.default, {
                              href: '/medical-device',
                              children: (0, l.jsxs)('button', {
                                className: 'jsx-2926398022',
                                children: [
                                  'View Medical Device Products',
                                  ' ',
                                  (0, l.jsx)('img', {
                                    src: '/website-gh/images/graphics/chevron.png',
                                    className: 'jsx-2926398022 chevron-img'
                                  })
                                ]
                              })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              }),
              (0, l.jsxs)('div', {
                className: 'jsx-2926398022 inner-div',
                children: [
                  (0, l.jsx)('h2', {
                    id: 'docspera-works-h2',
                    className: 'jsx-2926398022',
                    children:
                      'DocSpera works with leading health solution providers and Organizations'
                  }),
                  (0, l.jsx)(c.Z, {
                    type: 'logo',
                    content: [
                      { img: '/website-gh/images/logos/innovacer.png', width: 180 },
                      { img: '/website-gh/images/logos/athena-health.png', width: 210 },
                      { img: '/website-gh/images/logos/app-orchard.png', width: 170 },
                      { img: '/website-gh/images/logos/dolby.png', width: 160 },
                      { img: '/website-gh/images/logos/AAHKS.jpg', width: 170 },
                      { img: '/website-gh/images/logos/anterior-hip-foundation.png', width: 180 },
                      { img: '/website-gh/images/logos/CMS.jpg', width: 120 }
                    ]
                  })
                ]
              }),
              (0, l.jsx)('img', {
                id: 'map',
                src: '/website-gh/images/graphics/map-with-pins.png',
                alt: 'map of docspera locations',
                className: 'jsx-2926398022'
              }),
              (0, l.jsx)(o.Z, {}),
              (0, l.jsx)(t.default, {
                id: '2926398022',
                children: [
                  '.container.jsx-2926398022{width:100%;}',
                  '@media (max-width:700px){.container.jsx-2926398022{overflow:hidden;}}',
                  "#hero-h1.jsx-2926398022>h1.jsx-2926398022{color:white;font-size:4em;font-family:'Varela Round','sans-serif';text-align:center;width:90%;position:absolute;top:50px;left:calc(100% - 95%);border-radius:10px;padding:10px;text-shadow:0 1px 2px RGBa(0,0,0,.6),0 0 50px #cdf0fd;margin-bottom:0;}",
                  '@media (max-width:1400px){#hero-h1.jsx-2926398022>h1.jsx-2926398022{font-size:50px;}}',
                  '@media (max-width:600px){#hero-h1.jsx-2926398022>h1.jsx-2926398022{font-size:40px;}}',
                  '@media (max-width:400px){#hero-h1.jsx-2926398022>h1.jsx-2926398022{font-size:36px;}}',
                  '#hero-h1.jsx-2926398022>span.jsx-2926398022{font-size:20px;}',
                  '#landing-bg-div.jsx-2926398022{overflow:hidden;width:100vw;z-index:-100;}',
                  '#landing-bg.jsx-2926398022{width:100%;height:auto;}',
                  '@media (max-width:1000px){#landing-bg.jsx-2926398022{width:120%;}}',
                  '@media (max-width:500px){#landing-bg-div.jsx-2926398022{margin-top:-50px;}#hero-h1.jsx-2926398022>h1.jsx-2926398022{position:static;color:var(--blueDark);left:0;font-size:25px;width:100%;margin-bottom:-50px;text-shadow:none;}}',
                  '@media (max-width:600px){#landing-bg-div.jsx-2926398022{width:120%;}}',
                  '@media (max-width:800px){.statistics.jsx-2926398022{padding-top:20px;}}',
                  '@media (min-width:800px){.statistics.jsx-2926398022{padding-top:50px;}}',
                  '#vision-section.jsx-2926398022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
                  '#iphone-calendar-div.jsx-2926398022{width:50%;}',
                  '#iphone-calendar.jsx-2926398022{width:110%;margin-left:-60px;}',
                  '#timeline-div.jsx-2926398022{width:50%;}',
                  '#vision-section.jsx-2926398022 h2.jsx-2926398022{max-width:550px;margin-bottom:20px;}',
                  '#timeline-graphic.jsx-2926398022{max-width:600px;}',
                  '@media (max-width:1100px){#vision-section.jsx-2926398022{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}#iphone-calendar-div.jsx-2926398022{width:60%;}#timeline-div.jsx-2926398022{width:100%;overflow:hidden;}#timeline-graphic.jsx-2926398022{width:110%;display:block;margin:0 auto;padding-left:30px;}#vision-section.jsx-2926398022 h2.jsx-2926398022{margin:15px auto;}}',
                  '@media (max-width:550px){#iphone-calendar-div.jsx-2926398022{width:100%;}#vision-section.jsx-2926398022 h2.jsx-2926398022{max-width:100%;}#timeline-graphic.jsx-2926398022{padding:0;}}',
                  '@media (max-width:400px){#timeline-graphic.jsx-2926398022{width:120%;margin-left:-10px;}}',
                  '#connecting-section.jsx-2926398022{background-color:#2a83bf;background-color:var(--blueXLight);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1;-ms-flex:1;flex:1;padding-top:0px;color:black;}',
                  '#connecting-section.jsx-2926398022 h1.jsx-2926398022{margin-top:60px;}',
                  '@media (max-width:1270px){#connecting-section.jsx-2926398022{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}',
                  '#connecting-graphic.jsx-2926398022{width:60%;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-right:-160px;}',
                  '@media (max-width:1270px){#connecting-graphic.jsx-2926398022{margin-top:-150px;margin-right:-30px;}}',
                  '@media (max-width:800px){#connecting-graphic.jsx-2926398022{margin-top:10px;margin-right:0;width:100%;}}',
                  '#words-div.jsx-2926398022{padding-top:4vw;padding-left:4vw;}',
                  '@media (max-width:1200px){#words-div.jsx-2926398022{padding-top:0;}}',
                  '#words-div.jsx-2926398022>h2.jsx-2926398022{font-weight:200;}',
                  '.products-h2.jsx-2926398022{color:var(--blueDocspera);text-align:center;margin-left:45px;margin-bottom:20px;font-weight:600;}',
                  '@media (max-width:800px){.products-h2.jsx-2926398022{margin-left:0;}}',
                  '.product-section.jsx-2926398022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:0px 0 60px 0;}',
                  '.product-section.jsx-2926398022 h4.jsx-2926398022{font-size:24px;}',
                  '.product-section.jsx-2926398022 .chevron-img.jsx-2926398022{-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1);height:10px;margin:0 0 0 10px;}',
                  '.box.jsx-2926398022{padding:25px 100px;border-radius:10px;background-color:rgba(255,255,255,1);margin:0 15px;box-shadow:0px 0px 5px 3px rgba(0,0,0,0.1);}',
                  '.box.jsx-2926398022:hover{border-radius:5px;background-color:rgba(255,255,255,1);}',
                  '.box.jsx-2926398022 h4.jsx-2926398022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 15px 0;}',
                  '.box.jsx-2926398022 img.jsx-2926398022{-webkit-filter:brightness(0%);filter:brightness(0%);height:30px;margin-right:10px;}',
                  '.box.jsx-2926398022 p.jsx-2926398022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;color:grey;margin-bottom:5px;}',
                  '.box.jsx-2926398022 p.jsx-2926398022>span.jsx-2926398022{padding-right:10px;font-size:15px;color:var(--blueDocspera);}',
                  '.box.jsx-2926398022 button.jsx-2926398022{background-color:var(--blueDocspera);border:none;border-radius:5px;-webkit-filter:drop-shadow(0,3px,6px,black);filter:drop-shadow(0,3px,6px,black);color:white;padding:10px 15px;font-size:14px;margin-top:10px;}',
                  '.box.jsx-2926398022 button.jsx-2926398022:hover{box-shadow:0px 0px 5px 3px rgba(0,0,0,0.1);cursor:pointer;}',
                  '#map.jsx-2926398022{width:60%;display:block;margin:0 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:-120px;margin-bottom:150px;}',
                  '@media (max-width:900px){#map.jsx-2926398022{width:90%;margin-top:-80px;}}',
                  '#docspera-works-h2.jsx-2926398022{text-align:center;margin-bottom:-40px;max-width:600px;margin:0px auto -40px auto;}',
                  '@media (max-width:900px){#docspera-works-h2.jsx-2926398022{max-width:600px;}}',
                  '.logos.jsx-2926398022 div.jsx-2926398022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100px;}',
                  '@media (max-width:1024px){.product-section.jsx-2926398022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.box.jsx-2926398022{width:45%;padding:25px 50px;}@media (max-width:768px){.product-section.jsx-2926398022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.box.jsx-2926398022{width:100%;padding:30px;margin-bottom:10px;}}}'
                ]
              })
            ]
          })
        )
      }
    },
    8581: function (e, i, s) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return s(5108)
        }
      ])
    }
  },
  function (e) {
    e.O(0, [579, 920, 518, 774, 888, 179], function () {
      return (i = 8581), e((e.s = i))
      var i
    })
    var i = e.O()
    _N_E = i
  }
])
