import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <div className={s.wrapper}>
      Fourth task
      <ul className={s.list}>
        {friends.map(el => (
          <div className={s.element} key={el.id}>
            <FriendListItem
              avatar={el.avatar}
              name={el.name}
              isOnline={el.isOnline}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
