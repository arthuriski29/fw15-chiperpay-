import '../assets/styles/globals.css'
import {Nunito_Sans} from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/redux/store'
 
const nunitoSans = Nunito_Sans({subsets: ['latin']})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <style jsx global>{`
        html {
          font-family: ${nunitoSans.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
