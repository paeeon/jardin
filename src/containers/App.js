import React, { Component } from 'react';
import '../styles/App.css';
import HeaderContainer from './HeaderContainer';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
