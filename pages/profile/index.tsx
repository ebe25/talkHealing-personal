// React and next imports
import React from 'react';
// mantine component imports
import { Container, Flex, Tabs, TabsProps, useMantineTheme } from '@mantine/core';
import { typography } from '../../themes/Mantine/typography';
// components
import { BaseText } from '@/components/elements/BaseText/BaseText';
//styles import
import useStyles from './Profile.styles';
import { Account } from '@/components/modules/Account/Account';
import { Address } from '@/components/modules/Address/Address';
import { Settings } from '@/components/modules/Settings/Settings';
import { translate } from '@/i18n';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { useDisclosure } from '@mantine/hooks';
import { LogOutModal } from '@/components/modules/Modals/ProfileModals/LogOutModal/LogOutModal';
//stores

function StyledTabs(props: TabsProps) {
    return (
      <Tabs
        unstyled
        styles={(theme) => ({
            tab: {
                ...theme.fn.focusStyles(),
                color: theme.colors.gray[6] ,
                marginTop: "30px",
                width:"99px",
                height:"38px",
                borderRadius: "33px",
                border:"none",
                backgroundColor: "transparent",
                ...typography.buttonText.en.b4,
                // border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}`,
                // padding: `${theme.spacing.xs} `,
                padding: "10px 18px 10px 18px",
                cursor: 'pointer',
                fontSize: theme.fontSizes.sm,
                display: 'flex',
                alignItems: 'center',
            
                '&:hover': {
                    backgroundColor: theme.colors.blue[9],
                  borderColor: "none",
                  color: theme.colors.blue[7],
                },
                '&:disabled': {
                    opacity: 0.5,
                    cursor: 'not-allowed',
                },
            
                '&:not(:first-of-type)': {
                  borderLeft: 0,
                },
            
                // '&:first-of-type': {
                //   borderTopLeftRadius: theme.radius.md,
                //   borderBottomLeftRadius: theme.radius.md,
                // },
            
                // '&:last-of-type': {
                //   borderTopRightRadius: theme.radius.md,
                //   borderBottomRightRadius: theme.radius.md,
                // },
            
                '&[data-active]': {
                  backgroundColor: theme.colors.blue[9],
                  borderColor: "none",
                  color: theme.colors.blue[7],
                },
              },
  
          tabIcon: {
            marginRight: theme.spacing.xs,
            display: 'flex',
            alignItems: 'center',
          },
  
          tabsList: {
            display: 'flex',
          },
        })}
        {...props}
      />
    );
  }

const Profile = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false); 

  return (
    <>
    <Container maw={'1000px'}>
      <BaseText className={classes.title} txtkey="profile.heading" />

      <StyledTabs defaultValue="Account" >
      <Flex
        justify={"space-between"}
        align={"baseline"}
        wrap={"wrap"}
      >
        <Tabs.List>
          <Tabs.Tab value="Account" > {translate("profile.tabOne")} </Tabs.Tab>
          <Tabs.Tab value="Addresses">{translate("profile.tabTwo")}</Tabs.Tab>
          <Tabs.Tab value="Settings">{translate("profile.tabThree")}</Tabs.Tab>
        </Tabs.List>

      <Flex
        gap={"lg"}
        className={classes.deleteAndLogout}
      >
            <BaseButton
              w={'100%'}
              h={'40px'}
              style_variant={ 'outline'}
              color_variant={'red'}
            >
              <BaseText 
                txtkey="global.button.deleteAccount" 
                color={theme.colors.red[4]}
              />
            </BaseButton>
            <BaseButton
              w={'100%'}
              h={'40px'}
              style_variant={ 'outline'}
              color_variant={ 'red'}
              onClick={open}
            >
              <BaseText txtkey="global.button.logOut" color={theme.colors.red[4]} />
            </BaseButton>

      </Flex>
      </Flex>
        <Tabs.Panel value="Account"> <Account/> </Tabs.Panel>
        <Tabs.Panel value="Addresses"> <Address/> </Tabs.Panel>
        <Tabs.Panel value="Settings"><Settings/></Tabs.Panel>
      </StyledTabs>
    </Container>
    <LogOutModal
      onClose={close}
      opened={opened}
    />
    </>
  );
};

export default Profile;
