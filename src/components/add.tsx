import useBasket from "../store/basket";

interface IAdd {
  product: any;
}

const Add = ({ product }: IAdd) => {
  const { add } = useBasket((state: any) => state.action);

  return (
    <button
      onClick={() => add(product)}
      className="px-3 py-2 rounded-xl text-white bg-orange text-base"
    >
      Add to cart
    </button>
  );
};

export default Add;
