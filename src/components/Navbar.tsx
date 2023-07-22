import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp'

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} alt="GameHub Logo" boxSize={'60px'} />
      <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar