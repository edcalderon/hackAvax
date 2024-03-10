import { Box, Center, HTMLChakraProps, Image, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#ffffff')

  const logocolor = '/static/logoUrbanik/color.png';
  const logonaranja = '/static/logoUrbanik/naranja.png';
  const logoblanco = '/static/logoUrbanik/blanco.png';
  
  return (
  <Box>
    <Center>
      <Image
        height={'30px'}
        src={logocolor}
        alt='logo Urbanik naranja'
      />
    </Center>
  </Box>
  )
}
