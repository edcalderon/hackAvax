import { ReactNode } from 'react'
import { useRouter } from 'next/router';

import { 
  Box, 
  BoxProps, 
  Center, 
  IconButton, 
  Image, 
  Link, 
  Spacer, 
  useDisclosure
} from '@chakra-ui/react'
import {
  AppShell,
  Sidebar,
  SidebarSection,
  NavItem,
  SidebarToggleButton,
} from '@saas-ui/react'

import { 
  MdOutlineHome, 
  MdOutlineAccountBalanceWallet,
  MdOutlineRocketLaunch, 
  MdOutlineExitToApp    
} from "react-icons/md";
import { FiChevronsLeft, FiChevronsRight, FiSettings , FiUser } from 'react-icons/fi'
import { AiOutlineShopping } from "react-icons/ai";

export interface WebNavProps extends Omit<BoxProps, 'children'>{
  children: ReactNode
}

export const WebNav: React.FC<WebNavProps> = (props)=> {
  const { ...rest } = props

  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  })
  const { children } = props

  const router = useRouter();
  return (
    <Box {...rest}>
      <AppShell
        variant="static"
        minH="$100vh"
        bg='urbanik.dark.medium'
        color='white'
        sidebar={
          <Sidebar colorScheme='urbanikDashboard' variant={isOpen ? 'default' : 'compact'}>
            <SidebarToggleButton />
            <SidebarSection direction="column">
              <Center>
                {isOpen ? (
                  <Image
                    src="/static/logoUrbanik/naranja.png"
                    w='65%'
                  /> 
                ):(
                  <Image
                    src="/static/logoUrbanik/logoApp.png"
                  />
              )}
              </Center>
              <Center>
              <Box  w='85%' h='2vh' 
                borderBottom='solid 2px'
                borderBottomColor='white'
              />
              </Center>
            </SidebarSection>
            <Box position='relative'>
              <IconButton
                  onClick={onToggle}
                  variant="solid"
                  size="xs"
                  icon={isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
                  aria-label="Toggle Sidebar"
                  position='absolute'
                  right={-3}
                  color='black'
                  bg='white'
                  _hover={{
                    border:'solid 1px',
                    borderColor:'urbanik.orange',
                    
                  }}
                />

            </Box>
            <Spacer />
            <SidebarSection aria-label="Main" >
              <NavItem 
                colorScheme='urbanik' 
                pl='30%' my='2%' 
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === '/dashboard' ? true : false}
                color={router.pathname === '/dashboard' ? 'urbanik.orange' : ''} 
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <MdOutlineHome size='35px' />
                  </Box>
                } 
                > Home </NavItem>
            </SidebarSection>
            <SidebarSection>                
              <NavItem 
                colorScheme='urbanik' 
                pl='30%' my='2%' 
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === './dashboard' ? true : false}
                color={router.pathname === './dashboard' ? 'urbanik.orange' : ''} 
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <AiOutlineShopping size='35px' />
                  </Box>
                }
              > Marketpalce </NavItem>
            </SidebarSection>
            <SidebarSection>
              <NavItem 
                colorScheme='urbanik' 
                pl='30%' my='2%' 
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === './dashboard' ? true : false}
                color={router.pathname === './dashboard' ? 'urbanik.orange' : ''} 
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <MdOutlineAccountBalanceWallet size='35px' />
                  </Box>
                }
              > Billetera </NavItem>
            </SidebarSection>
            <SidebarSection>
              <NavItem 
                colorScheme='urbanik' 
                pl='30%' my='2%' 
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === './dashboard' ? true : false}
                color={router.pathname === './dashboard' ? 'urbanik.orange' : ''} 
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <MdOutlineRocketLaunch size='35px' />
                  </Box>
                }
              > Proyectos </NavItem>
            </SidebarSection>
            <SidebarSection >
              <NavItem 
                colorScheme='urbanik' 
                pl='30%'  
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === './dashboard' ? true : false}
                color={router.pathname === './dashboard' ? 'urbanik.orange' : ''} 
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <FiUser size='35px' />
                  </Box>
                } 
              > Perfil </NavItem>
            </SidebarSection>
            <Spacer />
            <SidebarSection >
              <NavItem 
                colorScheme='urbanik' 
                pl='20%' 
                size='sm' 
                fontSize='md'
                fontWeight='bold' 
                icon={
                  <Box mr={isOpen ? '1vw' : '0'}>
                    <FiSettings size='30px' />
                  </Box>
                }
              > Configuración </NavItem>
            </SidebarSection>
            <SidebarSection >
              <NavItem  
                color='urbanik.orange'
                colorScheme='urbanik' 
                pl='20%' 
                size='sm' 
                fontSize='md'
                fontWeight='bold' 
                icon={
                  <Box mr={isOpen ? '1vw' : '0'}>
                    <MdOutlineExitToApp size='30px' />
                  </Box>
                }
              > Salir </NavItem>
            </SidebarSection>
          </Sidebar>
        }
      >
        <Box as="main" flex="1" py="2" px="4">
          {children}
        </Box>
      </AppShell>
   </Box>
  )
}