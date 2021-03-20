import React from 'react';
import {Button, Col, Row} from 'antd';
import TitleWrapper from "./TitleWrapper";
import yes from './imgs/yes.svg';

class Content5 extends React.PureComponent {

  state = {
    radioValue: 0
  };

  getChildrenToRender = (data) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...item}>
          <div {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} height="100%" alt="img" />
            </span>
            <p {...item.children.content}>{item.children.content.children}</p>
          </div>
        </Col>
      );
    });

  render() {
    const { radioValue } = this.state;
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const { wrapper, titleWrapper, page } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <TitleWrapper
            options={[
              {label: '微服务框架', value: 0},
              {label: '应用中间件', value: 1},
              {label: '大数据组件', value: 2},
            ]}
            titleWrapper={titleWrapper}
            leftProps={{xl: 10, xxl: 9}}
            rightProps={{xl: 10, xxl: 9}}
            radioValue={radioValue}
            onChange={e => this.setState({radioValue: e.target.value})}
          />
          <Row justify="center" className="content5-main">
            <Col xl={6} className="content5-main-left">
              <div className="content5-main-left-title">
                微服务框架
              </div>
              <div className="content5-main-left-desc1">
                微服务架构是一项在云中部署应用和服务的新技术。大部分围绕微服务的争论都集中在容器或其他技术是否很好的实施微服务
              </div>
              <div className="content5-main-left-desc2">
                <img src={yes} alt="" width={20}/>
                <span> 解决业务协同和数据共享的难题</span>
              </div>
              <div className="content5-main-left-desc3">
                <img src={yes} alt="" width={20}/>
                <span> 支撑前端应用敏捷迭代和快速复制</span>
              </div>
              <Button type="primary" size="large">
                查看更多
              </Button>
            </Col>
            <Col xxl={12} xl={14} className="content5-main-right">
              <Row>
                <Col xl={8} className="content5-main-right-content">
                  <div className="content5-main-right-title">网关服务</div>
                  <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                  <div className="content5-main-right-tag">网关杀毒</div>
                  <div className="content5-main-right-tag">Web过滤</div>
                </Col>
                <Col xl={8} className="content5-main-right-content">
                  <div className="content5-main-right-title">路由服务</div>
                  <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                  <div className="content5-main-right-tag">网关杀毒</div>
                  <div className="content5-main-right-tag">Web过滤</div>
                </Col>
                <Col xl={8} className="content5-main-right-content">
                  <div className="content5-main-right-title">鉴权服务</div>
                  <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                  <div className="content5-main-right-tag">网关杀毒</div>
                  <div className="content5-main-right-tag">Web过滤</div>
                </Col>
                <Col xl={8} className="content5-main-right-content">
                  <div className="content5-main-right-title">分布式事务</div>
                  <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                  <div className="content5-main-right-tag">网关杀毒</div>
                  <div className="content5-main-right-tag">Web过滤</div>
                </Col>
                <Col xl={8} className="content5-main-right-content">
                  <div className="content5-main-right-title">日志服务</div>
                  <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                  <div className="content5-main-right-tag">网关杀毒</div>
                  <div className="content5-main-right-tag">Web过滤</div>
                </Col>
                <Col xl={8} className="content5-main-right-content">
                  <div className="content5-main-right-title">全链路服务</div>
                  <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                  <div className="content5-main-right-tag">网关杀毒</div>
                  <div className="content5-main-right-tag">Web过滤</div>
                </Col>
              </Row>
            </Col>
          </Row>
          {/*<OverPack
            className={`content-template ${props.className}`}
            {...dataSource.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: '+=30',
                opacity: 0,
                type: 'from',
                ease: 'easeInOutQuad',
              }}
              leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
              componentProps={{justify: 'center'}}
              className="content5-main"
            >
              <Col xl={6} className="content5-main-left">
                <div className="content5-main-left-title">
                  微服务框架
                </div>
                <div className="content5-main-left-desc1">
                  微服务架构是一项在云中部署应用和服务的新技术。大部分围绕微服务的争论都集中在容器或其他技术是否很好的实施微服务
                </div>
                <div className="content5-main-left-desc2">
                  <CheckOutlined />
                  <span> 解决业务协同和数据共享的难题</span>
                </div>
                <div className="content5-main-left-desc3">
                  <CheckOutlined />
                  <span> 支撑前端应用敏捷迭代和快速复制</span>
                </div>
                <Button type="primary" size="large">
                  查看更多
                </Button>
              </Col>
              <Col xxl={12} xl={14} className="content5-main-right">
                <Row>
                  <Col xl={8} className="content5-main-right-content">
                    <div className="content5-main-right-title">网关服务</div>
                    <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                    <div className="content5-main-right-tag">网关杀毒</div>
                    <div className="content5-main-right-tag">Web过滤</div>
                  </Col>
                  <Col xl={8} className="content5-main-right-content">
                    <div className="content5-main-right-title">路由服务</div>
                    <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                    <div className="content5-main-right-tag">网关杀毒</div>
                    <div className="content5-main-right-tag">Web过滤</div>
                  </Col>
                  <Col xl={8} className="content5-main-right-content">
                    <div className="content5-main-right-title">鉴权服务</div>
                    <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                    <div className="content5-main-right-tag">网关杀毒</div>
                    <div className="content5-main-right-tag">Web过滤</div>
                  </Col>
                  <Col xl={8} className="content5-main-right-content">
                    <div className="content5-main-right-title">分布式事务</div>
                    <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                    <div className="content5-main-right-tag">网关杀毒</div>
                    <div className="content5-main-right-tag">Web过滤</div>
                  </Col>
                  <Col xl={8} className="content5-main-right-content">
                    <div className="content5-main-right-title">日志服务</div>
                    <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                    <div className="content5-main-right-tag">网关杀毒</div>
                    <div className="content5-main-right-tag">Web过滤</div>
                  </Col>
                  <Col xl={8} className="content5-main-right-content">
                    <div className="content5-main-right-title">全链路服务</div>
                    <div className="content5-main-right-desc">网关服务是单一访问点，并充当多项服务的代理。服务网关启用了跨所有服务的变换、路由和公共处理。</div>
                    <div className="content5-main-right-tag">网关杀毒</div>
                    <div className="content5-main-right-tag">Web过滤</div>
                  </Col>
                </Row>
              </Col>
            </TweenOneGroup>
          </OverPack>*/}
        </div>
      </div>
    );
  }
}

export default Content5;
