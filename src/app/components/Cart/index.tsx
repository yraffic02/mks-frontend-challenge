import { ReactNode } from "react";
import { DrawerContainer } from "./style";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  }

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
    return <DrawerContainer isOpen={isOpen}>{children}</DrawerContainer>;
};