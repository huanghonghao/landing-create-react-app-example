import React from 'react';
import {Card, Col, Divider, Row, Tooltip, Typography} from 'antd';
import TitleWrapper from "./TitleWrapper";

const {Link, Text, Paragraph} = Typography;

class Content7 extends React.PureComponent {

  render() {
    const {...props} = this.props;
    const {dataSource} = props;
    delete props.dataSource;
    delete props.isMobile;
    const {wrapper, page, titleWrapper} = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <TitleWrapper
            titleWrapper={titleWrapper}
            leftProps={{xl: 10, xxl: 9}}
            rightProps={{xl: 10, xxl: 9}}
          />
          <Row justify="center">
            <Col xl={20} xxl={18}>
              <Row
                gutter={[20, 20]}
                className="content7-row"
              >
                <Col xl={8} xxl={6}>
                  <Card bordered={false} className="content7-card1">
                    <div className="content7-card1-title">
                      热点服务字段
                    </div>
                    <div className="content7-card1-tag">热点服务</div>
                    <div className="content7-card1-tag">热点表</div>
                    <div className="content7-card1-tag">热点字段</div>
                    <Paragraph
                      className="content7-card1-desc"
                      ellipsis={{rows: 3}}
                    >
                      微服务架构是一项在云中部署应用和服务的新技 术。大部分围绕微服务的争论其他技术是否很好的实施微服务。
                    </Paragraph>
                    <div className="content7-card1-footer">解决业务协同和数据 ></div>
                    <div className="content7-card1-footer">解决业务协同和数据 ></div>
                  </Card>
                </Col>
                <Col xl={8} xxl={6}>
                  <Card bordered={false} className="content7-card">
                    <div className="content7-card-header">
                      <div className="content7-card-header-title">
                        热点服务
                      </div>
                      <div className="content7-card-header-action">
                        <Link>更多 ></Link>
                      </div>
                    </div>
                    <Divider/>
                    <div className="content7-card-main">
                      <span>
                        <Tooltip title="固定资产卡片价值信息批量新增或修改">
                          <Link
                            className="ant-typography-ellipsis-single-line"
                            href="/page/render/id/4028abce7288404e017288473a51000b?serviceType=c29786d9a3a7595b866d13e7630c7dbb"
                            target="_blank"
                          >
                              固定资产卡片价值信息批量新增或修改
                          </Link>
                        </Tooltip>
                        <Text>116,412</Text>
                      </span>
                      <div>
                        <Text>一致性情况历史表</Text>
                        <div>43,412</div>
                      </div>
                      <div>
                        <Text ellipsis>广州局-生产计划致</Text>
                        <div>316,432</div>
                      </div>
                      <div>
                        <Text ellipsis>广州局-生产计划查询</Text>
                        <div>116,412</div>
                      </div>
                      <div>
                        <Text ellipsis>广州局-生产计划设备</Text>
                        <div>86,152</div>
                      </div>
                      <div>
                        <Text ellipsis>广州局-性情况历史表</Text>
                        <div>56,712</div>
                      </div>
                      <div>
                        <Text ellipsis>广州局-计划查询历史表</Text>
                        <div>37,347</div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xl={8} xxl={6}>
                  <Card bordered={false} className="content7-card">
                    <div className="content7-card-header">
                      <div className="content7-card-header-title">
                        热点表
                      </div>
                      <div className="content7-card-header-action">
                        <Link>更多 ></Link>
                      </div>
                    </div>
                    <Divider/>
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
                <Col xl={8} xxl={6}>
                  <Card bordered={false} className="content7-card">
                    <div className="content7-card-header">
                      <div className="content7-card-header-title">
                        热点字段
                      </div>
                      <div className="content7-card-header-action">
                        <Link>更多 ></Link>
                      </div>
                    </div>
                    <Divider/>
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
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Content7;
