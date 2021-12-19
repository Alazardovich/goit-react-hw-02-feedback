import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        const feedback = () => leaveFeedback(option);
        return (
          <li key={option}>
            <button type="button" onClick={feedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
export default FeedbackOptions;
