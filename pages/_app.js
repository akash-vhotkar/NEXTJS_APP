import '../styles/globals.css'
import Layout from '../components/Layout';
import '../styles/style.css'
import {Provider} from 'react-redux';
import store from '../store/index';

import { Provider as ReduxQueryProvider } from 'redux-query-react';

export const getQueries = state => state.queries;

function MyApp({ Component, pageProps }) {
  return (
  
    <Provider store={store}>
    <ReduxQueryProvider queriesSelector={getQueries}>
    <Layout>
       <Component {...pageProps} />     
    </Layout>
    </ReduxQueryProvider>
    </Provider>
   
  )
  
}

export default MyApp
