import React , { Component } from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';

import GridContainer from '../../../../components/GridContainer';
import GridItem from '../../../../components/GridItem';
import { withGoogleApiLibs } from '../../../../lib/withLibs'
import addNewPlaceStyle from './addNewPlaceStyle';
import AppHeader from '../../../app/components/AppHeader';
import { getSelectedCityDetails, getPredictions, getPlaces } from '../../store/selector';
import Close from '@material-ui/icons/Close'
import { fetchCityDetails, autoCompleteSearch, clearSuggestion ,textSearch } from '../../store/action';
import AutoComplete from '../../components/AutoComplete';
import PlaceThumbnailView from '../../components/PlaceThumbnailView';
import { isLoading } from '../../../app/store/selector'


class AddNewPlace extends Component {

  componentDidMount() {
    
    const { city  , dispatch , id , google } = this.props;
   
    if( (!city  && id && id !== '') ||  (city && id && city.get('place_id') !== id)) {
      dispatch && dispatch(fetchCityDetails(google ,this.refs.place , id ));
    }
  }

  componentDidUpdate() {
    
    const { city  , dispatch , id } = this.props;
    
    if( (!city  && id && id !== '') ||  (city &&  id && city.get('place_id') !== id)) {
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

    const { classes , t , suggestions , places , loading} = this.props;

    const placesToRender = places ? places.map( place => {
       console.log("placesToRender",place);
       return <GridItem xs = {3} key={place['id']}>
                <PlaceThumbnailView {...place} />
              </GridItem>
              
    }) : null;

  return (<GridContainer className={classes.container}>
             <GridItem xs = {12}>
               <AutoComplete 
                    translations={t}
                    fetchSuggestions = {this.fetchSuggestions}
                    performSearch = {this.searchText}
                    suggestions={suggestions} 
                    isLoading={loading}/>
             </GridItem>
             {placesToRender}
            </GridContainer>);
  }

  renderLoading() {
    return <div> LOADING....</div>
  }

  fetchSuggestions = (query) => {
    
    const { dispatch , city } = this.props;

    console.log("Inside fetchSuggestions",query,city);

    const latlngObj = city.get('geometry') ? city.get('geometry').get('location') : undefined;
    const radius  = "100000";

    const params = { latlngObj  , radius};

     dispatch(autoCompleteSearch(query,params));
  }

  searchText = (query) => {
    console.log("searchText",query);
    const { dispatch , city } = this.props;
    const latlngObj = city.get('geometry') ? city.get('geometry').get('location') : undefined;
    const radius  = "100000";

    const params = { latlngObj  , radius};
    dispatch(clearSuggestion());
    dispatch(textSearch(query,params));
  }
}

const mapStateToProps = state => (
  {
    city : getSelectedCityDetails(state),
    suggestions:getPredictions(state),
    places:getPlaces(state),
    loading:isLoading(state)
  }
);

export default connect(mapStateToProps)
                  (withGoogleApiLibs(AddNewPlace,['placedata','common'],addNewPlaceStyle));