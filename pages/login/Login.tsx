import React, { useState } from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Box, Center, Flex, Image } from '@mantine/core';
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
      <Box
        style={{
          padding: `${isPhone ? '50px' : ''}`,
        }}
        className={classes.Container}
      >
        <Flex
          justify="center"
          style={{ width: '100%' }}
          align="center"
          gap={isMiniLaptop ? '' : 100}
          wrap="wrap"
        >
          <Image
            src={props.img ? props.img : Images.login_icon}
            style={{ maxWidth: `${isMiniLaptop ? '550px' : '700px'}`, maxHeight: '437px' }}
            alt="icon"
          />
          <Box style={{ maxWidth: `${isIPhone ? '280px' : '370px'}`, maxHeight: '456px' }}>
            <Box style={{ width: '100%', textAlign: 'center' }}>
              <BaseText
                style={typography.headings.en.h2}
                color={theme.colors.dark[8]}
                txtkey={'header.Login'}
              />
            </Box>
            <Flex justify="center" align="center" gap={32} style={{ marginTop: '32px' }}>
              <CircularIcon Icon={Images.facebook_Icon} />
              <CircularIcon Icon={Images.google_Icon} />
            </Flex>
            <form onSubmit={loginForm.onSubmit((values) => console.log("aaaaaa", values))}>
              <Flex direction={'column'} gap={10} style={{ padding: '20px 0 0 0' }}>
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'global.label.label2'}
                />
                <Input
                  // onChange={(e) => { setEmail(e.target.value) }}
                  style={{ maxWidth: '370', maxHeight: '44' }}
                  component={'input'}
                  placeholder="Write your email"
                  style_variant={'inputText1'}
                  {...loginForm.getInputProps('email')}
                />
              </Flex>
              <Flex direction={'column'} gap={10} style={{ padding: '20px 0 16px 0' }}>
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'global.label.label3'}
                />
                <BasePasswordInput
                  // onChange={(event:any) => setPassword(event.currentTarget.value)}
                  style={{ maxWidth: '370', maxHeight: '44' }}
                  placeholder={'Write your password'}
                  {...loginForm.getInputProps('password')}
                // value={password}
                />
                {error ?
                  <BaseText style={typography.label.en.l1}
                    color={theme.colors.red[7]} txtkey={'authentication.formText.errorMessage'} />
                  : null}
              </Flex>
              <Box style={{ width: '100%', textAlign: 'center' }}>
                <BaseText
                  ta="center"
                  style={typography.label.en.l1}
                  color={theme.colors.dark[8]}
                  txtkey={'signUpForm.forgetPassword'}
                />
              </Box>
              <BaseButton
                onClick={(e) => {
                  e.preventDefault()
                  if (loginForm.values.email && loginForm.values.password)
                    handleLogin()
                  else
                    console.log("email or password is empty")
                }}
                style={{
                  width: `${isIPhone ? '280px' : '370px'}`,
                  maxHeight: '39px',
                  margin: '40px 0 26px 0',
                  color: 'white'
                }}
                style_variant={loginForm.values.email.length && loginForm.values.password.length ? 'filled' : 'disabled'}
                color_variant={loginForm.values.email.length && loginForm.values.password.length ? 'blue' : 'gray'}
              >
                <BaseText
                  style={typography.buttonText.en.b2}
                  color={loginForm.values.email.length && loginForm.values.password.length ? theme.white : theme.colors.dark[1]}
                  txtkey={'signUpForm.login'}
                />
              </BaseButton>
            </form>
            <Flex
              justify="center"
              style={{
                margin: '0 0 6px 0',
              }}
              align="center"
              gap={5}
            >
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
          </Box>
        </Flex>
      </Box>
    </>
  );
};
