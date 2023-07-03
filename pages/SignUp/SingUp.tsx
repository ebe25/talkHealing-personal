import React from 'react';
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
import useStyles from './SignUp.style';

interface SignUpProps {
  img?: string;
}

export const SignUp = (props: SignUpProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isIPhone = useMediaQuery('(max-width:400px)');
  const isPhone = useMediaQuery('(max-width:600px)');
  const isMiniLaptop = useMediaQuery('(max-width:1200px)');
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
              />
            </Flex>
            <BaseButton
              style={{
                width: `${isIPhone ? '280px' : '370px'}`,
                maxHeight: '39px',
                margin: '40px 0 26px 0',
              }}
              style_variant={'disabled'}
              color_variant={'gray'}
            >
              <BaseText
                style={typography.buttonText.en.b2}
                color={theme.colors.dark[1]}
                txtkey={'signUpForm.login'}
              />
            </BaseButton>
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
