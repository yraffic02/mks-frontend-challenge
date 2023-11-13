'use client'
import Image from "next/image"
import { ButtonHeader, ContainerHeader, ContainerHeaderlogo, TextLg, TextSm } from "./style"
import { useGlobalContext } from "@/context/store"

export const Header = () =>{
    const {handleDrawerOpen} = useGlobalContext()
    return(
        <ContainerHeader>
                <ContainerHeaderlogo>
                    <TextLg>
                        MKS
                    </TextLg>
                    <TextSm>
                        Sistemas
                    </TextSm>
                </ContainerHeaderlogo>
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