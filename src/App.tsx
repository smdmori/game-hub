import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Footer from "./components/Footer"
import GameGrid from "./components/GameGrid"
import GameHeading from "./components/GameHeading"
import GenresList from "./components/GenresList"
import Navbar from "./components/Navbar"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"

function App() {
  return (
    <Grid
      templateAreas={
        {
          base: `"nav" "main" "footer"`,
          lg: `"nav nav" "aside main" "footer footer"`
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
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5} >
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area={'main'} padding={'10px'}>
        <GameHeading />
        <HStack gap={5} marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
      <GridItem area={'footer'} margin={2} padding={10} backgroundColor={'#15294c'} borderRadius={'15px'} color={'white'}>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default App
