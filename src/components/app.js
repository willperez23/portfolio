import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Nav from './nav';
import Landing from './landing';
import Footer from './footer';
import About from './about';
import BeepBoop from './beepboop';
import Portfolio from './portfolio';
import '../styling/style.scss';

const App = (props) => {
  return (
    <Router>
      <title>William Perez Portfolio</title>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/beepBoop" component={BeepBoop} />
          {/* <Route path="/projects" component={} />
          <Route path="/casestudy/BetMate" component={BetMate} /> */}
          {/* https://stackoverflow.com/questions/42914666/react-router-external-link */}
          {/* <Route path="/casestudy/FosterFeedFriends"
            component={() => {
              window.location.href = 'https://fosterfeedfriends.netlify.app';
              return null;
            }}
          />
          <Route path="/casestudy/Polaris" component={Polaris} /> */}
          {/* <Route component={FallBack} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
// ReactDOM.render(<App />, document.getElementById('main'));
