import PropTypes from 'prop-types';
import { Text } from './CSSNotification';

const Notification = ({ message }) => <Text>{message}</Text>;

Notification.propTypes = { message: PropTypes.string.isRequired };
export default Notification;
