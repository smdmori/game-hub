import { Card, CardBody, CardHeader, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Image src={game.background_image} />
      </CardHeader>
      <CardBody>
        <Heading>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard