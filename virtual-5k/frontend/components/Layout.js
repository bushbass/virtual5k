import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <footer>im the layout componet footer</footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
