import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div>
      <header> I'm the layout component header</header>
      <div>{children}</div>
      <footer>im the layout componet footer</footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
