import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
