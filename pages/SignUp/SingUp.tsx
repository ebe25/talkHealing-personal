import React, { useState } from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Flex, Grid, Image } from '@mantine/core';
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
  const isPhone = useMediaQuery('(max-width:600px)');

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
            setError("Password not same")
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
            <form onSubmit={signUpForm.onSubmit((values) => console.log(values))}>
              <Flex direction={'column'} gap={20}>
                <Flex w={'100%'} justify={'center'}>
                  <BaseText
                    style={typography.headings.en.h2}
                    color={theme.colors.dark[8]}
                    txtkey={'header.signUp'}
                  />
                </Flex>
                <Flex justify="center" align="center" gap={32}
                >
                  <CircularIcon Icon={Images.facebook_Icon} />
                  <CircularIcon Icon={Images.google_Icon} />
                </Flex>
                <Flex direction={'column'} gap={10}
                >
                  <BaseText
                    style={typography.label.en.l1}
                    color={theme.colors.gray[6]}
                    txtkey={'userProfile.accountDetails.name'}
                  />
                  <Input
                    maw={isPhone ? '280px' : '370px'}
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
                    maw={isPhone ? '280px' : '370px'}
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
                    txtkey={'userProfile.accountDetails.phoneNumber'}
                  />
                  <Input
                    maw={isPhone ? '280px' : '370px'}
                    mah={'44px'}
                    component={'input'}
                    type="number"
                    placeholder="Write your number"
                    style_variant={'inputText1'}
                    {...signUpForm.getInputProps('phone')}
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
                    maw={isPhone ? '280px' : '370px'}
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
                    maw={isPhone ? '280px' : '370px'}
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
                  w={isPhone ? '280px' : '370px'}
                  mah={'39px'}
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
              </Flex>
            </form>
            <Flex
              justify="center" align="center" gap={5}>
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
          </Flex>
        </Grid.Col>
      </Grid>
    </>
  );
};
