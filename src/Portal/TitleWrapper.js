import React from 'react';
import {Col, Radio, Row} from "antd";
import {getChildrenToRender} from "./utils";

class TitleWrapper extends React.Component {

  render() {

    const { titleWrapper, leftProps, rightProps, radioValue, ...rest } = this.props;
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
                value={radioValue}
                optionType="button"
                buttonStyle="solid"
                {...rest}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TitleWrapper;