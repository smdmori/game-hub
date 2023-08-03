import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageURL from "../services/image-url"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  return (
    <>
      <Heading as={'h2'} fontSize={'2xl'} marginTop={6} marginBottom={2}>Genres</Heading>
      <List>
        {isLoading && <Spinner />}
        {data.map(genre => <ListItem key={genre.id}>
          <HStack paddingY={1}>
            <Button
              variant={"link"}
              gap={3}
              onClick={() => { onSelectGenre(genre) }}
            >
              <Image
                boxSize={'36px'}
                borderRadius={10}
                objectFit={"cover"}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Text
                fontSize={selectedGenre?.id === genre.id ? 'large' : 'lg'}
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} whiteSpace={'normal'}
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