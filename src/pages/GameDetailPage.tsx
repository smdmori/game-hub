import { Heading, Spinner } from "@chakra-ui/react"
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
    <>
      <Heading size={'2xl'}>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameID={game.id} />
      <GameScreenshots gameID={game.id} />
    </>
  )
}

export default GameDetailPage