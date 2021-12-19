import React from 'react';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        const feedback = () => leaveFeedback(option);
        return (
          <li key={option}>
            <button type="button" onClick={feedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default FeedbackOptions;
