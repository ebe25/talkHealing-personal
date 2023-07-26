//React and next imports
import React, { useState, useEffect } from 'react';
// mantine component imports
import {
  Box,
  FileButton,
  Flex,
  Grid,
  Image,
  TextInput,
  useMantineTheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
// styles import
import {createStyle} from './Account.styles';
// component
import { ChangePassword } from '../Modals/ProfileModals/ChangePasswordModal/ChangePasswordModal';
import { EmailChangeModal } from '../Modals/ProfileModals/EmailChangeModal/EmailChangeModal';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/Mantine/typography';
import { Input } from '@/components/elements/Input/Input';
//store import
import { useStores } from '@/models';
// other import
import { Images } from '@/public';
import { translate } from '@/i18n';
import { ChangePhoneNumberModal } from '../Modals/ProfileModals/ChangePhoneNumberModal/ChangePhoneNumberModal';

export const Account = () => {
  const { i18nStore, userStore } = useStores();
  const useStyles=createStyle()
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const emailChangeModal = useDisclosure(false);
  const phoneNumberChangeModal = useDisclosure(false);
  const [images, setImages] = useState<any>(null);
  
  const onImageChange = (event: any) => {
    if (event.name) {
    setImages(URL.createObjectURL(event));
    }
  };
  const address = useForm({
    initialValues: {
      name: userStore.userData?.full_name,
      email: userStore.userData?.email,
      phoneNumber: userStore.userData?.phone,
      password: 'SachinPad@123',
    },
  });

  useEffect(() => {
    userStore.getLoginUserData().then((res)=>{
      if(res.ok){
        if(userStore.userData){
          address.setValues({
            name : userStore.userData?.full_name,
            email: userStore.userData?.email,
            phoneNumber: userStore.userData?.phone,
          })
        }
      }
    })
  },[])
  
  return (
    <Box className={classes.container}>
      <form onSubmit={address.onSubmit((values) => console.log(values))}>
      <Flex align={'center'} justify={'space-between'} wrap={'wrap'}>
        <div className={classes.imageFlex}>
          <Image
            width={'120px'}
            height={'120px'}
            radius={'50%'}
            alt="profile_image"
            {...address.getInputProps("avatar")}
            src={images ? images : userStore?.userData?.avatar}
          />
        </div>
        <Flex gap={'18px'} className={classes.imageFlex}>
          <FileButton onChange={onImageChange} accept="image/*">
            {(props) => (
              <BaseButton
                w={'125px'}
                h={'39px'}
                style_variant={'filled'}
                color_variant={'blue'}
                {...props}
              >
                <BaseText txtkey="profile.buttonChange" />
              </BaseButton>
            )}
          </FileButton>
          <BaseButton
            w={'125px'}
            h={'39px'}
            style_variant={'filled'}
            color_variant={'red'}
            onClick={() => {
              setImages(null);
            }}
          >
            <BaseText txtkey="profile.buttonRemove" />
          </BaseButton>
        </Flex>
      </Flex>
      
        <Grid className={classes.grid}>
          <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <BaseText
              txtkey="profile.name"
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
              color={theme.colors.gray[6]}
            />
            <Input
              mt={'sm'}
              placeholder={`${translate('profile.name')}`}
              style_variant={'inputText2'}
              component={'input'}
              variant="filled"
              disabled
              classNames={{
                input: classes.input
              }}
              {...address.getInputProps('name')}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <BaseText
              txtkey="profile.email"
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
              color={theme.colors.gray[6]}
            />
            <Input
              mt={'sm'}
              placeholder={`${translate('profile.email')}`}
              style_variant={'inputText2'}
              component={'input'}
              variant="filled"
              disabled
              classNames={{
                rightSection: classes.rightSection,
                input: classes.input
              }}
              rightSection={
                <BaseText
                  onClick={emailChangeModal[1].open}
                  className={classes.mantineInputRightSection}
                  txtkey="profile.change"
                  color={theme.colors.blue[4]}
                  style={typography.label[i18nStore.getCurrentLanguage()].l4}
                />
              }
              {...address.getInputProps('email')}
            />
          </Grid.Col>
        </Grid>
        <Grid className={classes.grid}>
          <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <BaseText
              txtkey="profile.phoneNumber"
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
              color={theme.colors.gray[6]}
            />
            <Input
              mt={'sm'}
              placeholder={`${translate('profile.phoneNumber')}`}
              style_variant={'inputText2'}
              component={'input'}
              variant="filled"
              disabled
              classNames={{
                rightSection: classes.rightSection,
                input: classes.input
              }}
              rightSection={
                <BaseText
                  onClick={phoneNumberChangeModal[1].open}
                  className={classes.mantineInputRightSection}
                  txtkey="profile.change"
                  color={theme.colors.blue[4]}
                  style={typography.label[i18nStore.getCurrentLanguage()].l4}
                />
              }
              {...address.getInputProps('phoneNumber')}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <BaseText
              txtkey="profile.password"
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
              color={theme.colors.gray[6]}
            />
            <TextInput
              mt={'sm'}
              placeholder={`${translate('profile.password')}`}
              variant="filled"
              type="password"
              autoComplete='on'
              radius={'xl'}
              disabled
              classNames={{
                rightSection: classes.rightSection,
                input: classes.input
              }}
              rightSection={
                <BaseText
                  onClick={open}
                  className={classes.mantineInputRightSection}
                  txtkey="profile.change"
                  color={theme.colors.blue[4]}
                  style={typography.label[i18nStore.getCurrentLanguage()].l4}
                />
              }
              {...address.getInputProps('password')}
            />
          </Grid.Col>
        </Grid>
      </form>
      <ChangePassword opened={opened} onClose={close} />
      <EmailChangeModal opened={emailChangeModal[0]} onClose={emailChangeModal[1].close} />
      <ChangePhoneNumberModal
        opened={phoneNumberChangeModal[0]}
        onClose={phoneNumberChangeModal[1].close}
      />
    </Box>
  );
};
