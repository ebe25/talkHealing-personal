import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  link: {
    cursor:"pointer",
    textDecoration: "none"
  },
  loaderBox : {
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100vh',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }
  
}));