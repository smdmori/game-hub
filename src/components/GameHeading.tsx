import { Heading } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import usePlatform from "../hooks/usePlatform"
import useGameQueryStore from "../store"

const GameHeading = () => {
  const { gameQuery } = useGameQueryStore()

  const selectedPlatform = usePlatform(gameQuery.platformID)
  const selectedGenre = useGenre(gameQuery.genreID)

  const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`

  return (
    <Heading as={'h1'} marginBottom={5} fontSize={'5xl'}>{heading}</Heading>
  )
}

export default GameHeading