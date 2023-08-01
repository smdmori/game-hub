import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
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
    <List>
      {isLoading && <Spinner />}
      {data.map(genre => <ListItem key={genre.id}>
        <HStack paddingY={1}>
          <Button variant={"link"} gap={2} onClick={() => {
            onSelectGenre(genre)
          }}>
            <Image boxSize={'30px'} borderRadius={10} src={getCroppedImageURL(genre.image_background)} />
            <Text fontSize={selectedGenre?.id === genre.id ? 'md' : 'sm'} fontWeight={selectedGenre?.id === genre.id ? 'extrabold' : ''}>{genre.name}</Text>
          </Button>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenresList