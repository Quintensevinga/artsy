import Header from "../components/header/header";
import Classics from "../components/classics/classics";
import FirstOrderDiscount from "../components/firstOrderDiscount/firstOrderDiscount";

function HomePage() {
  return (
    <div>
      <Header />
      <Classics />
      <FirstOrderDiscount />
    </div>
  )
}

export default HomePage;