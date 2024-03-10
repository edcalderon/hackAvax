export default function Page() {
  
    return (
      <>
      wenas wenas
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