import type { BasketItem } from "../type/product";

type SummaryProps = {
  items: BasketItem[];
};

const Summary = ({ items }: SummaryProps) => {
  const subtotal = items.reduce((total: number, item: BasketItem) => {
    return total + item.price * item.quantity;
  }, 0);

  let totalSavings = 0;

  const cheeseItem = items.find((item: BasketItem) => item.name === "Cheese");

  if (cheeseItem) {
    const freeCheese = Math.floor(cheeseItem.quantity / 2);

    totalSavings += freeCheese * cheeseItem.price;
  }

  const soupItem = items.find((item: BasketItem) => item.name === "Soup");
  const breadItem = items.find((item: BasketItem) => item.name === "Bread");

  if (soupItem && breadItem) {
    const eligibleBread = Math.min(soupItem.quantity, breadItem.quantity);

    totalSavings += eligibleBread * (breadItem.price / 2);
  }
  const butterItem = items.find((item: BasketItem) => item.name === "Butter");

  if (butterItem) {
    totalSavings += butterItem.quantity * (butterItem.price / 3);
  }
  const finalTotal = subtotal - totalSavings;

  return (
    <div className="mt-8 pt-6">
      <div className="flex justify-between mb-5 text-1xl font-semibold text-right">
        <p>Sub Total:</p>

        <p className="font-medium">£{subtotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between mb-5 text-1xl font font-semibold">
        <p>Savings:</p>

        <p className="font-semibold text-right">£{totalSavings.toFixed(2)}</p>
      </div>

      <div className="flex justify-between text-1xl font-semibold text-right">
        <p>Total Amount:</p>

        <p className="font-semibold">£{finalTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Summary;
