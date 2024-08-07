import CartIcon from "./icons/carticon";
import StarIcon from "./icons/staricon";

interface ICartItem {
  name: string;
  price: number;
  rate: number;
  quality: string;
  kind: string;
  src: string;
  quantity: number;
}

const CartItem = ({
  name,
  price,
  quality,
  rate,
  kind,
  src,
  quantity,
}: ICartItem) => {
  return (
    <>
      <div className="flex flex-row justify-between mb-7 last:mb-0">
        <div className="flex flex-row">
          <div className="relative">
            <img
              src={src}
              alt="Product"
              height="93"
              width="96"
              className="rounded-2xl"
            />
            <div className="bg-quantity absolute bottom-0 right-0 translate-x-1/4 translate-y-1/2 px-3 z-10 py-1 text-orange text-lg w-fit h-fit rounded-percent">
              {quantity}
            </div>
          </div>
          <div className="ml-7">
            <div className="text-base text-gray">{name}</div>
            <div className="text-base text-gray">{kind}</div>
            <div className="text-gray2 text-sm">{quality}</div>
            <div className="flex flex-row justify-between items-baseline w-8">
              <span className="text-orange text-lg">{rate}</span>
              <StarIcon />
            </div>
          </div>
        </div>
        <div className="mr-7 flex flex-row">
          <CartIcon />
          <span className="ml-2 text-gray2 text-xl">{quantity * price}$</span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
