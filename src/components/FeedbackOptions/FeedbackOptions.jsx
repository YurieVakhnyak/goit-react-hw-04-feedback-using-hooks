import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.FeedbackOptions}>
      <button
        className={css.feedbackBtn}
        name={options[0].toLowerCase()}
        onClick={onLeaveFeedback}
      >
        {options[0]}
      </button>
      <button
        className={css.feedbackBtn}
        name={options[1].toLowerCase()}
        onClick={onLeaveFeedback}
      >
        {options[1]}
      </button>
      <button
        className={css.feedbackBtn}
        name={options[2].toLowerCase()}
        onClick={onLeaveFeedback}
      >
        {options[2]}
      </button>
    </div>
  );
};

/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */
