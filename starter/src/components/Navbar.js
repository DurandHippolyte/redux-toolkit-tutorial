import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../img/icons";

const Navbar = () => {
   const amount = useSelector((store) => store.cartSliceStore.amount);
   return (
      <nav>
         <div className="nav-center">
            <h3> redux Toolkit </h3>
            <div className="nav-container">
               <CartIcon />
               <div className="amount-container">
                  <p className="total-amount">{amount}</p>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
