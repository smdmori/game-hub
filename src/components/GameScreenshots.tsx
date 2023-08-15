import { Image } from "@chakra-ui/react"
import useScreenshots from "../hooks/useScreenshots"

interface Props {
  gameID: number
}

const GameScreenshots = ({ gameID }: Props) => {
  const { data: screenshots } = useScreenshots(gameID)

  return (

    <>
      {screenshots?.results.map(file => <Image src={file.image} />)}
    </>
  )
}

export default GameScreenshots