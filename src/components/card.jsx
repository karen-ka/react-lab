import { Card, Tag, Row, Col } from 'antd';
import React from 'react';
import typemap from '../types.js'
const { Meta } = Card;

const images = require.context('../imgs', true);
function typetags(props) {
    return <span>
    {props.map(tag => {
      let color = typemap[tag];
      return (
        <Tag color={color} key={tag}>
          {tag.toUpperCase()}
        </Tag>
      );
    })}
  </span>;
}

export default class MyCard extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
      return <Card
        size={'default'}
        extra={<p class='ant-card-extra-override'>{`# ${this.props.number}`}</p>}
        style={{ width: 240 }}
        title={this.props.name}
        cover={<img style={{width: 100, height: 100, alignSelf: 'center'}}alt={this.props.name} src={`${process.env.PUBLIC_URL}/images/${this.props.number}.png`}/>}
        >
      <Meta description={
        <div>
          {typetags(this.props.type)}
          <br></br>
          <br></br>
          <Row gutter={8} style={{padding: '0 0 0 22px'}}>
            <Col>
            <p><b>HP: </b>{this.props.hp}</p>
            </Col>
            <Col>
            <p><b>ATT: </b>{this.props.attack}</p>
            </Col>
            <Col>
            <p><b>DEF: </b>{this.props.defense}</p>
            </Col>            
            </Row>
        </div>
        } />
        </Card>
    }
  }
