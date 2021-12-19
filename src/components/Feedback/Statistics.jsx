import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default Statistics;
