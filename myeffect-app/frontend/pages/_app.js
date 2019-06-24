<<<<<<< HEAD
import React from 'react'
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import {makeStore} from "../components/store";
import Page from '../components/Page';
import store from '../store'

export default withRedux(makeStore, {debug: true})(class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <ConnectedLayout>
                        <Component {...pageProps} />
                    </ConnectedLayout>
                </Provider>
            </Container>
        );
    }

});





// import App, { Container } from 'next/app';
// import Page from '../components/Page';
// import { Provider } from 'react-redux'
// import store from '../store'

// class MyApp extends App {
//    static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};
//     if(Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }
//     pageProps.query = ctx.query;
//     return { pageProps };
//   }
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Provider store={store}>
//         <Container>
//             <Page>
//               <Component {...pageProps}/>
//             </Page>
//         </Container>
//       </Provider>
//     );
//   }
// }
// export default MyApp;
=======
import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
>>>>>>> a63b3bf2f15465c4bedc86ef6b05e034bec36785
