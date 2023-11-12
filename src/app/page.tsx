'use client'
import { useState } from "react";
import { CardProduct } from "./components/Card";
import { Drawer } from "./components/Cart";
import { ContainerHome } from "./style";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  
  return (
    <ContainerHome>
      <CardProduct />
      <button onClick={handleDrawerOpen}>Open Drawer</button>
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
        {/* Content inside the Drawer */}
        <p>This is the content inside the Drawer.</p>
        <button onClick={handleDrawerClose}>Close Drawer</button>
      </Drawer>
    </ContainerHome>
  )
}
