import '../styles/globals.css'
import '@aws-amplify/ui-react/styles.css';
import Amplify, { AuthModeStrategyType } from 'aws-amplify'
import awsconfig from '../src/aws-exports'

Amplify.configure({
  ...awsconfig,
  DataStore: {
    authModeStrategy: AuthModeStrategyType.MULTI_AUTH
  }
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
