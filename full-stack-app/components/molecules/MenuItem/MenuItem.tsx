import {Text} from "@chakra-ui/react"


type MenuItemProps = {
    children:React.ReactNode /* | string*/,
}

export const MenuItem:React.FC<MenuItemProps> = ({children})=>(
   <Text color='grey' fontSize='18px'>
    {children}
   </Text>
)

