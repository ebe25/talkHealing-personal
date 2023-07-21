import React from 'react';
import { Box, Divider, Flex, Select, Stack, Switch  } from '@mantine/core';

import useStyles from './Setting.styles';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import  Router  from 'next/router';
import { languageDetails } from '@/models/modules/i18n/schema';

export const Settings = () => {
  const { i18nStore } = useStores();
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
        <BaseText
            txtkey="profile.setting.changeLanguage"
            style={typography.headings[i18nStore.getCurrentLanguage()].h5}
        />
        <Select
            mt={"10px"}
            // classNames={{
            //   input: classes.input,
            //   dropdown: classes.dropdown,
            //   item: classes.item,
            // }}
            placeholder="English"
            onChange={async (value) => {
              await i18nStore.setAppLanguage(value);
              Router.reload();
            }}
            // rightSection={
            //   <Image
            //     src={Images.dropdown_chevron_icon}
            //     alt="dropdown_chevron_icon"
            //     height={"6px"}
            //     width={"11px"}
            //   />
            // }
            defaultValue={i18nStore.getCurrentLanguage()}
            data={[
              { value: "en", label: `${languageDetails.en.localName}` },
              { value: "ar", label: `${languageDetails.ar.localName}` },
            ]}
        />
        <Divider
            my={"xl"}
        />

        <Stack>
          <Flex
            justify={"space-between"}
            align={"center"}
          >
            <BaseText
                txtkey='profile.setting.push'
            /> 
            <Switch onLabel="ON" offLabel="OFF" />
          </Flex>
          <Flex
            justify={"space-between"}
            align={"center"}
          >
            <BaseText
                txtkey='profile.setting.emailNotification'
            /> 
            <Switch onLabel="ON" offLabel="OFF" />
          </Flex>
          <Flex
            justify={"space-between"}
            align={"center"}
          >
            <BaseText
                txtkey='profile.setting.smsNotification'
            /> 
            <Switch onLabel="ON" offLabel="OFF" />
          </Flex>
        </Stack>
    </Box>
  );
};
