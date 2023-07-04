import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <div className={s.buttonStyleCommon}>
        {options.map((option, idx) => (
          <button
            className={s.button}
            type="button"
            value={option}
            key={idx}
            onClick={e => onLeaveFeedback(e)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }

  FeedbackOptions.defaultProps = {
    options: [],

  };
  FeedbackOptions.propTypes ={
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };