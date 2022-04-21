 import Paginas from './routes';
 import "./App.scss";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import CartProvider from "./context/cart";


const App = () => {
  return (
    <>
      <CartProvider>
        <Paginas />
      </CartProvider>
    </>
  );
}
export default App;