import React, { Component, Fragment } from 'react';
import Bio from './pages/Bio';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Interests from './pages/Interests';
import Projects from './pages/Projects';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Landing/>
        <Bio/>
        <Projects/>
        <Interests/>
        <Contact/>
      </Fragment>
    )
  }
}

export default App;
