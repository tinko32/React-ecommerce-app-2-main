import React from 'react';
import ShopPage from './pages/shopPage/ShopPage';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header-Nav/Header-comp';
import SignUpSignIn from './pages/SignUp-SignIn-Page/SignUp-SignIn';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <h1>Hellooo</h1>
      <Switch>
        <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={ ShopPage } />
       <Route path='/signin' component={ SignUpSignIn} />
      </Switch>

    </div>
    )

  }
}


export default App;
