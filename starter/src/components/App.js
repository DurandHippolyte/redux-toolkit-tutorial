import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import Modal from "./Modal";
import { useEffect } from "react";
import { miseAjourDuPanier } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { openModal, closeModal } from "../features/modalSlice";

function App() {
   const dispatch = useDispatch();

   const cartItems = useSelector((store) => store.cartSliceStore.cartItems);
   const { isOpen } = useSelector((store) => store.modal);


   useEffect(() => {
      dispatch(miseAjourDuPanier());
   }, [cartItems]);

   return (
      <div>
         <h2>Redux Toolkit</h2>

         {isOpen && <Modal />}
         <Navbar />
         <CartContainer />
      </div>
   );
}
export default App;
