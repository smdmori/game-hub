import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import usePlatform from "../hooks/usePlatform"
import useGenres from "../hooks/useGenres"

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatform()
  const { data: genres } = useGenres()

  const selectedPlatform = platforms?.results.find(p => p.id === gameQuery.platformID)
  const selectedGenre = genres?.results.find(g => g.id === gameQuery.genreID)

  const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`

  return (
    <Heading as={'h1'} marginBottom={5} fontSize={'5xl'}>{heading}</Heading>
  )
}

export default GameHeading