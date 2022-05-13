import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../data/cartItems";

const initialState = {
   cartItems: cartItems,
   amount: 3,
   total: 0,
   isLoading: true,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      clearCart: (state) => {
         state.cartItems = [];
      },

      removeItem: (state, action) => {
         const itemID = action.payload;
         state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
      },

      increase: (state, action) => {
         // isolé l' id de notre payload : return un ID
         const itemID = action.payload;

         // on trouve l'id de l'item qu'on veut separer (comparaison avec id payload)
         // prend le tableau de state de base et compare l'id des items avec l'id passer
         // a la fonction :  return un Objet avec les 2 ID identique
         const pouette = state.cartItems.find((item) => item.id === itemID);

         // on increment de +1 la propriété amount de notre objet
         pouette.amount = pouette.amount + 1;
      },

      decrease: (state, action) => {
         const itemID = action.payload;
         const newObject = state.cartItems.find((item) => item.id === itemID);
         newObject.amount = newObject.amount - 1;
      },

      miseAjourDuPanier: (state) => {
         let numerOfArticle = 0;
         let totalPrice = 0;

         state.cartItems.forEach((item) => {
            numerOfArticle += item.amount;
            totalPrice += numerOfArticle * item.price;
         });
         state.amount = numerOfArticle;
         state.total = totalPrice;
      },
   },
});

export const { clearCart, removeItem, increase, decrease, miseAjourDuPanier } = cartSlice.actions;
export default cartSlice.reducer;
