import React from 'react';
import {Card, Col, Layout, Row} from 'antd';
import TitleWrapper from "./TitleWrapper";

const {Content} = Layout;

class Content0 extends React.PureComponent {

  state = {
    radioValue: 0
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
    const { radioValue } = this.state;
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
                      <span className="content-main-num">{item.total}</span>
                      <span>个</span>
                    </Col>
                  ))}
                </Row>
              </Content>
            </Layout>
          ) : (
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
          )}
        </div>
        <Row justify="center" {...footerWrapper}>
          {footerWrapper.children.map((item, i) => {
            return (
              <Col key={i.toString()} xxl={footerWrapper.children.length + 3} xl={footerWrapper.children.length + 4}>
                <Card bodyStyle={{padding: '20px 0 20px 70px'}} bordered={false}>
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
