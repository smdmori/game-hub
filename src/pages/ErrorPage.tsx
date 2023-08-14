import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Navbar from "../components/Navbar"

const ErrorPage = () => {
  const error = useRouteError()

  return (<>
    <Navbar />
    <Box textAlign={'center'}>
      <Heading>OOps</Heading>
      <Text fontSize={'2xl'}>{isRouteErrorResponse(error) ? 'The page is invalid' : 'Unexpected Error'}</Text>
    </Box>
  </>
  )
}

export default ErrorPage