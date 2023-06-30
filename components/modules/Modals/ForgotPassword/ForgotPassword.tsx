import React, { useState } from 'react';
import { Box, CloseButton, Flex, Image, useMantineTheme } from '@mantine/core';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { typography } from '@/themes/Mantine/typography';
import { Input } from '@/components/elements/Input/Input';
import { useDisclosure } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import { Images } from '../../../../public/index';

interface ForgotPasswordProps {
  opened: boolean;
  close: any;
}

export const ForgotPassword = (props: ForgotPasswordProps) => {
  const isPhone = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  const [opened, { open, close }] = useDisclosure(false);
  const [email, setEmail] = useState(false);
  const [selectEmail, setSelectEmail] = useState(false);
  const [selectPassword, setSelectPassword] = useState(false);
  const theme = useMantineTheme();

  const Select = (type: string) => {
    if (type == 'email' && selectEmail == true) {
      setSelectEmail(false);
    } else if (type == 'phone' && selectPassword == true) {
      setSelectPassword(false);
    } else if (type == 'email') {
      setSelectEmail(true);
      setSelectPassword(false);
    } else if (type == 'phone') {
      setSelectPassword(true);
      setSelectEmail(false);
    }
  };

  return (
    <>
      <BaseModal
        radius={32}
        size={isPhone ? '100%' : isTablet ? '70%' : ''}
        withCloseButton={false}
        opened={props.opened}
        onClose={props.close}
      >
        <Flex direction={'column'} gap={20} style={{ padding: '25px' }}>
          <Flex justify={'space-between'}>
            <BaseText
              style={typography.headings.en.h6}
              color={theme.colors.dark[8]}
              txtkey={'authentication.formText.forgetPassword'}
            />
            <CloseButton onClick={props.close} aria-label="Close modal" iconSize={20} />
          </Flex>

        

          <Box>
            <Flex
              wrap={'wrap'}
              gap={10}
              style={{ width: '100%', padding: '10px' }}
              align={'center'}
              justify={'space-between'}
            >
              <Flex
                onClick={() => {
                  Select('email');
                }}
                style={{
                  width: '100px',
                  cursor: 'pointer',
                  height: '100px',
                  borderRadius: '100%',
                  background: `${selectEmail ? theme.colors.green[6] : theme.colors.gray[1]}`,
                }}
              >
                <Image width={60} style={{ margin: 'auto' }} src={Images.email} />
              </Flex>
              <Flex
                onClick={() => {
                  Select('phone');
                }}
                style={{
                  width: '100px',
                  cursor: 'pointer',
                  height: '100px',
                  borderRadius: '100%',
                  background: `${selectPassword ? theme.colors.green[6] : theme.colors.gray[1]}`,
                }}
              >
                <Image width={60} style={{ margin: 'auto' }} src={Images.phone} />
              </Flex>
            </Flex>
            <Flex
              wrap={'wrap'}
              gap={10}
              style={{ width: '100%' }}
              align={'center'}
              justify={'space-between'}
            >
              <BaseButton
                onClick={props.close}
                style_variant={'filled'}
                color_variant={'gray'}
                style={{ width: `${isPhone ? '100%' : '47%'}` }}
              >
                <BaseText txtkey={'global.button.cancel'} />
              </BaseButton>
              <BaseButton
                style_variant={'filled'}
                color_variant={'gray'}
                style={{ width: `${isPhone ? '100%' : '47%'}` }}
              >
                <BaseText txtkey={'global.button.confirm'} />
              </BaseButton>
            </Flex>
          </Box>
        </Flex>
      </BaseModal>
      {}
      <BaseModal
        radius={32}
        size="45%"
        withCloseButton={false}
        opened={opened}
        onClose={() => {
          close();
          props.close();
        }}
      >
        <Flex direction={'column'} gap={50} style={{ padding: '25px' }}>
          <Flex justify={'space-between'}>
            <BaseText
              style={typography.headings.en.h6}
              color={theme.colors.dark[8]}
              txtkey={'authentication.formText.forgetPassword'}
            />
            <CloseButton
              onClick={() => {
                close();
                props.close();
              }}
              aria-label="Close modal"
              iconSize={20}
            />
          </Flex>
          <Flex direction={'column'} style={{ width: '100%' }}>
            <BaseText txtkey={'authentication.formText.email'} />
            <Input
              component={'input'}
              type="text"
              placeholder="Email"
              style_variant={'inputText1'}
            />
          </Flex>
          <BaseButton style_variant={'filled'} color_variant={'blue'} style={{ width: '100%' }}>
            <BaseText txtkey={'authentication.formText.email'} />
          </BaseButton>
        </Flex>
      </BaseModal>
    </>
  );
};
