import useBasket from "../store/basket";
import { IProductQ } from "../types/interface";
import CartItem from "./cartitem";
import CloseIcon from "./icons/closeicon";
import ShieldIcon from "./icons/shieldicon";
import TruckIcon from "./icons/truckicon";
import NoCart from "./nocart";

interface ICart {
  onClose: () => void;
  open: boolean;
}

const Cart = ({ open, onClose }: ICart) => {
  const { products, invoice } = useBasket((state: any) => state);
  open && (document.body.style.overflow = "hidden");
  let total = 0;
  products.map((_product: IProductQ) => {
    return (total += _product.quantity);
  });
  const handleClose = () => {
    document.getElementById("backdrop")?.classList.add("animate-opacityout");
    document
      .getElementById("container")
      ?.classList.add("animate-translateout2");
    setTimeout(() => {
      onClose();
    }, 280);
  };
  return (
    <>
      <div
        id="backdrop"
        className="bg-transparent backdrop-blur-sm bg-opacity-25 w-screen fixed top-0 z-30 h-screen flex items-center animate-opacityin"
      >
        <div
          id="container"
          className="bg-white h-fit p-6 pt-3 flex flex-col items-center justify-between w-9/12 absolute left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 font-outfit rounded-2xl animate-translatein2"
        >
          <button
            className="rounded-percent p-3 bg-back h-fit w-fit self-end transition-colors hover:bg-quantity"
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
          <div className="flex flex-row justify-between w-full items-center mt-3">
            <div className="rounded-xl h-cart border border-gray2 w-3/5 mr-7 p-6">
              <h5 className="font-outfit text-gray text-2xl font-medium mb-4">
                Cart Details
              </h5>
              {total === 0 && <NoCart />}
              {total !== 0 && (
                <div className="overflow-auto h-cartdetail">
                  {products.map((_product: IProductQ) => {
                    return (
                      <CartItem
                        key={_product.id}
                        name={_product.name}
                        price={_product.price}
                        rate={_product.rate}
                        quality={_product.quality}
                        kind={_product.kind}
                        imageURL={_product.imageURL}
                        quantity={_product.quantity}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <div className=" rounded-xl h-cart border border-gray2 font-medium w-2/5">
              <h5 className="font-outfit text-gray text-2xl mb-4 pt-6 px-6">
                Order Summary
              </h5>
              <div className="flex flex-col items-start justify-between px-6 pb-9">
                <div className="flex flex-col items-start justify-between mb-4">
                  <span className="text-base text-gray">Products added</span>
                  <span className="text-gray2 text-sm">{total}</span>
                </div>
                <div className="flex flex-col items-start justify-between mb-4">
                  <span className="text-base text-gray">Total Price</span>
                  <span className="text-gray2 text-sm">
                    {invoice.totalPrice}$
                  </span>
                </div>
                <div className="flex flex-col items-start justify-between mb-4">
                  <span className="text-base text-gray">
                    Total Discount{" "}
                    <span className="text-gray2 text-sm">{"(7.5%)"}</span>
                  </span>
                  <span className="text-gray2 text-sm">
                    {invoice.totalDiscount}$
                  </span>
                </div>
                <div className="flex flex-col items-start justify-between">
                  <span className="text-base text-gray">
                    Total Price With Discount
                  </span>
                  <span className="text-gray2 text-sm">
                    {invoice.totalPrice - invoice.totalDiscount}$
                  </span>
                </div>
              </div>
              <div className="bg-grayback p-6 rounded-b-xl">
                <div className="flex flex-row items-center justify-start mb-5">
                  <TruckIcon />
                  <div className="flex flex-col items-start justify-between ml-5">
                    <div className="text-gray text-base">Delivery Limit</div>
                    <div className="text-gray2 text-sm">
                      Free delivery within 50 km’s.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <ShieldIcon />
                  <div className="flex flex-col items-start justify-between ml-5">
                    <div className="text-gray text-base">Return Policy</div>
                    <div className="text-gray2 text-sm">
                      With-in 5days of product delivery.
                    </div>
                  </div>
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
