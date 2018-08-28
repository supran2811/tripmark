import React , { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from "prop-types";
import Geosuggest from 'react-geosuggest';
import Search from '@material-ui/icons/Search';
import LocationCity from '@material-ui/icons/LocationCity';

import googleAutoCompleteStyle from './googleAutoCompleteStyle';

class GoogleAutoComplete extends Component {

  renderSuggestItem(item,classes) {
    console.log("Inside renderSuggestItem",item);
    return (
      <div className = {classes.suggestItemClassName}>
          <LocationCity color='primary' /> <span className={classes.label}>{item.label}</span>
      </div>
    );
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
                  placeholder={t("common:searchBoxPlaceHolder")}
                  onSuggestSelect={onSuggestSelect}
                  initialValue={initialValue || ''}/>
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