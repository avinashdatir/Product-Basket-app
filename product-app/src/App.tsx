import Basket from "./components/Basket";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="flex gap-8 p-4 min-h-screen bg-gray-100 justify-center">
      <div className="w-2/8 bg-white p-4 border-b border-gray-200">
        <Products />
      </div>

      <div className="w-2/6 bg-white p-4 border border-gray-200">
        <Basket />
      </div>
    </div>
  );
};

export default App;
