import React , { Component } from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';
import AutoSuggest from 'react-autosuggest';

import GridContainer from '../../../../components/GridContainer';
import GridItem from '../../../../components/GridItem';
import { withGoogleApiLibs } from '../../../../lib/withLibs'
import addNewPlaceStyle from './addNewPlaceStyle';
import AppHeader from '../../../app/components/AppHeader';
import { getSelectedCityDetails, getSuggestedPlaces } from '../../store/selector';
import Close from '@material-ui/icons/Close'
import { fetchCityDetails, textSearch } from '../../store/action';
import { getQueryParam } from '../../../../lib/utils';
import AutoComplete from '../../components/AutoComplete';

class AddNewPlace extends Component {

  state = {
    places:[
      {
        label:"Entertainment",
        term:"entertainment",
        type:"cat"
      },
      {
        label:"History",
        term:"history",
        type:"cat"
      },
      {
        label:"Art",
        term:"art",
        type:"cat"
      },
      {
        label:"Museum",
        term:"museum",
        type:"cat"
      },
      {
        label:"Restaurants",
        term:"food",
        type:"cat"
      },
    ],
    value:''
  }

  componentDidMount() {
    
    const { city  , dispatch ,query , google } = this.props;
  
    const id = getQueryParam('id',query);

    console.log("componentDidMount ",city,id);
    if( (!city  && id && id !== '') ||  (city && id && city.place_id !== id)) {
      dispatch && dispatch(fetchCityDetails(google ,this.refs.place , id ));
    }
  }

  componentDidUpdate() {
    
    const { city  , dispatch , query } = this.props;
    
    const id = getQueryParam('id' ,query , google);

    console.log("componentDidUpdate ",city,id);
    if( (!city  && id && id !== '') ||  (city &&  id && city.place_id !== id)) {
      dispatch && dispatch(fetchCityDetails(google ,this.refs.place , id ));
    }
  }

  handleClose() {
    Router.back();
  }

  onSuggestSelect = (item) => {
    console.log("onSuggestSelect Item",item);
  }

  render() {

    const { classes ,  t , city }  = this.props;

    const rightHeaderLinks = {
      headerElements : {
        'Close':{
          icon : <Close className = {classes.icons}/>,
          type:'Button',
          isExternal:false,
          handleClick:this.handleClose,
          toolTipText:'',
          color:'transparent'
        }
      }
    }

    console.log("AddNewPlace",city);

    return (
       <React.Fragment>
          <AppHeader 
                color="primary"
                headerTitle="Add Favorites"
                rightLinks = {rightHeaderLinks}
            />
            {
              city ? this.renderMainContent()
                   : this.renderLoading()
            }
         <div ref='place'></div>
       </React.Fragment>
    );
  }

  renderMainContent = () => {

    const { classes , t , suggestions} = this.props;

    return (<GridContainer className={classes.container}>
             <GridItem xs = {12}>
               <AutoComplete 
                    translations={t}
                    fetchSuggestions = {this.fetchSuggestions}
                    suggestionClicked = {this.handleSuggestionClicked}
                    suggestions={suggestions} />
             </GridItem>
            </GridContainer>);
  }

  renderLoading() {
    return <div> LOADING....</div>
  }

  fetchSuggestions = (query) => {
    const { dispatch , city } = this.props;
    console.log("Inside fetchSuggestions",query,city);

    const latlngObj = city.geometry ? city.geometry.location : undefined;
    const radius  = "100000";

    const params = { latlngObj  , radius};

    dispatch(textSearch(query,params));
  }

  handleSuggestionClicked = (suggestion) => {
    console.log("handleSuggestionClicked",suggestion);
  }
}

const mapStateToProps = state => (
  {
    city : getSelectedCityDetails(state),
    suggestions:getSuggestedPlaces(state)
  }
);

export default connect(mapStateToProps)(withGoogleApiLibs(AddNewPlace,['placedata','common'],addNewPlaceStyle));