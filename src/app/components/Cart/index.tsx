import {
  DrawerBody,
  DrawerButtonClose,
  DrawerButtonFinish,
  DrawerContainer,
  DrawerFooter,
  DrawerHeaderContainer,
  DrawerTitle,
  DrawerTotalPrice,
} from "./style";
import { useGlobalContext } from "@/context/store";

export const Drawer = () => {
  const { isDrawerOpen, handleDrawerClose } = useGlobalContext();

  return (
    <DrawerContainer isOpen={isDrawerOpen}>
      <DrawerHeaderContainer>
        <DrawerTitle>Carrinho de compras</DrawerTitle>
        <DrawerButtonClose onClick={handleDrawerClose}>X</DrawerButtonClose>
      </DrawerHeaderContainer>
      <DrawerBody>

      <DrawerFooter>
        <DrawerTotalPrice>
          <p>Total:</p>
          <p>R$798</p>
        </DrawerTotalPrice>
        <DrawerButtonFinish>Finalizar Compra</DrawerButtonFinish>
      </DrawerFooter>
      </DrawerBody>
    </DrawerContainer>
  );
};
