'use client'
import { ReactNode, createContext, useContext, useState } from "react";

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
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);