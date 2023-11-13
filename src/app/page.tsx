"use client";
import { useProductsQuery } from "@/hook/useProduct";
import { CardProduct, IProduct } from "./components/Card";
import { Drawer } from "./components/Cart";
import { ContainerCards, ContainerHome } from "./style";
import { useEffect, useState } from "react";

export default function Home() {
  const [procutsArray, setPocutsArray] = useState<IProduct[]>([]);
  const { data: products } = useProductsQuery({
    page: 1,
    rows: 10,
    sortBy: "id",
    orderBy: "ASC",
  });

  useEffect(() => {
    if (products) {
      setPocutsArray(products);
    }
  }, [products]);

  console.log(procutsArray);
  return (
    <ContainerHome>
      <ContainerCards>
        {procutsArray?.map((item: IProduct) => {
          return <CardProduct key={item.id} {...item} />;
        })}
      </ContainerCards>
      <Drawer />
    </ContainerHome>
  );
}
