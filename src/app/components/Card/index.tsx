import Image from "next/image";
import {
    ButtonTextCard,
    ContainerCardDescription,
    ContainerCardItem,
    ContainerCardPrice,
    ContainerCardTitle
} from "./style";

export const CardProduct = () => {
  return (
    <ContainerCardItem>
      <Image
        src="/items/apple-watch.jpg"
        alt="Apple Watch"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          height: "auto",
          width: "auto",
          minHeight: "70%",
          minWidth: "70%",
        }}
      />
      <ContainerCardTitle>
        <p>Apple Watch Series 4 GPS</p>
        <ContainerCardPrice>
          <p>R$ 399</p>
        </ContainerCardPrice>
      </ContainerCardTitle>
      <ContainerCardDescription>
        Redesigned from scratch and completely revised.
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
