import React from 'react';
import {Col, Row} from 'antd';
import serviceInvokeIcon from './imgs/serviceInvokeIcon.png';
import {Pie} from "@antv/g2plot";
import {renderStatistic} from './utils';
import realTimeCallYearOnYear from './imgs/realTimeCallYearOnYear.svg';

class Content6 extends React.PureComponent {

  componentDidMount() {
    const data = [
      { type: '人力中心', value: 23 },
      { type: '设备中心', value: 21 },
      { type: '用户中心', value: 18 },
      { type: '财务中心', value: 15 },
      { type: '客户中心', value: 10 },
      { type: '员工中心', value: 13 },
      { type: '项目中心', value: 5 },
    ];

    const piePlot = new Pie('content6-container', {
      color: ['#FEB64D', '#60ACFC', '#3784FF', '#32D3EB', '#6370DE', '#5BC49F', '#EEE94E'],
      appendPadding: 0,
      data,
      angleField: 'value',
      colorField: 'type',
      legend: false, // 关闭图例
      radius: 0.5,
      innerRadius: 0.55,
      label: {
        type: 'spider',
        style: {
          textAlign: 'center',
          fontSize: 16
        },
        // autoRotate: false,
        content: '{name}\n{value}',
      },
      statistic: {
        title: {
          offsetY: -4,
          customHtml: (container, view, datum) => {
            const { width, height } = container.getBoundingClientRect();
            const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
            const text = datum ? datum.type : '总数';
            return renderStatistic(d, text, { fontSize: 28 });
          },
        },
      },
      // 添加 中心统计文本 交互
      interactions: [{ type: 'element-selected' }],
    });

    piePlot.render();
  }

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const { wrapper, page } = dataSource;
    const renderImg = ratio => <img src={ratio > 0 ? realTimeCallYearOnYear : realTimeCallYearOnYear} alt={ratio > 0 ? "上涨" : "下降"} />;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <Row
            justify="center"
            className="content6-main"
            gutter={20}
          >
            <Col xl={6}>
              <div className="content6-main-left">
                <div className="content6-main-left-title">
                  服务调用分布
                </div>
                <img src={serviceInvokeIcon} alt=""/>
                <div className="content6-main-left-desc1">
                  <span>本周总调用</span>
                </div>
                <div className="content6-main-left-desc2">
                  72033 <span>次</span>
                </div>
                <div className="content6-main-left-desc3" style={{ height: 'auto' }}>
                  <span style={{marginRight: 8}}>环比：1.3</span>
                  {renderImg(1.3)}
                  <span style={{marginRight: 8, marginLeft: 15}}>同比：-1.5</span>
                  {renderImg(-1.5)}
                </div>
              </div>
            </Col>
            <Col xxl={12} xl={14}>
              <div id="content6-container" className="content6-main-right"/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Content6;
