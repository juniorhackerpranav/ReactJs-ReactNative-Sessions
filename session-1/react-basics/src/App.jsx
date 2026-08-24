import { electronics_products, stationery_products } from "./data";
import ProductSection from "./components/products/ProductSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
      {/* Navbar Component for applciation navbar */}
      {/* Using props to pass some properties/data to the component */}
      <Navbar title={"This title is passed via props"} />

      {/* Reusable Component */}
      {/* Here we are using the same component to show the list of data based on the type of data */}
      <ProductSection type={"Electronic products"} data={electronics_products} />
      <ProductSection type={"Stationary"} data={stationery_products} />

      {/* Footer Component for application footer */}
      <Footer />
    </div>
  )
}