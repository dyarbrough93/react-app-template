import React, { Component } from 'react';

/* Components */

/* CSS */
import './assets/styles/css/bootstrap.css';
import './assets/styles/css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { windowWidth: 0, windowHeight: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
