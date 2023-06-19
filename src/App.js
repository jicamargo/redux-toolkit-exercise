import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { modalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <h1 className="loading">Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      {modalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
