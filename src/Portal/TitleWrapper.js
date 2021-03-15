import React from 'react';
import {Col, Radio, Row} from "antd";
import {getChildrenToRender} from "./utils";

class TitleWrapper extends React.Component {

  state = {
    showType: 0
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      showType: e.target.value,
    });
  };

  render() {

    const { showType } = this.state;
    const { titleWrapper, options, leftProps, rightProps } = this.props;
    return (

      <div {...titleWrapper}>
        <Row justify="center">
          <Col {...leftProps}>
            <span style={{textAlign: 'left'}}>
              {titleWrapper.children.map(getChildrenToRender)}
            </span>
          </Col>
          <Col {...rightProps}>
            <div style={{float: 'right'}}>
              <Radio.Group
                options={options}
                onChange={this.onChange}
                value={showType}
                optionType="button"
                buttonStyle="solid"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TitleWrapper;