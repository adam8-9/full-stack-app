import React from 'react'
import {Link, Text} from "@chakra-ui/react"


type MenuItemProps = {
    text: string,
    href:string
}

export const MenuItem:React.FC<MenuItemProps> = ({text,href})=>{
   return(
   <Text color='grey' fontSize='18px'>
    <Link href={href}>
        {text}
    </Link>
   </Text>
   )
}

