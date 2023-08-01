import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageURL from "../services/image-url"

const GenresList = () => {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  return (
    <List>
      {isLoading && <Spinner />}
      {data.map(genre => <ListItem key={genre.id}>
        <HStack paddingY={1}>
          <Image boxSize={'30px'} borderRadius={10} src={getCroppedImageURL(genre.image_background)} />
          <Text fontSize={'lg'}>{genre.name}</Text>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenresList