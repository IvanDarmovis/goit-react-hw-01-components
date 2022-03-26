import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function color() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function Statistics({ title, stats }) {
  return (
    <div className={s.wrapper}>
      Second task
      <section className={s.statistics}>
        <h2 className={s.title}>{title}</h2>

        <ul className={s.statList}>
          {stats.map(el => (
            <li
              className={s.item}
              key={el.id}
              style={{ backgroundColor: color() }}
            >
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
