import React, { useState } from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Box, Center, Flex, Grid, Image } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import { Images } from '../../public/index';
import { useMediaQuery } from '@mantine/hooks';
import { CircularIcon } from '../../components/elements/CircularIcon/CircularIcon';
import useStyles from './Login.style';
import { useStores } from '@/models';
import { useForm } from "@mantine/form";

interface LoginProps {
  img?: string;
}

export const Login = (props: LoginProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { userStore } = useStores()
  const isIPhone = useMediaQuery('(max-width:400px)');
  const isPhone = useMediaQuery('(max-width:600px)');
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("")
  const isMiniLaptop = useMediaQuery('(max-width:1200px)');
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : 'Invalid email'),
      password: (value) => {
        if (value.trim().length < 6)
          return 'Invalid password';
      },
    },
  });

  let filled = () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginForm.values.email) && loginForm.values.password.length > 6

  const handleLogin = () => {
    // if (
    //   !filled()
    //   ) {
    //     return;
    //   }
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
            setError("Paaword wrong")
            setTimeout(() => {
              setError("")
            }, 5000)
          }
        }
      })
    }
  }

  return (
    <>
      <Grid
        className={classes.Container}
        justify="center" align="center" >
        <Grid.Col
          w={'700px'}
          miw={'300px'}
          mah={isPhone ? '300px' : '437px'}
          span={5}
        >
          <Image
            src={props.img ? props.img : Images.login_icon}
            alt="icon"
          />
        </Grid.Col>
        <Grid.Col maw={isPhone ? '300px' : '370px'} span={5}>
          <Flex gap={26} direction={'column'} maw={isPhone ? '300px' : '370px'}>
            <form onSubmit={loginForm.onSubmit((values) => console.log(values))}>
              <Flex direction={'column'} gap={20}>
                <Flex w={'100%'} align={'center'} justify={'center'}>
                  <BaseText
                    style={typography.headings.en.h2}
                    color={theme.colors.dark[8]}
                    txtkey={'header.Login'}
                  />
                </Flex>
                <Flex justify="center" align="center" gap={32}
                >
                  <CircularIcon Icon={Images.facebook_Icon} />
                  <CircularIcon Icon={Images.google_Icon} />
                </Flex>
                <Flex direction={'column'} gap={10} >
                  <BaseText
                    style={typography.label.en.l1}
                    color={theme.colors.gray[6]}
                    txtkey={'global.label.label2'}
                  />
                  <Input
                    w={isPhone ? '280px' : '370px'}
                    h={'44px'}
                    component={'input'}
                    placeholder="Write your email"
                    style_variant={'inputText1'}
                    {...loginForm.getInputProps('email')}
                  />
                </Flex>
                <Flex direction={'column'} gap={10} >
                  <BaseText
                    style={typography.label.en.l1}
                    color={theme.colors.gray[6]}
                    txtkey={'global.label.label3'}
                  />
                  <BasePasswordInput
                    w={isPhone ? '280px' : '370px'}
                    h={'44px'}
                    placeholder={'Write your password'}
                    {...loginForm.getInputProps('password')}
                  />
                  {error ?
                    <BaseText style={typography.label.en.l1}
                      color={theme.colors.red[7]} txtkey={'authentication.formText.errorMessage'} />
                    : null}
                </Flex>
                <Flex w={'100%'} justify={'center'}>
                  <BaseText
                    ta="center"
                    style={typography.label.en.l1}
                    color={theme.colors.dark[8]}
                    txtkey={'signUpForm.forgetPassword'}
                  />
                </Flex>
                <BaseButton
                  onClick={(e) => {
                    e.preventDefault()
                    if (loginForm.values.email && loginForm.values.password)
                      handleLogin()
                    else
                      console.log("email or password is empty")
                  }}
                  w={isPhone ? '280px' : '370px'}
                  mah={'39px'}
                  style_variant={loginForm.values.email.length && loginForm.values.password.length ? 'filled' : 'disabled'}
                  color_variant={loginForm.values.email.length && loginForm.values.password.length ? 'blue' : 'gray'}
                >
                  <BaseText
                    style={typography.buttonText.en.b2}
                    color={loginForm.values.email.length && loginForm.values.password.length ? theme.white : theme.colors.dark[1]}
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
                txtkey={'signUpForm.newUser'}
              />
              <BaseText
                style={typography.headings.en.h7}
                color={theme.colors.blue[4]}
                txtkey={'authentication.formText.signUp'}
              />
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </>
  );
};