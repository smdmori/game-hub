import { FormLabel, HStack, Switch, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
      <Switch id='switch-color-mode' isChecked={colorMode === 'dark' ? true : false} onChange={toggleColorMode} colorScheme='green' />
      <FormLabel htmlFor='switch-color-mode' mb={0}>Dark Mode</FormLabel>
    </HStack>
  )
}

export default ColorModeSwitch