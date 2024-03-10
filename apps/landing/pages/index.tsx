import * as React from "react";
import type { NextPage } from "next";
import NextLink from 'next/link'
import {
  Container,
  Box,
  Circle,
  Center,
  Grid,
  GridItem,
  Stack,
  Progress,
  Button,
  Image,
  Text,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Flex,
  Card,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import { FaBed, FaGlassCheers ,FaLongArrowAltRight } from 'react-icons/fa'
import { PiUsersThree } from "react-icons/pi";
import { 
  MdArrowForwardIos, 
  MdArrowBackIos,
  MdChat,
  MdStore,
  MdLocationPin,
  MdArrowRightAlt,
} from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Br } from "@saas-ui/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

import  BackgroundVideo from "components/bgVideo/background-video";
import { BackgroundGradient } from "components/gradients/background-gradient";

import { ButtonLink } from "components/button-link/button-link";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Urbanik"
        description=""
      />
      <Box>
        <BackgroundVideo />
        <BackgroundGradient height="100%" zIndex="-2" /> 
        <LandingSection />
        <VideoInfo/>
        <ExperienciaInfo/>
        <InvierteInfo/>
        {/* 
        <MediosInfo/>
        <Blog/>
        */}
        <Info/>
        <FinalBanner/>
      </Box>
    </Box>
  );
};

