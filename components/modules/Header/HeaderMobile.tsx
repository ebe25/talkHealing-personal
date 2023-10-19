/* eslint-disable import/extensions */
import { useDisclosure } from '@mantine/hooks';
import {
  Drawer,
  Burger,
  Flex,
  Group,
  Text,
  Stack,
  Box,
  UnstyledButton,
  Image,
} from '@mantine/core';
import Link from 'next/link';
import { Images } from '@/public';
import { createStyle } from './HeaderMobile.style';

const navigationLinks = [
  { id: 1, label: 'Latest-Research', url: '/latest-research' },
  { id: 2, label: 'Experience-Sharing', url: '/experience-sharing' },
  { id: 3, label: 'Program-for-recovery', url: '/recovery-program' },
  { id: 4, label: 'Resources', url: '/resources' },
  { id: 5, label: 'Forum', url: '/forum' },
  { id: 6, label: 'Community', url: '/community' },
];
export default function HeaderMobile() {
  const [opened, { toggle }] = useDisclosure(false);
  const useStyles = createStyle();
  const { classes } = useStyles();
  return (
    <>
      <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" size="lg" />
      {/* Drawer content */}
      <Drawer
        opened={opened}
        onClose={toggle}
        position="left" // You can adjust the position as needed
        size="xs" // Adjust the size based on your design
        overlayProps={{ opacity: 0.5, blur: 4 }}
        withCloseButton={false}
      >
        {/* Mobile menu items */}
        <Flex direction="column" align="flex-start" h="90vh">
          <Link href="/">
            <Image src={Images.talkhealingLogo} width="134.008px" height="24px" mt={20} />
          </Link>
          <Box className={classes.drawerBody}>
            <Stack spacing={30}>
              {navigationLinks.map((link) => (
                <Text size="xl" weight={700} key={link.id} component="a" href={link.url}>
                  {link.label}
                </Text>
              ))}
            </Stack>
            {/* Login and Sign Up buttons */}
            <Group spacing="xl">
              <UnstyledButton>Login</UnstyledButton>
              <UnstyledButton>Sign Up</UnstyledButton>
            </Group>
          </Box>
        </Flex>
      </Drawer>
      {/* <Header /> */}
    </>
  );
}
