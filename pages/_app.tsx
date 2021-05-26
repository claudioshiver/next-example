import { Provider } from "react-redux"
import {useStore} from "../src/modules/commons/store";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
