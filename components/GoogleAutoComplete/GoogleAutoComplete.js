import React , { Component } from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames'
import PropTypes from "prop-types";
import Geosuggest from 'react-geosuggest';
import Search from '@material-ui/icons/Search';
import LocationCity from '@material-ui/icons/LocationCity';

import googleAutoCompleteStyle from './googleAutoCompleteStyle';

class GoogleAutoComplete extends Component {


  state = {
    activatedPlaceId: ''
  }

  renderSuggestItem(item,classes) {
    const itemClassNames = classNames([classes.suggestItemClassName] , 
              { [classes.suggestActiveClass] : (item && item.placeId === this.state.activatedPlaceId) });
    return (
      <div className = {itemClassNames}>
          <LocationCity color='primary' /> <span className={classes.label}>{item.label}</span>
      </div>
    );
  }

  onActivateSuggest = (suggest) => {
    console.log("onActivateSuggest",suggest);
    this.setState({activatedPlaceId:suggest.placeId});
  }

  onUpdateSuggests = (suggests , activeSuggest) => {
    console.log("onUpdateSuggests ",suggests,activeSuggest);
    this.setState({activatedPlaceId:''});
  }

  render() {
    const {classes ,searchTypes , onSuggestSelect , t ,initialValue } = this.props;

    return (
      <div className = {classes.main}>
        <Search color='primary' classes={ { root:classes.searchIcon } }/>
        <Geosuggest types={searchTypes} 
                  inputClassName={classes.suggestInput}
                  suggestsClassName={classes.suggestList}
                  suggestsHiddenClassName={classes.suggestHiddenList}
                  renderSuggestItem = {(item) => this.renderSuggestItem(item,classes)}
                  suggestItemActiveClassName={classes.suggestActiveClass}
                  placeholder={t("common:searchBoxPlaceHolder")}
                  onSuggestSelect={onSuggestSelect}
                  initialValue={initialValue || ''}
                  onActivateSuggest={this.onActivateSuggest}
                  onUpdateSuggests = {this.onUpdateSuggests}
                  />
      </div>          
    )
  }
}

GoogleAutoComplete.propTypes = {
  searchTypes: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
  onSuggestSelect:PropTypes.func.isRequired,
  initialValue:PropTypes.string
}

export default withStyles(googleAutoCompleteStyle)(GoogleAutoComplete);