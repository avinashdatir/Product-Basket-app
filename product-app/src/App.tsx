import Basket from "./components/Basket";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="flex gap-8 p-4 min-h-screen bg-gray-100 justify-center">
      <div className="w-2/8 bg-white p-4 border-b border-gray-200">
        <ProductList />
      </div>

      <div className="w-2/6 bg-white p-4 border border-gray-200">
        <Basket />
      </div>
    </div>
  );
};

export default App;
