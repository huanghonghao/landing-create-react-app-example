import React from 'react';
import {Button, Card, Col, Layout, Row, Typography} from 'antd';
import TitleWrapper from "./TitleWrapper";
import {Pie} from "@antv/g2plot";
import {getBusiness, getBusinessActivity, getBusinessObject, getBusinessScenario, getServiceData} from '../utils/Api'

const {Content} = Layout;
const { Text } = Typography;

// 相似度 演示支撑
const Layout1 = ({childWrapper}) => (
  <Layout {...childWrapper}>
    <Content className="content-main">
      <div className="content-main-temp">
        <a className="content-main-temp1" target="_blank" href="/page/render/id/8a8a80c27478b4d7017478be96a80002?serviceCode=ucds.ucaccountinformation.updateaccount">
          更新账号1
        </a>
        <a className="content-main-temp2" target="_blank" href="/page/render/id/8a8a80c27478b4d7017478be96a80002?serviceCode=ucds.ucaccountinformation.updateaccount2">
          更新账号2
        </a>
        <div className="content-main-temp3" />
        <div className="content-main-temp4" />
        <div className="content-main-temp5">
          相似度 72.3%
        </div>
      </div>
    </Content>
  </Layout>
);

const Layout2 = (data) => (
  <Row justify="center" className="content-main2" gutter={{xxl: 20, xl: 4}}>
    <Col xl={20} xxl={18}>
      <Row gutter={20}>
        <Col span={12}>
          <div className="content-main2-card">
            <div className="content-main2-card-head">
              服务运行概况
            </div>
            <div className="content-main2-card-body">
              <Row className="content-main2-card-body-desc">
                <Col xxl={12} xl={24} className="content-main2-card-body-desc-col">
                  <div>
                    <li className="normal" />
                    <Text ellipsis>正常运行：</Text>
                    <Text ellipsis className="normal">12345个</Text>
                  </div>
                  <div>
                    <Button type="text">查看详情</Button>
                  </div>
                </Col>
                <Col xxl={12} xl={24} className="content-main2-card-body-desc-col">
                  <div>
                    <li className="error" />
                    <Text ellipsis>异常运行：</Text>
                    <Text ellipsis className="error">123个</Text>
                  </div>
                  <div>
                    <Button type="text">查看详情</Button>
                  </div>
                </Col>
              </Row>
              <div id="chart1" />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="content-main2-card">
            <div className="content-main2-card-head">
              服务复用度分析
            </div>
            <div className="content-main2-card-body">
              <Row className="content-main2-card-body-desc">
                <Col xxl={12} xl={24} className="content-main2-card-body-desc-col">
                  <div>
                    <li className="normal" />
                    <Text ellipsis>应用服务：</Text>
                    <Text ellipsis className="normal">12345个</Text>
                  </div>
                  <div>
                    <Button type="text">查看详情</Button>
                  </div>
                </Col>
                <Col xxl={12} xl={24} className="content-main2-card-body-desc-col">
                  <div>
                    <li style={{background: '#32D3EB'}} />
                    <Text ellipsis>共享服务：</Text>
                    <Text ellipsis style={{color: '#32D3EB'}}>123个</Text>
                  </div>
                  <div>
                    <Button type="text">查看详情</Button>
                  </div>
                </Col>
              </Row>
              <div id="chart2" />
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
);

class Content0 extends React.PureComponent {

  state = {
    radioValue: 0,
    businessObject: '-',
    businessActivity: '-',
    businessService: '-',
    dataService: '-',
    businessScenario: '-',
  };

