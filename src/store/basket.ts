import { create } from "zustand";
import { IProduct, IProductQ } from "../types/interface";

const useBasket = create((set, get: () => any) => ({
  products: [],
  invoice: {
    totalPrice: 0,
    totalDiscount: 0,
  },
  action: {
    add: (product: IProduct) => {
      const alreadyExist: boolean = get().products.some(
        (_product: IProductQ) => _product.id === product.id
      );
      if (alreadyExist) {
        return set((oldBasket: any) => ({
          invoice: {
            totalPrice: oldBasket.invoice.totalPrice + product.price,
            totalDiscount:
              (oldBasket.invoice.totalPrice + product.price) * 0.075,
          },
          products: oldBasket.products.map((_product: IProductQ) => {
            if (_product.id === product.id) {
              return {
                ...product,
                quantity: _product.quantity + 1,
              };
            }
            return _product;
          }),
        }));
      }

      set((oldBasket: any) => ({
        invoice: {
          totalPrice: oldBasket.invoice.totalPrice + product.price,
          totalDiscount:
          (oldBasket.invoice.totalPrice + product.price) * 0.075,
        },
        products: [...oldBasket.products, { ...product, quantity: 1 }],
      }));
    },
    remove: (product: IProduct) => {
      const shouldRemove = get().products.some(
        (_product: IProductQ) => _product.quantity === 1 && _product.id === product.id
      );
      if (shouldRemove) {
        return set((oldBasket: any) => ({
          invoice: {
            totalPrice: oldBasket.invoice.totalPrice - product.price,
            totalDiscount:
            (oldBasket.invoice.totalPrice - product.price) * 0.075,
          },
          products: oldBasket.products.filter(
            (_product: IProductQ) => _product.id !== product.id
          ),
        }));
      }

      set((oldBasket: any) => ({
        invoice: {
          totalPrice: oldBasket.invoice.totalPrice - product.price,
          totalDiscount:
          (oldBasket.invoice.totalPrice - product.price) * 0.075,
        },
        products: oldBasket.products.map((_product: IProductQ) => {
          if (_product.id === product.id) {
            return {
              ...product,
              quantity: _product.quantity - 1,
            };
          }
          return _product;
        }),
      }));
    },
  },
}));
export default useBasket;
