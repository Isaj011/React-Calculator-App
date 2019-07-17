import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ResultComponent from "./Components/ResultsComponents";
import KeyPadComponent from "./Components/KeypadComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  render() {
    return (
      <div className="calculator-body">
        <h1 className="header">Simple Calculator</h1>
        <ResultComponent result={this.state.result} />
        <KeyPadComponent onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
