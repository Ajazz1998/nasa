import React, { Component } from 'react';
import "./header.css";

class header extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=JM1jKxHdSoFVGRyWgfhXCHRQs0drNt7xgmVfY5Id`);
    const json = await response.json();
    console.log(json);
    this.setState({ data: json });
  }

  render() {
    return (
    <div className="nasa-heroimage"
        style={{
          background:
            `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),
            url('${this.state.data.url}'), #1c1c1c`
        }}
      >
        <div className="nasa-heroimage-content">
          <div className="nasa-heroimage-text">
          <div>
             <h1>{this.state.data.title}</h1>
             <h3>{this.state.data.date}</h3>
          </div>
          <p>{this.state.data.explanation}</p>
          </div>
        </div>
      </div>

    );
  }
}

export default header;
