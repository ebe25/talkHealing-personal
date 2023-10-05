import React, { useState } from 'react';
import { Flex, Text, Group, Container, Image, useMantineTheme } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { Images } from '@/public';
import { createStyle } from './Header.style';
import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';

import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import Link from 'next/link';

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
      <Flex w={1040} justify="space-between" align="center" mt="40px">
        <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p1}> Talkhealing </Text>
        <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}> Forum</Text>
        <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}> Community</Text>
        <SearchInput />

        <Group>
          <BaseButton style_variant="filled" color_variant="green" className={classes.loginButton}>
            <Text
              style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
              onClick={() => {
                router.push('./login');
              }}
            >
              Login
            </Text>
          </BaseButton>

          <BaseButton style_variant="filled" className={classes.loginButton} color_variant="blue">
            <Text
              style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
              onClick={() => {
                router.push('./signup');
              }}
            >
              Sign Up
            </Text>
          </BaseButton>
        </Group>
      </Flex>

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
      

        <BaseText className={`${classes.navLinks} ${classes.cursor}`}>
          Experience sharing <Image src={Images.link_icon} width="9.333px" height="8px" />
        </BaseText>

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
