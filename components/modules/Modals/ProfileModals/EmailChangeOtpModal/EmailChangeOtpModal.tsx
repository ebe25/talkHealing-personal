// react and nextb import
import React from 'react';
// mantine component
import { Flex, Image, PinInput, Stack, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// style import
// internals components
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '../../../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
// others import
import { useForm } from '@mantine/form';
import { Images } from '@/public';
import { FinalModal } from '../FinalModal/FinalModal';

export const EmailChangeOtpModal = (props: { opened?: boolean; onClose?: any }) => {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false); 

  const otpVerify = useForm({
    initialValues: {
      otp: ''
    },
    validate: {
        otp: (value) =>{ 
            if(value.length != 4) return "Please enter OTP"
        }
    },
  });

    const handlePasswordChange = () => {
        let results = otpVerify.validate();
        if (results.hasErrors) return;
        console.log("otp",otpVerify.values.otp);
        if (!otpVerify.isValid()) return;
        else{
            props.onClose();
            otpVerify.reset()
            open()
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
      }}
      withCloseButton={false}
    >
        <Flex direction={'column'} justify={'space-between'} w={'100%'} h={"350px"} >
          <Flex justify={'space-between'} align={'center'}>
            <BaseText
              txtkey="profile.modal.verifyOtp"
              style={typography.headings[i18nStore.getCurrentLanguage()].h6}
              color={theme.colors.dark[8]}
            />

            <Image
              onClick={() => {
                props.onClose();
              }}
              src={Images.close_modal_icon}
              alt="close_modal_icon"
              width={'14px'}
              height={'14px'}
            />
          </Flex>
            <BaseText
              txtkey="profile.modal.emailOtpPara"
              my={"36px"}
              color={theme.colors.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
            />
          <Stack  >
                <PinInput
                    variant='filled'
                    placeholder=''
                    // className={classes.input}
                    type={"number"}
                    size={'55px'}
                    spacing={"30px"}
                    // value={otp}
                    // onChange={setOtp}
                    {...otpVerify.getInputProps('otp')}
                />
            </Stack>
            <Flex
                w={"100%"}
                justify={"center"}
                my={"45px"}
            >

                <BaseText
                    txtkey='profile.modal.resendCode'
                    style={typography.label[i18nStore.getCurrentLanguage()].l1}
                />
                &nbsp;
                <BaseText
                    txtkey='profile.modal.resendText'
                    style={typography.label[i18nStore.getCurrentLanguage()].l1}
                    color={theme.colors.blue[4]}
                />
            </Flex>
            <BaseButton
                w={'100%'}
                h={'40px'}
                style_variant={!otpVerify.isValid() ? 'disabled' : 'filled'}
                color_variant={!otpVerify.isValid() ? 'gray' : 'blue'}
                onClick={handlePasswordChange}
            >
                <BaseText txtkey="global.button.verify" />
            </BaseButton>
        </Flex>
    </BaseModal>
    <FinalModal
        opened={opened}
        onClose={close}
        para="profile.modal.passwordSuccessful"
    />
    </>
  );
};
