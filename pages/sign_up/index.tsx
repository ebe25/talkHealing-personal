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


interface signUpProps {
  img?: string;
}

export const SignUp = (props: signUpProps) => {
  const { classes } = useStyles();
  const { i18nStore, userStore } = useStores();
  const theme = useMantineTheme();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<any>("");
  const MAX_TIMELINE_STEP = 3;
  const MIN_TIMELINE_STEP = 0;
  const [timelineStep, setTimelinestep] = useState(MIN_TIMELINE_STEP);

  const incrementTimelineStep = () => {
    setTimelinestep((prev: any) => {
      if (prev < MAX_TIMELINE_STEP) {
        return prev + 1;
      } else prev;
    });
  };


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
          return translate('authentication.formText.writeName');
      },
    },
  });


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
          incrementTimelineStep()
          setLoader(false)
          // setEmailOtp(true)
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
          {timelineStep == 0 ? (
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
                      placeholder={`${translate('authentication.formText.writeName')}`}
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
                      placeholder={`${translate('authentication.formText.writeEmail')}`}
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
                      placeholder={`${translate('authentication.formText.writePassword')}`}
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
                      placeholder={`${translate('authentication.formText.writePassword')}`}
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
                      if (signUpForm.isValid())
                        handleSignUp()
                      else {
                        console.log("email or password is empty")
                        signUpForm.validate()
                      }
                    }}
                    w={'100%'}
                    mah={'39px'}
                    style_variant={signUpForm.isValid() ? 'filled' : 'disabled'}
                    color_variant={signUpForm.isValid() ? 'blue' : 'gray'}
                  >
                    <BaseText
                      style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                      color={signUpForm.isValid() ? theme.white : theme.colors.dark[1]}
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
          {timelineStep == 1 ? (
            <EmailOtp email={signUpForm.values.email} incrementTimelineStep={incrementTimelineStep} />
          ) : null}

          {/* Add number Fragment */}
          {timelineStep == 2 ?
            (
              <AddNumber incrementTimelineStep={incrementTimelineStep} />
            )
            : null}

          {/* Number Otp Fragment */}
          {timelineStep == 3 ?
            (
              <PhoneNumberOtp />
            ) : null}

        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default SignUp;
