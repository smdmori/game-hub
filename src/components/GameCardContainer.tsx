import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box _hover={{
      transform: 'scale(1.03)',
      transition: 'transform 0.3s ease-in'
    }}
      borderRadius={'15px'} overflow={"hidden"}>{children}</Box>
  )
}

export default GameCardContainer