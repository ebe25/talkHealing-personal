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
import useStyles from './ForgotPassword.style';


interface forgotPasswordProps {
  opened: boolean;
  close: any;
}

export const ForgotPassword = (props: forgotPasswordProps) => {
  const isPhone = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  const { classes } = useStyles();
  const { i18nStore, userStore } = useStores()
  const passwordForgotWays = {
    Email: "Email",
    Phone: "Phone"
  }
  const [selectedPasswordForgotType, setSelectedPasswordForgotType] = useState<string>();
  const [next, setNext] = useState(false);
  const theme = useMantineTheme();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const methodHandler = (type: string) => {
    setSelectedPasswordForgotType("")
    if (type == passwordForgotWays.Email)
      setSelectedPasswordForgotType(passwordForgotWays.Email)
    if (type == passwordForgotWays.Phone)
      setSelectedPasswordForgotType(passwordForgotWays.Phone)
  };

  // countriesCode
  let testItems: any = []
  {
    Object.keys(countries).map((key, id) => {
      testItems.push({
        label: countries[key]["name"] + "(+" + countries[key]["phone"] + ")",
        value: "+" + countries[key]["phone"],
      })
      testItems.sort((a, b) => {
        if (a['label'][0] < b['label'][0])
          return -1
        else if (a['label'][0] > b['label'][0])
          return 1
        else return 0
      })
    })
  }

  // close Modal function
  const CloseModal = () => {
    props.close();
    setSelectedPasswordForgotType("")
    setNext(false);
    resetPasswordByPhone.setValues({
      phone: "",
      countriesCode: "",
    });
    resetPasswordByEmail.setValues({
      email: "",
    });
  }


  const ContinueButton = () => {
    (
      (selectedPasswordForgotType === passwordForgotWays.Email) ||
      (selectedPasswordForgotType === passwordForgotWays.Phone)
    ) ? setNext(true) : null;
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

  let isEmailValid = () => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(resetPasswordByEmail.values.email))

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
          CloseModal()
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
        else {
          setLoader(false)
          resetPasswordByEmail.setValues({
            email: "",
          });
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
          return translate("authentication.invalidPhone");
      }
    },
  });


  let isNumberValid = () => (resetPasswordByPhone.values.phone && resetPasswordByPhone.values.countriesCode)

  let showConfirmButton = (
    (selectedPasswordForgotType === passwordForgotWays.Email && !next)
    || (selectedPasswordForgotType === passwordForgotWays.Phone && !next)
    || (selectedPasswordForgotType === passwordForgotWays.Email && isEmailValid())
    || (selectedPasswordForgotType === passwordForgotWays.Phone && isNumberValid())
  )

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
          CloseModal()
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
        else {
          setLoader(false)
          resetPasswordByPhone.setValues({
            phone: "",
          });
        }
      })
    }
  }

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
          <Flex justify={"center"}>
            <Loader className={classes.loader} color="indigo" size="xl" variant="oval" />
          </Flex>
        ) : null}
        <Flex direction={'column'} gap={20} style={{ padding: '25px' }}>
          <Flex direction={'column'} gap={8}>
            <Flex justify={'space-between'}>
              <BaseText
                style={typography.headings[i18nStore.getCurrentLanguage()].h3}
                color={theme.colors.dark[7]}
                txtkey={'authentication.formText.forgetPassword'}
              />
              <CloseButton onClick={() => {
                CloseModal()
              }} aria-label="Close modal" iconSize={20} />
            </Flex>
            <BaseText style={typography.paragraph[i18nStore.getCurrentLanguage()].p2} txtkey={"modal.forgotPassword.text"} />
          </Flex>

          <form onSubmit={
            resetPasswordByEmail.onSubmit((values) => console.log(values)) ||
            resetPasswordByPhone.onSubmit((values) => console.log(values))
          }>
            <Flex direction={'column'} gap={30}>
              {!next ? (
                <>
                  <Flex
                    wrap={'wrap'}
                    gap={'10px'}
                    px={'10px'}
                    w={'100%'}
                    align={'center'}
                    justify={'space-around'}
                  >
                    {/* Email Icon */}
                    <Flex
                      onClick={() => {
                        methodHandler(passwordForgotWays.Email);
                      }}
                      className={classes.iconBox}
                      w={'100px'}
                      h={'100px'}
                      style={{
                        background: `${selectedPasswordForgotType === passwordForgotWays.Email ?
                          theme.colors.blue[4] : theme.colors.gray[4]}`,
                      }}
                    >
                      <Image width={50} alt='email_icon' style={{ margin: 'auto' }} src={Images.email} />
                    </Flex>
                    {/* Phone Icon */}
                    <Flex
                      onClick={() => {
                        methodHandler(passwordForgotWays.Phone)
                      }}
                      w={'100px'}
                      h={'100px'}
                      className={classes.iconBox}
                      style={{
                        background: `${selectedPasswordForgotType === passwordForgotWays.Phone ?
                          theme.colors.blue[4] : theme.colors.gray[4]}`,
                      }}
                    >
                      <Image width={50} alt='phone_icon' style={{ margin: 'auto' }} src={Images.phone} />
                    </Flex>
                  </Flex>
                </>
              ) : null}

              {/* Add Email Box */}
              {(selectedPasswordForgotType === passwordForgotWays.Email) && next ? (
                <Flex direction={'column'} gap={10} w={'100%'}>
                  <BaseText
                    style={typography.label[i18nStore.getCurrentLanguage()].l1}
                    color={theme.colors.gray[6]}
                    txtkey={'authentication.formText.email'}
                  />
                  <Input
                    component={'input'}
                    type="text"
                    placeholder={`${translate('authentication.formText.email')}`}
                    style_variant={'inputText1'}
                    {...resetPasswordByEmail.getInputProps('email')}
                  />
                  {/* error message */}
                  <Center>
                    {error ?
                      <BaseText style={typography.label[i18nStore.getCurrentLanguage()].l1}
                        color={theme.colors.red[7]} txtkey={'modal.forgotPassword.email'} />
                      : null}
                  </Center>
                </Flex>
              ) : null}

              {/* Add Mobile Number Box */}
              {(selectedPasswordForgotType === passwordForgotWays.Phone) && next ? (
                <Flex direction={'column'} gap={10} w={'100%'}>
                  <BaseText
                    style={typography.label[i18nStore.getCurrentLanguage()].l1}
                    color={theme.colors.gray[6]}
                    txtkey={'authentication.formText.phoneNumber'}
                  />
                  <Select
                    placeholder="+914"
                    rightSection={<IconChevronDown size="1rem" />}
                    rightSectionWidth={30}
                    radius="xl"
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                    data={testItems}
                    {...resetPasswordByPhone.getInputProps('countriesCode')}
                  />
                  <Input
                    component={'input'}
                    type="number"
                    placeholder={`${translate("authentication.formText.phoneNumber")}`}
                    style_variant={'inputText1'}
                    {...resetPasswordByPhone.getInputProps('phone')}
                  />
                  {/* error message */}
                  <Center>
                    {error ?
                      <BaseText style={typography.label[i18nStore.getCurrentLanguage()].l1}
                        color={theme.colors.red[7]} txtkey={'modal.forgotPassword.phone'} />
                      : null
                    }
                  </Center>
                </Flex>
              ) : null}

              {/* Confirm or Cancel Button */}
              <Flex
                wrap={'wrap'}
                gap={10}
                w={'100%'}
                align={'center'}
                justify={'space-between'}
              >
                <BaseButton
                  onClick={() => {
                    CloseModal()
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
                  color_variant={'gray'}
                  w={isPhone ? '100%' : '47%'}
                  h={'45px'}
                  bg={showConfirmButton ? theme.colors.blue[4] : ''}
                  onClick={(e) => {
                    ContinueButton()
                    e.preventDefault()
                    if (resetPasswordByEmail.values.email) {
                      handleResetPasswordByEmail()
                    }
                    else if (resetPasswordByPhone.values.phone) {
                      handleResetPasswordByPhone()
                    }
                    else {
                      console.log("email or password is empty")
                    }
                  }}
                >
                  <BaseText txtkey={'global.button.confirm'} />
                </BaseButton>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </BaseModal>
    </>
  );
};
