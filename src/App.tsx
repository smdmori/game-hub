import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={
        {
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }
      }
      templateColumns={
        {
          base: "1fr",
          lg: '300px 1fr'
        }
      }
    >
      <GridItem area={'nav'}>
        <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5} >
          <GenresList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
        </GridItem>
      </Show>
      <GridItem area={'main'} padding={'10px'}>
        <GameHeading gameQuery={gameQuery} />
        <HStack gap={5} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
