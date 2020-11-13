import { Card, Tag } from 'antd';
import React from 'react';
import typemap from '../types.js'
const { Meta } = Card;

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
        </div>
        } />
        </Card>
    }
  }
