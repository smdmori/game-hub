import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import usePlatforms from "../hooks/usePlatforms"
import useGameQueryStore from "../store"

const PlatformSelector = () => {
  const selectedPlatformID = useGameQueryStore(s => s.gameQuery.platformID)
  const setSelectedPlatformID = useGameQueryStore(s => s.setPlatformID)

  const { data } = usePlatforms()

  const selectedPlatform = usePlatform(selectedPlatformID)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem key={platform.id} onClick={() => setSelectedPlatformID(platform.id)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector