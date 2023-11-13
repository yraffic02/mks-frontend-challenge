import styled from "styled-components";

export const CardCartContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  position: relative;

  padding: 1.5rem;

  background-color: white;
  color: black;
  box-shadow: -2px 2px 10px 0px #0000000d;
  border-radius: 0.5rem;

  @media (max-width: 560px){
    flex-direction: column;
  }
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

  @media (max-width: 560px){
    flex-direction: row;
  }
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

  @media (max-width: 560px){
    width: 6rem;
    font-size: 1.25rem;
  }
`;

export const CardCartPrice = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  font-weight: 700;

  color: black;

  @media (max-width: 560px){
    display: flex;
  justify-content: center;
  padding: 0.25rem 0.4rem;
  border-radius: 0.3rem;

  color: white;
  background-color: #373737;
  font-weight: 700;

  white-space: nowrap;
  }
`;

export const CardCartButtonClose = styled.button`
  all: unset;
  padding: 0.5rem;
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;

  background-color: black;
  color: white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
`
