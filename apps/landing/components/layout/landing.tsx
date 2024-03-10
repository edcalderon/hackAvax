import { ReactNode } from 'react'

import { 
  Box, 
  BoxProps,
} from '@chakra-ui/react'


export interface LandingProps extends Omit<BoxProps, 'children'>{
  children: ReactNode
}

export const Landing: React.FC<LandingProps> = (props)=> {
  const { children, ...rest } = props
  return (
    <Box {...rest}>
        <Box as="main">
          {children}
        </Box>
   </Box>
  )
}