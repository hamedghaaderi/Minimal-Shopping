import logo from "../../public/image/logo.jpg";
import minimal from "../../public/image/Minimal Shopping.jpg";
import hero from "../../public/image/hero-section.jpg";
import Products from "../components/products";
import CartIcon2 from "../components/icons/carticon2";
import CartIcon3 from "../components/icons/carticon3";
import useBasket from "../store/basket";
import { useState } from "react";
import { createPortal } from "react-dom";
import Cart from "../components/cart";
import { IProductQ } from "../types/interface";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const { products, invoice } = useBasket((state: any) => state);
  !showModal && (document.body.style.overflow = "visible");
  let total = 0;
  products.map((_product: IProductQ) => {
    return (total += _product.quantity);
  });
  return (
    <>
      <header className="bg-back flex justify-between items-center sticky z-10 top-0 p-8">
        <div className="flex justify-between items-center w-21r">
          <img className="object-contain" src={logo} alt="Logo" />
          <img className="object-contain" src={minimal} alt="Minimal" />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="font-outfit text-gray text-base transition-all hover:bg-orange hover:text-white hover:px-3 hover:py-1 hover:rounded-lg focus:bg-orange focus:text-white focus:px-3 focus:py-1 focus:rounded-lg"
        >
          Cart
        </button>
      </header>
      <main className="bg-back px-8">
        <section>
          <img
            className="object-contain rounded-lg w-full"
            src={hero}
            alt="Hero"
          />
        </section>
        <Products />
      </main>
      {total !== 0 && (
        <div className="flex flex-row justify-between items-center px-8 bg-orange font-outfit py-4 sticky bottom-0">
          <div className="flex flex-row justify-between items-center">
            <CartIcon2 />
            <span className="text-xl text-white ml-2">
              {total} Items added to Cart
            </span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <CartIcon3 />
            <span className="text-xl text-white ml-2">
              {invoice.totalPrice - invoice.totalDiscount}${" "}
              <span className="ml-1 text-base">{"(With Discount)"}</span>
            </span>
          </div>
        </div>
      )}
      {showModal &&
        createPortal(
          <Cart open={showModal} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default HomePage;
