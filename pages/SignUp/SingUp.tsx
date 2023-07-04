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
import { useStores } from '@/models';
import useStyles from './SignUp.style';
import { useForm } from "@mantine/form";


interface SignUpProps {
  img?: string;
}

export const SignUp = (props: SignUpProps) => {
  const { classes } = useStyles();
  const { userStore } = useStores()
  const theme = useMantineTheme();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("")
  const isIPhone = useMediaQuery('(max-width:400px)');
  const isPhone = useMediaQuery('(max-width:600px)');
  const isMiniLaptop = useMediaQuery('(max-width:1200px)');

  const signUpForm = useForm({
    initialValues: {
      email: '',
      full_name: '',
      phone: '',
      password1: '',
      password2: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : 'Invalid email'),
      password1: (value) => {
        if (value.trim().length < 6)
          return 'Invalid password';
      },
      password2: (value) => {
        if (value != signUpForm.values.password1)
          return 'password not same';
      },
    },
  });

  let filled = () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signUpForm.values.email) && signUpForm.values.password1.length > 6

  const handleSignUp = () => {
    setLoader(true)

    let results = signUpForm.validate();

    if (results.hasErrors) return setLoader(false);
    if (!results.hasErrors) {
      userStore.signupUser(
        signUpForm.values.email,
        signUpForm.values.full_name,
        signUpForm.values.phone,
        signUpForm.values.password1,
        signUpForm.values.password2
      ).then((res) => {
        if (res.ok) {
          console.log("user logged in successfully!")
          signUpForm.setValues({
            email: "",
            password1: "",
            password2: "",
            phone: "",
            full_name: ""
          });
          setLoader(false)
        }
        else if (res.code == 400) {
          if (res.error) {
            setLoader(false)
            setError("Paaword not same")
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
          padding: `${isPhone ? '30px' : ''}`,
        }}
        className={classes.Container}
      >
        <Flex
          justify="center"
          style={{ width: '100%', height: '100%' }}
          align="center"
          gap={isMiniLaptop ? '' : 100}
          wrap="wrap"
        >
          <Image
            src={props.img ? props.img : Images.LoginIner_Icon}
            style={{ maxWidth: `${isMiniLaptop ? '550px' : '700px'}`, maxHeight: '437px' }}
            alt="icon"
          />
          <Box style={{ maxWidth: `${isIPhone ? '280px' : '370px'}` }}>
            <form onSubmit={signUpForm.onSubmit((values) => console.log(values))}>
              <Box style={{ width: '100%', textAlign: 'center' }}>
                <BaseText
                  style={typography.headings.en.h2}
                  color={theme.colors.dark[8]}
                  txtkey={'header.signUp'}
                />
              </Box>
              <Flex justify="center" align="center" gap={32} style={{ marginTop: '32px' }}>
                <CircularIcon Icon={Images.facebook_Icon} />
                <CircularIcon Icon={Images.google_Icon} />
              </Flex>
              <Flex direction={'column'} gap={10} style={{ padding: '20px 0 0 0' }}>
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'userProfile.accountDetails.name'}
                />
                <Input
                  style={{ maxWidth: '370', maxHeight: '44' }}
                  component={'input'}
                  placeholder="Write your name"
                  style_variant={'inputText1'}
                  {...signUpForm.getInputProps('full_name')}
                />
              </Flex>
              <Flex direction={'column'} gap={10} style={{ padding: '20px 0 0 0' }}>
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'global.label.label2'}
                />
                <Input
                  style={{ maxWidth: '370', maxHeight: '44' }}
                  component={'input'}
                  placeholder="Write your email"
                  style_variant={'inputText1'}
                  {...signUpForm.getInputProps('email')}
                />
              </Flex>
              <Flex direction={'column'} gap={10} style={{ padding: '20px 0 0 0' }}>
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'userProfile.accountDetails.phoneNumber'}
                />
                <Input
                  style={{ maxWidth: '370', maxHeight: '44' }}
                  component={'input'}
                  type="number"
                  placeholder="Write your number"
                  style_variant={'inputText1'}
                  {...signUpForm.getInputProps('phone')}
                />
              </Flex>
              <Flex direction={'column'} gap={10} style={{ padding: '20px 0 0 0' }}>
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'global.label.label3'}
                />
                <BasePasswordInput
                  style={{ maxWidth: '370', maxHeight: '44' }}
                  placeholder={'Write your password'}
                  {...signUpForm.getInputProps('password1')}
                />
              </Flex>
              <Flex direction={'column'} gap={10} style={{ padding: '20px 0 0 0' }}>
                <BaseText
                  style={typography.label.en.l1}
                  color={theme.colors.gray[6]}
                  txtkey={'global.label.label4'}
                />
                <BasePasswordInput
                  style={{ maxWidth: '370', maxHeight: '44' }}
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
                style={{
                  width: `${isIPhone ? '280px' : '370px'}`,
                  maxHeight: '39px',
                  margin: '40px 0 26px 0',
                }}
                style_variant={signUpForm.values.email.length
                  && signUpForm.values.password1.length
                  && signUpForm.values.password2.length
                  && signUpForm.values.phone.length
                  && signUpForm.values.full_name.length ? 'filled' : 'disabled'}
                color_variant={signUpForm.values.email.length
                  && signUpForm.values.password1.length
                  && signUpForm.values.password2.length
                  && signUpForm.values.phone.length
                  && signUpForm.values.full_name.length
                  ? 'blue' : 'gray'}
              >
                <BaseText
                  style={typography.buttonText.en.b2}
                  color={signUpForm.values.email.length
                    && signUpForm.values.password1.length
                    && signUpForm.values.password2.length
                    && signUpForm.values.phone.length
                    && signUpForm.values.full_name.length
                    ? theme.white : theme.colors.dark[1]}
                  txtkey={'signUpForm.login'}
                />
              </BaseButton>
            </form>
            <Flex style={{ marginBottom: '10px' }} justify="center" align="center" gap={5}>
              <BaseText
                style={typography.label.en.l1}
                color={theme.colors.gray[6]}
                txtkey={'signUpForm.oldUser'}
              />
              <BaseText
                style={typography.headings.en.h7}
                color={theme.colors.blue[4]}
                txtkey={'signUpForm.signIn'}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
