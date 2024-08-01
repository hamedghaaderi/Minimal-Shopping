import useProducts from "../hook/products";
import IsError from "./iserror";
import Isloading from "./isloading";
import ProductItem from "./productitem";
interface IProduct {
  id: number;
  name: string;
  price: number;
  rate: number;
  quality: string;
  kind: string;
  imageURL: string;
}

const Products = () => {
  const { isError, isLoading, data } = useProducts();

  return (
    <>
      <section className={isLoading || isError ? "h-remain pt-12" : "pt-16 pb-8 grid grid-rows-2rows grid-cols-4cols gap-32px"}>
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
                src={product.imageURL}
              />
            );
          })}
      </section>
    </>
  );
};

export default Products;
