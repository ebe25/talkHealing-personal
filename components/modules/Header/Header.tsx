import React, { useState } from 'react';
import { Flex, Box, Text, Group, Grid,Container } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

import { createStyle } from './Header.style';

import { useStores } from '@/models';
import { typography } from '@/themes/Mantine/typography';
import { SearchInput } from '@/components/elements/SearchInput/SearchInput';

import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
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
    let name = searchText.toLowerCase();
    if (name.length) {
      router.push(`./product-listing?search-product=${name}`);
    }
  };
  //   console.log(typography.paragraph[i18nStore.getCurrentLanguage()].p1);

  return (
    // <Box className={classes.containerBox}>
    <Container maw={1070} className={classes.containerBox}>  
        <Flex w={1040} justify={'space-between'} align={'center'} mt={'40px'}>
          <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p1}> Talkhealing </Text>
          <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}> Forum</Text>
          <Text style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}> Community</Text>
          <SearchInput />

          <Group >
            <BaseButton
              style_variant="filled"
              color_variant="green"
              className={classes.loginButton}
            >
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
          justify={'space-between'}
          align={'center'}
          h={57}
          w={1050}
          bg={theme.colors.gray[0]}
          className={classes.subHeadingText}
          mt={'40px'}
            // style={typography.paragraph[i18nStore.getCurrentLanguage()].p5}
            // color="black"
            // fontWeight_variant={600}
          >
            <BaseText>Latest research</BaseText>
            <BaseText>Experience sharing</BaseText>
            <BaseText>Program for recovery</BaseText>
            <BaseText>Resources</BaseText>
          </Flex>
          </Container>

  );
}

export default Header;
