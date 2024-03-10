import * as React from 'react'

import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  CloseButton,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  LinkProps,
  Stack,
  forwardRef,
  useDisclosure,
  useUpdateEffect,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { AnimatePresence, motion, useElementScroll, useScroll } from 'framer-motion'
import siteConfig from 'data/config';
import { MobileNavButton, MobileNavContent } from 'components/mobile-nav';
import { useRouter } from 'next/router';
import { useScrollSpy } from 'hooks/use-scrollspy';
import { NavLink } from 'components/nav-link';
import { MdLanguage, MdOutlineMenu } from 'react-icons/md';
import { RemoveScroll } from 'react-remove-scroll';
import { Logo } from './logo';

export interface HeaderProps extends Omit<BoxProps, 'children'> {}

export const Header = (props: HeaderProps) => {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  
  const mobileNav = useDisclosure();
  const router = useRouter();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  const closeBtnRef = React.useRef<HTMLButtonElement>(null)

  const logocolor = '/static/logoUrbanik/color.png';
  const logonaranja = '/static/logoUrbanik/naranja.png';

  const bg = 'white'

  return (
    <Box
      ref={ref}
      as="header"
      pt={y > height ? '1em': '2em'}
      w="full"
      position="fixed"
      zIndex="sticky"
      borderColor="whiteAlpha.100"
      transitionProperty="common"
      transitionDuration="normal"
      bg={y > height ? bg : ''}
      boxShadow={y > height ? 'md' : ''}
      borderBottomWidth={y > height ? '1px' : ''}
      {...props}
    >
      <Box maxW="container.full" px={{base:'6vw',lg:'12.5vw'}} py="4">
        <Flex width="full" align="center" justify='space-between'> 
          <Link
            href={'/'}
            display="flex"
            p="0"
            borderRadius="sm"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            }}
          >
            <Image
            height={{base:'30px',lg:'40px'}}
            src={y > height ? logocolor : logonaranja}
            alt='logo Urbanik naraja'
            />
          </Link>        
          <HStack spacing="3" flexShrink={0}>
            {siteConfig.header.links.map(({ href, id, ...props }, i) => {
              return (
                  <NavLink
                    display={["none", null, "block"]}
                    href={href || `/#${id}`}
                    key={i}
                    variant={y > height ? 'nav-link-scroll': 'nav-link'}
                    color={id == 'Ingresar'? 'white': y > height ? 'black':'white'}
                    fontSize='16px'
                    isActive={
                      !!(
                        (id && activeId === id) ||
                        (href && !!router.asPath.match(new RegExp(href)))
                        )
                      }
                      {...props}
                      >
                    {props.label}
                  </NavLink>
              );
            })}
            {/*
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              icon={<MdLanguage size="24"/>}
              bg='none'
              aria-label="theme toggle"
              color={y > height ?'black':'white'}
            />
             */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              fontSize="20px"
              bg='none'
              onClick={mobileNav.onOpen}
              aria-label="Open Menu"
              icon={
                <Icon w='25px' viewBox="0 0 30 15" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group 48097077">
                      <line id="Line 21" x1="1.31134e-07" y1="1.5" x2="21" y2="1.5" stroke={y > height ?'black':'white'} stroke-width="3"/>
                      <line id="Line 22" x1="25" y1="1.5" x2="30" y2="1.5" stroke={y > height ?'black':'white'} stroke-width="3"/>
                      <line id="Line 24" y1="13.5" x2="5" y2="13.5" stroke={y > height ?'black':'white'} stroke-width="3"/>
                      <line id="Line 23" x1="10" y1="13.5" x2="30" y2="13.5" stroke={y > height ?'black':'white'} stroke-width="3"/>
                  </g>
                </Icon>
              }
            /> 
            <MobileNavContent onClose={mobileNav.onClose} />
            <AnimatePresence>
              {mobileNav.isOpen && (
                <RemoveScroll forwardProps>
                  <motion.div
                    transition={{ duration: 0.08 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Flex
                      direction="column"
                      w="100%"
                      bg='white'
                      overflow="auto"
                      pos="absolute"
                      top="0"
                      left="0"
                      zIndex="modal"
                      pb="8"
                      backdropFilter="blur(5px)"
                    >
                      <Box>
                        <Flex justify="space-between" px="8" pt="4" pb="4">
                          <Logo />
                          <HStack spacing="5" color='black'>
                            <CloseButton ref={closeBtnRef} onClick={mobileNav.onClose} />
                          </HStack>
                        </Flex>
                      
                        <Stack alignItems="stretch" spacing="0">
                          {siteConfig.header.links.map(
                            ({ href, id, label, ...props }, i) => {
                              return (
                                <MobileNavLink
                                  display={id == 'lang'? 'none':undefined}
                                  href={href || `/#${id}`}
                                  key={i}
                                  {...(props as any)}
                                >
                                  {label}
                                </MobileNavLink>
                              )
                            }
                          )}
                        </Stack>
                      </Box>
                    </Flex>
                  </motion.div>
                </RemoveScroll>
              )}
            </AnimatePresence>
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
};
interface NavLinkProps extends LinkProps {
  label: string
  href?: string
  isActive?: boolean
}

function MobileNavLink({ href, children, isActive, ...rest }: NavLinkProps) {
  const { pathname } = useRouter()
  const bgActiveHoverColor = 'whiteAlpha.100'

  const [, group] = href?.split('/') || []
  isActive = isActive ?? pathname.includes(group)

  return (
    <Link
      href={href}
      display="inline-flex"
      flex="1"
      minH="40px"
      px="8"
      py="3"
      transition="0.2s all"
      fontWeight={isActive ? 'semibold' : 'medium'}
      borderColor={isActive ? 'purple.400' : undefined}
      borderBottomWidth="1px"
      color={isActive ? 'white' : 'black'}
      _hover={{
        bg: isActive ? 'urbanik.orange' : bgActiveHoverColor,
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}