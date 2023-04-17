import clsx from 'clsx';

const Button = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={clsx('Button')} type="submit">
      Load More
    </button>
  );
};
export default Button;
