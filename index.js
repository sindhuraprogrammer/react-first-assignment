import React, { Component } from 'react';
import { render } from 'react-dom';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './style.css';

class App extends Component {
  state={
    username:"manasa"
  }
manipulateStateHandler=(event)=>{
this.setState({username:event.target.value})
}

  render() {
    
    return(
      <div>
       <h1 style={styles.cardView}>Hello Style!</h1>
        <UserInput
        changed={this.manipulateStateHandler} 
        name={this.state.username}></UserInput>
        <UserOutput name={this.state.username}></UserOutput>
        <UserOutput name={this.state.username} ></UserOutput>
      </div>
    );
  }
}
const styles = {
          cardView: {
            backgroundColor:'#dcdcdc',
            color:'#ff00ff'
	        }
    }
render(<App />, document.getElementById('root'));