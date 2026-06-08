import type { BasketItem } from "../type/product";

export const calculateItemSavings = (item: BasketItem, items: BasketItem[]) => {
  // Cheese Offer
  if (item.name === "Cheese") {
    const freeCheese = Math.floor(item.quantity / 2);
    return freeCheese * item.price;
  }

  // Bread Offer
  if (item.name === "Bread") {
    const soupItem = items.find((product) => product.name === "Soup");

    if (soupItem) {
      const eligibleBread = Math.min(soupItem.quantity, item.quantity);

      return eligibleBread * (item.price / 2);
    }
  }

  // Butter Offer
  if (item.name === "Butter") {
    return item.quantity * (item.price / 3);
  }

  return 0;
};

export const calculateSummary = (items: BasketItem[]) => {
  // Subtotal
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Total Savings
  const totalSavings = items.reduce(
    (total, item) => total + calculateItemSavings(item, items),
    0,
  );

  // Final Total
  const finalTotal = subtotal - totalSavings;

  return {
    subtotal,
    totalSavings,
    finalTotal,
  };
};
