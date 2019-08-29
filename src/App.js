import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });

    console.log(res);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <h1>Hello</h1>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
