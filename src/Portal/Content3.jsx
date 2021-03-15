import React from 'react';
import {Col, Radio, Row} from 'antd';
import TitleWrapper from "./TitleWrapper";
import {Area} from '@antv/g2plot';
import fall from './imgs/fall.png';
import numeral from 'numeral';
import data from './1d565782-dde4-4bb6-8946-ea6a38ccf184.json';

class Content3 extends React.PureComponent {

  componentDidMount() {
    // console.log(document.getElementById(content3-container));
    const line = new Area('content3-container', {
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        // type: 'timeCat',
        tickCount: 12,
      },
      yAxis: {
        label: {
          formatter: v => numeral(v).format('0,0')
        }
      },
      areaStyle: () => {
        return {
          fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
        };
      },
    });

    line.render();
  }

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    const { wrapper, page, titleWrapper } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div className="content3-bg-wrapper">
          <div className="content3-bg" />
        </div>
        <div {...page}>
          <TitleWrapper
            options={[
              {label: '业务服务', value: 0},
              {label: '数据服务', value: 1},
            ]}
            titleWrapper={titleWrapper}
            leftProps={{xl: 10, xxl: 9}}
            rightProps={{xl: 10, xxl: 9}}
          />
          <Row justify="center" >
            <Col xl={20} xxl={18}>
              <div className="content3-chart">
                <Row key="row1" gutter={{xl: 24}}>
                  <Col xl={6}>
                    <div style={{background: '#00D2C8'}}>
                      <div className="content3-chart-sum">
                        820<span> 次</span>
                      </div>
                      <div className="content3-chart-sum-desc">
                        <span>今日总调用</span>
                        <span>同比：1.5%</span>
                        <img src={fall} alt=""/>
                      </div>
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div style={{background: '#00CEFB'}}>
                      <div className="content3-chart-sum">
                        1253<span> 次</span>
                      </div>
                      <div className="content3-chart-sum-desc">
                        <span>本周总调用</span>
                        <span>同比：1.5%</span>
                        <img src={fall} alt=""/>
                      </div>
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div style={{background: '#01AAFB'}}>
                      <div className="content3-chart-sum">
                        19234<span> 次</span>
                      </div>
                      <div className="content3-chart-sum-desc">
                        <span>本月总调用</span>
                        <span>同比：1.5%</span>
                        <img src={fall} alt=""/>
                      </div>
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div style={{background: '#008CFF'}}>
                      <div className="content3-chart-sum">
                        42466<span> 次</span>
                      </div>
                      <div className="content3-chart-sum-desc">
                        <span>年度总调用</span>
                        <span>同比：1.5%</span>
                        <img src={fall} alt=""/>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="content3-chart-area">
                  <div className="content3-chart-area-top">
                    <h3>业务服务</h3>
                    <Radio.Group
                      options={[
                        {label: '日', value: 0},
                        {label: '周', value: 1},
                        {label: '月', value: 2},
                        {label: '年', value: 3}
                      ]}
                      optionType="button"
                      size="small"
                    />
                  </div>
                  <div style={{color: '#666666', marginBottom: 30}}>
                    次数 (次)
                  </div>
                  <div id="content3-container" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Content3;
