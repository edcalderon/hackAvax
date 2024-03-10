import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const BackgroundImage: React.FC = (props) => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      overflow="hidden"
      zIndex="-10"
    >
      <Image src='/static/images/building_place_holder.jpg' alt='bgImg'
      style={{
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        filter: 'blur(3px)'

      }}
      display={{base:'none', lg:'block'}}
      />
      {/*props.children*/}
    </Box>
  );
};
export default BackgroundImage;