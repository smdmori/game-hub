import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  selectedSortOrder: string
  onSelectSortOrder: (sortOrder: string) => void
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { label: 'Relevance', value: '' },
    { label: 'Date added', value: '-added' },
    { label: 'Name', value: 'name' },
    { label: 'Release date', value: '-released' },
    { label: 'Popularity', value: '-metacritic' },
    { label: 'Average rating', value: '-rating' },
  ]

  const currentSortOrder = sortOrders.find(order => order.value === selectedSortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Sort By : {currentSortOrder?.label || 'Relevance'}</MenuButton>
      <MenuList>
        {sortOrders.map(order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector