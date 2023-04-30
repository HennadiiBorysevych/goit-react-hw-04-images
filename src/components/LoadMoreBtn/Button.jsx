import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={clsx('Button')} type="button">
      Load More
    </button>
  );
};
export default Button;

Button.propTypes= {
  onClick: PropTypes.func.isRequired,
}