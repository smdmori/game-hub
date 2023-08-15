import { Box, Heading } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
  title: string
  children: ReactNode | ReactNode[]
}


const DefinitionItem = ({ title, children }: Props) => {
  return (
    <Box>
      <Heading
        as={'dt'}
        size={'md'}
        color={'gray.600'}
      >{title}</Heading>
      <dd>{children}</dd>
    </Box>
  )
}

export default DefinitionItem