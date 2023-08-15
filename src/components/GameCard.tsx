import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Game from "../interfaces/Game"
import getCroppedImageURL from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Link to={`/games/${game.slug}`}>
        <Image src={getCroppedImageURL(game.background_image)} />
        <CardBody>
          <HStack justifyContent={'space-between'} marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={'2xl'}>{game.name}<Emoji rating={game.rating_top} /></Heading>
        </CardBody>
      </Link>
    </Card>
  )
}

export default GameCard