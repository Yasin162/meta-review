import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home';
import Reviews from './Reviews';
import Review from './Review'

function App() {
  return (
    <Router>
      <Switch> 
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/reviews' component={Reviews} />
        <Route path='/reviews/:id' component={Review} />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
