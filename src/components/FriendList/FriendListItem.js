import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

let status = '';

function FriendListItem({ avatar, name, isOnline }) {
  status = isOnline ? 'online' : 'offline';
  return (
    <li className={s.item}>
      <span className={s[status]}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={name + '`s avatar'}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