  componentDidMount() {
    getBusinessObject().then(res =>Number.isInteger(res) && this.setState({businessObject: res}));
    getBusinessActivity().then(res => Number.isInteger(res) && this.setState({ businessActivity: res }));
    getBusinessScenario().then(res => Number.isInteger(res) && this.setState({ businessScenario: res }));
    getBusiness().then(res => Number.isInteger(res) && this.setState({ businessService: res }));
    getServiceData().then(res => Number.isInteger(res) && this.setState({ dataService: res }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (document.getElementById('chart1')) {
      this.renderChart({
        id: 'chart1',
        data: [
          { type: '正常运行', value: 70 },
          { type: '异常运行', value: 30 },
        ],
        color: ['#3784FF', '#F16547'],
        content: '服务运行\n状态比例',
      });
    }
    if (document.getElementById('chart2')) {
      this.renderChart({
        id: 'chart2',
        data: [
          { type: '应用服务', value: 50 },
          { type: '共享服务', value: 50 }
        ],
        color: ['#3784FF', '#32D3EB'],
        content: '服务复用\n状态比例'
      });
    }
  }

  renderChart = ({id, data, color, content}) => {

    const piePlot = new Pie(id, {
      appendPadding: 0,
      data,
      angleField: 'value',
      colorField: 'type',
      legend: false, // 关闭图例
      radius: 0.7,
      innerRadius: 0.7,
      label: {
        type: 'spider',
        style: {
          textAlign: 'center',
          fontSize: 16
        },
        // autoRotate: false,
        content: '{name}\n{value}%',
      },
      color,
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '20px',
          },
          formatter: () => content,
        },
      },
      // 添加 中心统计文本 交互
      interactions: [{ type: 'element-selected' }],
    });

    piePlot.render();
  };

  renderTotal = total => {
    let totalDom;
    switch (typeof total) {
      case 'undefined':
        totalDom = null;
        break;
      case 'function':
        totalDom = <span className="total">{total()}<span style={{fontSize: 16}}> 个</span></span>;
        break;
      default:
        totalDom = <span className="total">{total}<span style={{fontSize: 16}}> 个</span></span>;
    }
    return totalDom;
  };

  render() {
    const {dataSource, isMobile, ...props} = this.props;
    const { radioValue, ...restState } = this.state;
    const {
      wrapper,
      titleWrapper,
      footerWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <TitleWrapper
            options={[
              {label: '数字资产', value: 0},
              {label: '运营概况', value: 1},
            ]}
            titleWrapper={titleWrapper}
            leftProps={{xl: 10, xxl: 9}}
            rightProps={{xl: 10, xxl: 9}}
            radioValue={radioValue}
            onChange={e => this.setState({radioValue: e.target.value})}
          />
          {radioValue === 0 ? (
            // <OverPack {...overPackData}>
            // </OverPack>
            <Layout {...childWrapper}>
              <Content className="content-main">
                <div className="content-main-share"/>
                <div className="content-main-logo"/>
                <Row justify="center">
                  {childWrapper.children.map(item => (
                    <Col key={item.name} {...item.props}>
                      <img src={item.imgSrc} alt=""/>
                      <div style={{marginTop: 10}}>{item.label}</div>
                      <span className="content-main-num">{restState[item.name]}</span>
                      <span>个</span>
                    </Col>
                  ))}
                </Row>
              </Content>
            </Layout>
          ) : (
            <Layout2 />
          )}
        </div>
        <Row justify="center" {...footerWrapper}>
          {footerWrapper.children.map((item, i) => {
            let colProps;
            switch (footerWrapper.children.length) {
              case 2:
                colProps = { xl: 10, xxl: 9 };
                break;
              case 3:
                colProps = { xl: 7, xxl: 6 };
                break;
              default:
                colProps = { xl: 7, xxl: 6 };
                break;
            }
            return (
              <Col
                key={i.toString()}
                {...colProps}
                >
                <Card bordered={false}>
                  <div className="content0-card">
                    <img src={item.imgSrc} alt=""/>
                    <div className="content0-card-right">
                      <div className="meta-wrap">
                        <div className="meta">
                          <span className="title">{item.name}</span>
                        </div>
                        {this.renderTotal(item.total)}
                      </div>
                    </div>
                    {footerWrapper.children.length - 1 !== i && <div style={{float: 'right', height: 67, borderRight: '1px solid #EEEEEE', marginTop: 15}} />}
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Content0;
