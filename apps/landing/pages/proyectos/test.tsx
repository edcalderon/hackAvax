import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
/* import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber"; */

const Test: React.FC = () => {
  return (
    <Container maxW="container.lg" mt={8} color='orangered'>
      <Heading as="h1" mb={4}>Modelo 3D Interactivo</Heading>
      <Box h='25vw' w='100%'>
       {/*  <Canvas>
          <color attach="background" args={["#eee"]} />
          <pointLight position={[10, 10, 10]} />
          <Environment preset="dawn" />          
          <PerspectiveCamera makeDefault position={[10, 4, 5]} />
          <OrbitControls/>

          <Model/>
          <ContactShadows />
        </Canvas> */}
      </Box>
    </Container>
  );
};

/* function Model() {
  const gltf = useGLTF('/static/3dModels/apartment.glb');
  
  return <primitive object={gltf.scene} />;
} */

   export default Test;
   export const getStaticProps = () => {
    return {
      props: {
        header: {
          display: 'none',
        },
        footer: {
          display: 'none',
        },
        webNav:{
          display: 'none',
        }
      },
    }
  }
  
  