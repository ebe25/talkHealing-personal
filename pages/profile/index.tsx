// React and next imports
import React from 'react';
// mantine component imports
import { Container, Flex, Tabs, useMantineTheme } from '@mantine/core';
// components
import { BaseText } from '@/components/elements/BaseText/BaseText';
//styles import
import { createStyle } from './Profile.styles';
import { Account } from '@/components/modules/Account/Account';
import { Address } from '@/components/modules/Address/Address';
import { Settings } from '@/components/modules/Settings/Settings';
import { translate } from '@/i18n';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { useDisclosure } from '@mantine/hooks';
import { LogOutModal } from '@/components/modules/Modals/ProfileModals/LogOutModal/LogOutModal';
import { DeleteAccountModal } from '@/components/modules/Modals/ProfileModals/DeleteAccountModal/DeleteAccountModal';
//stores

const Profile = () => {
  const useStyles=createStyle()
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const deleteAccountModal = useDisclosure(false); 

  return (
    <>
    <Container maw={'1000px'}>
      <BaseText className={classes.title} txtkey="profile.heading" />

      <Tabs classNames={{
        tab:classes.tab,
        tabsList:classes.tabsList
      }} defaultValue="Account" >
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
              style_variant={ 'outline'}
              color_variant={'red'}
              onClick={deleteAccountModal[1].open}
            >
              <BaseText 
                txtkey="global.button.deleteAccount" 
                color={theme.colors.red[4]}
              />
            </BaseButton>
            <BaseButton
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
      </Tabs>
    </Container>
    <LogOutModal
      onClose={close}
      opened={opened}
    />
    <DeleteAccountModal
      onClose={deleteAccountModal[1].close}
      opened={deleteAccountModal[0]}
    />
    </>
  );
};

export default Profile;
