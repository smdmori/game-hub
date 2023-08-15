import useTrailers from "../hooks/useTrailers"

interface Props {
  gameID: number
}

const GameTrailer = ({ gameID }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameID)
  const trailer = trailers?.results[0]
  if (isLoading || !trailer) return null
  if (error) throw error

  return <video
    src={trailer.data[480]}
    width={'100%'}
    poster={trailer.preview}
    controls
  />

}

export default GameTrailer