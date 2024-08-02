import { useState } from "react";
import StarIcon from "./icons/staricon";
import { createPortal } from "react-dom";
import SingleProduct from "./singleproduct";

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

  return (
    <>
      <div className="inline-block mb-8">
        <div>
          <img
            src={src}
            alt="Product"
            width="320"
            height="320"
            className="rounded-2xl"
            onClick={() => setShowModal(true)}
          />
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
