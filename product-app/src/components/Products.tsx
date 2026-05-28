import { useDispatch, useSelector } from "react-redux";
import { products } from "../data/products";
import { addItem } from "../store/basketSlice";
import type { RootState } from "../store/store";
import type { BasketItem } from "../type/product";

const Products = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.basket.items);

  return (
    <div>
      <h1 className="text-4xl font-semibold border-b border-gray-200 pb-2">
        Products
      </h1>

      {products.map((product) => {
        const isAdded = items.find(
          (item: BasketItem) => item.id === product.id,
        );

        return (
          <div
            key={product.id}
            className="flex justify-between items-center border-b border-gray-200 py-5"
          >
            <p className="text-xl font-semibold">{product.name}</p>

            <div className="flex items-center gap-5 font-semibold">
              <p>
                <span className="text-gray-400 font-semibold">£</span>{" "}
                {product.price.toFixed(2)}
              </p>

              <button
                onClick={() => dispatch(addItem(product))}
                className={`px-4 py-2 rounded text-white transition-colors duration-200 ${
                  isAdded ? "bg-gray-400" : "bg-blue-400 hover:bg-blue-500"
                }`}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
