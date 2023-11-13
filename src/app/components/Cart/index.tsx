import { CardCartProduct, ICartProduct } from "./components";
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
  const { isDrawerOpen, handleDrawerClose, cart, getTotalPrice } = useGlobalContext();

  return (
    <DrawerContainer isOpen={isDrawerOpen}>
      <DrawerHeaderContainer>
        <DrawerTitle>Carrinho de compras</DrawerTitle>
        <DrawerButtonClose onClick={handleDrawerClose}>X</DrawerButtonClose>
      </DrawerHeaderContainer>
      <DrawerBody>
        {
         cart.map((item)=>{
          return(
            <CardCartProduct
             key={item.id}
              {...item}
            />
          )
         })
        }
      <DrawerFooter>
        <DrawerTotalPrice>
          <p>Total:</p>
          <p>R${getTotalPrice()}</p>
        </DrawerTotalPrice>
        <DrawerButtonFinish>Finalizar Compra</DrawerButtonFinish>
      </DrawerFooter>
      </DrawerBody>
    </DrawerContainer>
  );
};
