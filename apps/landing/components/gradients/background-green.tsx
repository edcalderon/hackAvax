import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const theme = useTheme()
  const colors = [
    'urbanik.green',
    'urbanik.green',
    'urbanik.green',
    'urbanik.green',
  ]

  let fallbackBackground = `radial-gradient(at top left, ${colors[0]} 30%, transparent 80%), radial-gradient(at bottom, ${colors[1]} 0%, transparent 60%), radial-gradient(at bottom left, var(--chakra-colors-cyan-500) 0%, transparent 50%),
        radial-gradient(at top right, ${colors[3]}, transparent), radial-gradient(at bottom right, ${colors[0]} 0%, transparent 50%);`

  let gradientOverlay = `linear-gradient(90deg, #015351, #003a38 100%);`

  return (
    <Box
      backgroundImage={fallbackBackground}
      backgroundBlendMode="saturation"
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
      opacity={useColorModeValue('0.3', '0.5')}
      height="100vh"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      <Box
        backgroundImage={!hideOverlay ? gradientOverlay : undefined}
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="1"
      ></Box>
    </Box>
  )
}
