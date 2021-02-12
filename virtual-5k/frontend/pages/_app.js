import PropTypes from 'prop-types';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
Layout.propTypes = {
  children: PropTypes.any,
};
