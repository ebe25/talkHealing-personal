/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Flex, Text, Group, Container, Image, useMantineTheme } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Images } from '@/public';
import { createStyle } from './Header.style';
import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';

function Header() {
  const theme = useMantineTheme();
  const { i18nStore, userStore } = useStores();
  const useStyles = createStyle();
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(false);
  const [searchText, setSearchText] = useState<string>('');
  const router = useRouter();

  const searchTextFunction = () => {
    const name = searchText.toLowerCase();
    if (name.length) {
      router.push(`./product-listing?search-product=${name}`);
    }
  };
  //   console.log(typography.paragraph[i18nStore.getCurrentLanguage()].p1);

  return (
    // <Box className={classes.containerBox}>
    <Container maw={1070} className={classes.containerBox}>
      {/**Header mainHeading */}
      <Flex w="100%" justify="space-between" align="center" mt="20px">
        <Link href="/">
          <Image src="/icons/Talkhealing_logo.png" width="134.008px" height="24px" />
        </Link>

        <BaseText
          fontWeight_variant={700}
          color={theme.colors.black[9]}
          onClick={() => router.push('./forum')}
          style={{ cursor: 'pointer' }}
        >
          Forum
        </BaseText>
        <BaseText
          fontWeight_variant={700}
          color={theme.colors.black[9]}
          onClick={() => router.push('./community')}
          style={{ cursor: 'pointer' }}
        >
          Community
        </BaseText>
        <SearchInput placeholder="Search..." />

        <Group>
          <BaseButton style_variant="filled" className={classes.loginButton} color_variant="lime">
            <Text
              style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
              onClick={() => {
                router.push('/');
              }}
            >
              Login
            </Text>
          </BaseButton>

          <BaseButton style_variant="filled" className={classes.loginButton} color_variant="blue">
            <Text
              style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
              onClick={() => {
                router.push('/');
              }}
            >
              Sign Up
            </Text>
          </BaseButton>
        </Group>
      </Flex>

      {/**Navlinks subheading */}
      <Flex
        justify="space-between"
        align="center"
        h={57}
        w={1050}
        className={classes.subHeadingText}
        mt="40px"
      >
        <Link href="/latest-research">
          <BaseText className={`${classes.navLinks} ${classes.cursor}`}>
            Latest research <Image src={Images.link_icon} width="9.333px" height="8px" />
          </BaseText>
        </Link>

        <Link href="/experience-sharing">
          <BaseText className={`${classes.navLinks} ${classes.cursor}`}>
            Experience sharing <Image src={Images.link_icon} width="9.333px" height="8px" />
          </BaseText>
        </Link>

        <BaseText className={`${classes.navLinks} ${classes.cursor}`}>
          Program for recovery <Image src={Images.link_icon} width="9.333px" height="8px" />
        </BaseText>

        <BaseText className={`${classes.navLinks} ${classes.cursor}`}>
          Resources <Image src={Images.link_icon} width="9.333px" height="8px" />
        </BaseText>
      </Flex>
    </Container>
  );
}

export default Header;
