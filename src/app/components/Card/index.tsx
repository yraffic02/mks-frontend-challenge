import Image from "next/image";
import {
    ButtonTextCard,
    ContainerCardDescription,
    ContainerCardItem,
    ContainerCardPrice,
    ContainerCardTitle
} from "./style";

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export const CardProduct = ({
  name, 
  description,
  photo,
  price
}: IProduct) => {
  return (
    <ContainerCardItem>
      <Image
        src={photo}
        alt="Apple Watch"
        width={0}
        height={0}
        sizes="30vw"
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
    
        <ButtonTextCard>
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
