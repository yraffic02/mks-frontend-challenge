"use client";
import { useProductsQuery } from "@/hook/useProduct";
import { CardProduct } from "./components/Card";
import { Drawer } from "./components/Cart";
import { ContainerHome } from "./style";

export default function Home() {
  const { data: products } = useProductsQuery({
    page: 1, 
    rows: 10, 
    sortBy: 'id', 
    orderBy: 'ASC', 
  });

  
  console.log(products)
  
  return (
    <ContainerHome>
      <CardProduct />
      <Drawer />
    </ContainerHome>
  );
}
