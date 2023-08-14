import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import usePlatforms, { Platform } from "../hooks/usePlatforms"

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatformID?: number
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformID }: Props) => {
  const { data } = usePlatforms()

  const selectedPlatform = usePlatform(selectedPlatformID)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
      <MenuList>
        {data?.results.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector