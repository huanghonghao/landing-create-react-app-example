import React from 'react';
import {Card, Col, Row} from 'antd';
import QueueAnim from 'rc-queue-anim';
import {TweenOneGroup} from 'rc-tween-one';
import BannerAnim, {Element} from 'rc-banner-anim';
import {isImg} from './utils';
import 'rc-banner-anim/assets/index.css';

const {BgElement} = Element;

class Banner extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement;
      const elemClassName = elem.className;
      delete elem.className;
      const { bg, textWrapper, title, content, button } = item;
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
    const chartCard = dataSource.statistics.map(item => {
      return (
        <Col span={dataSource.statistics.length}>
          <Card bodyStyle={{ padding: '20px 24px 8px 24px' }} bordered={false}>
            123
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
