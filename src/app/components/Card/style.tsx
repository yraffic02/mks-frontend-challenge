import styled from "styled-components"

export const ContainerCardItem = styled.div`
    width: 14rem;
    padding-top: 0.75rem;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 2rem;
    gap: 0.4rem;

    box-shadow: 0px 2px 8px 0px #00000022;
`
export const ContainerCardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.9rem;

    font-size: 1rem;
    font-weight: 400;
`
    
export const ContainerCardPrice = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.25rem 0.4rem;
    border-radius: 0.3rem;

    color: white;
    background-color: #373737;
    font-weight: 700;

    white-space: nowrap; 
`

export const ContainerCardDescription = styled.p`
    font-size: 0.6rem;
    font-weight: 300;
    color: #2C2C2C;
    padding: 0 0.9rem 0 0.9rem;
`  
export const ButtonTextCard = styled.button`
    all: unset;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    padding: 0.8rem 0;

    color: white;
    background-color: #0F52BA;

    font-size: 0.8rem;
    font-weight: 600;

    border-radius: 0 0 2rem 2rem;
`