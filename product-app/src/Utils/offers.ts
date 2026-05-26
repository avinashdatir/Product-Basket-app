export const calculateItemSavings = (
  item: any,
  items: any[]
) => {

  
  if (item.name === "Cheese") {

    const freeCheese = Math.floor(
      item.quantity / 2
    );

    return freeCheese * item.price;
  }

  
  if (item.name === "Bread") {

    const soupItem = items.find(
      (product: any) =>
        product.name === "Soup"
    );

    if (soupItem) {

      const eligibleBread = Math.min(
        soupItem.quantity,
        item.quantity
      );

      return eligibleBread *
        (item.price / 2);
    }
  }

  
  if (item.name === "Butter") {

    return (
      item.quantity *
      (item.price / 3)
    );
  }

  return 0;
};