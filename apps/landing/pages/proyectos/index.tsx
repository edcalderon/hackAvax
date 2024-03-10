import React from 'react';

import {Container } from '@chakra-ui/react';

/* import {
/* import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei"; */
/* import { Canvas } from "@react-three/fiber"; */

//import Shader from '../../components/Shader/Shader'


const Test: React.FC = () => {
    //const gltf = useGLTF('/static/3dModels/apartment.glb');
   // const shaderRef = useRef()
  return (
    <Container maxW="container.lg" mt={8} color='orangered'>
      {/* <Heading as="h1" mb={4}>Modelo 3D Interactivo</Heading>
      <Box h='25vw' w='100%'>
        {/* <Canvas>
        {/* <Canvas>
          <color attach="background" args={["#eee"]} />
          <OrbitControls/>





        <Suspense fallback={null}>
          <primitive object={gltf.scene}>


            <Shader ref={shaderRef} />
          </primitive>
        </Suspense>
        </Canvas>
      </Box> */}
    </Container>
  );
};

export default Test

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

