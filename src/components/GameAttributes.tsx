import { SimpleGrid, Text } from "@chakra-ui/react"
import Game from "../interfaces/Game"
import CriticScore from "./CriticScore"
import DefinitionItem from "./DefinitionItem"

interface Props {
  game: Game
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} gap={10} marginTop={10} as={'dl'}>
      <DefinitionItem title={"Platforms"}>{game.parent_platforms.map(({ platform }) =>
        <Text key={platform.id}>{platform.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem title={"Metascore"}>
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem title={"Genres"}>
        {game.genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem title={"Publishers"}>
        {game.publishers.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
      </DefinitionItem>
    </SimpleGrid>

  )
}

export default GameAttributes