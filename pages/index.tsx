// import Profile from './profile';
// import Login from './login';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { Box, Center, Container, Loader } from '@mantine/core';

export default function HomePage() {
  const router = useRouter()
  useEffect(()=>{
    //later check if logged in here
    router.push("/login")
    return ()=>{

    }
  },[])
  return (
    <>
      {/* <Profile/> */}
    {/* <Login /> */}
    <Box >
      <Container>
        <Center h="100vh">
          <Loader size="xl"/>
        </Center>
      </Container>
    </Box>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
