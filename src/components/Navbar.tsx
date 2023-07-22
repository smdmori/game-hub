import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
  return (
    <HStack justify={'space-between'} padding='10px'>
      <Image src={logo} alt="GameHub Logo" boxSize={'60px'} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar