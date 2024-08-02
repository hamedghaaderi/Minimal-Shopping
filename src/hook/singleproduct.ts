import baseUrl from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useSingleProduct = (id: number) => {
  const { isError, isLoading, data } = useQuery({
    queryKey: [id],
    queryFn: () => {
      return baseUrl.get(`/products/${id}`).then((res) => res);
    },
    gcTime: 6000
  });
  return { isError, isLoading, data };
};

export default useSingleProduct;
