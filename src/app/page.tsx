"use client";
import { useState } from "react";
import { CardProduct } from "./components/Card";
import { Drawer } from "./components/Cart";
import { ContainerHome } from "./style";
import { useGlobalContext } from "@/context/store";

export default function Home() {
  const { 
    isDrawerOpen,
    handleDrawerClose 
  } = useGlobalContext();

  return (
    <ContainerHome>
      <CardProduct />
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
        <p>This is the content inside the Drawer.</p>
        <button onClick={handleDrawerClose}>Close Drawer</button>
      </Drawer>
    </ContainerHome>
  );
}
