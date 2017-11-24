import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'mind awake body asleep'
    }
  }

  changeDeadline() {
    this.setState( {deadline: 'November 25, 2017'})
  }

  render() {
    return (
    <div className="App">
    <div className="App-title">
      Countdown to {this.state.deadline}
      </div>
    <div>
      <div className="Clock-days">14 Days</div>
      <div className="Clock-hours">30 hours</div>
      <div className="Clock-minutes">15 minutes</div>
      <div className="Clock-seconds">20 seconds</div>
    </div>
      <input placeholder='new date'/>
      <button className="button" onClick={() => this.changeDeadline()}>Submit</button>
    </div>
    )
  }
}

export default App;