import NextLink from 'next/link'
import { useRouter } from 'next/router';

import { 
  Box, 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink,
  Button, 
  ButtonGroup, 
  Center, 
  Circle, 
  Container, 
  Flex, 
  HStack, 
  Heading, 
  Image, 
  Spacer, 
  Text, 
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons';

import { BsArrowRight } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { useState } from 'react';




export default function Page() {
  const [userName, setUserName] = useState('Sara')
  const router = useRouter();
  
    return (
      <Container maxW='container.2xl' mt='5%'>
        <Box fontWeight='bold' mb='2%'>
          <Box fontSize='12px'>
            <Breadcrumb spacing='8px' >
              <BreadcrumbItem>
                <BreadcrumbLink href='/dashboard'>Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Proyectos demo</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box  fontSize='20px'>
            <Text> Hola, {userName}</Text>
          </Box>
        </Box>
        <Heading fontWeight='light' mb='1%'>
          Explora e invierte
        </Heading>      
          
        <ButtonGroup spacing={3} mb='3%'>
          <Button
            backgroundImage= 'linear-gradient(to top right, #01395340 0%, #01535140 50%, #FD7D0040  110%)'
            borderRadius='50px'
          > Medellín </Button>
          <Button borderRadius='50px'> Bogotá </Button>
          <Button borderRadius='50px'> Apartamentos </Button>
        </ButtonGroup>
        
        <HStack>
          <Box my='auto' maxW='350px' maxH='434px' mx='auto'>
            <NextLink href='#'>
              <Box position='relative'  
                    _hover={{
                      outline:'solid 2px',                      
                      outlineColor: 'urbanik.orange',
                      boxShadow:'5px 5px 5px black',
                      borderRadius:'45px'

                    }}>
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
                >
                  <HStack align={'baseline'}> <Text fontSize='18px' >HUG </Text> <Text>Vivienda Turística</Text></HStack>
                  <Flex>
                    <MdLocationPin size='15px' />
                    <Text fontSize='12px'>Medellín</Text>
                  </Flex>
                </Box>
              </Box>
            </NextLink>
          </Box>

          <Box my='auto' maxW='350px' maxH='434px' mx='auto' display={{base:'none', lg:'block'}}>
              <Box position='relative' 
                w='350px' h='434px'
                bg='#2a2e40'
                border='solid 2px'
                borderColor='urbanik.orange'
                borderRadius='45px'
                color='urbanik.orange'
               >
                <Box  alignSelf={'center'} fontSize='4xl' my='50%' ml='10%'>
                 <Text> Próximo <br/> Lanzamiento</Text>
                </Box>
              </Box>
          </Box>

          <Box my='auto' maxW='350px' maxH='434px' mx='auto' display={{base:'none', lg:'block'}}>
              <Box position='relative' 
                w='350px' h='434px'
                bg='#2a2e40'
                border='solid 2px'
                borderColor='urbanik.orange'
                borderRadius='45px'
                color='urbanik.orange'
               >
                <Box  alignSelf={'center'} fontSize='4xl' my='50%' ml='10%'>
                 <Text> Próximo <br/> Lanzamiento</Text>
                </Box>
              </Box>
          </Box>

        </HStack>
      </Container>
    )
  }

  
  export const getStaticProps = () => {
    return {
      props: {
        header: {
          display: 'none',
        },
        footer: {
          display: 'none',
        },
        landing:{
          display:'none'
        }
      },
    }
  }

  // #0b8793

  // .btn-grad {
  //   background-image: linear-gradient(to right, #70e1f5 0%, #ffd194  51%, #70e1f5  100%);
  //   margin: 10px;
  //   padding: 15px 45px;
  //   text-align: center;
  //   text-transform: uppercase;
  //   transition: 0.5s;
  //   background-size: 200% auto;
  //   color: white;            
  //   box-shadow: 0 0 20px #eee;
  //   border-radius: 10px;
  //   display: block;
  // }

  // .btn-grad:hover {
  //   background-position: right center; /* change the direction of the change here */
  //   color: #fff;
  //   text-decoration: none;
  // }

           
  // .btn-grad {
  //   background-image: linear-gradient(to right, #360033 0%, #0b8793  51%, #360033  100%);
  //   margin: 10px;
  //   padding: 15px 45px;
  //   text-align: center;
  //   text-transform: uppercase;
  //   transition: 0.5s;
  //   background-size: 200% auto;
  //   color: white;            
  //   box-shadow: 0 0 20px #eee;
  //   border-radius: 10px;
  //   display: block;
  // }

  // .btn-grad:hover {
  //   background-position: right center; /* change the direction of the change here */
  //   color: #fff;
  //   text-decoration: none;
  // }
 