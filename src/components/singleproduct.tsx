import useSingleProduct from "../hook/singleproduct";
import CartIcon from "./icons/carticon";
import CloseIcon from "./icons/closeicon";
import StarIcon from "./icons/staricon";
import IsError from "./iserror";
import IsLoading from "./isloading";

interface ISingleProduct {
  onClose: () => void;
  id: number;
  open: boolean;
}
const SingleProduct = ({ onClose, id, open }: ISingleProduct) => {
  const { data, isError, isLoading } = useSingleProduct(id);
  open && (document.body.style.overflow = "hidden");
  const handleClose = () => {
    document.getElementById("backdrop")?.classList.add("animate-opacityout");
    document.getElementById("container")?.classList.add("animate-translateout");
    setTimeout(() => {
      onClose();
    }, 280);
  };

  return (
    <>
      <div
        className="bg-transparent backdrop-blur-sm bg-opacity-25 w-screen fixed top-0 z-30 h-screen flex items-center animate-opacityin"
        id="backdrop"
      >
        <div
          className="bg-white w-fit h-fit absolute right-5 flex flex-col p-3 rounded-xl animate-translatein"
          id="container"
        >
          <button
            className="rounded-percent p-3 bg-back h-fit w-fit self-end"
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
          {isLoading && <IsLoading style="mb-1" />}
          {isError && <IsError style="text-lg" />}
          {data?.data && (
            <div className="inline-block">
              <div>
                <img
                  src={data?.data.imageURL}
                  alt="Product"
                  width="320"
                  height="320"
                  className="rounded-2xl"
                />
              </div>
              <div className="font-outfit relative mt-3">
                <div className="text-base text-gray">{data?.data.name}</div>
                <div className="text-base text-gray">{data?.data.kind}</div>
                <div className="text-gray2 text-sm">{data?.data.quality}</div>
                <div className="flex flex-row justify-between items-baseline w-8">
                  <span className="text-orange text-lg">{data?.data.rate}</span>
                  <StarIcon />
                </div>
                <span className="absolute top-0 right-0 text-xl text-gray">
                  {data?.data.price}$
                </span>
              </div>
            </div>
          )}
          <div className="font-outfit flex flex-row items-center justify-between w-fit mb-6 mt-4">
            <button className="border rounded-md py-2 px-4 text-base mr-2 border-orange text-orange focus:text-white focus:bg-orange">
              S
            </button>
            <button className="border rounded-md py-2 px-4 text-base mr-2 border-orange text-orange focus:text-white focus:bg-orange">
              M
            </button>
            <button className="border rounded-md py-2 px-4 text-base mr-2 border-orange text-orange focus:text-white focus:bg-orange">
              L
            </button>
            <button className="border rounded-md py-2 px-3 text-base mr-2 border-orange text-orange focus:text-white focus:bg-orange">
              XL
            </button>
            <button className="border rounded-md p-2 text-base border-orange text-orange focus:text-white focus:bg-orange">
              XXL
            </button>
          </div>
          <div className="flex items-center font-outfit justify-between">
            <button className="px-3 py-2 rounded-xl text-white bg-orange text-base">
              Add to cart
            </button>
            <div className="flex flex-row justify-between items-center">
              <CartIcon />
              <span className="text-xl text-gray2 ml-2">56$</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
