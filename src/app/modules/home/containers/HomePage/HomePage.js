import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

import { Router } from "../../../../../routes";
import GridContainer from "../../../../components/GridContainer";
import homePageStyle from "./homePageStyle";
import GridItem from "../../../../components/GridItem";
import withLibs from "../../../../lib/withLibs";
import AppHeader from "../../../app/components/AppHeader";
import GoogleAutoComplete from "../../../../components/GoogleAutoComplete";
import PageLoader from "../../../app/components/PageLoader";
import { logoutRequest } from "../../../auth/store/action";
import { selectors as placeSelectors } from "../../../place/store";
import CityResultGrid from "../../components/CityResultGrid/CityResultGrid";
import { isLoading } from "../../../app/store/selector";
import homeBg from "../../../../assets/img/home-bg.jpg";
import Parallax from "../../../../components/Parallax";


export class HomePage extends Component {
  
  render() {
    const { classes, t , cities  , loading , user } = this.props;
    return (
      <React.Fragment>
        <AppHeader color="primary" fixed 
          isAuthenticated={true} 
          t={t} 
          user = {user}
          logOut = {this.doLogOut}/>

        <Parallax image={homeBg} className={classes.parrallexClass}>
        </Parallax>
        <div className={classes.container}>
          <div className={classes.autoComplete}>
            <GoogleAutoComplete
              searchTypes={["(cities)"]}
              onSuggestSelect={this.onSuggestSelect}
              t={t}
            />
          </div>
        </div>

        {
          cities &&
            cities.length > 0  &&
                <GridContainer className = {classes.cityGrids}>
                  <React.Fragment>
                    <GridItem xs={12}>
                      <Typography gutterBottom variant="title" component="h4" noWrap>
                        {t("markedCities")}
                      </Typography>
                    </GridItem>
                    
                    <CityResultGrid cities = {cities}/>
                  </React.Fragment>
                </GridContainer>
        }
        {
          loading &&
          <div className = {classes.loadingBar}>
            <PageLoader type = "circular" />
          </div>
        }
        
      </React.Fragment>
    );
  }

  onSuggestSelect = item => {
    item && Router.pushRoute("city", { cityId: item.placeId });
  };

  doLogOut = () => {
    this.props.logoutRequest();
  }
}

const mapStateToProps = state => {
  return {
    cities : placeSelectors.getBookmarkedCities(state),
    loading: isLoading(state)
  };
};

HomePage.propTypes = {
  logoutRequest:PropTypes.func.isRequired,
  classes:PropTypes.object.isRequired,
  t:PropTypes.func.isRequired,
  cities:PropTypes.array,
  loading: PropTypes.bool,
  user : PropTypes.object
};

export default connect(mapStateToProps,{logoutRequest})(
  withLibs(HomePage, ["homedata", "common"], homePageStyle)
);
