import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Team from './components/Common/Team';
import Contact from './components/Pages/Contact';

class App extends Component{
  render() {
    return (
      <Router>
          <PageWrapper>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/services" component={Services}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/team" component={Team}/>
              <Route path="/contact" component={Contact}/>
          </PageWrapper>
      </Router>
    );
  }
}
export default App;
