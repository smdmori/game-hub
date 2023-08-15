
import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { BsGlobe } from 'react-icons/bs'
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { SiIos, SiNintendo } from 'react-icons/si'
import { Platform } from "../interfaces/Platform"

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
      {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"} />)}
    </HStack>
  )
}

export default PlatformIconList