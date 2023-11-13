import Image from "next/image";
import { CardCartBody, CardCartContainer, CardCartPrice, CardCartQtdProduct, CardCartText, CardCartTitle } from "./style";

export const CardCartProduct = () => {
  return (
    <CardCartContainer>
      <Image
        src="/items/apple-watch.jpg"
        alt="Apple Watch"
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
      <CardCartTitle>Apple Watch Series 4 GPS</CardCartTitle>
      <CardCartBody>
        <CardCartText>Qtd:</CardCartText>
        <CardCartQtdProduct>
            <p>-</p>
            <p>1</p>
            <p>+</p>
        </CardCartQtdProduct>
      </CardCartBody>
      <CardCartPrice>
        R$399
      </CardCartPrice>
    </CardCartContainer>
  );
};
