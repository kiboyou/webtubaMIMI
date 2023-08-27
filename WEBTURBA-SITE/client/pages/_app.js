import Layout from "@/layouts/Layout";
import "@/styles/index.scss";

import { Provider } from 'react-redux';
import store from '../reduxFiles/store'; // Chemin vers votre fichier store

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
          {
            Component.PageLayout ? (
              <Component {...pageProps} />
            ) : 
            <Layout >
              <Component {...pageProps} />
            </Layout>
          }
        </div>
    </Provider>
  );
}

export default MyApp;