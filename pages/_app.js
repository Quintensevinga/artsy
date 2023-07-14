import '../styles/global.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import FirstOrderDiscount from '../components/firstOrderDiscount/firstOrderDiscount';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <FirstOrderDiscount />
      <Footer />
    </div>
  )
}

export default MyApp;