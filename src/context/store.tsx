"use client";
import { IProduct } from "@/app/components/Card";
import { ReactNode, createContext, useContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface IContextProps {
  isDrawerOpen: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productName: string) => void;
  getTotalPrice: () => number;
}

interface IReactProps {
  children: ReactNode;
}

const GlobalContext = createContext<IContextProps>({
  cart: [],
  isDrawerOpen: false,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
  addToCart: (product: IProduct) => {},
  removeFromCart: (productName: string) => {},
  getTotalPrice: () => 0,
});

const queryClient = new QueryClient();

export const GlobalContextProvider = ({ children }: IReactProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const addToCart = (product: IProduct) => {
    const newItem: IProduct = {
      ...product,
      quantity: 1,
    };

    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (productName: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  const getTotalPrice = (): number => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * (item.quantity || 1),
      0
    );
  };

  const contextValues: IContextProps = {
    cart,
    isDrawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
    addToCart,
    removeFromCart,
    getTotalPrice,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={contextValues}>
        {children}
      </GlobalContext.Provider>
    </QueryClientProvider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
