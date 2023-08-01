import React, { useEffect, useState } from 'react';
import { Box, Divider, Flex, Select, Stack, Switch } from '@mantine/core';

import useStyles from './Setting.styles';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';
import Router from 'next/router';
import { languageDetails } from '@/models/modules/i18n/schema';
import { TxKeyPath } from '@/i18n';

export const Settings = () => {
  const { i18nStore, settingsStore } = useStores();
  const { classes } = useStyles();
  const [notification, setNotification] = useState<any>({
    push_notification: null,
    email_notification: null,
    sms_notification: null,
  });

  const handleNotification = (data: any) => {
    settingsStore.editSettings(data).then((res) => {
      if (res.ok) {
        console.log('notifiaction has been updated');
      }
    });
  };

  useEffect(() => {
    settingsStore.getSettings().then((res) => {
      if (res.ok) {
        if (settingsStore.settings != null) {
          setNotification({
            push_notification: settingsStore.settings.push_notification,
            email_notification: settingsStore.settings.email_notification,
            sms_notification: settingsStore.settings.sms_notification,
          });
        }
      }
    });
  }, []);

  return (
    <Box className={classes.container}>
      <BaseText
        txtkey="profile.setting.changeLanguage"
        style={typography.headings[i18nStore.getCurrentLanguage()].h5}
      />
      <Select
        mt={'10px'}
        placeholder="English"
        onChange={async (value: any) => {
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
        <Flex justify={'space-between'} align={'center'}>
          <BaseText txtkey={'profile.setting.push'} />
          <Switch
            onLabel="ON"
            offLabel="OFF"
            defaultChecked={settingsStore.settings?.push_notification}
            onChange={() => {
              setNotification({
                ...notification,
                push_notification: !notification?.push_notification,
              });
              handleNotification({
                ...notification,
                push_notification: !notification?.push_notification,
              });
            }}
          />
        </Flex>
        <Flex justify={'space-between'} align={'center'}>
          <BaseText txtkey={'profile.setting.emailNotification'} />
          <Switch
            onLabel="ON"
            offLabel="OFF"
            defaultChecked={settingsStore.settings?.email_notification}
            onChange={() => {
              setNotification({
                ...notification,
                email_notification: !notification?.email_notification,
              });
              handleNotification({
                ...notification,
                email_notification: !notification?.email_notification,
              });
            }}
          />
        </Flex>
        <Flex justify={'space-between'} align={'center'}>
          <BaseText txtkey={'profile.setting.smsNotification'} />
          <Switch
            onLabel="ON"
            offLabel="OFF"
            defaultChecked={settingsStore.settings?.sms_notification}
            onClick={() => {
              setNotification({
                ...notification,
                sms_notification: !notification?.sms_notification,
              });
              handleNotification({
                ...notification,
                sms_notification: !notification?.sms_notification,
              });
            }}
          />
        </Flex>
      </Stack>
    </Box>
  );
};
