import { useState } from "react";
import Image from "next/image";
import {
  CardCartBody,
  CardCartContainer,
  CardCartPrice,
  CardCartQtdProduct,
  CardCartText,
  CardCartTitle,
} from "./style";
import { IProduct } from "../../Card";

export interface ICartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const CardCartProduct = ({
  id,
  name,
  price,
  photo,
}: IProduct) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <CardCartContainer>
      <Image
        src={photo}
        alt={name}
        width={0}
        height={0}
        sizes="60vw"
        style={{
          height: "auto",
          width: "auto",
          minHeight: "20%",
          minWidth: "20%",
        }}
      />
      <CardCartTitle>{name}</CardCartTitle>
      <CardCartBody>
        <CardCartText>Qtd:</CardCartText>
        <CardCartQtdProduct>
          <p onClick={decrementQuantity}>-</p>
          <p>{quantity}</p>
          <p onClick={incrementQuantity}>+</p>
        </CardCartQtdProduct>
      </CardCartBody>
      <CardCartPrice>R${Number(price) * quantity}</CardCartPrice>
    </CardCartContainer>
  );
};
