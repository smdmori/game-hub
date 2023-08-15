import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Heading, Spinner, Text } from "@chakra-ui/react"

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  // TODO: Use Skeletons
  if (isLoading) return <Spinner />
  if (error || !game) throw error

  return (
    <>
      <Heading size={'2xl'}>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  )
}

export default GameDetailPage