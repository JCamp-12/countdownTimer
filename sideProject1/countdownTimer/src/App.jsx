import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'mind awake body asleep',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
    <div className="App">
    <div className="App-title">
      Countdown to {this.state.deadline}
      </div>
    <div>
      <Clock />
    </div>
      <input 
        placeholder='new date'
        onChange={event => this.setState({newDeadline: event.target.value})}
        />
      <button className="button" onClick={() => this.changeDeadline()}>Submit</button>
    </div>
    )
  }
}

export default App;