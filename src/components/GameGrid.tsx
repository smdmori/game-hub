import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0)

  if (error) return <Text>{error.message}</Text>

  return (
    <InfiniteScroll
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      dataLength={fetchedGamesCount || 0}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading && skeletons.map(skeleton => {
          return (
            <GameCardContainer key={skeleton} >
              <GameCardSkeleton />
            </GameCardContainer>)
        })}
        {data?.pages.map((page, index) =>
          <React.Fragment key={index}>
            {page.results.map(game =>
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            )}
          </React.Fragment>
        )}
      </SimpleGrid>
    </InfiniteScroll>

  )
}

export default GameGrid