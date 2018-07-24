import React , {Component} from 'react';
import Header from '../../../../components/Header';
import landingBg from '../../../../assets/img/landing-bg.jpg';
import Parallax from '../../../../components/Parallax';
import GridContainer from '../../../../components/GridContainer';
import GridItem from '../../../../components/GridItem';

import { translate } from 'react-i18next';

class LandingPage extends Component {
  render() {

    const { t } = this.props;
    
    return (
      <div>
        <Header
         color="primary"
          brand={t('appName')}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
        />
        <Parallax filter image={landingBg}>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default translate(['common'])(LandingPage);