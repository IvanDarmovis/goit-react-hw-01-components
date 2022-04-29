import Profile from './Profile/Profile';
import Statistic from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import FriendList from './FriendList/FriendList';
import user from './user.json';
import data from './data.json';
import transaction from './transaction.json';
import friends from './friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <TransactionHistory items={transaction} />
      <FriendList friends={friends} />
    </div>
  );
};
