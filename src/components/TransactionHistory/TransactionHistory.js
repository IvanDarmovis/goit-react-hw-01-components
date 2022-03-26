import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function correctText(str) {
  return str[0].toUpperCase() + str.slice(1);
}

let i = 0;
function TransactionHistory({ items }) {
  return (
    <div className={s.wrapper}>
      Third task
      <table className={s.history}>
        <thead>
          <tr className={s.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={s.body}>
          {items.map(el => {
            const cls = i ? 'even' : 'odd';
            const result = (
              <tr key={el.id} className={s[cls]}>
                <td>{correctText(el.type)}</td>
                <td>{el.amount}</td>
                <td>{el.currency}</td>
              </tr>
            );
            i = i === 0 ? 1 : 0;
            return result;
          })}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default TransactionHistory;
