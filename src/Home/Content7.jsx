import React from 'react';
import {Card, Col, Divider, Row} from 'antd';
import TitleWrapper from "./TitleWrapper";

class Content7 extends React.PureComponent {

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const { wrapper, page, titleWrapper } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <TitleWrapper
            titleWrapper={titleWrapper}
            leftProps={{xl: 9}}
          />
          <Row
            // justify="center"
            gutter={[20,20]}
            className="content7-row"
          >
            <Col xl={7} xxl={5}>
              <Card bordered={false} className="content7-card1">
                <div className="content7-card1-title">
                  热点服务字段
                </div>
                <div className="content7-card1-tag">热点服务</div>
                <div className="content7-card1-tag">热点表</div>
                <div className="content7-card1-tag">热点字段</div>
                <div className="content7-card1-desc">微服务架构是一项在云中部署应用和服务的新技 术。大部分围绕微服务的争论其他技术是否很好的实施微服务。</div>
                <div className="content7-card1-footer">解决业务协同和数据 ></div>
                <div className="content7-card1-footer">解决业务协同和数据 ></div>
              </Card>
            </Col>
            <Col xl={7} xxl={5}>
              <Card bordered={false} className="content7-card">
                <div className="content7-card-header">
                  <div className="content7-card-header-title">
                    热点服务
                  </div>
                  <div className="content7-card-header-action">
                    <a>更多 ></a>
                  </div>
                </div>
                <Divider />
                <div className="content7-card-main">
                  <p>
                    <div>广东户变情况表</div>
                    <div>316,412</div>
                  </p>
                  <p>
                    <div>一致性情况历史表</div>
                    <div>316,412</div>
                  </p>
                  <p>
                    <div>广州局-生产计划致</div>
                    <div>316,412</div>
                  </p>
                  <p>
                    <div>广州局-生产计划查询</div>
                    <div>316,412</div>
                  </p>
                  <p>
                    <div>广州局-生产计划设备</div>
                    <div>316,412</div>
                  </p>
                  <p>
                    <div>广州局-性情况历史表</div>
                    <div>316,412</div>
                  </p>
                  <p>
                    <div>广州局-计划查询历史表</div>
                    <div>316,412</div>
                  </p>
                </div>
              </Card>
            </Col>
            <Col xl={7} xxl={5}>
              <Card bordered={false} className="content7-card">
                <div className="content7-card-header">
                  <div className="content7-card-header-title">
                    热点表
                  </div>
                  <div className="content7-card-header-action">
                    <a>更多 ></a>
                  </div>
                </div>
                <Divider />
                <div className="content7-card-main">
                  <ul>
                    <li>广州市户变情况表</li>
                    <li>附近一致性情况历史表</li>
                    <li>广州局-生产计划查询</li>
                    <li>广州局-生产计划查询设备</li>
                    <li>广州局-生产计划查询设备缺陷</li>
                    <li>广州局-计划查询一致性情况历史表</li>
                    <li>广州局-计划查询一致性情况历史表</li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col xl={7} xxl={5}>
              <Card bordered={false} className="content7-card">
                <div className="content7-card-header">
                  <div className="content7-card-header-title">
                    热点字段
                  </div>
                  <div className="content7-card-header-action">
                    <a>更多 ></a>
                  </div>
                </div>
                <Divider />
                <div className="content7-card-main">
                  <ul>
                    <li>深圳市户变情况表</li>
                    <li>一致性情况历史表</li>
                    <li>广州局-生产计划查询</li>
                    <li>广州局-生产计划查询设备</li>
                    <li>广州局-生产计划查询设备缺陷</li>
                    <li>广州局-计划查询一致性情况历史表</li>
                    <li>广州局-计划查询一致性情况历史表</li>
                  </ul>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Content7;
