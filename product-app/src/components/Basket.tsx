import { useDispatch, useSelector } from "react-redux";

import { increaseQuantity, decreaseQuantity } from "../store/basketSlice";

import { calculateItemSavings } from "../Utils/offers";

import Summary from "./Summary";

const Basket = () => {
  const dispatch: any = useDispatch();

  const items = useSelector((state: any) => state.basket.items);

  return (
    <div>
      <h1 className="text-4xl font-semibold border-b border-gray-300">
        Basket
      </h1>

      {items.map((item: any, index: number) => {
        const savings = calculateItemSavings(item, items);

        const itemTotal = item.price * item.quantity;

        const finalItemCost = itemTotal - savings;

        return (
          <div key={index} className="border-b border-gray-300 py-6">
            {/* TOP ROW */}
            <div className="flex justify-between items-center">
              {/* Product Name */}
              <p className="text-xl font-medium">{item.name}</p>

              {/* Right Side */}
              <div className="flex items-center gap-40">
                {/* Price */}
                <p className="font-medium">
                  <span className="text-gray-400"> £</span>
                  {item.price.toFixed(2)}
                </p>

                {/* Quantity Buttons */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="bg-blue-400 text-white w-7 h-10 rounded text-xl"
                  >
                    +
                  </button>

                  <span className="text-lg font-medium">{item.quantity}</span>

                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="border border-blue-400 text-blue-400 w-7 h-10 rounded text-xl"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>

            {/* Item Price */}
            <div className="mt-4 text-right text-gray-500 border-b border-gray-300">
              <p className="text-lg">
                Item price £{item.price.toFixed(2)}* {item.quantity}= £
                {itemTotal.toFixed(2)}
              </p>
            </div>

            {/* Savings */}
            {savings > 0 && (
              <div className="mt-3 text-right border-b border-gray-300">
                <p className="text-red-500 text-xl">
                  Savings £{savings.toFixed(2)}
                </p>
              </div>
            )}

            {/* Final Item Cost */}
            <div className="mt-3 text-right">
              <p className=" font-medium">
                Item cost £{finalItemCost.toFixed(2)}
              </p>
            </div>
          </div>
        );
      })}

      <Summary items={items} />
    </div>
  );
};

export default Basket;
