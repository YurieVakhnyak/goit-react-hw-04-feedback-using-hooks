import css from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <div className={css.Section}>
      <p className={css.feedbackTitle}>{title}</p>
      {children}
    </div>
  );
};
