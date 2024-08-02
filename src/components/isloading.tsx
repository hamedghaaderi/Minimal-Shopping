interface IIsLoading {
  style: string
}

const IsLoading = ({style}: IIsLoading) => {
  return (
    <>
      <div className={`mx-auto my-0 w-20 h-20 rounded-percent border-dotted border-8 border-orange animate-loading ${style}`}></div>
      <h5 className="text-center font-outfit mt-5 text-gray text-3xl">
        Loading ...
      </h5>
    </>
  );
};

export default IsLoading;
