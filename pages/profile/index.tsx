// React and next imports
import React from 'react';
// mantine component imports
import { Container, Tabs, TabsProps, useMantineTheme } from '@mantine/core';
import { typography } from '../../themes/Mantine/typography';
// components
import { BaseText } from '@/components/elements/BaseText/BaseText';
//styles import
import useStyles from './Profile.styles';
import { Account } from '@/components/modules/Account/Account';
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

  return (
    <Container maw={'1205px'}>
      <BaseText className={classes.title} txtkey="profile.heading" />
      <StyledTabs defaultValue="Account" >
        <Tabs.List>
          <Tabs.Tab value="Account" >Account</Tabs.Tab>
          <Tabs.Tab value="Addresses">Addresses</Tabs.Tab>
          <Tabs.Tab value="Settings">Settings</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Account"> <Account/> </Tabs.Panel>
        <Tabs.Panel value="Addresses">Gallery panel</Tabs.Panel>
        <Tabs.Panel value="Settings">Account panel</Tabs.Panel>
      </StyledTabs>
    </Container>
  );
};

export default Profile;
