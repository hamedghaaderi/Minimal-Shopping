import baseUrl from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return baseUrl.get("/products").then((res) => res);
    },
  });
  return { isError, isLoading, data };
};

export default useProducts;