const LandingSection: React.FC = () => {
  return (
    <Box 
      position="relative" 
      overflow="hidden" 
    >
      <Box 
        maxW="container.full"  
        pt={{ base: 20, lg: '20vh' }} pb={{base:'1', lg:"3.7vh"}}
        minHeight={{base:'95vh', lg:'100vh'}}
        position='relative'
        >
        <Stack direction={{ base: "column", lg: "row" }} ml={{base:'0vw', lg:'11.5vw'}} >
          <Hero
            id="home"
            mt='4vh'
            title={
              <FallInPlace>
                <Text color='white' fontSize={{base:'5vh',lg:'3vw'}} w={{base:'55vw', lg:'30vw'}}>
                  Invierte en un futuro sostenible
                </Text>          
              </FallInPlace>
            }>
            <FallInPlace delay={0.8}> 
                <NextLink href='/'>
                  <Box color="urbanik.orange" fontSize={{base:'4vw',lg:'21px'}} fontWeight='bold' 
                    mt={{base:'-15px',lg:'-25px'}} _hover={{color:'urbanik.white', }}>
                    <Flex>
                      <NextLink href="#">Explora nuestros proyectos</NextLink>
                      <Center ml='5px'>
                        <MdArrowForwardIos  size='20' />
                      </Center>
                    </Flex>
                  </Box>
                </NextLink>
            </FallInPlace>
          </Hero>
        </Stack>
        {/* Empresas que nos Respaldan */}
        <Box position='absolute' bottom='0'>
          <Grid
              templateRows={{base:'0.75fr 1fr', lg:'1fr'}}
              templateColumns={{base:"1fr", lg:'53vw 1fr'}}
              position="relative"
              top='40px'
          >
            <Container maxW="container.full" minW={{base:'100vw', lg:'0px'}} 
              pt='20px' pb="60px" pl={{base:"5px", lg:"12.5vw"}} pr={{base:"5px", lg:"80px"}} 
              bg="urbanik.gray.light" 
              borderRadius='36px'
              gridRow={{base:"2 / 3",lg:"1 / 2"}}
              zIndex='1'       
            >  
              <Stack direction='column' spacing='4' align={{base:'center', lg:'start'}}>
                <Text fontSize="lg" color="urbanik.green" fontWeight='700' mt='10px'>
                  Aliados Estratégicos
                </Text>  
                <Stack direction='row' spacing={{base:'35px',lg:'100px'}}>
                  <Center>
                    <Image
                          w='100%'
                          h={{base:'5vh',lg:'3vw'}}
                          src='/static/logosAliados/startcoB.png'
                          alt='Logo Startco Blanco'
                          filter='invert(75%)'
                    />
                  </Center>
                  <Center>
                    <Image
                          w='100%'
                          h={{base:'5vh',lg:'3vw'}}
                          src='/static/logosAliados/alianzaB.png'
                          alt='Logo Startco Blanco'
                          filter='invert(75%)'
                    />
                  </Center>
                  <Center>
                    <Image
                          w='100%'
                          h={{base:'5vh',lg:'3vw'}}
                          src='/static/logosAliados/rutanB.png'
                          alt='Logo Startco Blanco'
                          filter='invert(75%)'
                    />
                  </Center>                  
                </Stack>
              </Stack>
            </Container>
            {/** nuestra comunidad */}
            <Container maxW="container.full" pl='5vw' color='white'>
              <Stack direction='row' spacing={{base:'1vw',lg:'4vw'}} >
                <Center>
                  <Stack direction='column' spacing="1" >
                    <Flex>
                      <Center display={{base:'',lg:'none'}} >
                        <PiUsersThree size={60}/>
                      </Center>
                      <Center display={{base:'none',lg:'block'}}>
                        <PiUsersThree size={75}/>
                      </Center>
                      <Box mt='12%' ml='5%' fontSize={{base:'25',lg:'30'}} fontWeight='bold' minW='120px'>
                        2.8K
                      </Box>
                    </Flex>
                    <Box fontSize={{base:'12px',lg:'14px'}} fontWeight='bold'>
                      Nuestra Comunidad
                    </Box>
                  </Stack>
                </Center>
                <Center>
                  <ButtonLink
                    size="lg"
                    href='/login'
                    colorScheme="whiteAlpha"
                    borderRadius="15px"
                    pl={{base:'15px',lg:'25px'}}
                    py={{base:'45px',lg:'50px'}}
                    outline='3px solid'
                    outlineColor='urbanik.orange'
                    fontSize={{base:'20px',lg:'23px'}}
                    _hover={{bg:'urbanik.orange', outline:'none'}}
                  >
                    <Box mr='1.1em'>
                      Quiero <br/> Invertir
                    </Box>
                    <Box>
                      <MdArrowForwardIos size='30'/>
                    </Box>
                  </ButtonLink>
                </Center>
              </Stack>
            </Container>
          </Grid>    
        </Box>
      </Box>      
      <Container 
        maxW="container.full"  
        pt={{ base: 20, lg: '10vh' }} pb={{base:'1', lg:"121px"}}
        px={{base:'6vw',lg:'12.5vw'}}
        bg='white'
        color='urbanik.green'
      >
        <Box display={{base:'none', lg:'block'}}>
          <Center>
            <Box fontSize='24px' fontWeight='bold' pb={{base:'1', lg:"3.7vh"}} >
              ¿Cuáles son los beneficios de invertir a través de Urbanik?
            </Box>
          </Center>
          <Box>
          <Center>
            <Stack direction='row' spacing='8vw'>
              <Stack direction='column' spacing={10}>
                <Stack direction='row' spacing='3'>
                  <Box boxSize='67px' bg='#D9D9D9' />
                  <Center fontSize='15px' fontWeight='bold'>
                    Beneficios y <br/> descuentos    
                  </Center>
                </Stack>
                <Center>
                  Texto
                </Center>
              </Stack>
              <Stack direction='column' spacing={10}>
                <Stack direction='row' spacing='3'>
                  <Box boxSize='67px' bg='#D9D9D9' />
                  <Center fontSize='15px' fontWeight='bold'>
                    Invierte en <br/> comunidad
                  </Center>
                </Stack>
                <Center>
                  Texto
                </Center>
              </Stack>
              <Stack direction='column' spacing={10}>
                <Stack direction='row' spacing='3'>
                  <Box boxSize='67px' bg='#D9D9D9' />
                  <Center fontSize='15px' fontWeight='bold'>
                  Proyectos con <br/> impacto
                  </Center>
                </Stack>
                <Center>
                  Texto
                </Center>
              </Stack>
              <Stack direction='column' spacing={10}>
                <Stack direction='row' spacing='3'>
                  <Box boxSize='67px' bg='#D9D9D9' />
                  <Center fontSize='15px' fontWeight='bold'>
                    Crédito de <br/> vivienda
                  </Center>
                </Stack>
                <Center>
                  Texto
                </Center>
              </Stack>
            </Stack>
          </Center>
          </Box>
        </Box>
        <Box bg='urbanik.pale' p='22px' borderRadius='22px' display={{base:'',lg:'none'}} mb='15px'>
          <Center>
            <Box fontSize='22px' fontWeight='bold' pb='1' textAlign='center'>
              ¿Cuáles son los beneficios de invertir a través de Urbanik?
            </Box>
          </Center>
          <Center> 
              <Swiper
                cssMode={true}
                navigation={false}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              >
                <SwiperSlide>
                  <Box mb='20vw' mt='10vw'>
                    <Center>
                      <Stack direction='row' spacing='3'>
                        <Box boxSize='80px' bg='white' borderRadius='12px' />
                        <Stack direction='column' spacing={2}>
                          <Center fontSize='15px' fontWeight='bold'>
                            Beneficios y <br/> descuentos
                          </Center>
                          <Text fontSize='12px'>
                            Texto
                          </Text>
                        </Stack>
                      </Stack>
                    </Center>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box mb='20vw' mt='10vw'>
                    <Center>
                      <Stack direction='row' spacing='3'>
                        <Box boxSize='80px' bg='white' borderRadius='12px' />
                        <Stack direction='column' spacing={2}>
                          <Center fontSize='15px' fontWeight='bold'>
                            Invierte en <br/> comunidad
                          </Center>
                          <Text fontSize='12px'>
                            Texto
                          </Text>
                        </Stack>
                      </Stack>
                    </Center>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box mb='20vw' mt='10vw'>
                    <Center>
                      <Stack direction='row' spacing='3'>
                        <Box boxSize='80px' bg='white' borderRadius='12px' />
                        <Stack direction='column' spacing={2}>
                          <Center fontSize='15px' fontWeight='bold'>
                          Proyectos con <br/> impacto
                          </Center>
                          <Text fontSize='12px'>
                            Texto
                          </Text>
                        </Stack>
                      </Stack>
                    </Center>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box mb='20vw' mt='10vw'>
                    <Center>
                      <Stack direction='row' spacing='3'>
                        <Box boxSize='80px' bg='white' borderRadius='12px' />
                        <Stack direction='column' spacing={2}>
                          <Center fontSize='15px' fontWeight='bold'>
                            Crédito de <br/> vivienda
                          </Center>
                          <Text fontSize='12px'>
                            Texto
                          </Text>
                        </Stack>
                      </Stack>
                    </Center>
                  </Box>
                </SwiperSlide>
              </Swiper>
          </Center>
        </Box>
      </Container>
    </Box>
  );
};

