import { Radio } from 'antd';
import React from 'react';
import pkmn from '../data.js'


const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

const orig = [...pkmn];
class MyRadio extends React.Component {

    state = {
        value: "pokedex_number",
    };
    
      onChange = e => {
        this.setState({
          value: e.target.value,
        });

        if(e.target.value === "name") {
            this.props.setState({data: this.props.data.sort((a, b) => a[e.target.value].localeCompare(b[e.target.value]))});
        } else if(e.target.value === "pokedex_number"){
                this.props.setState({data: this.props.data.sort((a, b) => a["pokedex_number"] - b["pokedex_number"])});
        }
      };

    
    render() {
        return (
            <div>
                <p>SORT BY</p>
            <Radio.Group onChange={this.onChange} value={this.state.value} style={{display: 'inline flex'}}>
            <Radio value={"pokedex_number"} style={radioStyle}>Pokedex Number</Radio>
            <Radio value={"name"} style={radioStyle}>Pokemon Name</Radio>
          </Radio.Group>
          </div>
        );
      }
}

export default MyRadio;