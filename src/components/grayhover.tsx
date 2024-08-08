import CartIcon from "./icons/carticon";

const GrayHover = () => {
  return (
    <>
      <div className="w-80 h-80 rounded-xl bg-gray2 flex justify-center items-center pointer-events-none absolute top-0 right-0">
        <div className="rounded-percent bg-white p-2">
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default GrayHover;
