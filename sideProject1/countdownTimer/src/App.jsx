import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
    <div className="App-title"> Countdown to Date </div>
    <div>
      <div className="Clock-days">14 Days</div>
      <div className="Clock-hours">30 hours</div>
      <div className="Clock-minutes">15 minutes</div>
      <div className="Clock-seconds">20 seconds</div>
    </div>
      <input placeholder='new date'/>
      <button>Submit</button>
    </div>
    )
  }
}

export default App;