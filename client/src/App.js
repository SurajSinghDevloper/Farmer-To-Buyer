import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/HOC';
import { Home } from "./Container/Home/Index";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './actions/auth.action';
import { Dashboard } from './Container/Dashboard';
import { SignupModal } from './components/SignupModal/Index';
import { LoginModal } from './components/LoginModal';

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      // dispatch(getInitialData());
    }
  }, [auth.authenticate]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={LoginModal} />
          <Route path="/signup" component={SignupModal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
