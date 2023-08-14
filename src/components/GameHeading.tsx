import { Heading } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import usePlatform from "../hooks/usePlatform"
import useGameQueryStore from "../store"

const GameHeading = () => {
  const selectedPlatformID = useGameQueryStore(s => s.gameQuery.platformID)
  const selectedGenreID = useGameQueryStore(s => s.gameQuery.genreID)

  const selectedPlatform = usePlatform(selectedPlatformID)
  const selectedGenre = useGenre(selectedGenreID)

  const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`

  return (
    <Heading as={'h1'} marginBottom={5} fontSize={'5xl'}>{heading}</Heading>
  )
}

export default GameHeading