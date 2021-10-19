import React from 'react';
import ShopPage from './pages/shopPage/ShopPage';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header-Nav/Header-comp';
import SignUpSignIn from './pages/SignUp-SignIn-Page/SignUp-SignIn';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={ ShopPage } />
       <Route path='/signin' component={ SignUpSignIn} />
      </Switch>
    </div>
  );
}

export default App;
