import useProducts from "../hook/products";
import { IProduct } from "../types/interface";
import IsError from "./iserror";
import Isloading from "./isloading";
import ProductItem from "./productitem";

const Products = () => {
  const { isError, isLoading, data } = useProducts();

  return (
    <>
      <section
        className={
          isLoading || isError
            ? "h-remain"
            : "pt-16 flex flex-wrap justify-between"
        }
      >
        {isLoading && <Isloading />}
        {isError && <IsError />}
        {data?.data &&
          data?.data.map((product: IProduct) => {
            return (
              <ProductItem
                key={product.id}
                name={product.name}
                price={product.price}
                rate={product.rate}
                quality={product.quality}
                kind={product.kind}
                imageURL={product.imageURL}
                id={product.id}
              />
            );
          })}
      </section>
    </>
  );
};

export default Products;
