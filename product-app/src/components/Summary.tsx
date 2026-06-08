import type { BasketItem } from "../type/product";
import { calculateSummary } from "../util/offers";

type SummaryProps = {
  items: BasketItem[];
};

const Summary = ({ items }: SummaryProps) => {
  const { subtotal, totalSavings, finalTotal } = calculateSummary(items);

  return (
    <div className="mt-8 pt-6">
      <div className="flex justify-between mb-5 font-semibold">
        <p>Sub Total:</p>

        <p>£{subtotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between mb-5 font-semibold">
        <p>Savings:</p>

        <p>£{totalSavings.toFixed(2)}</p>
      </div>

      <div className="flex justify-between font-semibold">
        <p>Total Amount:</p>

        <p>£{finalTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Summary;
