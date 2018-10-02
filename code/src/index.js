import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

  state = {
    date: new Date()
  }

  componentDidMount() {
    this.startClock()
  }

  componentWillUnmount() {
    this.stopClock()
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  stopClock= () => {
    clearInterval(this.timerID)
  }

  startClock= () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  render() {
    return (
      <div className="myClockPage">
        <div className="myClock">
          <h1>The Local Time Is:</h1>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
          <div className="actionButtons">
            <button onClick={this.stopClock}>Stop Clock</button>
            <button onClick={this.startClock}>Start Clock</button>
          </div>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"))
