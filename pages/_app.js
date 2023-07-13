import '../styles/global.css';
import Navbar from '../components/navbar/navbar';

function MyApp({ Component, pageProps }) {
  // You can add layout components or global functionality here
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;