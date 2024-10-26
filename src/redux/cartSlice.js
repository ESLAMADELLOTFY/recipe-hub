import { createSlice } from "@reduxjs/toolkit";

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalItems: 0,
    totalAmount: 0,
    deliverCharge: 10,
  },
  reducers: {
    addToCart(state, action) {
      const { id, quantity, price } = action.payload;
      const existingProduct = state.data.find((product) => product.id === id);

      if (existingProduct) {
        // Product already exists in the cart
        existingProduct.quantity += 1;
        existingProduct.totalPrice += quantity * price;
      } else {
        // Product doesn't exist in the cart
        state.data.push(action.payload);
      }
      storeInLocalStorage(state.data);
    },

    updateQuantity(state, action) {
      state.data = state.data.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity, totalPrice: product.price * action.payload.quantity }
          : product
      );
    },

    removeItem(state, action) {
      state.data = state.data.filter((product) => product.id !== action.payload.id);
      storeInLocalStorage(state.data);
    },

    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.data.length;
    },
  },
});

export const { addToCart, removeItem, getCartTotal, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
