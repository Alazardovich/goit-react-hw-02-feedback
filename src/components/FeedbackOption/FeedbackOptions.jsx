import React from 'react';
import PropTypes from 'prop-types';
import { OptionsList, ListItem, Button } from './CSSFeedback';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => {
        const feedback = () => leaveFeedback(option);
        return (
          <ListItem key={option}>
            <Button type="button" onClick={feedback}>
              {option}
            </Button>
          </ListItem>
        );
      })}
    </OptionsList>
  );
};
FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
export default FeedbackOptions;
