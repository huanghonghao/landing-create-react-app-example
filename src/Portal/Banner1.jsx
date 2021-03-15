import React from 'react';
import {Card, Col, Row} from 'antd';
import QueueAnim from 'rc-queue-anim';
import {TweenOneGroup} from 'rc-tween-one';
import BannerAnim, {Element} from 'rc-banner-anim';
import {isImg} from './utils';
import 'rc-banner-anim/assets/index.css';
import fall from './imgs/fall.png';
import rise from './imgs/rise.png';

const {BgElement} = Element;

class Banner extends React.PureComponent {

  renderTotal = item => {
    let totalDom;
    switch (typeof item.total) {
      case 'undefined':
        totalDom = null;
        break;
      case 'function':
        totalDom = <span className="total">{item.total()}<span style={{fontSize: 16}}> {item.unit}</span></span>;
        break;
      default:
        totalDom = <span className="total">{item.total}<span style={{fontSize: 16}}> {item.unit}</span></span>;
    }
    return totalDom;
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement;
      const elemClassName = elem.className;
      delete elem.className;
      const { bg, textWrapper, title, content } = item;
      return (
        <Element key={i.toString()} {...elem} prefixCls={elemClassName}>
          <BgElement key="bg" {...bg} />
          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            key="text"
            {...textWrapper}
          >
            <div key="logo" {...title}>
              {typeof title.children === 'string' &&
              title.children.match(isImg) ? (
                <img src={title.children} width="100%" alt="img" />
              ) : (
                title.children
              )}
            </div>
            <div key="content" {...content}>
              {content.children}
            </div>
          </QueueAnim>
        </Element>
      );
    });
    const renderImg = ratio => <img src={ratio > 0 ? rise : fall} alt={ratio > 0 ? "上涨" : "下降"} />;
    const chartCard = dataSource.statistics.map(item => {
      return (
        <Col key={item.title} xxl={dataSource.statistics.length + 1} xl={dataSource.statistics.length + 2} flex="340px">
          <Card bodyStyle={{ padding: '20px 0 8px' }} bordered={false}>
            <div className="banner1-card">
              <img src={item.imgSrc} alt=""/>
              <div className="banner1-card-right">
                <div className="meta-wrap">
                  <div className="meta">
                    <span className="title">{item.title}</span>
                  </div>
                  {this.renderTotal(item)}
                </div>
                <div className="content" style={{ height: 'auto' }}>
                  <span style={{marginRight: 8}}>环比：{item.monthRatio}</span>
                  {renderImg(item.monthRatio)}
                  <span style={{marginRight: 8, marginLeft: 15}}>同比：{item.yearRatio}</span>
                  {renderImg(item.yearRatio)}
                </div>
              </div>
            </div>
          </Card>
        </Col>
      );
    });
    return (
      <div {...props} {...dataSource.wrapper}>
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className="banner1-wrapper" key="wrapper">
            <BannerAnim key="BannerAnim" {...dataSource.BannerAnim}>
              {childrenToRender}
            </BannerAnim>
            <Row justify="center">
              {chartCard}
            </Row>
          </div>
        </TweenOneGroup>
      </div>
    );
  }
}

export default Banner;
