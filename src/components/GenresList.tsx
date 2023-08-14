import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageURL from "../services/image-url"
import useGameQueryStore from "../store"

const GenresList = () => {
  const { gameQuery, setGenreID } = useGameQueryStore()

  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading as={'h2'} fontSize={'2xl'} marginTop={6} marginBottom={2}>Genres</Heading>
      <List>
        {data?.results.map(genre => <ListItem key={genre.id}>
          <HStack paddingY={1}>
            <Button
              variant={"link"}
              gap={3}
              onClick={() => setGenreID(genre.id)}
            >
              <Image
                boxSize={'36px'}
                borderRadius={10}
                objectFit={"cover"}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Text
                fontSize={gameQuery.genreID === genre.id ? 'large' : 'lg'}
                fontWeight={gameQuery.genreID === genre.id ? 'bold' : 'normal'} whiteSpace={'normal'}
                textAlign={'start'}>
                {genre.name}
              </Text>
            </Button>
          </HStack>
        </ListItem>)}
      </List>
    </>
  )
}

export default GenresList