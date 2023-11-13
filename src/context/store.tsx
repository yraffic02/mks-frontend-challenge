'use client'
import { apiMks } from "@/lib/Api/mksApi";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider } from 'react-query';

interface IContextProps {
  isDrawerOpen: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

interface IReactProps {
  children: ReactNode;
}

const GlobalContext = createContext<IContextProps>({
  isDrawerOpen: false,
  handleDrawerOpen: () => {},
  handleDrawerClose: () => {},
});

const queryClient = new QueryClient();

export const GlobalContextProvider = ({ children } : IReactProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const contextValues: IContextProps = {
    isDrawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
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