import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/HOC';
import { Home } from "./Container/Home/Index";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './actions/auth.action';
import { Dashboard } from './Container/Dashboard';
import { SignupModal } from './components/SignupModal/Index';
import { LoginModal } from './components/LoginModal';
import Market from './Container/Market';
import ContactUs from './Container/ContactUs';
import { Profile } from './Container/Profile/Index';
import { BankAccount } from './Container/BankAccount';
import { Security } from './Container/Security';

function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    // if (auth.authenticate) {
    //   // dispatch(getInitialData());
    // }
  }, [auth.authenticate]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={LoginModal} />
          <Route path="/signup" component={SignupModal} />
          <Route path="/market" component={Market} />
          <Route path="/contact" component={ContactUs} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/bank-account" component={BankAccount} />
          <PrivateRoute path="/security" component={Security} />
          <PrivateRoute path="/verify-Account" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
