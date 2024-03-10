import React from 'react';
import { Box } from '@chakra-ui/react';


const BackgroundVideo: React.FC = (props) => {
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
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }}
      >
        <source src={'/static/videos/bgVideo.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/*props.children*/}
    </Box>
  );
};
export default BackgroundVideo;