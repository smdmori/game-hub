import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import ExpandableText from "../components/ExpandableText"
import useGame from "../hooks/useGame"
import GameAttributes from "../components/GameAttributes"
import GameTrailer from "../components/GameTrailer"
import GameScreenshots from "../components/GameScreenshots"

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  // TODO: Use Skeletons
  if (isLoading) return <Spinner />
  if (error || !game) throw error

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <GridItem>
        <Heading size={'2xl'}>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameID={game.id} />
        <GameScreenshots gameID={game.id} />
      </GridItem>
    </SimpleGrid>
  )
}

export default GameDetailPage