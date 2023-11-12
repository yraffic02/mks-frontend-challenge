'use client'
import Image from "next/image"
import { ButtonHeader, ContainerHeader } from "./style"
import { useGlobalContext } from "@/context/store"

export const Header = () =>{
    const {handleDrawerOpen} = useGlobalContext()
    return(
        <ContainerHeader>
                <h1>oi</h1>
                <ButtonHeader
                    onClick={handleDrawerOpen}
                >
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