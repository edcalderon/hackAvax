import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'

import { Header, HeaderProps } from './header'
import { Footer, FooterProps } from './footer'
import { WebNav, WebNavProps } from './web-nav'
import {Landing, LandingProps} from './landing'


interface LayoutProps {
  children: ReactNode
  headerProps: HeaderProps
  footerProps: FooterProps
  webNavProps: WebNavProps
  landingProps: LandingProps
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, headerProps, footerProps, webNavProps, landingProps } = props
 
  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Header {...headerProps} />
        <Landing {...landingProps} >
          <SkipNavContent />
          {children}          
        </Landing>
      <Footer {...footerProps} />
      <WebNav {...webNavProps} >
        <Box>
          <SkipNavContent />
          {children}
        </Box>
      </WebNav>
    </Box>
  )
}
