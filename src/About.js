import React, { PropTypes } from 'react';
import axios from 'axios';
import { searchGit } from './utils/helpers.js'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      inputValue:'username'
    }
  }
  componentDidMount(){

  }
  handleInput(e){
    this.setState({inputValue:e.target.value})
  }
  handleClick(){
    let name = this.state.inputValue;
    searchGit(name)
      .then((data) => {
        this.setState({
          data:data.data,
          wait:false
        })
      })
  }
  render () {
    let info = (
      <div>
        <p>{this.state.data.name}</p>
        <img src={this.state.data.avatar_url} />
      </div>
    )
    return(
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>搜索</button> <br />
        { this.state.wait ? '正在拼命加载！' : info }
      </div>
    )
  }
}

export default About;
