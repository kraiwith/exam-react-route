import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import './App.scss';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="App-Route">
          <li> <NavLink to="/" activeClassName="active" exact>Home</NavLink> </li>
          <li> <NavLink to="/login" activeClassName="active" >Login</NavLink> </li>
          <li> <NavLink to="/profile" activeClassName="active" >Profile</NavLink> </li>
        </ul>

        <Switch>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/login"> <Login /> </Route>
          <Route path="/profile"> <Profile /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
