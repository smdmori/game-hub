import { Card, CardBody, CardHeader, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'

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
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  )
}

export default GameCard