import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 6.3rem;
  padding: 1.8rem 4rem;

  background-color: #0f52ba;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const ButtonHeader = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem;

  border-radius: 0.5rem;

  font-size: 1.3rem;
  font-weight: 600;

  color: black;
  background-color: white;
`;

export const ContainerHeaderlogo = styled.div`
  display: flex;
  align-items: flex-end;

  color: white;
`;

export const TextLg = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`;
export const TextSm = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;
