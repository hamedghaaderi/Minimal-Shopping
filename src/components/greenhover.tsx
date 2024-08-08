import TickIcon from "./icons/tickicon";

const GreenHover = () => {
  return (
    <>
      <div className="w-80 h-80 rounded-xl bg-green flex justify-center items-center pointer-events-none absolute top-0 right-0">
        <div className="rounded-percent bg-white">
          <TickIcon />
        </div>
      </div>
    </>
  );
};

export default GreenHover;
