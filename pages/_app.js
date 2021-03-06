import { Provider } from 'react-redux'
import { useStore } from '../src/store'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const { store, persistor } = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default App