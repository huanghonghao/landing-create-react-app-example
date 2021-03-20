import React from 'react';
import {Card, Col, Row} from 'antd';
import QueueAnim from 'rc-queue-anim';
import {TweenOneGroup} from 'rc-tween-one';
import BannerAnim, {Element} from 'rc-banner-anim';
import {isImg} from './utils';
import 'rc-banner-anim/assets/index.css';
import fall from './imgs/fall.png';
import rise from './imgs/rise.png';
import numeral from 'numeral';
import {
  getBusinessRelativeRatio,
  getBusinessServiceWeekOnWeek,
  getDataServiceRelativeRatio,
  getDataServiceWeekOnWeek,
  getServiceCallRatioLast30Day,
  getServiceCallRelativeRatio,
  getServiceCallWeekOnWeek,
  getServiceRelativeRatio,
  getServiceWeekOnWeek,
  getTotalBusinessServiceCallLast30Day,
  getTotalDataServiceCallLast30Day,
  getTotalServiceCallLast30Day
} from '../utils/Api';

const {BgElement} = Element;

class Banner extends React.PureComponent {

  state = {
    service: {
      total: '-',
      relativeRatio: '-',
      weekOnWeek: '-',
    },
    businessService: {
      total: '-',
      relativeRatio: '-',
      weekOnWeek: '-',
    },
    dataService: {
      total: '-',
      relativeRatio: '-',
      weekOnWeek: '-'
    },
    serviceCall: {
      total: '-',
      relativeRatio: '-',
      weekOnWeek: '-'
    }
  };

  componentDidMount() {
    getTotalServiceCallLast30Day().then(res => this.setState((state) => ({service: {...state.service, total: res}})));
    getServiceRelativeRatio().then(res => this.setState((state) => ({service: { ...state.service, relativeRatio: res }})));
    getServiceWeekOnWeek().then(res => this.setState((state) => ({service: { ...state.service, weekOnWeek: res }})));
    getTotalBusinessServiceCallLast30Day().then(res => this.setState((state) => ({businessService: {...state.businessService, total: res}})));
    getBusinessRelativeRatio().then(res => this.setState((state) => ({businessService: {...state.businessService, relativeRatio: res}})));
    getBusinessServiceWeekOnWeek().then(res => this.setState((state) => ({businessService: {...state.businessService, weekOnWeek: res}})));
    getTotalDataServiceCallLast30Day().then(res => this.setState((state) => ({dataService: {...state.dataService, total: res}})));
    getDataServiceRelativeRatio().then(res => this.setState((state) => ({dataService: {...state.dataService, relativeRatio: res}})));
    getDataServiceWeekOnWeek().then(res => this.setState((state) => ({dataService: {...state.dataService, weekOnWeek: res}})));
    getServiceCallRatioLast30Day().then(res => this.setState((state) => ({ serviceCall: { ...state.serviceCall, total: res }})));
    getServiceCallRelativeRatio().then(res => this.setState((state) => ({ serviceCall: { ...state.serviceCall, relativeRatio: res }})));
    getServiceCallWeekOnWeek().then(res => this.setState((state) => ({ serviceCall: { ...state.serviceCall, weekOnWeek: res }})));
  }

  renderTotal = (total, unit) => {
    let totalDom;
    switch (typeof total) {
      case 'undefined':
        totalDom = null;
        break;
      case 'function':
        totalDom = <span className="total">{total()}<span style={{fontSize: 16}}> {unit}</span></span>;
        break;
      default:
        totalDom = <span className="total">{Number.isInteger(total) ? total : '-'}<span style={{fontSize: 16}}> {unit}</span></span>;
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
    const renderImg = ratio => <img style={{width: 16, verticalAlign: 'text-top'}} src={ratio > 0 ? fall : rise} alt={ratio > 0 ? "上涨" : "下降"} />;
    const chartCard = dataSource.statistics.map((item, i) => {
      const data = this.state;
      return (
        <Col key={item.title} xxl={dataSource.statistics.length + 1} xl={dataSource.statistics.length + 2} >
          <Card bodyStyle={{ padding: '20px 0 8px' }} bordered={false}>
            <div className="banner1-card">
              <img src={item.imgSrc} alt=""/>
              <div className="banner1-card-right">
                <div className="meta-wrap">
                  <div className="meta">
                    <span className="title">{item.title}</span>
                  </div>
                  {this.renderTotal(() => item.unit === '%' ?
                    numeral(data[item.name].total).format('0.00') : (Number.isInteger(data[item.name].total) ? data[item.name].total : '-'), item.unit)}
                </div>
                <div className="content" style={{ height: 'auto' }}>
                  <span style={{marginRight: 8}}>环比：{numeral(data[item.name].relativeRatio).format('0.00%')}</span>
                  {renderImg(data[item.name].relativeRatio)}
                  <span style={{marginRight: 8, marginLeft: 15}}>同比：{numeral(data[item.name].weekOnWeek).format('0.00%')}</span>
                  {renderImg(data[item.name].weekOnWeek)}
                </div>
              </div>
              {dataSource.statistics.length - 1 !== i && <div style={{float: 'right', height: 67, borderRight: '1px solid #EEEEEE', marginTop: 15}} />}
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
