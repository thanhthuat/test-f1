import React from 'react';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
const ScrollTop = () => {
  const trigger = useScrollTrigger({
    //   target: document.body,
    disableHysteresis: true,
    threshold: 200,
  });

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 999,
        }}
      >
        <Fab
          onClick={scrollToTop}
          // color="primary"
          size="small"
          sx={{
            opacity: "0.6",
            boxShadow: "0 0 14px -5px rgba(255, 255, 255)",
            borderRadius: "100%",
            ariaLabel: "scroll back to top",
            color:'#fff',
            backgroundColor: "rgb(0, 4, 3)",
            width: {
              xs: 36,
              md: 40,
            },
            height: {
              xs: 36,
              md: 40,
            },
            transition: "all 0.2s",
            "&:hover": {
              opacity: "1",
            },
          }}
        >
          <KeyboardArrowUp sx={{ fontSize: { xs: 24, md: 36, lg: 40 } }} />
        </Fab>
      </Box>
    </Zoom>
  );
};
export default ScrollTop;
