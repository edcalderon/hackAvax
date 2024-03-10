import { ReactNode } from 'react'
import { useRouter } from 'next/router';

import { 
  Box, 
  BoxProps, 
  Center, 
  Icon, 
  IconButton, 
  Image, 
  Link, 
  Menu, 
  MenuButton, 
  MenuDivider, 
  MenuGroup, 
  MenuItem, 
  MenuList, 
  Spacer, 
  useDisclosure
} from '@chakra-ui/react'
import {
  AppShell,
  Sidebar,
  SidebarSection,
  NavItem,
  SidebarToggleButton,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarLink,
  NavbarBrand,
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

export const WebNav: React.FC<WebNavProps> = ({ children, ...rest })=> {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  })
  const router = useRouter();

  return (
    <Box {...rest}>
      <AppShell
        variant="static"
        minH="$100vh"
        bg='urbanik.dark.medium'
        color='white'
        position="sticky"
        top="0"
        display={{base:'none', md:'flex'}}
        sidebar={
          <Sidebar colorScheme='urbanikDashboard' variant={isOpen ? 'default' : 'compact'} 
            h="$100vh"
        >
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
            <SidebarSection>
              <NavItem href='/dashboard/home'
                colorScheme='urbanik' 
                pl={isOpen ? '30%' : ''}  my='2%' 
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === '/dashboard/home' ? true : false}
                color={router.pathname === '/dashboard/home' ? 'urbanik.orange' : ''} 
                _hover={{
                  color: router.pathname != '/dashboard/home' ? 'urbanik.orange' : 'urbanik.paleOrange'
                }}
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <MdOutlineHome size='35px' />
                  </Box>
                } 
                > Home </NavItem>
            </SidebarSection>
            <SidebarSection>                
              <NavItem href='/dashboard/marketplace'
                colorScheme='urbanik' 
                pl={isOpen ? '30%' : ''}  my='2%' 
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === '/dashboard/marketplace' ? true : false}
                color={router.pathname === '/dashboard/marketplace' ? 'urbanik.orange' : ''} 
                _hover={{
                  color: router.pathname != '/dashboard/marketplace' ? 'urbanik.orange' : 'urbanik.paleOrange'
                }}
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <AiOutlineShopping size='35px' />
                  </Box>
                }
              > Marketpalce </NavItem>
            </SidebarSection>
            <SidebarSection>
              <NavItem href='/dashboard/wallet'
                colorScheme='urbanik' 
                pl={isOpen ? '30%' : ''}  my='2%' 
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === '/dashboard/wallet' ? true : false}
                color={router.pathname === '/dashboard/wallet' ? 'urbanik.orange' : ''}
                _hover={{
                  color: router.pathname != '/dashboard/wallet' ? 'urbanik.orange' : 'urbanik.paleOrange'
                }}
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <MdOutlineAccountBalanceWallet size='35px' />
                  </Box>
                }
              > Billetera </NavItem>
            </SidebarSection>
            <SidebarSection>
              <NavItem href='/dashboard/projects'
                colorScheme='urbanik' 
                pl={isOpen ? '30%' : ''}  my='2%' 
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === '/dashboard/projects' ? true : false}
                color={router.pathname === '/dashboard/projects' ? 'urbanik.orange' : ''}
                _hover={{
                  color: router.pathname != '/dashboard/projects' ? 'urbanik.orange' : 'urbanik.paleOrange'
                }}
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <MdOutlineRocketLaunch size='35px' />
                  </Box>
                }
              > Proyectos </NavItem>
            </SidebarSection>
            <SidebarSection >
              <NavItem href='/dashboard/profile'
                colorScheme='urbanik' 
                pl={isOpen ? '30%' : ''}   
                size='sm' 
                fontSize='lg'
                fontWeight='bold' 
                variant='left-accent' 
                isActive={router.pathname === '/dashboard/profile' ? true : false}
                color={router.pathname === '/dashboard/profile' ? 'urbanik.orange' : ''} 
                _hover={{
                  color:router.pathname != '/dashboard/profile' ? 'urbanik.orange' : 'urbanik.paleOrange'
                }}
                icon={
                  <Box mr={isOpen ? '5vw' : '0'}>
                    <FiUser size='35px' />
                  </Box>
                } 
              > Perfil </NavItem>
            </SidebarSection>
            <Spacer />
            <Spacer />
            <Spacer />
            <SidebarSection >
              <Menu colorScheme='urbanikDashboard'>
                <MenuButton >
                  <NavItem 
                  colorScheme='urbanik' 
                  pl={isOpen ? '20%' : ''}  
                  size='sm' 
                  fontSize='md'
                  fontWeight='bold'
                   
                  icon={
                    <Box mr={isOpen ? '1vw' : ''}>
                      <FiSettings size='30px' />
                    </Box>
                  }
                > Configuración </NavItem>
                </MenuButton>
                <MenuList >
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuList>
              </Menu>
              
            </SidebarSection>
            <SidebarSection >
              <NavItem  
                color='urbanik.orange'
                colorScheme='urbanik' 
                pl={isOpen ? '20%' : ''} 
                size='sm' 
                fontSize='md'
                fontWeight='bold'
                href='' 
                _hover={{
                  color:'urbanik.paleOrange'
                }}
                icon={
                  <Box mr={isOpen ? '1vw' : ''}>
                    <MdOutlineExitToApp size='30px' />
                  </Box>
                }
              > Salir </NavItem>
            </SidebarSection>
          </Sidebar>
        }
      >
        <Box as="main" flex="1" py="2" px="4" bg='urbanik.dark.medium' w='100%'>
          {children}
        </Box>
      </AppShell>
      <AppShell 
        bg='urbanik.dark.medium'
        display={{base:'block', md:'none'}}
        color='white'
        minH="100vh"
        navbar={
          <Navbar
            w='100vw'
            maxH='15vw'
            zIndex='sticky'
            position='fixed'
            top= '0'
            left= '0'
            px='5%' pt='2%' pb='1%'
            bg='#35394a40'
          >
            <NavbarBrand>
              <Image
                src="/static/logoUrbanik/naranja.png"
                w='45%'
              /> 
            </NavbarBrand>
            <Spacer/>
            <Menu>
              <MenuButton>
                <Icon w='25px' viewBox="0 0 30 15" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 48097077">
                        <line id="Line 21" x1="1.31134e-07" y1="1.5" x2="21" y2="1.5" stroke='white' stroke-width="3"/>
                        <line id="Line 22" x1="25" y1="1.5" x2="30" y2="1.5" stroke='white' stroke-width="3"/>
                        <line id="Line 24" y1="13.5" x2="5" y2="13.5" stroke='white' stroke-width="3"/>
                        <line id="Line 23" x1="10" y1="13.5" x2="30" y2="13.5" stroke='white' stroke-width="3"/>
                    </g>
                </Icon>
              </MenuButton>
              <MenuList>
                <MenuGroup title={'Configuración'}>
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuItem>Salir</MenuItem>
              </MenuList>
            </Menu>


          </Navbar>
        }
        footer={
          <Navbar
            maxW='100vw'
            h='13vh'
            position= 'fixed'
            bottom= '0'
            left= '0'
            bg='urbanik.dark.light'
            borderTopRadius='15px'
          >
            <Spacer/>
            <NavbarContent
              alignContent='center'
              alignItems='center'
              spacing={5}
            >
              <NavbarItem>
                <NavbarLink href='#'>
                  <MdOutlineHome/>
                </NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink>
                  <AiOutlineShopping/>
                </NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink>
                  <MdOutlineAccountBalanceWallet/>
                </NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink>
                  <MdOutlineRocketLaunch/>
                </NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink>
                  <FiUser/>
                </NavbarLink>
              </NavbarItem>
            </NavbarContent>
            <Spacer/>
          </Navbar>
        }
      >        
        <Box as="main" pt='16vw' pb="2" px="4" 
        >
          {children}
        </Box>        
      </AppShell>
   </Box>
  )
}
