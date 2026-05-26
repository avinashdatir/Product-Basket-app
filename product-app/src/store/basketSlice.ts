import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",

  initialState,

  reducers: {
    addItem: (state, action: any) => {
      const existingItem = state.items.find(
        (item: any) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    increaseQuantity: (state, action: any) => {
      const item = state.items.find((item: any) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: any) => {
      const item = state.items.find((item: any) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item: any) => item.id !== action.payload,
          );
        }
      }
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity } =
  basketSlice.actions;

export default basketSlice.reducer;
