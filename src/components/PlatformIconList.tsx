import { HStack, Icon, Text } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { FaWindows, FaLinux, FaApple, FaXbox, FaPlaystation, FaAndroid } from 'react-icons/fa'
import { SiNintendo, SiIos } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from "react-icons"


interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    mac: FaApple,
    xbox: FaXbox,
    playstation: FaPlaystation,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: SiIos,
    web: BsGlobe
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color={"gray.500"} />)}
    </HStack>
  )
}

export default PlatformIconList