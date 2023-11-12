import styled from "styled-components"

export const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 40%;
  height: 100%;
  background-color: #0F52BA;
  
  transition: right 0.3s ease-in-out;
  box-shadow: -5px 0px 6px 0px #00000021;
`;