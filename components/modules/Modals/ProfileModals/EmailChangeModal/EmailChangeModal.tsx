// react and nextb import
import React from 'react';
// mantine component
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { Box, Flex, Image, useMantineTheme } from '@mantine/core';
// styles component
import {createStyle} from './EmailChangeModal.styles';
// internals components
import { EmailChangeOtpModal } from '../EmailChangeOtpModal/EmailChangeOtpModal';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '../../../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
// others import
import { Images } from '@/public';
import { translate } from '@/i18n';
import { Input } from '@/components/elements/Input/Input';
import { boilerPlateStyles } from '@/utils/styles/styles';

export const EmailChangeModal = (props: { opened?: any; onClose?: any }) => {
  const { i18nStore } = useStores();
  const emailOTP = useDisclosure(false);
  const theme = useMantineTheme();
  const useStyles=createStyle()
  const { classes } = useStyles();
  const changeMail = useForm({
    initialValues: {
      email: ''
    },
    validate: {
      email: (value) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        ? null
        : translate("profile.error.mailError"),
    },
  });

  const handlePasswordChange = () => {
    let results = changeMail.validate();
    if (results.hasErrors) return;
    if (!changeMail.isValid()) return;
    else{
        props.onClose();
        changeMail.reset();
        emailOTP[1].open()
    }
  };

  return (
    <>
    <BaseModal
      size={'sm'}
      padding={'30px'}
      radius={'xl'}
      opened={props.opened}
      onClose={() => {
        props.onClose();
        changeMail.reset();
      }}
      withCloseButton={false}
    >
      <form onSubmit={changeMail.onSubmit((values) => console.log(values))}>
        <Flex direction={'column'} justify={'space-between'} w={'100%'} h={"300px"} >
          <Flex direction={i18nStore.isRTL?"row-reverse":"row"} justify={'space-between'} align={'center'}>
            <BaseText
              txtkey="profile.modal.changeEmail"
              style={typography.headings[i18nStore.getCurrentLanguage()].h6}
              color={theme.colors.dark[8]}
            />

            <Image
              onClick={() => {
                props.onClose();
                changeMail.reset();
              }}
              style={boilerPlateStyles.cursor}
              src={Images.close_modal_icon}
              alt="close_modal_icon"
              width={'14px'}
              height={'14px'}
            />
          </Flex>
          <BaseText
            ta={i18nStore.isRTL?"right":"left"}
            txtkey='profile.modal.emailPara'
            style={typography.paragraph[i18nStore.getCurrentLanguage()]["p1.5"]}
            color={theme.colors.gray[6]}
          />
          <Box>
            <BaseText
              className={classes.input}
              txtkey="profile.modal.email"
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
            <Input
                placeholder={`${translate("profile.email")}`}
                style_variant={'inputText2'} 
                component={'input'}
                variant='default'
                classNames={{
                  input: classes.input
                }}
                {...changeMail.getInputProps('email')}
            />
          </Box>
          <BaseButton
            mt={'30px'}
            w={'100%'}
            h={'40px'}
            style_variant={!changeMail.isValid() ? 'disabled' : 'filled'}
            color_variant={!changeMail.isValid() ? 'gray' : 'blue'}
            onClick={handlePasswordChange}
          >
            <BaseText txtkey="global.button.continue" />
          </BaseButton>
        </Flex>
      </form>
      </BaseModal>
      <EmailChangeOtpModal
        opened={emailOTP[0]}
        onClose={emailOTP[1].close}
      />
    </>
  );
};
