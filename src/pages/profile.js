import './profile.scss';
import Index from './profiles/index';
import Info from './profiles/info';
import Account from './profiles/account';
import { BrowserRouter as Router, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

function Profile() {
    let match = useRouteMatch();

    return (
        <div>
            Profile is work!
            
            <Router>
                <ul className="Profile-Route">
                    <li> <NavLink to={`${match.url}`} exact> Index </NavLink> </li>
                    <li> <NavLink to={`${match.url}/info`}> Info </NavLink> </li>
                    <li> <NavLink to={`${match.url}/account`}> Account </NavLink> </li>
                </ul>

                <Switch>
                    <Route path={`${match.url}`} exact> <Index /> </Route>
                    <Route path={`${match.url}/info`}> <Info /> </Route>
                    <Route path={`${match.url}/account`}> <Account /> </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default Profile;
