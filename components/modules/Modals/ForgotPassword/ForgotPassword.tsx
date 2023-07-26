import React, { useState } from 'react';
import { Center, CloseButton, Flex, Image, useMantineTheme, Select } from '@mantine/core';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { typography } from '@/themes/Mantine/typography';
import { Input } from '@/components/elements/Input/Input';
import { useMediaQuery } from '@mantine/hooks';
import { useStores } from '@/models';
import { Images } from '../../../../public/index';
import { useForm } from "@mantine/form";
import { Loader } from '@mantine/core';
import { translate } from '@/i18n';
import { countries } from "countries-list"
import { IconChevronDown } from '@tabler/icons-react';
import { createStyle } from './ForgotPassword.style';


interface forgotPasswordProps {
  opened: boolean;
  close: any;
}

export const ForgotPassword = (props: forgotPasswordProps) => {
  const isPhone = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  const useStyles = createStyle()
  const { classes } = useStyles();
  const { i18nStore, userStore } = useStores()
  const passwordForgotMethods = {
    Email: "Email",
    Phone: "Phone"
  }
  const [selectedPasswordForgotType, setSelectedPasswordForgotType] = useState<string>();
  const theme = useMantineTheme();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [showEmailField, setShowEmailField] = useState(false);
  const [showPhoneNumberField, setShowPhoneNumberField] = useState(false);
  const userChoiceHandler = (type: string) => {
    setSelectedPasswordForgotType("")
    if (type == passwordForgotMethods.Email)
      setSelectedPasswordForgotType(passwordForgotMethods.Email)
    if (type == passwordForgotMethods.Phone)
      setSelectedPasswordForgotType(passwordForgotMethods.Phone)
  };

  // countriesCode
  let countriesCode: any = []
  {
    Object.keys(countries).map((key, id) => {
      countriesCode.push({
        label: countries[key]["name"] + "(+" + countries[key]["phone"] + ")",
        value: "+" + countries[key]["phone"],
      })
      countriesCode.sort((a, b) => {
        if (a['label'][0] < b['label'][0])
          return -1
        else if (a['label'][0] > b['label'][0])
          return 1
        else return 0
      })
    })
  }

  // close Modal function
  const closeModal = () => {
    props.close();
    setSelectedPasswordForgotType("")
    setShowEmailField(false)
    setShowPhoneNumberField(false)
    resetPasswordByPhone.reset()
    resetPasswordByEmail.reset()
  }


  const selectPasswordForgotService = () => {
    (selectedPasswordForgotType === passwordForgotMethods.Email) ? setShowEmailField(true) : null;
    (selectedPasswordForgotType === passwordForgotMethods.Phone) ? setShowPhoneNumberField(true) : null;
  };

  const resetPasswordByEmail = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : translate("authentication.invalidEmail")),
    },
  });


  // ResetPassword By Email Api call
  const handleResetPasswordByEmail = () => {
    setLoader(true)
    let results = resetPasswordByEmail.validate();

    if (results.hasErrors) return setLoader(false);
    if (!results.hasErrors) {
      userStore.resetPassword(
        resetPasswordByEmail.values.email
      ).then((res) => {
        if (res.ok) {
          console.log("email link send successfully!")
          setLoader(false)
          closeModal()
        }
        else if (res.code == 400) {
          if (res.error) {
            setLoader(false)
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 5000)
          }
        }
        else if (res.code == 401) {
          if (res.error) {
            setLoader(false)
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 5000)
          }
        }
        else {
          setLoader(false)
          resetPasswordByEmail.reset()
        }
      })
    }
  }

  // ResetPassword By Phone Number Api call
  const resetPasswordByPhone = useForm({
    initialValues: {
      phone: '',
      countriesCode: '',
      termsOfService: false,
    },

    validate: {
      phone: (value) => {
        if (value.trim().length < 1)
          return translate("authentication.formText.invalidNumber");
      },
      countriesCode: (value) => {
        if (value.trim().length < 1)
          return translate("authentication.formText.invalidNumber");
      }
    },
  });


  // smsPasswordReset By Phone Number Api
  const handleResetPasswordByPhone = () => {
    setLoader(true)
    let results = resetPasswordByPhone.validate();

    if (results.hasErrors) return setLoader(false);
    if (!results.hasErrors) {
      userStore.smsPasswordReset(
        `${resetPasswordByPhone.values.countriesCode}${resetPasswordByPhone.values.phone}`
      ).then((res) => {
        if (res.ok) {
          console.log("phone link send successfully!")
          setLoader(false)
          closeModal()
        }
        else if (res.code == 400) {
          if (res.error) {
            setLoader(false)
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 5000)
          }
        }
        else if (res.code == 401) {
          if (res.error) {
            setLoader(false)
            setError(true)
            setTimeout(() => {
              setError(false)
            }, 5000)
          }
        }
        else {
          setLoader(false)
          resetPasswordByPhone.reset()
        }
      })
    }
  }

  const CancelAndConfirmButton = (props: any) => (
    <Flex
      wrap={'wrap'}
      gap={10}
      w={'100%'}
      align={'center'}
      justify={'space-between'}
      direction={i18nStore.isRTL ? 'row-reverse' : 'row'}
    >
      <BaseButton
        onClick={() => {
          closeModal()
        }}
        style_variant={'filled'}
        color_variant={'gray'}
        w={isPhone ? '100%' : '47%'}
        h={'45px'}
      >
        <BaseText txtkey={'global.button.cancel'} />
      </BaseButton>
      <BaseButton
        style_variant={'filled'}
        w={isPhone ? '100%' : '47%'}
        h={'45px'}
        {...props}
      >
        <BaseText txtkey={'global.button.confirm'} />
      </BaseButton>
    </Flex>
  )


  return (
    <>
      <BaseModal
        radius={32}
        size={isPhone ? '100%' : isTablet ? '70%' : '40%'}
        withCloseButton={false}
        opened={props.opened}
        onClose={props.close}
      >
        {loader ? (
          <Flex h={'100%'} justify={"center"}>
            <Loader className={classes.loader} color="indigo" size="sm" variant="oval" />
          </Flex>
        ) : null}
        <Flex direction={'column'} gap={20} style={{ padding: '25px' }}>
          <Flex direction={'column'} gap={8}>
            <Flex direction={i18nStore.isRTL ? 'row-reverse' : 'row'} justify={'space-between'}>
              <BaseText
                style={typography.headings[i18nStore.getCurrentLanguage()].h3}
                color={theme.colors.dark[7]}
                txtkey={'signUpForm.forgetPassword'}
              />
              <CloseButton onClick={() => {
                closeModal()
              }} aria-label="Close modal" iconSize={20} />
            </Flex>
            <BaseText ta={i18nStore.isRTL ? "right" : "left"} style={typography.paragraph[i18nStore.getCurrentLanguage()].p2} txtkey={"authentication.formText.forgotPasswordText"} />
          </Flex>



          {!showEmailField && !showPhoneNumberField ? (
            <Flex direction={'column'} gap={30}>
              <Flex
                wrap={'wrap'}
                gap={'10px'}
                px={'10px'}
                w={'100%'}
                align={'center'}
                justify={'space-around'}
                direction={i18nStore.isRTL ? 'row' : 'row-reverse'}
              >
                {/* Email Icon */}
                <Flex
                  onClick={() => {
                    userChoiceHandler(passwordForgotMethods.Email);
                  }}
                  className={classes.iconBox}
                  w={'100px'}
                  h={'100px'}
                  style={{
                    background: `${selectedPasswordForgotType === passwordForgotMethods.Email ?
                      theme.colors.blue[4] : theme.colors.gray[4]}`,
                  }}
                >
                  <Image width={50} alt='email_icon' style={{ margin: 'auto' }} src={Images.email_icon} />
                </Flex>
                {/* Phone Icon */}
                <Flex
                  onClick={() => {
                    userChoiceHandler(passwordForgotMethods.Phone)
                  }}
                  w={'100px'}
                  h={'100px'}
                  className={classes.iconBox}
                  style={{
                    background: `${selectedPasswordForgotType === passwordForgotMethods.Phone ?
                      theme.colors.blue[4] : theme.colors.gray[4]}`,
                  }}
                >
                  <Image width={50} alt='phone_icon' style={{ margin: 'auto' }} src={Images.phone_icon} />
                </Flex>
              </Flex>
              <CancelAndConfirmButton
                color_variant={selectedPasswordForgotType ? 'blue' : 'gray'}
                onClick={() => {
                  selectPasswordForgotService()
                }} />
            </Flex>
          ) : null}



          {/* Reset Password By Email */}
          {showEmailField ? (
            <form onSubmit={
              resetPasswordByEmail.onSubmit((values) => console.log(values))
            }>
              <Flex direction={'column'} gap={30}>
                <Flex direction={'column'} gap={10} w={'100%'}>
                  <BaseText
                    style={typography.label[i18nStore.getCurrentLanguage()].l1}
                    color={theme.colors.gray[6]}
                    txtkey={'profile.email'}
                    ta={i18nStore.isRTL ? "right" : "left"}
                  />
                  <Input
                    component={'input'}
                    type="text"
                    placeholder={`${translate("authentication.formText.writeEmail")}`}
                    style_variant={'inputText1'}
                    classNames={{ input: classes.input }}
                    {...resetPasswordByEmail.getInputProps('email')}
                  />
                  {/* error message */}
                  <Center>
                    {error ?
                      <BaseText style={typography.label[i18nStore.getCurrentLanguage()].l1}
                        color={theme.colors.red[7]} txtkey={'authentication.invalidEmail'} />
                      : null}
                  </Center>
                </Flex>
                <CancelAndConfirmButton
                  color_variant={resetPasswordByEmail.isValid() ? 'blue' : 'gray'}
                  onClick={(e: any) => {
                    e.preventDefault()
                    if (resetPasswordByEmail.isValid()) {
                      handleResetPasswordByEmail()
                    }
                    else {
                      console.log("email or password is empty")
                    }
                  }}
                />
              </Flex>
            </form>
          ) : null}



          {/* Reset Password By Phone */}
          {showPhoneNumberField ? (
            <form onSubmit={
              resetPasswordByPhone.onSubmit((values) => console.log(values))
            }>
              <Flex direction={'column'} gap={30}>
                <Flex direction={'column'} gap={10} w={'100%'}>
                  <BaseText
                    style={typography.label[i18nStore.getCurrentLanguage()].l1}
                    color={theme.colors.gray[6]}
                    txtkey={'profile.phoneNumber'}
                    ta={i18nStore.isRTL ? "right" : "left"}
                  />
                  <Select
                    placeholder="+914"
                    rightSection={<IconChevronDown size="1rem" />}
                    rightSectionWidth={30}
                    radius="xl"
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    classNames={{
                      rightSection: classes.rightSection,
                      input: classes.input
                    }}
                    data={countriesCode}
                    {...resetPasswordByPhone.getInputProps('countriesCode')}
                  />
                  <Input
                    component={'input'}
                    type="number"
                    placeholder={`${translate("profile.phoneNumber")}`}
                    style_variant={'inputText1'}
                    classNames={{ input: classes.input }}
                    {...resetPasswordByPhone.getInputProps('phone')}
                  />
                  {/* error message */}
                  <Center>
                    {error ?
                      <BaseText style={typography.label[i18nStore.getCurrentLanguage()].l1}
                        color={theme.colors.red[7]} txtkey={'authentication.invalidNumber'} />
                      : null
                    }
                  </Center>
                </Flex>
                <CancelAndConfirmButton color_variant={resetPasswordByPhone.isValid() ? 'blue' : 'gray'}
                  onClick={(e: any) => {
                    e.preventDefault()
                    if (resetPasswordByPhone.isValid()) {
                      handleResetPasswordByPhone()
                    }
                    else {
                      console.log("email or password is empty")
                    }
                  }} />
              </Flex>
            </form>
          ) : null}


        </Flex>
      </BaseModal>
    </>
  );
};
