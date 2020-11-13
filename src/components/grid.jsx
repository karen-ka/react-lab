import {Col, Row} from 'antd';
import MyCard from './card.jsx';
import React from 'react';
import MyRadio from './radio.js';
import pkmn from '../data.js'
import { Layout } from 'antd';
const { Content } = Layout;

const gridStyle = {
    align: 'center',
  };

const orig = [...pkmn];

class MyGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            original: [...orig],
            data: this.props.data,
        };
      }


    render() {
        return (
        <div className="site-card-wrapper" style={gridStyle}>
        
        <Layout>

          <MyRadio ref={this.radioGroup} data={this.state.data} setState={state => this.setState(state)}></MyRadio>

        <Layout>
        <Content style={{ margin: '24px 24px 0', overflow: 'initial' }}>
          <Row gutter={[16, 16]}>
            {this.state.data.map(li => (
                  <Col span={4}>
                <MyCard
                    name={li.name}
                    number={li.pokedex_number}
                    type={li.types}
                    setState={state => this.setState(state)}
                    data={this.state.data}
                >
                </MyCard>
                </Col>
          ))}
        </Row>
        </Content>
        </Layout>
        </Layout>
      </div>
        )
    }
}

export default MyGrid;