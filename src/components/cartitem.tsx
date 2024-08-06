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
  <div>{name}</div>
  </>
);
};

export default CartItem;
