import React, { useState } from 'react';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Box, Center, Container, Flex, Grid, Image , Text } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../public/index';
import { createStyle } from './Login.style';
import { useStores } from '@/models';
// import { useForm } from "@mantine/form";
import Link from 'next/link';
import { translate } from '@/i18n';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useRouter } from 'next/router';
import { ForgotPassword } from '../../components/modules/Modals/ForgotPassword/ForgotPassword';
import swal from 'sweetalert';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
interface loginProps {
  img?: string;
}

export const Login = (props: loginProps) => {
  const useStyles = createStyle();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { i18nStore, userStore } = useStores();
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<any>('');
  const [opened, { open, close }] = useDisclosure(false);

  const schema = yup.object({
    email: yup.string().email(`${translate('authentication.invalidEmail')}`).required(`${translate('authentication.required')}`),
    password: yup.string().required(`${translate('authentication.required')}`).min(8),
  }).required();
  type FormData = yup.InferType<typeof schema>;

  const loginForm = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  //  Login Api Call
  const handleLogin = () => {
    setLoader(true);

    if (!loginForm.formState.isValid) return setLoader(false);
    if (loginForm.formState.isValid) {
      userStore.loginUser(loginForm.getValues('email'), loginForm.getValues('password')).then((res) => {
        if (res.ok) {
          console.log('user logged in successfully!');
          router.push('/home');
          loginForm.reset();
          // setLoader(false)
        } else if (res.code == 400) {
          if (res.error) {
            setLoader(false);
            setError(res.error.non_field_errors);
            setTimeout(() => {
              setError('');
            }, 5000);
          }
        } else if (res.code == 401) {
          if (res.error) {
            setLoader(false);
            setError(res.error);
            if (res.error && res.error.detail) {setError(res.error?.detail?.toString())};
            setTimeout(() => {
              setError('');
            }, 5000);
          }
        }
      });
    }
  };

  const onGoogleLogin = (google_access_token: any) => {
    setLoader(true);
    userStore.loginGoogle(google_access_token).then((res) => {
      if (res.ok) {
        console.log('user logged in successfully!');
        router.push('/home');
        setLoader(false);
      } else if (res.code == 400) {
        if (res.error) {
          swal(`${res.error.non_field_errors}`, `${translate('profile.error.error')}`, 'error');
          setLoader(false);
        }
      } else if (res.code == 401) {
        if (res.error) {
          swal(`${res.error.non_field_errors}`, `${translate('profile.error.error')}`, 'error');
          setLoader(false);
        }
      }
    }
    );
  };

  const onFacebookLogin = (facebook_access_token: any) => {
    setLoader(true);
    userStore.loginFacebook(facebook_access_token).then((res) => {
      if (res.ok) {
        console.log('user logged in successfully!');
        router.push('/home');
        setLoader(false);
      } else if (res.code == 400) {
        if (res.error) {
          swal(`${res.error.non_field_errors}`, `${translate('profile.error.error')}`, 'error');
          setLoader(false);
        }
      } else if (res.code == 401) {
        if (res.error) {
          swal(`${res.error.non_field_errors}`, `${translate('profile.error.error')}`, 'error');
          setLoader(false);
        }
      }
    }
    );
  };

  const facebookLoginAppId = "542240271409221";

  return (
  
      <Container maw="1400px">
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
            w="100%"
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
          <form onSubmit={loginForm.handleSubmit(onSubmit)}>
            <Flex direction="column" gap={20} w="100%">
              <Center>
                <BaseText
                  ta="center"
                  style={typography.headings[i18nStore.getCurrentLanguage()].h2}
                  color={theme.colors.dark[8]}
                  txtkey="header.login"
                />
              </Center>
              {/* Social Media Login */}
              <Flex
justify="center"
align="center"
gap={32}>
                <FacebookLogin
                  appId={facebookLoginAppId}
                  onSuccess={(response) => {
                    onFacebookLogin(response.accessToken);
                  }}
                  onFail={(error) => {
                    swal(`${error}`, `${translate('profile.error.error')}`, 'error');
                  }}
                  render={({ onClick }) => (
                    <Box className={classes.facebookIconBox} onClick={onClick}>
                      <Image width={20} src={Images.facebook_icon} />
                    </Box>
                  )}
                />
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    onGoogleLogin(credentialResponse.credential);
                  }}
                  type="icon"
                  shape="circle"
                  onError={() => {
                    swal(`${error}`, `${translate('profile.error.error')}`, 'error');
                  }}
                />
              </Flex>
              {/* Email Input */}
              <Flex direction="column" w="100%" gap={10}>
                <BaseText
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  color={theme.colors.gray[6]}
                  txtkey="global.label.label2"
                />
                <Input
                  h="44px"
                  w="100%"
                  radius="xl"
                  component="input"
                  classNames={{ input: classes.input }}
                  placeholder={`${translate('authentication.formText.writeEmail')}`}
                  style_variant="inputText1"
                  error={loginForm.formState.errors.email?.message}
                  inputvalue={loginForm.register('email')}
                />
              </Flex>
              {/* Password Input */}
              <Flex direction="column" gap={10}>
                <BaseText
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  color={theme.colors.gray[6]}
                  txtkey="global.label.label3"
                />
                <BasePasswordInput
                  w="100%"
                  h="44px"
                  placeholder={`${translate('authentication.formText.writePassword')}`}
                  inputvalue={loginForm.register('password', { required: true, minLength: 8 })}
                  error={loginForm.formState.errors.password?.message}
                />
                {/* error message */}
                <Text
ta={'center'}
style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  color={theme.colors.red[7]}
                >{error}
                </Text>
              </Flex>
              {/* ForgetPassword */}
              <Center>
                <BaseText
                  onClick={open}
                  className={classes.link}
                  ta="center"
                  style={typography.label[i18nStore.getCurrentLanguage()].l1}
                  color={theme.colors.dark[8]}
                  txtkey="signUpForm.forgetPassword"
                />
                <ForgotPassword opened={opened} close={close} />
              </Center>
              {/* Login Button */}
              <BaseButton
                style_variant={loginForm.formState.isValid ? 'filled' : 'disabled'}
                color_variant={loginForm.formState.isValid ? 'blue' : 'gray'}
                type="submit"
                onClick={(e) => {
                  // e.preventDefault()
                  if (loginForm.formState.isValid) {handleLogin()};
                  else {
                    console.log('email or password is empty');
                  }
                }}
                w="100%"
                mah="39px"
                loading={loader}
              
              >
                <BaseText
                  style={typography.buttonText[i18nStore.getCurrentLanguage()].b2}
                  color={loginForm.formState.isValid ? theme.white : theme.colors.dark[1]}
                  txtkey="signUpForm.login"
                />
              </BaseButton>
            </Flex>
          </form>
          </Grid.Col>
          </Grid>
          {/* Sign Up */}
          <Center
            mt={theme.spacing.xl}
          >
            <BaseText
              style={typography.label[i18nStore.getCurrentLanguage()].l1}
              color={theme.colors.gray[6]}
              txtkey="signUpForm.newUser"
            />
            &nbsp;
            <Link className={classes.link} href="/signup">
              <BaseText
                style={typography.headings[i18nStore.getCurrentLanguage()].h7}
                color={theme.colors.blue[4]}
                txtkey="signUpForm.signUp"
              / >
            </Link>
          </Center>
      </Grid>
    </Container>
  
  );
};

export default Login;
