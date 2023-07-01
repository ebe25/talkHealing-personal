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
import { SocialMedia } from '@/components/elements/SocialMedia/SocialMedia';
import useStyles from './Login.style';
import { useStores } from '@/models';

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
  const isMiniLaptop = useMediaQuery('(max-width:1200px)');
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {
    console.log("email and password ", email, password)
    userStore.loginUser(email, password).then((res) => {
      if (res) {
        // console.log("user logged in successfully!")
      }
    })
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
            src={props.img ? props.img : Images.LoginIner_Icon}
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
              <SocialMedia Icon={Images.facebook_Icon} />
              <SocialMedia Icon={Images.google_Icon} />
            </Flex>
            <Flex direction={'column'} gap={10} style={{ padding: '20px 0 0 0' }}>
              <BaseText
                style={typography.label.en.l1}
                color={theme.colors.gray[6]}
                txtkey={'global.label.label2'}
              />
              <Input
                onChange={(e) => { setEmail(e.target.value) }}
                style={{ maxWidth: '370', maxHeight: '44' }}
                component={'input'}
                placeholder="Write your email"
                style_variant={'inputText1'}
              />
            </Flex>
            <Flex direction={'column'} gap={10} style={{ padding: '20px 0 16px 0' }}>
              <BaseText
                style={typography.label.en.l1}
                color={theme.colors.gray[6]}
                txtkey={'global.label.label3'}
              />
              <BasePasswordInput
                onChange={(event:any) => setPassword(event.currentTarget.value)}
                style={{ maxWidth: '370', maxHeight: '44' }}
                placeholder={'Write your password'}
              // value={password}
              />
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
                if (email && password)
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
              style_variant={email.length && password.length ? 'filled' : 'disabled'}
              color_variant={email.length && password.length ? 'blue' : 'gray'}
            >
              <BaseText
                style={typography.buttonText.en.b2}
                color={email.length && password.length ? theme.white : theme.colors.dark[1]}
                txtkey={'signUpForm.login'}
              />
            </BaseButton>
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
