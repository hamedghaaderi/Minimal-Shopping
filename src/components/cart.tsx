import useBasket from "../store/basket";
import CartItem from "./cartitem";
import CloseIcon from "./icons/closeicon";

interface ICart {
  onClose: () => void;
  open: boolean;
}
interface IProduct {
  id: number;
  name: string;
  price: number;
  rate: number;
  quality: string;
  kind: string;
  imageURL: string;
  quantity: number;
}

const Cart = ({ open, onClose }: ICart) => {
  const { products, invoice } = useBasket((state: any) => state);
  open && (document.body.style.overflow = "hidden");
  let total = 0;
  products.map((_product: any) => {
    return (total += _product.quantity);
  });
  return (
    <>
      <div className="bg-transparent backdrop-blur-sm bg-opacity-25 w-screen fixed top-0 z-30 h-screen flex justify-center items-center">
        <div className="bg-white w-fit h-fit p-3 flex flex-col items-center justify-between rounded-2xl">
          <button
            className="rounded-percent p-3 bg-back h-fit w-fit self-end"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
          <div className="flex flex-row justify-between items-center mt-3">
            <div className="rounded-xl h-cart border border-gray w-3/5 mr-7 p-6">
              <h5 className="font-outfit text-gray text-2xl mb-4">
                Cart Details
              </h5>
              <div className="overflow-scroll h-cartdetail">
                {products.map((_product: IProduct) => {
                  return (
                    <CartItem
                      key={_product.id}
                      name={_product.name}
                      price={_product.price}
                      rate={_product.rate}
                      quality={_product.quality}
                      kind={_product.kind}
                      src={_product.imageURL}
                      quantity={_product.quantity}
                    />
                  );
                })}
              </div>
            </div>
            <div className=" rounded-xl h-cart border border-gray w-2/5 p-6">
              <h5 className="font-outfit text-gray text-2xl mb-4">
                Order Summary
              </h5>
              <div className="flex flex-col items-start justify-between">
                <div>
                    <span>Products added</span>
                    <span>{total}</span>
                </div>
                <div>
                    <span>Total Price</span>
                    <span>{invoice.totalPrice}</span>
                </div>
                <div>
                    <span>Total Discount <span>{"(7.5%)"}</span></span>
                    <span>{invoice.totalDiscount}</span>
                </div>
                <div>
                    <span>Total Price With Discount</span>
                    <span>{invoice.totalPrice - invoice.totalDiscount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
