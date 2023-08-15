import { Image, SimpleGrid } from "@chakra-ui/react"
import useScreenshots from "../hooks/useScreenshots"

interface Props {
  gameID: number
}

const GameScreenshots = ({ gameID }: Props) => {
  const { data: screenshots } = useScreenshots(gameID)

  return (

    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} marginTop={2}>
      {screenshots?.results.map(file => <Image src={file.image} />)}
    </SimpleGrid>
  )
}

export default GameScreenshots