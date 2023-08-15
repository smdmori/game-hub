import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Footer from "../components/Footer"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenresList from "../components/GenresList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"

function App() {
  return (
    <Grid
      templateAreas={
        {
          base: `"main" "footer"`,
          lg: `"aside main" "footer footer"`
        }
      }
      templateColumns={
        {
          base: "1fr",
          lg: '300px 1fr'
        }
      }
    >
      <Show above="lg">
        <GridItem area={'aside'} >
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GameHeading />
        <HStack gap={5} marginBottom={5} padding={1}>
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