const VideoInfo: React.FC = () => {
  return (
    <Box
      width="100%"
      height="100%"
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100vw',
          objectFit: 'cover',
        }}
      >
        <source src={'/static/videos/bbvaVideo.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

const ExperienciaInfo: React.FC = () => {
  return (
    <Box
      maxW='container.full'
      overflow="hidden" 
      minHeight="50vh"
      bg='white'
      color='urbanik.green'
      p='4em 0px 1em 0px'
      fontWeight='bold'
      px={{base:'6vw',lg:'12.5vw'}}
    >
      <Box position='relative'>
        <Stack direction={{base:'column',lg:'row'}} spacing='15%'>
          <Box position='absolute' left='0' top='0'>
            <Text fontSize={{base:'15px',lg:'1.5vw'}} fontWeight='bold'>Tu experiencia <br/> de inversión <br/> empieza aquí</Text>
          </Box>
          <Box w={{base:'90vw',lg:'75vh'}} mt={{base:'15vh',lg:'8vw'}} mb={{base:'5vh', lg:'0'}}>
            <Image src='/static/images/iPhone.png'/>
          </Box>
          <SimpleGrid height={{base:'60vh'}} ml={{base:'5%',lg:'0px'}}>
            <GridItem gridRow='1/2' gridColumn='1/2' my='2%'>
              <Stack direction='row'>
                <Center>
                  <Circle bg='urbanik.green' size={'45px'} color='white' fontWeight='bold' fontSize='20px' zIndex='1'> 1 </Circle>
                </Center>
                <Center>
                  Hazte usuario
                </Center>
              </Stack>
            </GridItem>
            <GridItem gridRow='2/3' gridColumn='1/2' my='2%'>
              <Stack direction='row'>
                <Center>
                  <Circle bg='urbanik.green' size={'45px'} color='white' fontWeight='bold' fontSize='20px' zIndex='1'> 2 </Circle>
                </Center>
                <Center>
                  Accede a tu cuenta
                </Center>
              </Stack>
            </GridItem>
            <GridItem gridRow='3/4' gridColumn='1/2' my='2%'>
            <Stack direction='row'>
                <Center>
                  <Circle bg='urbanik.green' size={'45px'} color='white' fontWeight='bold' fontSize='20px' zIndex='1'> 3 </Circle>
                </Center>
                <Center>
                  Inspírate
                </Center>
              </Stack>
            </GridItem>
            <GridItem gridRow='4/5' gridColumn='1/2' my='2%'>
            <Stack direction='row'>
                <Center>
                  <Circle bg='urbanik.gray.light' size={'45px'} color='urbanik.green' fontWeight='bold' fontSize='20px' zIndex='1'> 4 </Circle>
                </Center>
                <Center>
                  Elige tu producto
                </Center>
              </Stack>
            </GridItem>
            <GridItem gridRow='5/6' gridColumn='1/2' my='2%'>
            <Stack direction='row'>
                <Center>
                  <Circle bg='urbanik.gray.light' size={'45px'} color='urbanik.green' fontWeight='bold' fontSize='20px' zIndex='1'> 5 </Circle>
                </Center>
                <Center>
                  Invierte
                </Center>
              </Stack>
            </GridItem>
            <GridItem gridRow='1/6' gridColumn='1/2'>
              <Box borderLeft='2px solid black' h='85%' w='1px' mt='3%' position='relative' left='22px' />
            </GridItem>
          </SimpleGrid>
        </Stack>
      </Box>      
    </Box>
  );
};

const InvierteInfo: React.FC = () => {
  return (
    <Box
      bg='urbanik.pale'
      color='urbanik.green'
      pt='22px' pb='50px' px={{base:'6vw',lg:'12.5vw'}}
    >
      <Center fontSize='28px' fontWeight='bold' mb='23px'>
        Invierte en lo que crees
      </Center>
      <Box
        color='urbanik.green'
      >
        <HStack display={{base:'none', lg:'flex'}}>
          <Box maxW='50%'>
            <Stack direction='row'>
              <Box>
                <Text fontSize='33px'fontWeight='bold' >
                  HUG
                </Text>
                <Text fontSize='20px'>
                  Proyecto de Vivienda Turística
                </Text>
                <HStack >
                  <MdLocationPin size='22px' />
                  <Text fontSize='15px' fontWeight='bold'>
                    Medellín, Colombia
                  </Text>
                </HStack>
              </Box>
              <Center mx='auto'>
                <Box bg='white' w='122px' h='72px' borderRadius='19px' />
              </Center>
            </Stack>
            <Box fontSize='md' fontWeight='bold' my='20px' mr='5%'>
              Medellín, conocida por su vibrante cultura y crecimiento turístico, se presenta como el escenario ideal para invertir. Este proyecto cuenta con 56 habitaciones con cocinas completas y jacuzzis en las terrazas, con licencia turística, espacios gastronómicos y un rooftop bar exclusivo.  no es solo una inversión; es una puerta a la rentabilidad y al crecimiento sostenido. 
            </Box>
            <Box mb='2%'>
              <HStack>
                <FaBed size='32px'/>
                <HStack fontSize='14px' my='2%' textAlign='center'> 
                  <Text fontSize='20px'> 56 </Text>
                  {''} 
                  <Text> Habitaciones </Text> 
                </HStack>
              </HStack>
              <HStack>
                <MdStore  size='32px'/>
                <HStack fontSize='14px' my='2%' textAlign='center'> 
                  <Text fontSize='20px'> 2 </Text>
                  {''} 
                  <Text> Locales Comerciales </Text> 
                </HStack>
              </HStack>
              <HStack>
                <FaGlassCheers size='32px'/>
                <HStack fontSize='14px' my='2%' textAlign='center'> 
                  <Text fontSize='20px'> 1 </Text>
                  {''} 
                  <Text> RoofTop </Text> 
                </HStack>
              </HStack>
            </Box>
            <Box fontSize='md' fontWeight='bold' mb='2%'>
              ¿QUIÉNES HACEN REALIDAD ESTE PROYECTO?
            </Box>
            <Center>
              <HStack>
                <Box bg='lightblue' w='100px' h='72px' borderRadius='19px' />
                <Box bg='lightblue' w='100px' h='72px' borderRadius='19px' />
                <Box bg='lightblue' w='100px' h='72px' borderRadius='19px' />
                <Box bg='lightblue' w='100px' h='72px' borderRadius='19px' />
              </HStack>
            </Center>
          </Box>
          <Box my='auto' maxW='525px' mx='auto'>
            <Box position='relative'>
              <Center >
              <NextLink href='#'>
                  <Image 
                    src='/static/images/HUBBuilding.png'
                    objectFit='cover'
                    borderRadius='65px'
                    transition= '500 linear' 
                    _hover={{
                      border:'solid 3px',                      
                      borderColor: 'urbanik.orange',
                      boxShadow:'3px 3px 5px gray'
                    }}
                  />
                </NextLink>
              </Center>
              <NextLink href='#'>
                <Circle 
                  position='absolute'
                  bottom='5%'
                  right='5%'
                  size='50px'
                  bg='#ffffffCC'
                  color='urbanik.orange'
                  border='solid 1px'
                  _hover={{
                    bg:'urbanik.orange',
                    color:'white',
                    border: 'none'
                  }}
                >
                  <BsArrowRight size='25px' />
                </Circle>
              </NextLink>
            </Box>
          </Box>
        </HStack>
        <Box my='auto' maxW='525px' mx='auto' display={{base:'block', lg:'none'}}>
            <Box position='relative'>
              <Center >
                <Image 
                  src='/static/images/HUBRenderBuilding.png'
                  objectFit='cover'
                  borderRadius='45px'
                />
              </Center>
              <NextLink href='#'>
                <Circle 
                  position='absolute'
                  bottom='5%'
                  right='5%'
                  size='50px'
                  bg='#ffffffCC'
                  color='urbanik.orange'
                  border='solid 1px'
                  _hover={{
                    bg:'urbanik.orange',
                    color:'white',
                    border: 'none'
                  }}
                >
                  <BsArrowRight size='25px' />
                </Circle>
              </NextLink>
              <Box
                position='absolute'
                bottom='5%'
                left='5%'
                p='4.5%'
                bg='urbanik.paleGreen'
                color='urbanik.white'
                borderRadius='50px'
                fontSize='15px'
                _hover={{
                  bg:'urbanik.orange',
                  color:'white',
                  border: 'none'
                }}
              >
                <HStack align={'baseline'}> <Text fontSize='18px' >HUG </Text> <Text>Vivienda Turística</Text></HStack>
                <Flex>
                  <MdLocationPin size='15px' />
                  <Text fontSize='12px'>Medellín</Text>
                </Flex>


              </Box>
            </Box>
        </Box>
      </Box>

      {/**
      <Grid templateColumns={{base:'',lg:'1fr 1fr 0.5fr'}}
        templateRows={{base:'',lg:'0.5fr 0.25fr'}}
        rowGap='5'
        columnGap='3vw'
      >
        <GridItem gridRow='1/2' gridColumn='1/4' display={{base:'none', lg:'block'}}>
          <Card
            borderRadius='40px'
            color='urbanik.green'
            bg='#52a3a21A'
            pl='3%' pr='2%' py='2%'
            transitionDuration='500ms'
            _hover={{
              boxShadow:'0px 5px 10px gray',
              transform:'translateY(-15px)',
            }}
          >
            <Stack direction='row'>
              <Box maxW='50%'>
                <Stack direction='row' position='relative'>
                  <Box fontSize='33' fontWeight='bold'>
                    Blue Ville
                    <Flex fontSize='15px'>
                      <MdLocationPin size='22px' />
                      Bogotá, Colombia
                    </Flex>
                  </Box>
                  <Center position='absolute' right='5%'>
                    <Box bg='white' w='122px' h='72px' borderRadius='19px' />
                  </Center>
                </Stack>
                <Box fontSize='0.75vw' fontWeight='bold' my='20px' maxW='75%'>
                  Se combina un diseño arquitectónico en un entorno privilegiado donde podrán disfrutar de un estilo de vida exclusivo al alcance de la mano. Esta ubicación inmejorable les permitirá vivir una vida cosmopolita, rodeados de lo mejor que Bogotá tiene para ofrecer.
                </Box>
                <Grid
                  gridRow='4/5' gridColumn='1/3'
                  templateRows='repeat(3 1fr)'
                  templateColumns='1fr 1fr'
                >
                  <GridItem my='5px'>
                    <Flex>
                      <FaBed size='32px'/>
                      <Box ml='5%' fontSize='14px' my='2%'> 3 Habitaciones </Box>
                    </Flex>
                  </GridItem>
                  <GridItem my='5px'>
                    <Flex>
                      <FaBuilding size='32px' />
                      <Box ml='5%' fontSize='14px' my='2%'> Oficinas </Box>
                    </Flex>
                  </GridItem>
                  <GridItem my='5px'>
                    <Flex>
                      <FaBath size='32px' />
                      <Box ml='5%' fontSize='14px' my='2%'> 4 Baños </Box>
                    </Flex>
                  </GridItem>
                  <GridItem my='5px'>
                    <Flex>
                      <BsArrowsFullscreen size='32px' />
                      <Box ml='5%' fontSize='14px' my='2%'> 120 m² </Box>
                    </Flex>
                  </GridItem>
                  <GridItem my='5px'>
                    <Flex>
                      <MdDirectionsCar size='32px' />
                      <Box ml='5%' fontSize='14px' my='2%'> 2 Parqueaderos </Box>
                    </Flex>
                  </GridItem>
                </Grid>
                <Box pr='5%' py='12px' >
                  <Progress value={60} colorScheme='urbanik' size='lg' bg='white' />
                </Box>
                <Stack direction='row' position='relative'>
                  <Box px='22px'>
                    <Box fontSize='28px' fontWeight='900' color='urbanik.orange'  > + 22% </Box>
                    <Box ml='3%' fontSize='10px' color='urbanik.green' > E.A. Estimada </Box>
                  </Box>
                  <Box position='absolute' right='5%'>
                    <Box fontSize='1.2vw' fontWeight='bold'> $ 900.000.000 cop </Box>                
                    <Circle as='button'
                      borderRadius='5em'
                      size='40px'
                      position='absolute' right='5%'
                      bg='urbanik.orange'
                      color='white'
                      _hover={{
                        bg:'#ffffffbf',
                        color:'urbanik.orange'
                      }}
                    >
                      <NextLink href='/'>
                        <FaLongArrowAltRight  size='25px' />
                      </NextLink>
                    </Circle>
                  </Box>
                </Stack>
              </Box>
              <Box my='auto' maxW='478px'>
                <Box position='relative'>
                  <Center>
                    <Image 
                      src='/static/images/building1.png'
                      objectFit='cover'
                      borderRadius='40px'
                    />
                  </Center>
                  <Box
                    bg='urbanik.orange'
                    color='white'
                    borderRadius='20px'
                    py='4px'
                    px='15px'
                    fontSize='12px'
                    fontWeight='bold'
                    position='absolute'
                    top='5%'
                    left='5%'
                    >
                    Próximo lanzamiento
                  </Box>
                  <Box
                    opacity='85%'
                    bg='#d9d9d9'
                    color='urbanik.green'
                    borderRadius='20px'
                    py='2px'
                    px='15px'
                    outline='solid 1px'
                    outlineColor='urbanik.green'
                    fontSize='12px'
                    position='absolute'
                    bottom='5%'
                    right='5%'
                    >
                    Local comercial
                  </Box>
                </Box>
              </Box>
            </Stack>
            
          </Card>
        </GridItem>
        
         * 
        <GridItem alignContent='center' alignItems='center' gridRow='2/3' gridColumn='1/2' display={{base:'none', lg:'block'}}>
          <Card
            maxW='360px'
            borderRadius='40px'
            color='urbanik.green'
            bg='#52a3a21A'
            px='5%' py='5%'
            transitionDuration='500ms'
            _hover={{
              boxShadow:'0px 5px 10px gray',
              transform:'translateY(-15px)',
            }}
          >
            <Box>
              <Box fontSize='33' fontWeight='bold'>
                <Box position='relative'>
                  <Center>
                    <Image 
                      src='/static/images/room1.png'
                      objectFit='cover'
                      borderRadius='40px'
                    />
                  </Center>
                  <Box
                    bg='urbanik.orange'
                    color='white'
                    borderRadius='20px'
                    py='4px'
                    px='15px'
                    fontSize='12px'
                    fontWeight='bold'
                    position='absolute'
                    top='5%'
                    left='5%'
                    >
                    En Venta
                  </Box>
                  <Box
                    opacity='85%'
                    bg='#d9d9d9'
                    color='urbanik.green'
                    borderRadius='20px'
                    py='2px'
                    px='15px'
                    outline='solid 1px'
                    outlineColor='urbanik.green'
                    fontSize='12px'
                    position='absolute'
                    bottom='5%'
                    right='5%'
                    >
                    Local comercial
                  </Box>
                </Box>
              </Box>
              <Box px='2%'>
                <SimpleGrid columns={2} my='15px'>
                  <Center>
                    <Flex>
                      <FaBuilding size='32px' />
                      <Box ml='5%' fontSize='14px' my='2%'> Oficinas </Box>
                    </Flex>
                  </Center>
                  <Center>
                    <Flex>
                      <BsArrowsFullscreen size='32px' />
                      <Box ml='5%' fontSize='14px' my='2%'> 120m² </Box>
                    </Flex>
                  </Center>
                </SimpleGrid>
                <Progress value={45} colorScheme='urbanik' size='lg' bg='white' />
                <Flex mt='15px'>
                  <Center>
                    <Box bg='white' w='122px' h='50px' borderRadius='19px' my='4px' />
                  </Center>
                  <Box position='absolute' right='10%'>
                    <Box fontSize='15px' fontWeight='bold' mb='2%'> $ 420.000.000 cop </Box>
                    <Flex fontSize='10px'>
                      <MdLocationPin size='22px' />
                      Cartagena, Colombia
                    </Flex>
                  </Box>
                </Flex>
                <Flex mt='10px'>
                  <Box w='50%'>
                    <Box fontSize='20px' fontWeight='900' color='urbanik.orange'  > + 12% </Box>
                    <Box ml='3%' fontSize='10px' color='urbanik.green' > E.A. Estimada </Box>
                  </Box>
                  <Box position='absolute' right='10%'>
                    <Circle as='button'
                      borderRadius='5em'
                      size='40px'
                      p='1'
                      bg='urbanik.orange'
                      my='5%'
                      color='white'
                      _hover={{
                        bg:'#ffffffbf',
                        color:'urbanik.orange'
                      }}
                    >
                      <NextLink href='/'>
                        <FaLongArrowAltRight  size='25px'  />
                      </NextLink>
                    </Circle>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Card>
        </GridItem>
        <GridItem gridRow={{base:'1/2', lg:'2/3'}} gridColumn={{base:'1/2', lg:'2/3'}}>
          <Card
            maxW='360px'
            borderRadius='40px'
            color='urbanik.green'
            bg='#52a3a21A'
            px='5%' py='5%'
            transitionDuration='500ms'
            _hover={{
              boxShadow:'0px 5px 10px gray',
              transform:'translateY(-15px)',
            }}
          >
            <Box>
              <Box fontSize='33' fontWeight='bold'>
                <Box position='relative'>
                  <Center>
                    <Image 
                      src='/static/images/room2.png'
                      objectFit='cover'
                      borderRadius='40px'
                    />
                  </Center>
                  <Box
                    bg='urbanik.orange'
                    color='white'
                    borderRadius='20px'
                    py='4px'
                    px='15px'
                    fontSize='12px'
                    fontWeight='bold'
                    position='absolute'
                    top='5%'
                    left='5%'
                    >
                    En Venta
                  </Box>
                  <Box
                    opacity='85%'
                    bg='#d9d9d9'
                    color='urbanik.green'
                    borderRadius='20px'
                    py='2px'
                    px='15px'
                    outline='solid 1px'
                    outlineColor='urbanik.green'
                    fontSize='12px'
                    position='absolute'
                    bottom='5%'
                    right='5%'
                    >
                    Local comercial
                  </Box>
                </Box>
              </Box>
              <Box px='2%'>
                <SimpleGrid columns={2} my='15px'>
                  <Center>
                    <Flex>
                      <FaBuilding size='32px' />
                      <Box ml='5%' fontSize='14px' my='2%'> Oficinas </Box>
                    </Flex>
                  </Center>
                  <Center>
                    <Flex>
                      <BsArrowsFullscreen size='32px' />
                      <Box ml='5%' fontSize='14px' my='2%'> 120m² </Box>
                    </Flex>
                  </Center>
                </SimpleGrid>
                <Progress value={80} colorScheme='urbanik' size='lg' bg='white' />
                <Flex mt='15px'>
                  <Center>
                    <Box bg='white' w='122px' h='50px' borderRadius='19px' my='4px' />
                  </Center>
                  <Box position='absolute' right='10%'>
                    <Box fontSize='15px' fontWeight='bold' mb='2%'> $ 420.000.000 cop </Box>
                    <Flex fontSize='10px'>
                      <MdLocationPin size='22px' />
                      Cartagena, Colombia
                    </Flex>
                  </Box>
                </Flex>
                <Flex mt='10px'>
                  <Box w='50%'>
                    <Box fontSize='20px' fontWeight='900' color='urbanik.orange'  > + 12% </Box>
                    <Box ml='3%' fontSize='10px' color='urbanik.green' > E.A. Estimada </Box>
                  </Box>
                  <Box position='absolute' right='10%'>
                    <Circle as='button'
                      borderRadius='5em'
                      size='40px'
                      p='1'
                      bg='urbanik.orange'
                      my='5%'
                      color='white'
                      _hover={{
                        bg:'#ffffffbf',
                        color:'urbanik.orange'
                      }}
                    >
                      <NextLink href='/'>
                        <FaLongArrowAltRight  size='25px'  />
                      </NextLink>
                    </Circle>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Card>
        </GridItem>
        <GridItem gridRow='2/3' gridColumn={{base:'1/2',lg:'3/4'}}>
          <NextLink href={'/'} >
            <Box 
              mt={{base:'15px',lg:'0%'}}
              h={{base:'20vh', lg:'100%'}}
              bg='urbanik.white' 
              outline='3px solid'
              outlineColor='urbanik.orange'
              borderRadius='20px' 
              px='2%' py='1.5%'
              color='urbanik.orange'
              position='relative'
              _hover={{
                color:'white',
                bg:'urbanik.orange',
              }}
            >
              <Box position='relative' top={{base:'12px', lg:'25%'}} ml='25px' fontSize={{base:'3vh', lg:'1.25vw'}} fontWeight='bold'>
                  Descubre <br/> otras <br/> propiedades
              </Box>
              <Box position='absolute' bottom='15%' right='10%'>
                <MdArrowForwardIos size='40'/>
              </Box>
            </Box>
          </NextLink>
        </GridItem>

      </Grid>
        */}
    </Box>
  );
};

const MediosInfo: React.FC = () => {
  return (
    <Container
      maxW='container.full'
      overflow="hidden" 
      bg='white'
      color='urbanik.green'
      p={{base:'2em 6vw', lg:'2em 12.5vw'}}
      fontWeight='bold'
    >
      <Center>
          <Box fontSize='20px' fontWeight='bold' >
          Urbanik en los medios
          </Box>
        </Center>
      <Container 
        maxW="container.full"  
        pt={{ base: '2vw', lg: '2vw' }}
        color='urbanik.green'
      >
        <Center>
          <Flex my='5%'>
            <MdArrowBackIos size='40'/>
            <Box mt='-2%'>
              <Image src='/static/images/medios.png' display={{base:'none', lg:'block'}} />
              <Image src='/static/images/mediosShort.png' display={{base:'', lg:'none'}} />
            </Box>
            <MdArrowForwardIos size='40'/>
          </Flex>
        </Center>
      </Container>
      
    </Container>
  );
};

const Blog: React.FC = () => {
  return (
    <Container
      maxW='container.full'
      overflow="hidden" 
      bg='urbanik.pale'
      color='urbanik.green'
      py='2em'
      fontWeight='bold'
      px={{base:'6vw',lg:'12.5vw'}}
    >
      <Box fontSize='23px' fontWeight='bold' px='5%' mb='15px'>
        Blog de consejos
      </Box>
      <Box 
        maxW="container.full"  
        pt={{ base: '2vw', lg: '2vw' }}
        color='urbanik.green'
      >
        <Box>
          <Grid
            templateColumns={{base:'1fr',lg:'2fr 1fr 1fr'}}
            templateRows={{base:'',lg:'50% 50%'}}
            gap='4'
          >
            <GridItem gridRow={{base:'1/2',lg:'1/3'}} gridColumn='1/2' color='white' >
                <Box 
                  bgImage='url("/static/images/building3.png")'
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  p='5%'
                  h={{base:'55vh',lg:'100%'}}
                  borderRadius='20px'
                  position='relative'
                  _hover={{
                    outline: '3px solid',
                    outlineColor: 'urbanik.orange',
                  }}
                >
                  <Box position='absolute' bottom='5' right='5'  p='5%'>
                    <Text fontSize={{base:'20px',lg:'30px'}} > Texto principal </Text>
                    <Text fontSize='12px' float='right'> sub tiutlo </Text>                    
                  </Box>
                </Box>
            </GridItem>
            <GridItem display={{base:'none', lg:'block'}} gridRow='1/2' gridColumn='2/3' color='white' >
                <Box 
                  bgImage='url("/static/images/building2.png")'
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  p='5%'
                  h='13vw'
                  borderRadius='20px'
                  position='relative'
                  _hover={{
                    outline: '3px solid',
                    outlineColor: 'urbanik.orange',
                  }}
                >
                  <Box position='absolute' bottom='5' p='5%'>
                    <Text fontSize='15px'> Texto principal </Text>               
                  </Box>
                </Box>
            </GridItem>
            <GridItem display={{base:'none', lg:'block'}} gridRow='1/2' gridColumn='3/4' color='white' >
                <Box 
                  bgImage='url("/static/images/building1.png")'
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  p='5%'
                  h='13vw'
                  borderRadius='20px'
                  position='relative'
                  _hover={{
                    outline: '3px solid',
                    outlineColor: 'urbanik.orange',
                  }}
                >
                  <Box position='absolute' bottom='5' >
                    <Text fontSize='15px' float={'inline-start'}> Texto principal </Text>              
                  </Box>
                </Box>
            </GridItem>
            <GridItem display={{base:'none', lg:'block'}} gridRow='2/3' gridColumn='2/4'>
                <Box 
                  bg='#52a3a21A'
                  p='5%'
                  h='16vw'
                  borderRadius='20px'
                  boxShadow='2px 2px 8px gray'
                >
                  <Grid templateColumns='1fr 1fr' >
                    <GridItem color='urbanik.green' position='relative'>
                      <Text fontSize='16px' > Ver más </Text>
                      <Circle as='button'
                        borderRadius='5em'
                        size='40px'
                        p='1'
                        bg='urbanik.orange'
                        my='5%'
                        color='white'
                        position='absolute'
                        bottom='0'
                        right='5%'
                        _hover={{
                          bg:'#ffffffbf',
                          color:'urbanik.orange'
                        }}
                      >
                        <NextLink href='/'>
                          <FaLongArrowAltRight  size='25px'  />
                        </NextLink>
                      </Circle>
                    </GridItem>
                    <GridItem>
                      <Box bgImage='url("/static/images/building_place_holder.jpg")'
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        p='5%'
                        h='13vw'
                        borderRadius='20px'
                        position='relative'
                       />
                    </GridItem>
                  </Grid>
                </Box>
            </GridItem>
            <GridItem display={{base:'', lg:'none'}} gridRow='2/3' gridColumn='1/2'>
                <Box 
                  alignContent='space-between'
                  position='relative'
                  bg='#52a3a21A'
                  p='5%'
                  h='26vw'
                  borderRadius='20px'
                > 
                  <Text fontSize='25px' p='4.5%' > Ver más </Text>
                  <Circle as='button'
                    borderRadius='5em'
                    size='40px'
                    p='1'
                    bg=''
                    m='8% 4%'

                    color='urbanik.green'
                    outline='2px solid'
                    outlineColor='urbanik.green'
                    position='absolute'
                    bottom='5%'
                    right='5%'
                    _hover={{
                      bg:'urbanik.green',
                      color:'white'
                    }}
                  >
                    <NextLink href='/'>
                      <FaLongArrowAltRight  size='25px'  />
                    </NextLink>
                  </Circle>
                </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

const Info: React.FC = () => {
  return (
    <Container
      maxW='container.full'
      bg='white'
      color='urbanik.green'
      px={{base:'6vw', lg:'12.5vw'}} py='3%'
      fontWeight='bold'
    >
      <Box fontSize='20px' fontWeight='bold' mb='22px'>
        Preguntas y respuestas frecuentes
      </Box>
      <SimpleGrid columns={{base:1,lg:2}}>
        <Center maxW='525px'>
          <Box>
            <GridItem>
              <Card
                borderRadius='40px'
                color='urbanik.green'
                bg='#52a3a21A'
                p='30px'
              >
                <Stack>
                  <Box fontSize='20px' fontWeight='bold' pr='50px'>
                    Resuelve tus dudas con nuestra asesoría personalizada
                  </Box>
                  <Box fontWeight={200} fontSize='sm' my='24px'>
                    Urbanik es una plataforma de inversión colaborativa. 100% digital, en proyectos inmobiliarios que te ayuda a conectar con proyectos innnovadores y rentables, en los que puedes invertir desde bajos montos y obtener rentabilidades por valorización y rentas, además de beneficios en los proyectos y con la comunidad. 
                  </Box>
                  <Center>
                    <ButtonLink
                      size="md"
                      href='/signup'
                      colorScheme="whiteAlpha"
                      borderRadius="15px"
                      px={{base:'20px',lg:'25px'}}
                      py={{base:'40px',lg:'45px'}}
                      color='urbanik.orange'
                      outlineColor={'urbanik.orange'}
                      fontSize={{base:'13', lg:'15px'}}
                      _hover={{
                        bg:'urbanik.orange', 
                        color:'white', 
                        outline:'none', 
                        boxShadow:'5px 5px 5px lightgray'
                      }}
                    >
                      <MdChat size='40px'  />
                      <Box  ml='15px'>
                        Chatea en línea con <br/> nuestros asesores.
                      </Box>   
                    </ButtonLink>
                  </Center>
                </Stack>
              </Card>
            </GridItem>
          </Box>
        </Center>
        <Container 
          maxW="container.full"  
          pt={{ base: 3, lg: '0px' }}
          color='urbanik.green'
        >
          <Tabs variant='unstyled' mt={{base:'14px', lg:'0px'}}>
            <TabList>
              <Tab borderRadius='200px' outline='1px solid' outlineColor='urbanik.green' 
                px={{base:'22px',lg:'25px'}}
                mr={{base:'2.5vw',lg:'25px'}}
                fontSize={{base:'10px', lg:'md'}}
                _hover={{
                  outlineColor: 'urbanik.orange' 
                }}
                _selected={{ 
                  color: 'white', 
                  bg: 'urbanik.orange', 
                  outlineColor: 'urbanik.orange' 
                }}
              >
                Opción 1
              </Tab>
              <Tab borderRadius='200px' outline='1px solid' outlineColor='urbanik.green' 
                px={{base:'22px',lg:'25px'}}
                mr={{base:'2.5vw',lg:'25px'}}
                fontSize={{base:'10px', lg:'md'}}
                _hover={{
                  outlineColor: 'urbanik.orange' 
                }}
                _selected={{ 
                  color: 'white', 
                  bg: 'urbanik.orange', 
                  outlineColor: 'urbanik.orange' 
                }}
              >
                Opción 2
              </Tab>
              <Tab borderRadius='200px' outline='1px solid' outlineColor='urbanik.green' 
                px={{base:'22px',lg:'25px'}}
                fontSize={{base:'10px', lg:'md'}}
                _hover={{
                  outlineColor: 'urbanik.orange' 
                }}
                _selected={{ 
                  color: 'white', 
                  bg: 'urbanik.orange', 
                  outlineColor: 'urbanik.orange' 
                }}
              >
                Opción 3
              </Tab>
            </TabList>
            <TabPanels mt='25px'>
              <TabPanel>
                <Stack direction='column' spacing={{base:'25px',lg:'55px'}}>
                  <Box>
                    <Text>Pregunta 1</Text>
                    <Text fontSize='sm' mt='5px' color='urbanik.gray.medium'>Respuesta a pregunta 1</Text>
                  </Box>
                  <Box>
                    <Text>Pregunta 2</Text>
                    <Text fontSize='sm' mt='5px' color='urbanik.gray.medium'>Respuesta a pregunta 2</Text>
                  </Box>
                  <Box>
                    <Text>Pregunta 3</Text>
                    <Text fontSize='sm' mt='5px' color='urbanik.gray.medium'>Respuesta a pregunta 3</Text>
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel>
              <Stack direction='column' spacing={{base:'25px',lg:'55px'}}>
                  <Box>
                    <Text>Pregunta 4</Text>
                    <Text fontSize='sm' mt='5px' color='urbanik.gray.medium'>Respuesta a pregunta 4</Text>
                  </Box>
                  <Box>
                    <Text>Pregunta 5</Text>
                    <Text fontSize='sm' mt='5px' color='urbanik.gray.medium'>Respuesta a pregunta 5</Text>
                  </Box>
                  <Box>
                    <Text>Pregunta 6</Text>
                    <Text fontSize='sm' mt='5px' color='urbanik.gray.medium'>Respuesta a pregunta 6</Text>
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel>
              <Stack direction='column' spacing={{base:'25px',lg:'55px'}}>
                  <Box>
                    <Text>Pregunta 7</Text>
                    <Text fontSize='sm' mt='5px' color='urbanik.gray.medium'>Respuesta a pregunta 7</Text>
                  </Box>
                  <Box>
                    <Text>Pregunta 8</Text>
                    <Text fontSize='sm' mt='5px' color='urbanik.gray.medium'>Respuesta a pregunta 8</Text>
                  </Box>
                  <Box>
                    <Text>Pregunta 9</Text>
                    <Text fontSize='sm' mt='5px' color='urbanik.gray.medium'>Respuesta a pregunta 9</Text>
                  </Box>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box position='relative' my={{base:'25px', lg:'-20px'}} display={'none'/*temporal*/} >
            <Button position={{base:'static',lg:'absolute'}} right='0' 
              variant='outline' 
              colorScheme='urbanik.green' 
              borderRadius='30px'
              px='40px'
              py='20px' 
              _hover={{
                bg:'urbanik.green',
                color:'white',
              }}
            >
              <Flex>
                <Text py='5px'>
                  Ir a preguntas frecuentes
                </Text>
                <Box ml='5px' >
                  <MdArrowRightAlt size='25px' />
                </Box>
              </Flex>
            </Button>
          </Box>
        </Container>
      </SimpleGrid>
    </Container>
  );
};

const FinalBanner: React.FC = () => {
  return (
    <Container
      maxW='container.full'
      overflow="hidden" 
      bg='white'
      color='urbanik.white'
      p={{base:'2em 6vw 1em 6vw', lg:'2em 12.5vw 1em 12.5vw'}}
      fontWeight='bold'
      bgImage='url("/static/images/finalBanner.png")'
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize={{base:'350%',lg:'125%'}}
    >
      <Center>
        <Box fontSize={{base:'30px',lg:'40px'}} fontWeight='bold' mt='3%'>
          Invierte en un <Br display={{base:'', lg:'none'}} /> futuro sostenible
        </Box>
      </Center>
      <Box>
        <Center my={{base:'30px', lg:'4%'}}>
          <NextLink href='/signup'>
            <Button
              color='white'
              bg='#ffffff30'
              colorScheme='urbanik'
              variant='outline'
              borderRadius='200px'
              px='20px'
              py='17px'
              fontSize='15px'
              _hover={{
                bg:'urbanik.orange',
              }}
            >
              Crea una Cuenta
            </Button>
          </NextLink>
        </Center>
      </Box>
      
    </Container>
  );
};

export default Home;
export const getStaticProps = () => {
  return {
    props: {
      webNav: {
        display: 'none',
      },
    },
  }
}
