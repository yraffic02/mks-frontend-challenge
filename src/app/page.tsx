"use client"
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
      <Drawer /> 
    </ContainerHome>
  );
}
