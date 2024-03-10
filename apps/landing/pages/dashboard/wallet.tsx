export default function Page() {
  
    return (
      <>
      wallet wenas wenas
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