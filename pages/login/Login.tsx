import React, { useState } from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Box, Center, Container, Flex, Grid, Image } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../public/index';
import { CircularIcon } from '../../components/elements/CircularIcon/CircularIcon';
import useStyles from './Login.style';
import { useStores } from '@/models';
import { useForm } from "@mantine/form";
import Link from 'next/link';
import { translate } from '@/i18n';

interface LoginProps {
  img?: string;
}

export const Login = (props: LoginProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { userStore } = useStores()
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<any>("")

  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : translate("authentication.invalidEmail")),
      password: (value) => {
        if (value.trim().length < 6)
          return translate('authentication.invalidPassword');
      },
    },
  });

  // Check Length
  const loginButtonShow = (loginForm.values.email.length && loginForm.values.password.length)

  //  Login Api Call
  const handleLogin = () => {
    setLoader(true)
    let results = loginForm.validate();

    if (results.hasErrors) return setLoader(false);
    if (!results.hasErrors) {
      userStore.loginUser(loginForm.values.email, loginForm.values.password).then((res) => {
        if (res.ok) {
          console.log("user logged in successfully!")
          loginForm.setValues({
            email: "",
            password: "",
          });
          setLoader(false)
        }
        else if (res.code == 400) {
          if (res.error) {
            setLoader(false)
            setError(translate("authentication.formText.errorMessage"))
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
          <form onSubmit={loginForm.onSubmit((values) => console.log(values))}>
            <Flex direction={'column'} gap={20} w={"100%"} >
              <Center>
                <BaseText
                  ta={'center'}
                  style={typography.headings.en.h2}
                  color={theme.colors.dark[8]}
                  txtkey={'header.Login'}
                />
              </Center>
              {/* Social Media Login */}
              <Flex justify="center" align="center" gap={32}
              >
                <Box className={classes.link}>
                  <CircularIcon Icon={Images.facebook_Icon} />
                </Box>
                <Box className={classes.link}>
                  <CircularIcon Icon={Images.google_Icon} />
                </Box>
              </Flex>
              {/* Email Input */}
              <Flex direction={'column'} w={"100%"} gap={10} >
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'global.label.label2'}
                />
                <Input
                  h={'44px'}
                  w={"100%"}
                  component={'input'}
                  placeholder={`${translate("authentication.formText.WriteEmail")}`}
                  style_variant={'inputText1'}
                  {...loginForm.getInputProps('email')}
                />
              </Flex>
              {/* Password Input */}
              <Flex direction={'column'} gap={10} >
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'global.label.label3'}
                />
                <BasePasswordInput
                  w={"100%"}
                  h={'44px'}
                  placeholder={`${translate("authentication.formText.WritePassword")}`}
                  {...loginForm.getInputProps('password')}
                />
                {error ?
                  <BaseText style={typography.label.en.l1}
                    color={theme.colors.red[7]} txtkey={'authentication.formText.errorMessage'} />
                  : null}
              </Flex>
              {/* ForgetPassword */}
              <Center>
                <Link className={classes.link} href={'/'}>
                  <BaseText
                    ta="center"
                    style={typography.label.en.l1}
                    color={theme.colors.dark[8]}
                    txtkey={'signUpForm.forgetPassword'}
                  />
                </Link>
              </Center>
              {/* Login Button */}
              <BaseButton
                onClick={(e) => {
                  e.preventDefault()
                  if (loginButtonShow)
                    handleLogin()
                  else
                    console.log("email or password is empty")
                }}
                w={"100%"}
                mah={'39px'}
                style_variant={loginButtonShow ? 'filled' : 'disabled'}
                color_variant={loginButtonShow ? 'blue' : 'gray'}
              >
                <BaseText
                  style={typography.buttonText.en.b2}
                  color={loginButtonShow ? theme.white : theme.colors.dark[1]}
                  txtkey={'signUpForm.login'}
                />
              </BaseButton>
            </Flex>
          </form>
          {/* Sign Up */}
          <Flex
            mt={theme.spacing.xl}
            justify="center" align="center" gap={5}>
            <BaseText
              style={typography.label.en.l1}
              color={theme.colors.gray[6]}
              txtkey={'signUpForm.newUser'}
            />
            <Link className={classes.link} href={'/'}>
              <BaseText
                style={typography.headings.en.h7}
                color={theme.colors.blue[4]}
                txtkey={'authentication.formText.signUp'}
              />
            </Link>
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
};