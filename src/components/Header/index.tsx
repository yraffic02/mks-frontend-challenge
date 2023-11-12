'use client'
import Image from "next/image"
import { ButtonHeader, ContainerHeader } from "./style"

export const Header = () =>{
    return(
        <ContainerHeader>
                <h1>oi</h1>
                <ButtonHeader>
                    <Image 
                        src='/cart.svg'
                        height={18}
                        width={18}
                        alt="carrinhop de compras"
                    />
                    0
                </ButtonHeader>
        </ContainerHeader>
    )
}