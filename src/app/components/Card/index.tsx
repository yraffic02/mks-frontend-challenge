import Image from "next/image";
import {
    ButtonTextCard,
    ContainerCardDescription,
    ContainerCardItem,
    ContainerCardPrice,
    ContainerCardTitle
} from "./style";
import { useGlobalContext } from "@/context/store";

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

export const CardProduct = ({
  id,
  name, 
  description,
  photo,
  price
}: IProduct) => {
  const { addToCart } = useGlobalContext();

  const handleBuyClick = () => {
    addToCart({
      id,
      name,
      description,
      photo,
      price,
      brand: "",
    });
  };

  return (
    <ContainerCardItem>
      <Image
        src={photo}
        alt="Apple Watch"
        width={0}
        height={0}
        sizes="10vw"
        style={{
          height: "auto",
          width: "auto",
          minHeight: "50%",
          minWidth: "50%",
        }}
      />
      <ContainerCardTitle>
        <p>{name}</p>
        <ContainerCardPrice>
          <p>R$ {Number(price).toFixed(0)}</p>
        </ContainerCardPrice>
      </ContainerCardTitle>
      <ContainerCardDescription>
        {description}
      </ContainerCardDescription>
    
        <ButtonTextCard
          onClick={handleBuyClick}
        >
          <Image
            src="/shopping-bag.svg"
            alt="shopping bag"
            width={12}
            height={12}
          />
            <p>COMPRAR</p>
        </ButtonTextCard>

    </ContainerCardItem>
  );
};
