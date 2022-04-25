import Tina from '../.tina/components/TinaDynamicProvider.js'
import '../styles/main.css';

  const App = ({ Component, pageProps }:{Component:any,pageProps:any}) => {
  return (
    <Tina>
        <Component {...pageProps} />
    </Tina>
  )
}
  
export default App
