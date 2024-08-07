import useBasket from "../store/basket";
import RemoveIcon from "./icons/addicon";
import AddIcon from "./icons/removeicon";

interface IAdd {
  product: any;
}

const AddRemove = ({ product }: IAdd) => {
  const { add, remove } = useBasket((state: any) => state.action);
  const { products } = useBasket((state: any) => state);
  const item = products.find((_product: any) => _product.id === product.id);

  return (
    <div className="flex flex-row items-center justify-between rounded-xl border border-gray2">
      <button
        className="p-3 border-r border-r-gray2 rounded-l-xl transition-colors hover:bg-addremovehover"
        onClick={() => remove(product)}
      >
        <RemoveIcon />
      </button>
      <div className="font-outfit text-base text-gray2 px-3">
        {item.quantity}
      </div>
      <button
        className="p-3 border-l border-l-gray2 rounded-r-xl transition-colors hover:bg-addremovehover"
        onClick={() => add(product)}
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default AddRemove;
