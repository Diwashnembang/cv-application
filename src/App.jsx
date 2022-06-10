import React, { PureComponent } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;