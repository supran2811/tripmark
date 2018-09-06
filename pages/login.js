
import { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from '../modules/auth/store/selector';
import LoginPage from '../modules/auth/containers/LoginPage';
import "../assets/scss/material-kit-react.scss";
import { withI18next } from '../lib/withI18next';

class Login extends Component {


  static async getInitialProps ({ store }) {
    console.log("Login getInitialProps",store.getState());
  }


  render() {
    return <div>LOGIN PAGE</div>
  }
}


const mapStateToProps = state => (
  {
    isAuthenticated: isAuthenticated(state)
  }
);

export default connect(mapStateToProps)(withI18next(['common','authdata'])(Login));