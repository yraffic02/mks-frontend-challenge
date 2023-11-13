import styled from "styled-components"

export const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 40%;
  height: 100vh;
  background-color: #0F52BA;

  transition: right 0.3s ease-in-out;
  box-shadow: -5px 0px 6px 0px #00000021;
`

export const DrawerHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`

export const DrawerTitle = styled.h1`
  width: 50%;
  font-size: 1.6rem;
  font-weight: 700;

  color: white;
`

export const DrawerButtonClose = styled.button`
  all: unset;
  padding: 0.5rem;
  text-align: center;

  font-size: 1.5rem;
  font-weight: 400;

  background-color: black;
  color: white;
  border-radius: 50%;
`

export const DrawerBody = styled.div`
  width: 100%;
  height: 91%;

  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 1.4rem;

`

export const DrawerFooter = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`

export const DrawerTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2.9rem;

  color: white;

  font-size: 1.75rem;
  font-weight: 700;
`

export const DrawerButtonFinish = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.5rem;

  background-color: black;
  color: white;
`