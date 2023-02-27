import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // const { good, neutral, bad } = options;
  return (
    <div className={css.FeedbackOptions}>
      <button className={css.feedbackBtn} name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button
        className={css.feedbackBtn}
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button className={css.feedbackBtn} name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */
