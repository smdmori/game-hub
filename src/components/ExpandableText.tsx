import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface Props {
  children: string
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false)

  if (!children) return null

  const limit = 300

  if (children.length <= limit) return <Text>{children}</Text>

  const summary = expanded ? children : children.substring(0, limit) + '...'

  return (
    <>
      <Text>{summary}
        <Button
          size={'sm'}
          marginX={3}
          colorScheme="linkedin"
          onClick={() => setExpanded(!expanded)}
        >{expanded ? 'Show Less' : 'Show More'}</Button>
      </Text>
    </>
  )
}

export default ExpandableText