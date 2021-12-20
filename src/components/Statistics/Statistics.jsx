import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import { ListItems, Item } from './CSSStatistic';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total ? (
        <ListItems>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total}</Item>
          <Item>Positive feedback: {positivePercentage}%</Item>
        </ListItems>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
