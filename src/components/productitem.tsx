import { useState } from "react";
import StarIcon from "./icons/staricon";
import { createPortal } from "react-dom";
import SingleProduct from "./singleproduct";
import useBasket from "../store/basket";
import GreenHover from "./greenhover";
import GrayHover from "./grayhover";

interface IProductItem {
  name: string;
  price: number;
  rate: number;
  quality: string;
  kind: string;
  src: string;
  id: number;
}

const ProductItem = ({
  name,
  price,
  quality,
  rate,
  kind,
  src,
  id,
}: IProductItem) => {
  const [showModal, setShowModal] = useState(false);
  !showModal && (document.body.style.overflow = "visible");
  const [visible, setVisible] = useState(false);
  const { products } = useBasket((state: any) => state);
  const isExist: boolean = products.some(
    (_product: any) => _product.id === id
  );

  return (
    <>
      <div className="inline-block mb-8">
        <div className="relative">
          <img
            onMouseEnter={() => {
              setVisible(true);
            }}
            onMouseLeave={() => {
              setVisible(false);
            }}
            src={src}
            alt="Product"
            width="320"
            height="320"
            className="rounded-2xl cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          {visible && isExist && <GreenHover />}
          {visible && !isExist && <GrayHover />}
        </div>
        <div className="font-outfit relative mt-3">
          <div className="text-base text-gray">{name}</div>
          <div className="text-base text-gray">{kind}</div>
          <div className="text-gray2 text-sm">{quality}</div>
          <div className="flex flex-row justify-between items-baseline w-8">
            <span className="text-orange text-lg">{rate}</span>
            <StarIcon />
          </div>
          <span className="absolute top-0 right-0 text-xl text-gray">
            {price}$
          </span>
        </div>
      </div>
      {showModal &&
        createPortal(
          <SingleProduct
            id={id}
            open={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
};

export default ProductItem;
