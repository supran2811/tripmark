
import { Component } from 'react';
import { connect } from 'react-redux';
import LandingPage from '../modules/app/containers/LandingPage';
import "../assets/scss/material-kit-react.scss";
import { withI18next } from '../lib/withI18next';
import { isFirebaseLoaded, isAuthenticated, getPathToRedirect } from '../modules/auth/store/selector';
import redirect from '../lib/redirect';
import PageLoader from '../modules/app/components/PageLoader';

class MainPage extends Component {
  
  render() {

    const { isFirebaseLoaded , isAuthenticated ,redirectPath } = this.props;
    
    console.log("APP STATUS ::: ",isFirebaseLoaded , isAuthenticated);

    if(isAuthenticated){
      console.log("Coming to redirect!!!");
      redirect( undefined , redirectPath);
    }

    return (
        !isFirebaseLoaded ? <PageLoader /> :
            !isAuthenticated ? <LandingPage /> : <PageLoader />
    );
  }
}

const mapStateToProps = state => (
  {
    isFirebaseLoaded: isFirebaseLoaded(state),
    isAuthenticated : isAuthenticated(state),
    redirectPath: getPathToRedirect(state)
  }
);

export default connect(mapStateToProps)(withI18next(['common','authdata'])(MainPage));