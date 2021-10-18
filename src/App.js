import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home';
import Reviews from './Reviews';

function App() {
  return (
    <Router>
      <Switch> 
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/Reviews' component={Reviews} />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
