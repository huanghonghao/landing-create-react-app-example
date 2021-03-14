import React from 'react';
import {createFromIconfontCN} from '@ant-design/icons';
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


const Down = createFromIconfontCN({
  extraCommonProps: {
    height: 20,
    width: 20
  },
  scriptUrl: '//at.alicdn.com/t/font_1731242_qtv348k3m1k.js', // 在 iconfont.cn 上生成
});

export const Nav30DataSource = {
  wrapper: {className: 'header3 home-page-wrapper'},
  page: {className: 'home-page'},
  logo: {
    className: 'header3-logo',
    children:
      'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg',
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
                  <p>服务门户 <Down type="icon-down" /></p>
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
                  <p>服务设计 <Down type="icon-down" /></p>
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
                  <p>服务开发 <Down type="icon-down" /></p>
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
                  <p>服务运营 <Down type="icon-down" /></p>
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
                  <p>系统管理 <Down type="icon-down" /></p>
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
          children: '打破壁垒、场景驱动、快速响应、赋能业务',
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
      yearRatio: -1.3
    },
    {
      title: '业务服务调用总量',
      imgSrc: totalBusinessServiceCalls,
      total: 1815,
      monthRatio: 1.4,
      yearRatio: -1.3
    },
    {
      title: '数据服务调用总量',
      imgSrc: totalDataServiceCalls,
      total: 10218,
      monthRatio: 1.4,
      yearRatio: -1.3
    },
    {
      title: '服务调用分布',
      imgSrc: serviceCallDistribution,
      total: 9281,
      monthRatio: 1.4,
      yearRatio: -1.3
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
        name: '物理库表',
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
    children: [
      {
        name: 'block0',
        className: 'content8-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content8-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>回收项目</p>
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
                  电梯回收，中央空调回收，废旧物资回收，机械设备回收，厨房、宾馆设备等。
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
        children: {
          icon: {
            className: 'content8-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p>企业精神</p>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>开拓进取、锐意创新、刻意求真、崇尚完美。</p>
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
        children: {
          icon: {
            className: 'content8-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p>服务宗旨</p>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>价格合理、信守承诺、安全快捷 、高效。</p>
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
        children: {
          icon: {
            className: 'content8-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content8-text' },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <span>
                  <p>企业原则</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content8-content',
            children: (
              <span>
                <p>
                  讲诚信、以信誉求发展。
                  议、指导。前进中的望月将会在不断变化的各种客观条件下，把握市场动向，熟悉市场环境，完善的饰后服务，让客户真正感受到望月，热情、真诚、诚信的全方位服务。
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: {className: 'home-page-wrapper footer1-wrapper'},
  OverPack: {className: 'footer1', playScale: 0.2},
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'Animation specification and components of Ant Design.',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>回收项目</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <span>
                    <span>
                      <p>电梯回收</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>铁铝铜回收</p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <p>不锈钢回收</p>
                </span>
              ),
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <span>
                  <p>工程拆除</p>
                </span>
              ),
            },
            {
              name: 'link4',
              href: '#',
              children: (
                <span>
                  <p>中央空调回收</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {children: '关于'},
        childWrapper: {
          children: [
            {href: '#', name: 'link0', children: 'FAQ'},
            {href: '#', name: 'link1', children: '联系我们'},
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <p>关注我们</p>
              </span>
            </span>
          ),
          className: 'k9h7k134cu-editor_css',
        },
        childWrapper: {
          children: [
            {
              name: 'image~k9h7il8htc6',
              className: 'k9h7irl6jgj-editor_css',
              children:
                'https://zos.alipayobjects.com/rmsportal/HzvPfCGNCtvGrdk.png',
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: {className: 'copyright-wrapper'},
  copyrightPage: {className: 'home-page'},
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 by <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
