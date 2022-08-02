import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Nav from './nav';
import Landing from './landing';
import Footer from './footer';
import '../styling/style.scss';

const About = (props) => {
  console.log('rough');
  return <div> All there is to know about me </div>;
};

const App = (props) => {
  return (
    <Router>
      <title>William Perez Portfolio</title>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          {/* <Route path="/projects" component={} />
          <Route path="/casestudy/beepboop" component={} />
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
