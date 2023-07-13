import '../styles/global.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }) {
  // You can add layout components or global functionality here
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp;