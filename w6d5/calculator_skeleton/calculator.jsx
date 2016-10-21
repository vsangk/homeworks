import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };

    // pointer to the bound methods/objects
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  setNum1(e) {
    this.state.num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ value: this.state.num1 });
  }


  setNum2(e) {
    this.state.num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ value: this.state.num2 });
  }

  add(e) {
    // e.preventDefault();
    this.state.result = this.state.num1 + this.state.num2;
    this.setState({ value: this.state.result });
  }

  subtract(e) {
    e.preventDefault();
    this.state.result = this.state.num1 - this.state.num2;
    // this.setState({ value: this.state.result });
  }

  multiply(e) {
    e.preventDefault();
    this.state.result = this.state.num1 * this.state.num2;
    // this.setState({ value: this.state.result });
  }

  divide(e) {
    e.preventDefault();
    this.state.result = this.state.num1 / this.state.num2;
    // this.setState({ value: this.state.result });
  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input
          type="text"
          value={this.state.num1}
          onChange={this.setNum1}
          />

        <input
          type="text"
          value={this.state.num2}
          onChange={this.setNum2}
        />
      <br />

      <button onClick={this.add}>+</button>
      <button onClick={this.subtract}>-</button>
      <button onClick={this.multiply}>*</button>
      <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
