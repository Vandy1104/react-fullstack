import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//ReactDOM.render(<h1> Full Stack</h1>, document.getElementById('root'))

import Router from './components/Router';

class App extends Component {
  render() {
    return (
        <Router />
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
