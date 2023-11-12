import { ReactNode } from "react";
import { DrawerContainer } from "./style";

interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Drawer = ({ isOpen, onClose, children }: IDrawerProps) => {
  return (
    <DrawerContainer isOpen={isOpen}>
            {children}
    </DrawerContainer>
    );
};
