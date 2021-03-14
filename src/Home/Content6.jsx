import React from 'react';
import {Col, Row} from 'antd';
import serviceInvokeIcon from './imgs/serviceInvokeIcon.png';
import rise from "./imgs/rise.png";
import fall from "./imgs/fall.png";
import {measureTextWidth, Pie} from "@antv/g2plot";

class Content6 extends React.PureComponent {

  componentDidMount() {
    function renderStatistic(containerWidth, text, style) {
      const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
      const R = containerWidth / 2;
      // r^2 = (w / 2)^2 + (h - offsetY)^2
      let scale = 1;
      if (containerWidth < textWidth) {
        scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
      }
      const textStyleStr = `width:${containerWidth}px;`;
      return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
    }

    const data = [
      { type: '人力中心', value: 27 },
      { type: '设备中心', value: 25 },
      { type: '用户中心', value: 18 },
      { type: '财务中心', value: 15 },
      { type: '客户中心', value: 10 },
      { type: '员工中心', value: 5 },
      { type: '项目中心', value: 5 },
    ];

    const piePlot = new Pie('content6-container', {
      appendPadding: 150,
      data,
      angleField: 'value',
      colorField: 'type',
      legend: false, // 关闭图例
      radius: 1,
      innerRadius: 0.55,
      label: {
        type: 'spider',
        style: {
          textAlign: 'center',
          fontSize: 20
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
    const renderImg = ratio => <img src={ratio > 0 ? rise : fall} alt={ratio > 0 ? "上涨" : "下降"} />;
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
