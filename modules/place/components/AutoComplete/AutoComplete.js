import React , { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import deburr from 'lodash/deburr';
import MenuItem from '@material-ui/core/MenuItem';
import Autosuggest from 'react-autosuggest';
import PropTypes from "prop-types";

import autoCompleteStyle from './autoCompleteStyle';
import { TextField } from '@material-ui/core';

const defaultSuggestions  = [
  {
    label:'Art',
    value:'art'
  },
  {
    label:'Museum',
    value:'museum'
  },
  {
    label:'History',
    value:'history'
  },
  {
    label:'Food',
    value:'food'
  },
  {
    label:'Entertainment',
    value:'entertainment'
  }
];

class AutoComplete extends Component {

   state = {
    value:'',
    suggestions:defaultSuggestions
  }

  componentDidUpdate() {

    const { suggestions } = this.props;

    console.log("AUTOCOMPLETE:: componentDidUpdate",suggestions);

    !_.isEmpty(suggestions)  
      && _.differenceWith(this.state.suggestions , suggestions  , _.isEqual).length > 0 
      && this.setState({suggestions:suggestions});
    
    _.isEmpty(suggestions) && 
                _.differenceWith(this.state.suggestions , defaultSuggestions  , _.isEqual).length > 0 && 
                  this.setState({suggestions:defaultSuggestions})  
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

    const suggestionText = this.getSuggestionText(suggestion);

    const matches = match(suggestionText, query);
    const parts = parse(suggestionText, matches);
  
    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
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
      </MenuItem>
    );
  }

  shouldRenderSuggestions = value => true;

  getSuggestionValue = (suggestion) => {

    console.log("getSuggestionValue",suggestion);

    this.props.suggestionClicked(suggestion);

    return '';
  }
  
  handleSuggestionsFetchRequested = ({ value, reason }) => {
    const inputValue = deburr(value.trim()).toLowerCase();
    (reason === 'input-changed') &&
                  this.props.fetchSuggestions(inputValue);

       
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: defaultSuggestions,
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue,
    });
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent:this.renderInputField,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue:this.getSuggestionValue,
      renderSuggestion:this.renderSuggestion,
      shouldRenderSuggestions:this.shouldRenderSuggestions
    };

    return  <div className={classes.root}><Autosuggest
              {...autosuggestProps}
              inputProps={{
                classes,
                placeholder: 'Where do you want to go?',
                value: this.state.value,
                onChange: this.handleChange('value'),
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
            /></div>
  }

  getSuggestionText = suggestion => {
    return suggestion.label || suggestion['structured_formatting']['main_text']
  }

}

AutoComplete.PropTypes = {
  translation:PropTypes.object.isRequired,
  fetchSuggestions:PropTypes.func.isRequired,
  suggestionClicked:PropTypes.func.isRequired,
  suggestions:PropTypes.array
}

export default withStyles(autoCompleteStyle)(AutoComplete);