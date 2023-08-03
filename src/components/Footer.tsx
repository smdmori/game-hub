import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react"
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <Box textAlign={"center"}>
      <Text>Made with ❤ By Morteza Samadi</Text>
      <Flex marginTop={2} justifyContent={"center"} alignItems={'center'} gap={2} >
        <Icon as={BsLinkedin} />
        <Link isExternal href="https://www.linkedin.com/in/morscoder/">@morscoder</Link>
      </Flex>
    </Box>
  )
}

export default Footer