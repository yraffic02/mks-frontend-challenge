import styled from "styled-components";

export const CardCartContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;

  padding: 1.5rem;

  background-color: white;
  color: black;
  box-shadow: -2px 2px 10px 0px #0000000d;
  border-radius: 0.5rem;
`;

export const CardCartTitle = styled.h2`
  font-size: 0.8rem;
  font-weight: 400;
`;

export const CardCartBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
`;

export const CardCartText = styled.p`
  font-size: 0.5rem;
`;

export const CardCartQtdProduct = styled.div`
  width: 3.12rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border: 0.3px solid #bfbfbf;
  border-radius: 0.2rem;

  font-size: 0.5rem;
  font-weight: 400;

  padding: 0.2rem;
`;

export const CardCartPrice = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  font-weight: 700;

  color: black;
`;
