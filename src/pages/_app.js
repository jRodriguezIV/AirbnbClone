import '<clone>/styles/globals.css'
import 'styles2/global.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'


const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: 'z-50',
  delay: 100,
})

console.log(progress.start)

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
