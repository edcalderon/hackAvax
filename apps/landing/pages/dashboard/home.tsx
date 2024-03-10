import { Box } from "@chakra-ui/react"

export default function Page() {
  
    return (
      <>
      wenas wenas
      <Box h='200vh'/>
      Fin
      </>
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