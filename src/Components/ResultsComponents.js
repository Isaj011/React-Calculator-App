import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    return (
      <div>
        <input className="result" value={result} />
      </div>
    );
  }
}

export default ResultComponent;
