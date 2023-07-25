import React from 'react';
import { Box, Divider, Flex, Select, Stack, Switch } from '@mantine/core';

import useStyles from './Setting.styles';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import Router from 'next/router';
import { languageDetails } from '@/models/modules/i18n/schema';
import { TxKeyPath } from '@/i18n';

export const Settings = () => {
  const { i18nStore } = useStores();
  const { classes } = useStyles();

  const NOTIFICATION_CONTANT = [
    {
      label: 'profile.setting.push' as TxKeyPath,
    },
    {
      label: 'profile.setting.push' as TxKeyPath,
    },
    {
      label: 'profile.setting.push' as TxKeyPath,
    },
  ];

  return (
    <Box className={classes.container}>
      <BaseText
        txtkey="profile.setting.changeLanguage"
        style={typography.headings[i18nStore.getCurrentLanguage()].h5}
      />
      <Select
        mt={'10px'}
        placeholder="English"
        onChange={async (value) => {
          await i18nStore.setAppLanguage(value);
          Router.reload();
        }}
        defaultValue={i18nStore.getCurrentLanguage()}
        data={[
          { value: 'en', label: `${languageDetails.en.localName}` },
          { value: 'ar', label: `${languageDetails.ar.localName}` },
        ]}
      />
      <Divider my={'xl'} />

      <Stack>
        {NOTIFICATION_CONTANT.map((item, id) => {
          return (
            <Flex 
              justify={'space-between'} 
              align={'center'}
            >
              <BaseText txtkey={item.label} />
              <Switch onLabel="ON" offLabel="OFF" />
            </Flex>
          );
        })}
      </Stack>
    </Box>
  );
};
