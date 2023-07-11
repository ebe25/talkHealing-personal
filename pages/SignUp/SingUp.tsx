import React, { useState } from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Box, Center, Container, Flex, Grid, Image, Loader } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../public/index';
import { CircularIcon } from '../../components/elements/CircularIcon/CircularIcon';
import { useStores } from '@/models';
import useStyles from './SignUp.style';
import { useForm } from "@mantine/form";
import Link from 'next/link';
import { translate } from "../../i18n";
import { EmailOtp } from "../../components/modules/SignupFragment/EmailOtp/EmailOtp"
import { AddNumber } from "../../components/modules/SignupFragment/AddNumber/AddNumber"
import { PhoneNumberOtp } from "../../components/modules/SignupFragment/PhoneNumberOtp/PhoneNumberOtp"


interface SignUpProps {
  img?: string;
}

export const SignUp = (props: SignUpProps) => {
  const { classes } = useStyles();
  const { userStore } = useStores();
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
      password1: (value) => {
        if (value.trim().length < 6)
          return translate("authentication.passwordLength");
      },
      password2: (value) => {
        if (value != signUpForm.values.password1)
          return translate("authentication.passwordNotMatched");
      },
    },
  });

  const SignUpLength = (signUpForm.values.email.length
    && signUpForm.values.password1.length
    && signUpForm.values.password2.length
    && signUpForm.values.full_name.length)

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
            email: "",
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
            setError(translate("authentication.passwordNotMatched"))
            setTimeout(() => {
              setError("")
            }, 5000)
          }
        }
      })
    }
  }

  const addNumber = () => {
    setEnterNumber(true)
  }

  const phoneNumberOtp = () => {
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
            alt="icon"
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
                      style={typography.headings.en.h2}
                      color={theme.colors.dark[8]}
                      txtkey={'header.signUp'}
                    />
                  </Center>
                  <Flex justify="center" align="center" gap={32}
                  >
                    <Box className={classes.link}>
                      <CircularIcon Icon={Images.facebook_Icon} />
                    </Box>
                    <Box className={classes.link}>
                      <CircularIcon Icon={Images.google_Icon} />
                    </Box>
                  </Flex>
                  <Flex direction={'column'} gap={10}
                  >
                    <BaseText
                      style={typography.label.en.l1}
                      color={theme.colors.gray[6]}
                      txtkey={'userProfile.accountDetails.name'}
                    />
                    <Input
                      w={'100%'}
                      mah={'44px'}
                      component={'input'}
                      placeholder="Write your name"
                      style_variant={'inputText1'}
                      {...signUpForm.getInputProps('full_name')}
                    />
                  </Flex>
                  <Flex direction={'column'} gap={10}
                  >
                    <BaseText
                      style={typography.label.en.l1}
                      color={theme.colors.gray[6]}
                      txtkey={'global.label.label2'}
                    />
                    <Input
                      w={'100%'}
                      mah={'44px'}
                      component={'input'}
                      placeholder="Write your email"
                      style_variant={'inputText1'}
                      {...signUpForm.getInputProps('email')}
                    />
                  </Flex>
                  <Flex direction={'column'} gap={10}
                  >
                    <BaseText
                      style={typography.label.en.l1}
                      color={theme.colors.gray[6]}
                      txtkey={'global.label.label3'}
                    />
                    <BasePasswordInput
                      w={'100%'}
                      mah={'44px'}
                      placeholder={'Write your password'}
                      {...signUpForm.getInputProps('password1')}
                    />
                  </Flex>
                  <Flex direction={'column'} gap={10}
                  >
                    <BaseText
                      style={typography.label.en.l1}
                      color={theme.colors.gray[6]}
                      txtkey={'global.label.label4'}
                    />
                    <BasePasswordInput
                      w={'100%'}
                      mah={'44px'}
                      placeholder={'Write your password'}
                      {...signUpForm.getInputProps('password2')}
                    />
                    {error ?
                      <BaseText style={typography.label.en.l1}
                        color={theme.colors.red[7]} txtkey={'authentication.formText.errorMessage'} />
                      : null}
                  </Flex>
                  <BaseButton
                    onClick={(e) => {
                      e.preventDefault()
                      if (signUpForm.values.email && signUpForm.values.password1)
                        handleSignUp()
                      else
                        console.log("email or password is empty")
                    }}
                    w={'100%'}
                    mah={'39px'}
                    style_variant={SignUpLength ? 'filled' : 'disabled'}
                    color_variant={SignUpLength ? 'blue' : 'gray'}
                  >
                    <BaseText
                      style={typography.buttonText.en.b2}
                      color={SignUpLength ? theme.white : theme.colors.dark[1]}
                      txtkey={'signUpForm.login'}
                    />
                  </BaseButton>
                </Flex>
              </form>
              <Flex
                justify="center" align="center" gap={5}>
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'signUpForm.oldUser'}
                />
                <Link className={classes.link} href='/login'>
                  <BaseText
                    style={typography.headings.en.h7}
                    color={theme.colors.blue[4]}
                    txtkey={'signUpForm.signIn'}
                  />
                </Link>
              </Flex>
            </Flex>
          ) : null}


          {/* Email Otp */}
          {emailOtp && !enternNumber && !numberOtp ? (
            <EmailOtp addNumber={addNumber} />
          ) : null}

          {/* Add number */}
          {enternNumber && emailOtp && !numberOtp ?
            (
              <AddNumber phoneNumberOtp={phoneNumberOtp} />
            )
            : null}

          {/* Number Otp */}
          {numberOtp && emailOtp && enternNumber ?
            (
              <PhoneNumberOtp />
            ) : null}

        </Grid.Col>
      </Grid>
    </Container>
  );
};
