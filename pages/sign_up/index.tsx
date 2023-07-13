import React, { useState } from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Box, Center, Container, Flex, Grid, Image, Loader, Text } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../public/index';
import { CircularIcon } from '../../components/elements/CircularIcon/CircularIcon';
import { useStores } from '@/models';
import useStyles from './SignUp.style';
import { useForm } from "@mantine/form";
import Link from 'next/link';
import { translate } from "../../i18n";
import { EmailOtp } from "../../components/modules/SignupFragment/email_otp/EmailOtp"
import { AddNumber } from "../../components/modules/SignupFragment/add_number/AddNumber"
import { PhoneNumberOtp } from "../../components/modules/SignupFragment/phone_number_otp/PhoneNumberOtp"


interface SignUpProps {
  img?: string;
}

export const SignUp = (props: SignUpProps) => {
  const { classes } = useStyles();
  const { i18nStore ,userStore } = useStores();
  const theme = useMantineTheme();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<any>("");
  const [emailOtp, setEmailOtp] = useState(false);
  const [numberOtp, setNumberOtp] = useState(false);
  const [enternNumber, setEnterNumber] = useState(false);

  const signUpForm = useForm({
    initialValues: {
      email: '',
      full_name: '',
      password1: '',
      password2: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : translate("authentication.invalidEmail")),
      password1: (value) => (/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(value) ? null : translate("authentication.invalidPassword")),
      password2: (value) => {
        if (value != signUpForm.values.password1)
          return translate("authentication.passwordNotMatched");
      },
      full_name: (value) => {
        if (value.trim().length < 1)
          return translate('authentication.formText.WriteName');
      },
    },
  });


  let filled = () => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signUpForm.values.email))
    && (/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(signUpForm.values.password1)
      && signUpForm.values.password2 == signUpForm.values.password1
      && signUpForm.values.full_name
    )


  // SignUp api
  const handleSignUp = () => {
    setLoader(true)

    let results = signUpForm.validate();

    if (results.hasErrors) return setLoader(false);
    if (!results.hasErrors) {
      userStore.signupUser(
        signUpForm.values.email,
        signUpForm.values.full_name,
        signUpForm.values.password1,
        signUpForm.values.password2
      ).then((res) => {
        if (res.ok) {
          console.log("user logged in successfully!")
          signUpForm.setValues({
            full_name: "",
            password1: "",
            password2: "",
          });
          setLoader(false)
          setEmailOtp(true)
        }
        else if (res.code == 400) {
          if (res.error) {
            setLoader(false)
            if (res.error && res.error.email)
              setError(res.error?.email?.toString())
            setTimeout(() => {
              setError("")
            }, 5000)
          }
        }
      })
    }
  }

  const addNumberFragment = () => {
    setEnterNumber(true)
  }

  const phoneNumberOtpFragment = () => {
    setNumberOtp(true)
  }

  return (
    <Container
      maw={"1400px"}
    >
      {/* Loader */}
      {loader ? (
        <Box className={classes.loaderBox}>
          <Loader size="xl" />
        </Box>
      ) : null}

      <Grid
        className={classes.container}
        gutter="100px"
        m={0}
      >
        <Grid.Col
          sm={12}
          xs={12}
          md={8}
          lg={7}
          xl={7}
        >
          <Image
            w={"100%"}
            src={props.img ? props.img : Images.login_icon}
            alt="login_icon"
          />
        </Grid.Col>
        <Grid.Col
          sm={12}
          xs={12}
          md={4}
          lg={5}
          xl={5}
        >
          {/* SignUp page */}
          {!emailOtp ? (
            <Flex gap={26}
              direction={'column'}
            >
              <form onSubmit={signUpForm.onSubmit((values) => console.log(values))}>
                <Flex direction={'column'} gap={20}>
                  <Center>
                    <BaseText
                      style={typography.headings[i18nStore.getCurrentLanguage()].h2}
                      color={theme.colors.dark[8]}
                      txtkey={'header.signUp'}
                    />
                  </Center>
                  {/* Social Media Login */}
                  <Flex justify="center" align="center" gap={32}
                  >
                    <Box className={classes.link}>
                      <CircularIcon Icon={Images.facebook_icon} />
                    </Box>
                    <Box className={classes.link}>
                      <CircularIcon Icon={Images.google_icon} />
                    </Box>
                  </Flex>
                  {/* FullName Input Box */}
                  <Flex direction={'column'} gap={10}
                  >
                    <BaseText
                      style={typography.label[i18nStore.getCurrentLanguage()].l1}
                      color={theme.colors.gray[6]}
                      txtkey={'userProfile.accountDetails.name'}
                    />
                    <Input
                      w={'100%'}
                      mah={'44px'}
                      component={'input'}
                      placeholder={`${translate('authentication.formText.WriteName')}`}
                      style_variant={'inputText1'}
                      {...signUpForm.getInputProps('full_name')}
                    />
                  </Flex>
                  {/* Email Input Box */}
                  <Flex direction={'column'} gap={10}
                  >
                    <BaseText
                      style={typography.label[i18nStore.getCurrentLanguage()].l1}
                      color={theme.colors.gray[6]}
                      txtkey={'global.label.label2'}
                    />
                    <Input
                      w={'100%'}
                      mah={'44px'}
                      component={'input'}
                      placeholder={`${translate('authentication.formText.WriteEmail')}`}
                      style_variant={'inputText1'}
                      {...signUpForm.getInputProps('email')}
                    />
                  </Flex>
                  {/* Password Input Box */}
                  <Flex direction={'column'} gap={10}
                  >
                    <BaseText
                      style={typography.label[i18nStore.getCurrentLanguage()].l1}
                      color={theme.colors.gray[6]}
                      txtkey={'global.label.label3'}
                    />
                    <BasePasswordInput
                      w={'100%'}
                      mah={'44px'}
                      placeholder={`${translate('authentication.formText.WritePassword')}`}
                      {...signUpForm.getInputProps('password1')}
                    />
                  </Flex>
                  {/* Confirm Password Input Box */}
                  <Flex direction={'column'} gap={10}
                  >
                    <BaseText
                      style={typography.label[i18nStore.getCurrentLanguage()].l1}
                      color={theme.colors.gray[6]}
                      txtkey={'global.label.label4'}
                    />
                    <BasePasswordInput
                      w={'100%'}
                      mah={'44px'}
                      placeholder={`${translate('authentication.formText.WritePassword')}`}
                      {...signUpForm.getInputProps('password2')}
                    />
                    {/* error message */}
                    <Text ta={'center'} style={typography.label[i18nStore.getCurrentLanguage()].l1}
                      color={theme.colors.red[7]}>{error}</Text>
                  </Flex>
                  {/* SignUp Form Submit Button */}
                  <BaseButton
                    onClick={(e) => {
                      e.preventDefault()
                      if (signUpForm.values.email && signUpForm.values.password1)
                        handleSignUp()
                      else {
                        console.log("email or password is empty")
                        signUpForm.validate()
                      }
                    }}
                    w={'100%'}
                    mah={'39px'}
                    style_variant={filled() ? 'filled' : 'disabled'}
                    color_variant={filled() ? 'blue' : 'gray'}
                  >
                    <BaseText
                      style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                      color={filled() ? theme.white : theme.colors.dark[1]}
                      txtkey={'signUpForm.signUp'}
                    />
                  </BaseButton>
                </Flex>
              </form>
              {/* Already have account then login page link */}
              <Flex
                justify="center" align="center" gap={5}>
                <BaseText
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  color={theme.colors.gray[6]}
                  txtkey={'signUpForm.oldUser'}
                />
                <Link className={classes.link} href='/login'>
                  <BaseText
                    style={typography.headings[i18nStore.getCurrentLanguage()].h7}
                    color={theme.colors.blue[4]}
                    txtkey={'signUpForm.signIn'}
                  />
                </Link>
              </Flex>
            </Flex>
          ) : null}


          {/* Email Otp Fragment */}
          {emailOtp && !enternNumber && !numberOtp ? (
            <EmailOtp email={signUpForm.values.email} addNumberFragment={addNumberFragment} />
          ) : null}

          {/* Add number Fragment */}
          {enternNumber && emailOtp && !numberOtp ?
            (
              <AddNumber phoneNumberOtpFragment={phoneNumberOtpFragment} />
            )
            : null}

          {/* Number Otp Fragment */}
          {numberOtp && emailOtp && enternNumber ?
            (
              <PhoneNumberOtp />
            ) : null}

        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default SignUp;
