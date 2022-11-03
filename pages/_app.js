import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
  <div  className="w-fit">
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </div>
  )
}

export default MyApp
