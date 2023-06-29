import React from 'react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { Input } from '@/components/elements/Input/Input';
import { BasePasswordInput } from '@/components/elements/PasswordInput/PasswordInput';
import { Box, Center, Flex, Image } from '@mantine/core';
import { typography } from '@/themes/Mantine/typography';
import { useMantineTheme } from '@mantine/core';
import Images1 from '../../public/image/bgImage.png';
import Images2 from '../../public/image/Logins.png';
import { Images } from '../../public/index';
import { useMediaQuery } from '@mantine/hooks';

interface LoginProps {
  img?: string;
}

export const Login = (props: LoginProps) => {
  const theme = useMantineTheme();
  const isPhone = useMediaQuery('(max-width:375px)');
  return (
    <>
      <Box
        style={{
          width: '100%',
          height: '100vh',
          // padding: '231px 135px 213px 135px',
          display: 'flex',
          // flexDirection : "column",
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url( ' + `${Images.bg_Icon}` + '  )',
          backgroundSize: '100%',
        }}
      >
        <Flex justify="center" align="center" gap={100} wrap="wrap">
          <Image
            src={props.img ? props.img : Images.Login_Icon}
            style={{ maxWidth: '700px', maxHeight: '437px' }}
            alt="icon"
          />
          <Box style={{ maxWidth: '370px', maxHeight: '456px' }}>
            <BaseText
              style={typography.headings.en.h2}
              color={theme.colors.dark[8]}
              txtkey={'header.Login'}
            />
            <Flex>
              <Image />
              <Image />
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
              />
            </Flex>
            <Flex direction={'column'} gap={10} style={{ padding: '20px 0 16px 0' }}>
              <BaseText
                style={typography.label.en.l1}
                color={theme.colors.gray[6]}
                txtkey={'global.label.label3'}
              />
              <BasePasswordInput
                style={{ maxWidth: '370', maxHeight: '44' }}
                placeholder={'Write your password'}
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
              style={{ width: '370px', maxHeight: '39px', margin: '40px 0 26px 0' }}
              style_variant={'disabled'}
              color_variant={'gray'}
            >
              <BaseText
                style={typography.buttonText.en.b2}
                color={theme.colors.dark[1]}
                txtkey={'signUpForm.login'}
              />
            </BaseButton>
            <Flex justify="center" align="center">
              <BaseText
                style={typography.label.en.l1}
                color={theme.colors.gray[6]}
                txtkey={'signUpForm.newUser'}
              />
              <BaseText
                style={typography.label.en.l1}
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
