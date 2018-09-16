import React , { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import deburr from 'lodash/deburr';
import MenuItem from '@material-ui/core/MenuItem';
import Autosuggest from 'react-autosuggest';
import PropTypes from "prop-types";
import AccountBalance from '@material-ui/icons/AccountBalance';
import LocationOn from '@material-ui/icons/LocationOn';
import _ from 'lodash';
import { TextField} from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import autoCompleteStyle from './autoCompleteStyle';
import { filterCategory } from '../../../../google/placesApi';
import Button from '../../../../components/CustomButtons';
import { List } from 'immutable';

class AutoComplete extends Component {

   state = {
    value:''
  }


  renderInputField = (inputProps) => {
    const { classes , inputRef = () => {}, ref, ...other } = inputProps;

    return <TextField 
                id="autoCompleteInput"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  inputRef: node => {
                    ref(node);
                    inputRef(node);
                  },
                  classes: {
                    root: classes.bootstrapRoot,
                    input:classes.bootstrapInput
                  }}} 
                  
                  {...other }/>
  }

   renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const { classes , suggestionClicked } = this.props;
    const suggestionText = this.getSuggestionText(suggestion);
    const type = suggestion['type'];
    const matches = match(suggestionText, query);
    const parts = parse(suggestionText, matches);
  
    return (
      <MenuItem divider selected={isHighlighted} 
                      component="div" 
                      classes={{ root:classes.menuItem}} 
                      >
       {
         suggestion.type !== 'category'?
         
         <a href= {`/place/${suggestion.place_id}`} 
              rel = "noopener" 
              className={classes.menuItemContent} 
              target="_blank"
             >
           <LocationOn />
           <div className={classes.menuItemBody}>
             <div className={classes.mainContent}>
               {parts.map((part, index) => {
                 return part.highlight ? (
                   <span key={String(index)} style={{ fontWeight: 500 }}>
                     {part.text}
                   </span>
                 ) : (
                   <strong key={String(index)} style={{ fontWeight: 300 }}>
                     {part.text}
                   </strong>
                 );
               })}
             </div>
             <div className={classes.secondaryContent}>
                 {this.getSuggestionSecondaryText(suggestion)}
             </div> 
           </div>
         </a>
         :
          <a className={classes.menuItemContent}>
           <AccountBalance />
            <div className={classes.menuItemBody}>
              <div className={classes.mainContent}>
                {parts.map((part, index) => {
                return part.highlight ? (
                  <span key={String(index)} style={{ fontWeight: 500 }}>
                    {part.text}
                  </span>
                ) : (
                  <strong key={String(index)} style={{ fontWeight: 300 }}>
                    {part.text}
                  </strong>
                );
              })}
              </div>
            </div>
          </a>
        
       }                 
       
      </MenuItem>
    );
  }

  shouldRenderSuggestions = value => true;

  getSuggestionValue = (suggestion) => {
    console.log("getSuggestionValue")
    return this.state.value;
  }
  
  handleSuggestionsFetchRequested = ({ value, reason }) => {
    console.log("handleSuggestionsFetchRequested",value,reason);
    const inputValue = deburr(value.trim()).toLowerCase();
    (reason === 'input-changed') && 
                  _.debounce( this.props.fetchSuggestions , 500 , {trailing : true})(inputValue);
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: filterCategory(),
    });
  };

  handleChange = name => (event, { newValue  , method }) => {
    console.log("handleChange",method);
    this.setState({
      [name]: newValue,
    });
  };

  render() {
    const { classes , suggestions , isLoading ,performSearch } = this.props;
    console.log("AutoComplete::: suggestions",suggestions);
    const autosuggestProps = {
      renderInputComponent:this.renderInputField,
      suggestions: suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue:this.getSuggestionValue,
      renderSuggestion:this.renderSuggestion,
      shouldRenderSuggestions:this.shouldRenderSuggestions,
      onSuggestionSelected:this.onSuggestionSelected
    };

    return  <div className={classes.autoComplete}>
              <Autosuggest
              {...autosuggestProps}
              inputProps={{
                classes,
                placeholder: 'Where do you want to go?',
                value: this.state.value,
                onChange: this.handleChange('value'),
                onKeyPress: e => e.key === 'Enter' && performSearch(e.target.value)
              }}
              theme={{
                container: classes.container,
                suggestionsContainerOpen: classes.suggestionsContainerOpen,
                suggestionsList: classes.suggestionsList,
                suggestion: classes.suggestion,
              }}
              renderSuggestionsContainer={options => (
                <Paper {...options.containerProps} square>
                  {options.children}
                </Paper>
              )}
            />
            <Button  className = {classes.buttonStye}
                       color="info" 
                       size = "lg"
                       loading={isLoading} 
                       justIcon
                       onClick={ () => performSearch(this.state.value)}
                       >
                  <Search classes={ { root : classes.iconStyle} } />
            </Button>
            </div>
  }

  getSuggestionText = suggestion => {
    return suggestion.label || suggestion['structured_formatting']['main_text']
  }

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    console.log("onSuggestionSelected",suggestion,window.location);
    if(method === 'enter' || method === 'click') {
      if(suggestion.type !== 'category') {
        window.open(`${window.location.origin}/place/${suggestion.place_id}`,"_blank");
      }
      else {
        this.setState({value:suggestion.label});
        this.props.performSearch(suggestion.label);
      }
    }
  }
  getSuggestionSecondaryText = suggestion => suggestion['structured_formatting'] ? suggestion['structured_formatting']['secondary_text']: "";
}

AutoComplete.propTypes = {
  translation:PropTypes.object.isRequired,
  fetchSuggestions:PropTypes.func.isRequired,
  performSearch:PropTypes.func.isRequired,
  suggestions:PropTypes.array
}

export default withStyles(autoCompleteStyle)(AutoComplete);