import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Greeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
