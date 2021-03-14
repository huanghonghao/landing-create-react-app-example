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
        <Row justify="space-between">
          <Col {...leftProps}>
            {titleWrapper.children.map(getChildrenToRender)}
          </Col>
          <Col {...rightProps}>
            <Radio.Group
              options={options}
              onChange={this.onChange}
              value={showType}
              optionType="button"
              buttonStyle="solid"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TitleWrapper;