import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../type/product";
import type { BasketItem } from "../type/product";

interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item: BasketItem) => item.id === action.payload.id,
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

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item: BasketItem) => item.id === action.payload,
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item: BasketItem) => item.id === action.payload,
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item: BasketItem) => item.id !== action.payload,
          );
        }
      }
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity } =
  basketSlice.actions;
export default basketSlice.reducer;
