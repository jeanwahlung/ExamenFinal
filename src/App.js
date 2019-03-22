import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import fire from './config/Fire';
import Router from './Router';
import Login from './Login';

const Navigation = ({ cart }) => <nav>

  <ul className="top-menu">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart ({ cart.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) })</NavLink></li>
    <li><NavLink to='/checkout'>Check out</NavLink></li>

  </ul>
</nav>



class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }
  logout() {
    fire.auth().signOut();
    return 0;
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {

    return <div className='page-container'>
      <div className="headroom">

      <Navigation { ...this.props } />
      <img src={require('./logo.jpg')} width='10%'  height='15%' />

      </div>
      <div className="inner-container">
        { this.state.user ? (
          <div>
            <Router />
            <button className="login-btn" onClick={ this.logout }> Logout </button>
          </div>
        ) :
          (

            <Login />
          ) }

      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default withRouter(connect(mapStateToProps)(App));
