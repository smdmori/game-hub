import { GridItem, HStack, Show } from "@chakra-ui/react"
import Footer from "../components/Footer"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenresList from "../components/GenresList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"

function App() {
  return (
    <>
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
    </>
  )
}

export default App
