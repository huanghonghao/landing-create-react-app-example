import React from 'react';
import totalServiceCalls from './imgs/totalServiceCalls.png';
import totalBusinessServiceCalls from './imgs/totalBusinessServiceCalls.png';
import totalDataServiceCalls from './imgs/totalDataServiceCalls.png';
import serviceCallDistribution from './imgs/serviceCallDistribution.png';
import businessObject from './imgs/businessObject.png';
import businessActive from './imgs/businessActive.png';
import businessScenes from './imgs/businessScenes.png';
import businessService from './imgs/businessService.png';
import dataService from './imgs/dataService.png';
import businessApp from './imgs/businessApp.png';
import publicModel from './imgs/publicModel.png';
import table from './imgs/table.png';
import down from './imgs/down.png';
import helpOperationManual from './imgs/helpOperationManual.png';
import helpPropaganda from './imgs/helpPropaganda.png';
import helpSpecification from './imgs/helpSpecification.png';
import helpWhitePaper from './imgs/helpWhitePaper.png';
import logo from './imgs/logo.png';


export const Nav30DataSource = {
  wrapper: {className: 'header3 home-page-wrapper'},
  page: {className: 'home-page'},
  logo: {
    className: 'header3-logo',
    children: logo,
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>首页  </p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>服务门户 <img src={down} alt=""/></p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            children: {
              children: [
                {
                  children: "shouye",
                  name: 'text'
                }
              ]
            }
          }
        ],
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>服务设计 <img src={down} alt=""/></p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>服务开发 <img src={down} alt=""/></p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item4',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>服务运营 <img src={down} alt=""/></p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item5',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>系统管理 <img src={down} alt=""/></p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: {className: 'header3-mobile-menu'},
};
export const Banner10DataSource = {
  wrapper: {className: 'banner1'},
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: {className: 'banner-user-elem'},
        textWrapper: {className: 'banner1-text-wrapper'},
        bg: {className: 'bg bg0'},
        title: {
          className: 'banner1-title',
          children: '场景驱动、快速响应、赋能业务',
        },
        content: {
          className: 'banner1-content',
          children: '基于统一的业务模型，打造“可视、可管、可控、可优”的共享服务平台',
        },
      },
      // {
      //   name: 'elem1',
      //   BannerElement: {className: 'banner-user-elem'},
      //   textWrapper: {className: 'banner1-text-wrapper'},
      //   bg: {className: 'bg bg1'},
      //   title: {
      //     className: 'banner1-title',
      //     children:
      //       'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
      //   },
      //   content: {
      //     className: 'banner1-content',
      //     children: '一个高效的页面动画解决方案',
      //   },
      //   button: {className: 'banner1-button', children: 'Learn More'},
      // },
      // {
      //   name: 'elem2',
      //   BannerElement: {className: 'banner-user-elem'},
      //   textWrapper: {className: 'banner1-text-wrapper'},
      //   bg: {className: 'bg bg1'},
      //   title: {
      //     className: 'banner1-title',
      //     children:
      //       'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
      //   },
      //   content: {
      //     className: 'banner1-content',
      //     children: '一个高效的页面动画解决方案',
      //   },
      //   button: {className: 'banner1-button', children: 'Learn More'},
      // },
    ],
  },
  statistics: [
    {
      title: '服务调用总量',
      imgSrc: totalServiceCalls,
      total: 12033,
      monthRatio: 1.4,
      yearRatio: -1.3,
      unit: '次'
    },
    {
      title: '业务服务调用总量',
      imgSrc: totalBusinessServiceCalls,
      total: 1815,
      monthRatio: 1.4,
      yearRatio: -1.3,
      unit: '次'
    },
    {
      title: '数据服务调用总量',
      imgSrc: totalDataServiceCalls,
      total: 10218,
      monthRatio: 1.4,
      yearRatio: -1.3,
      unit: '次'
    },
    {
      title: '服务调用率',
      imgSrc: serviceCallDistribution,
      total: 89,
      monthRatio: 1.4,
      yearRatio: -1.3,
      unit: '%'
    },
  ],
};
export const Content00DataSource = {
  wrapper: {className: 'home-page-wrapper content0-wrapper'},
  page: {className: 'home-page content0'},
  OverPack: {playScale: 0.3, className: ''},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>共享服务类型</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper k9h76g7v2q-editor_css',
    children: [
      {
        name: 'businessObject',
        label: '业务对象',
        total: 148,
        imgSrc: businessObject,
        props: {span: 24, style: {marginTop: 20}}
      },
      {
        name: 'businessActive',
        label: '业务活动',
        total: 148,
        imgSrc: businessActive,
        props: {span: 12, style: {paddingRight: 67, marginTop: -15}}
      },
      {
        name: 'businessService',
        label: '业务服务',
        total: 148,
        imgSrc: businessService,
        props: {span: 12, style: {paddingLeft: 67, marginTop: -15}}
      },
      {
        name: 'businessScenes',
        label: '业务场景',
        total: 148,
        imgSrc: businessScenes,
        props: {span: 12, style: {paddingRight: 290, marginTop: 100}}
      },
      {
        name: 'dataService',
        label: '数据服务',
        total: 148,
        imgSrc: dataService,
        props: {span: 12, style: {paddingLeft: 290, marginTop: 100}}
      },
    ],
  },
  footerWrapper: {
    className: 'footer-wrapper',
    children: [
      {
        name: '业务应用',
        total: 128,
        imgSrc: businessApp
      },
      {
        name: '公共模型',
        total: 328,
        imgSrc: publicModel
      },
      {
        name: '应用模型',
        total: 70232,
        imgSrc: table
      }
    ]
  }
};
export const Content50DataSource = {
  wrapper: {className: 'home-page-wrapper content5-wrapper'},
  page: {className: 'home-page content5'},
  OverPack: {playScale: 0.1, className: ''},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>微服务框架</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: {className: 'home-page-wrapper content3-wrapper'},
  page: {className: 'home-page content3'},
  overPack: {playScale: 0.1},
  titleWrapper: {
    className: 'title-wrapper title3-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>实时调用趋势</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
};
export const Content60DataSource = {
  wrapper: {className: 'home-page-wrapper content6-wrapper'},
  page: {className: 'home-page content6'},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>微服务框架</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
};
export const Content70DataSource = {
  wrapper: {className: 'home-page-wrapper content7-wrapper'},
  page: {className: 'home-page content7'},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>热点服务字段</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
};
export const Content80DataSource = {
  wrapper: { className: 'home-page-wrapper content8-wrapper' },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>帮助文档</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content8-block-wrapper',
    // justify: 'center',
    gutter: [20, 20],
    children: [
      {
        name: 'block0',
        className: 'content8-block',
        md: 12,
        xs: 24,
        xl: 8,
        children: {
          icon: {
            className: 'content8-icon',
            children: helpWhitePaper,
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>白皮书</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>
                  中台技术白皮书-业务中台技术白皮书
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content8-block',
        md: 12,
        xs: 24,
        xl: 8,
        children: {
          icon: {
            className: 'content8-icon',
            children: helpOperationManual,
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p>操作手册</p>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>共享服务管理平台操作手册</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content8-block',
        md: 12,
        xs: 24,
        xl: 8,
        children: {
          icon: {
            className: 'content8-icon',
            children: helpPropaganda,
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p>宣传统计</p>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>共享服务管理平台产品介绍</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content8-block',
        md: 12,
        xs: 24,
        xl: 8,
        children: {
          icon: {
            className: 'content8-icon',
            children: helpSpecification,
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <span>
                  <p>规范</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>
                  数研院-共享服务管理开发及调用规范
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content8-block',
        md: 12,
        xs: 24,
        xl: 8,
        children: {
          icon: {
            className: 'content8-icon',
            children: helpSpecification,
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <span>
                  <p>规范</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>
                  数研院-共享服务管理开发及调用规范
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content8-block',
        md: 12,
        xs: 24,
        xl: 8,
        children: {
          icon: {
            className: 'content8-icon',
            children: helpSpecification,
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <span>
                  <p>规范</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>
                  数研院-共享服务管理开发及调用规范
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};