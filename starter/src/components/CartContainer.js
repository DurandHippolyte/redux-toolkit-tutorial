import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import CartItem from "./CartItem";

import { openModal } from "../features/modalSlice";

const CartContainer = () => {
   const dispatch = useDispatch();

   // contient un tableau d'objet
   const cartItems = useSelector((store) => store.cartSliceStore.cartItems);

   const { amount, total } = useSelector((state) => state.cartSliceStore);

   if (amount < 1) {
      return (
         <section className="cart">
            <header>
               <h2>your bag</h2>
               <h4 className="empty-cart"> is currently empty</h4>
            </header>
         </section>
      );
   } else {
      return (
         <section className="cart">
            <header>
               <h2>your bag</h2>
            </header>
            <div>
               {cartItems.map((item) => {
                  return (
                     <CartItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        img={item.img}
                        amount={item.amount}
                        id={item.id}
                     />
                  );
               })}
            </div>
            <footer>
               <hr />
               <div className="cart-total">
                  <h4>
                     total <span> ${total} </span>
                  </h4>
               </div>
               <button
                  className="btn clear-btn"
                  onClick={() => {
                     dispatch(openModal());
                  }}
               >
                  clear cart
               </button>
            </footer>
         </section>
      );
   }
};

export default CartContainer;
