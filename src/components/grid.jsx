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
            team: new Array(),
            showSuccess: false,
        };
        this.drawerElement = React.createRef();
        this.radioGroup= React.createRef();
      }

    handleMessageClick = () => {
      this.drawerElement.current.showDrawer();
    }

    handleReset = () => {
      this.setState({data: this.state.original, original: [...orig]}, () => {console.log(this.state)})
      this.radioGroup.current.handleReset();
      console.log(this.state)
    }

    render() {
        return (
        <div className="site-card-wrapper" style={gridStyle}>
        
        <Layout>

          <MyRadio ref={this.radioGroup} data={this.state.data} setState={state => this.setState(state)}></MyRadio>

        <Layout style={{ marginLeft: 150 }}>
        <Content style={{ margin: '24px 24px 0', overflow: 'initial' }}>
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {this.state.data.map(li => (
                  <Col span={8} xs={20} sm={16} md={12} lg={8} xl={6}>
                <MyCard
                    name={li.name}
                    number={li.pokedex_number}
                    type={li.types}
                    hp={li.hp}
                    attack={li.attack}
                    defense={li.defense}
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