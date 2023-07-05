import React, { useState } from 'react';
import { Box, CloseButton, Flex, Image, useMantineTheme } from '@mantine/core';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { typography } from '@/themes/Mantine/typography';
import { Input } from '@/components/elements/Input/Input';
import { useDisclosure } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import { useStores } from '@/models';
import { Images } from '../../../../public/index';
import { useForm } from "@mantine/form";

interface ForgotPasswordProps {
  opened: boolean;
  close: any;
}

export const ForgotPassword = (props: ForgotPasswordProps) => {
  const isPhone = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  const { userStore } = useStores()
  const [opened, { open, close }] = useDisclosure(false);
  const [selectEmail, setSelectEmail] = useState(false);
  const [selectPhone, setSelectPhone] = useState(false);
  const [next, setNext] = useState(false);
  const theme = useMantineTheme();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("")

  const Select = (type: string) => {
    if (type == 'email' && selectEmail == true) {
      setSelectEmail(false);
    } else if (type == 'phone' && selectPhone == true) {
      setSelectPhone(false);
    } else if (type == 'email') {
      setSelectEmail(true);
      setSelectPhone(false);
    } else if (type == 'phone') {
      setSelectPhone(true);
      setSelectEmail(false);
    } else {
      setSelectPhone(false);
      setSelectEmail(false);
    }
  };


  const Contine = () => {
    selectEmail || selectPhone ? setNext(true) : null;
    console.log(selectEmail);
    console.log(selectPhone);
    console.log(next);
  };

  const resetPassword = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : 'Invalid email')
    },
  });

  const handleResetPassword = () => {
    setLoader(true)

    let results = resetPassword.validate();

    if (results.hasErrors) return setLoader(false);
    if (!results.hasErrors) {
      userStore.resetPassword(
        resetPassword.values.email
      ).then((res) => {
        if (res.ok) {
          console.log("email link send successfully!")
          resetPassword.setValues({
            email: "",
          });
          setLoader(false)
          props.close()
        }
        else if (res.code == 400) {
          if (res.error) {
            setLoader(false)
            setError("Invalid email")
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
      <BaseModal
        radius={32}
        size={isPhone ? '100%' : isTablet ? '70%' : ''}
        withCloseButton={false}
        opened={props.opened}
        onClose={props.close}
      >
        <Flex direction={'column'} gap={20} style={{ padding: '25px' }}>
          <Flex direction={'column'} gap={8}>
            <Flex justify={'space-between'}>
              <BaseText
                style={typography.headings.en.h3}
                color={theme.colors.dark[7]}
                txtkey={'authentication.formText.forgetPassword'}
              />
              <CloseButton onClick={() => {
                props.close()
                setSelectPhone(false);
                setSelectEmail(false);
                setNext(false);
              }} aria-label="Close modal" iconSize={20} />
            </Flex>
            <BaseText style={typography.paragraph.en.p2} txtkey={"modal.forgotPassword.text"} />
          </Flex>

          <form onSubmit={resetPassword.onSubmit((values) => console.log(values))}>
            <Flex direction={'column'} gap={20}>
              {!next ? (
                <>
                  <Flex
                    wrap={'wrap'}
                    gap={20}
                    style={{ width: '100%', padding: '10px' }}
                    align={'center'}
                    justify={isPhone ? 'center' : 'space-between'}
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
                        background: `${selectEmail ? theme.colors.blue[4] : theme.colors.gray[1]}`,
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
                        background: `${selectPhone ? theme.colors.blue[4] : theme.colors.gray[1]}`,
                      }}
                    >
                      <Image width={60} style={{ margin: 'auto' }} src={Images.phone} />
                    </Flex>
                  </Flex>
                </>
              ) : null}

              {selectEmail && next ? (
                <Flex direction={'column'} gap={10} style={{ width: '100%' }}>
                  <BaseText
                    style={typography.label.en.l1}
                    color={theme.colors.gray[6]}
                    txtkey={'authentication.formText.email'}
                  />
                  <Input
                    component={'input'}
                    type="text"
                    placeholder="Email"
                    style_variant={'inputText1'}
                    {...resetPassword.getInputProps('email')}
                  />
                  {error ?
                    <BaseText style={typography.label.en.l1}
                      color={theme.colors.red[7]} txtkey={'modal.forgotPassword.text'} />
                    : null}
                </Flex>
              ) : null}

              {selectPhone && next ? (
                <Flex direction={'column'} gap={10} style={{ width: '100%' }}>
                  <BaseText
                    style={typography.label.en.l1}
                    color={theme.colors.gray[6]}
                    txtkey={'authentication.formText.phoneNumber'}
                  />
                  <Input
                    component={'input'}
                    type="number"
                    placeholder="Number"
                    style_variant={'inputText1'}
                  />
                </Flex>
              ) : null}

              <Flex
                wrap={'wrap'}
                gap={10}
                style={{ width: '100%' }}
                align={'center'}
                justify={'space-between'}
              >
                <BaseButton
                  onClick={() => {
                    props.close()
                    setSelectPhone(false);
                    setSelectEmail(false);
                    setNext(false);
                  }}
                  style_variant={'filled'}
                  color_variant={'gray'}
                  style={{ width: `${isPhone ? '100%' : '47%'}` }}
                >
                  <BaseText txtkey={'global.button.cancel'} />
                </BaseButton>
                <BaseButton
                  style_variant={'filled'}
                  color_variant={'gray'}
                  style={{
                    width: `${isPhone ? '100%' : '47%'}`,
                    background: `${selectEmail || selectPhone ? theme.colors.blue[4] : ''}`,
                  }}
                  onClick={(e) => {
                    Contine()
                    e.preventDefault()
                    if (resetPassword.values.email)
                      handleResetPassword()
                    else
                      console.log("email or password is empty")
                  }}
                >
                  <BaseText txtkey={'global.button.confirm'} />
                </BaseButton>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </BaseModal>
    </>
  );
};
