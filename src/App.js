import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Redirect, Switch, Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { SearchResults } from './components/searchResults';

function App() {
  return (
  
  <Router history = { createBrowserHistory() }>
    <Switch>
        <Route exact path = "/home" component = {Home} />
        <Route exact path = "/search" component = {SearchResults} />
        <Redirect from = "*" to = "/" />
    </Switch>
  </Router>
    
  );
}

export default App;
