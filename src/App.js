// import logo from "./logo.svg";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
    // this.state = this.props.something;
  }

  componentDidMount() {
    // Ajax Call
    console.log("App - Mounting");
  }

  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((ele) => {
      ele.value = 0;
      return ele;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters,
    });
  };

  render() {
    console.log("App - rendered");
    return (
      <>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
          />
        </main>
      </>
    );
  }
}

export default App;
