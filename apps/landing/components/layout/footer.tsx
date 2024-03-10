import {
  Box,
  BoxProps,
  SimpleGrid,
  Container,
  Text,
  Stack,
  Flex,
  HStack,
  Circle,
  Center,
  Grid,
} from '@chakra-ui/react'

import { Link, LinkProps } from '@saas-ui/react'

import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

import siteConfig from 'data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 4, ...rest } = props
  return (
    <Box bg="urbanik.white" {...rest} color='urbanik.green'>
      <Container maxW='container.full' px={{base:'6vw',lg:'12.5vw'}} py="8">
        <Grid templateColumns={{base:'1fr 1fr', lg:'3fr 1fr 1fr 1fr'}}>
          <Stack spacing="8" gridRow={{base:'3/4',lg:'1/2'}} gridColumn={{base:'1/3',lg:'1/2'}}>
            <Stack alignItems="flex-start">
              <Flex>
                <Box as={siteConfig.logo} flex="1" height="32px" />
                <Text fontSize="2xs" color="urbanik.Green" fontWeight='bold' mt='5px' ml='15px' w='125px'>
                  {siteConfig.seo.description}
                </Text>
              </Flex>
            </Stack>
            <Stack>
              <Box fontWeight='bold' fontSize='md'> Síguenos </Box>
              <HStack spacing="4" p='5px'>
                {siteConfig.footer?.links?.map(({ href, label }) => (
                  <Circle as='button' 
                    size='28px' 
                    bg='urbanik.gray.medium' 
                    p='15px' 
                    _hover={{bg:'urbanik.orange'}}
                  >
                    <Center>
                      <FooterLink key={href} href={href}>
                        {label}
                      </FooterLink>
                    </Center>
                  </Circle>
                ))}
              </HStack>
            </Stack>
            <Stack  >            
              <Flex>
                <MdEmail size='22px' />
                <Box ml='12px' color='urbanik.black' fontSize='md'>
                  hola@urbanik.co
                </Box> 
              </Flex>
              <Flex>
                <MdPhone  size='22px' />
                <Box ml='12px' color='urbanik.black' fontSize='md'>
                  +57 321 753 8661
                </Box> 
              </Flex>
              <Flex>
                <MdLocationOn  size='22px' />
                <Box ml='12px' color='urbanik.black' fontSize={'sm'} mb='25px'>
                  Carrera 35A # 15B - 25 Edificio Prisma Oficina 305, Medellín - Colombia
                </Box> 
              </Flex>
            </Stack>
          </Stack>
          <Stack spacing='5' mb='25px'>
            <Text fontWeight='bold'> Nosotros </Text>
            <Stack fontSize='sm' color='urbanik.black'>
              <Link>Quiénes somos</Link>
              <Link>Preguntas frecuentes</Link>
              <Link>Trabaja con nosotros</Link>
            </Stack>
          </Stack>
          <Stack spacing='5' mb='25px' ml={{base:'8vw', lg:'0px'}}>
            <Text fontWeight='bold'> Servicios </Text>
            <Stack fontSize='sm' color='urbanik.black'>
              <Link>Inversores</Link>
              <Link>Promotores</Link>
            </Stack>
          </Stack>
          <Stack spacing='5' mb='25px'>
            <Text fontWeight='bold'> Legal </Text>
            <Stack fontSize='sm' color='urbanik.black'>
              <Link>Aviso legal</Link>
              <Link>Políticas de privacidad</Link>
              <Link>Términos y condiciones</Link>
              <Link>Política de cookies</Link>
            </Stack>
          </Stack>
        </Grid>
        <Box position='relative' mb='3%'>
          <Box position={{base:'static',lg:'absolute'}} right='1%' bottom='0' mb={'25px'} >
            <Copyright>{siteConfig.footer.copyright}</Copyright>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize={{base:'11px',lg:"sm"}}>
      {content || children}
    </Text>
  )
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      fontSize="sm"
      textDecoration="none"
      {...rest}
    >
      {children}
    </Link>
  )
}
