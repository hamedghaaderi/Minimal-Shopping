const IsLoading = () => {
  return (
    <>
      <div className="bg-transparent backdrop-blur-sm bg-opacity-25 w-screen fixed left-0 top-0 z-30 h-screen flex items-center justify-center">
        <div className="bg-back p-8 rounded-xl flex flex-col items-center">
          <div className="font-outfit text-orange text-4xl font-medium">
            Minimal <span className="text-red">Shop</span>ping
          </div>
          <div className="flex flex-row mt-7">
            <div className="bg-orange rounded-percent h-3 w-3 animate-loading"></div>
            <div className="bg-orange rounded-percent h-3 w-3 ml-2 animate-loading1"></div>
            <div className="bg-orange rounded-percent h-3 w-3 ml-2 animate-loading2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsLoading;
