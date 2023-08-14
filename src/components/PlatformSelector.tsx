import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import usePlatforms from "../hooks/usePlatforms"
import useGameQueryStore from "../store"

const PlatformSelector = () => {
  const { gameQuery, setPlatformID } = useGameQueryStore()

  const { data } = usePlatforms()

  const selectedPlatform = usePlatform(gameQuery.platformID)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem key={platform.id} onClick={() => setPlatformID(platform.id)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector