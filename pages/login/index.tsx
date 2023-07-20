import React, { useState } from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Box, Center, Container, Flex, Grid, Image, Text } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../public/index';
import { CircularIcon } from '../../components/elements/CircularIcon/CircularIcon';
import useStyles from './Login.style';
import { useStores } from '@/models';
import { useForm } from "@mantine/form";
import Link from 'next/link';
import { translate } from '@/i18n';
import { ForgotPassword } from '../../components/modules/Modals/ForgotPassword/ForgotPassword';
import { useDisclosure } from '@mantine/hooks';


interface loginProps {
  img?: string;
}

export const Login = (props: loginProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { i18nStore, userStore } = useStores()
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<any>("");
  const [opened, { open, close }] = useDisclosure(false);


  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : translate("authentication.invalidEmail")),
      password: (value) => {
        if (value.trim().length < 8)
          return translate('authentication.invalidPassword');
      },
    },
  });


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
            setError(res.error)
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
          <form onSubmit={loginForm.onSubmit((values) => console.log(values))}>
            <Flex direction={'column'} gap={20} w={"100%"} >
              <Center>
                <BaseText
                  ta={'center'}
                  style={typography.headings[i18nStore.getCurrentLanguage()].h1}
                  color={theme.colors.dark[8]}
                  txtkey={'header.login'}
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
              {/* Email Input */}
              <Flex direction={'column'} w={"100%"} gap={10} >
                <BaseText
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  color={theme.colors.gray[6]}
                  txtkey={'global.label.label2'}
                />
                <Input
                  h={'44px'}
                  w={"100%"}
                  component={'input'}
                  placeholder={`${translate("authentication.formText.writeEmail")}`}
                  style_variant={'inputText1'}
                  {...loginForm.getInputProps('email')}
                />
              </Flex>
              {/* Password Input */}
              <Flex direction={'column'} gap={10} >
                <BaseText
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  color={theme.colors.gray[6]}
                  txtkey={'global.label.label3'}
                />
                <BasePasswordInput
                  w={"100%"}
                  h={'44px'}
                  placeholder={`${translate("authentication.formText.writePassword")}`}
                  {...loginForm.getInputProps('password')}
                />
                {/* error message */}
                <Text ta={'center'} style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  color={theme.colors.red[7]}>{error}</Text>
              </Flex>
              {/* ForgetPassword */}
              <Center>
                <BaseText
                  onClick={open}
                  className={classes.link}
                  ta="center"
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  color={theme.colors.dark[8]}
                  txtkey={'signUpForm.forgetPassword'}
                />
                <ForgotPassword opened={opened} close={close} />
              </Center>
              {/* Login Button */}
              <BaseButton
                onClick={(e) => {
                  e.preventDefault()
                  if (loginForm.isValid())
                    handleLogin()
                  else {
                    console.log("email or password is empty")
                    loginForm.validate()
                  }
                }}
                w={"100%"}
                mah={'39px'}
                style_variant={loginForm.isValid() ? 'filled' : 'disabled'}
                color_variant={loginForm.isValid() ? 'blue' : 'gray'}
              >
                <BaseText
                  style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                  color={loginForm.isValid() ? theme.white : theme.colors.dark[1]}
                  txtkey={'signUpForm.login'}
                />
              </BaseButton>
            </Flex>
          </form>
          {/* Sign Up */}
          <Center
            mt={theme.spacing.xl}
          >
            <BaseText
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
              color={theme.colors.gray[6]}
              txtkey={'signUpForm.newUser'}
            />
            &nbsp;
            <Link className={classes.link} href={'/'} >
              <BaseText
                style={typography.headings[i18nStore.getCurrentLanguage()].h7}
                color={theme.colors.blue[4]}
                txtkey={'authentication.formText.signUp'}
              />
            </Link>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
};