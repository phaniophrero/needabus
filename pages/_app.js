import globals from "../styles/globals.scss";
import Layout from "../components/layout/layout";
import { FbMessenger } from "../components/facebook/fb-messenger";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <FbMessenger />
    </Layout>
  );
}

export default MyApp;
