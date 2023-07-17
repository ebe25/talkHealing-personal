// react and nextb import
import React, { useState } from 'react';
// mantine component
import { useForm } from '@mantine/form';
import { Flex, Image, Stack, useMantineTheme } from '@mantine/core';
// internals components
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '../../../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
// others import
import { Images } from '@/public';

export const FinalModal = (props: { 
    opened?: boolean
    onClose?: any 
    para?: any
}) => {
  const { i18nStore } = useStores();

  return (
    <BaseModal
      size={'sm'}
      padding={'30px'}
      radius={'xl'}
      opened={props.opened}
      onClose={() => {
        props.onClose();
      }}
      withCloseButton={false}
    >
      <Flex justify={'flex-end'}>
        <Image
          onClick={() => {
            props.onClose();
          }}
          src={Images.close_modal_icon}
          alt="close_modal_icon"
          width={'14px'}
          height={'14px'}
        />
      </Flex>
      <Flex direction={'column'} justify={'space-between'} align={'center'} w={'100%'} mt={'26px'}>
        <Stack>
          <Flex w={'100%'} justify={'center'}>
            <Image
              src={Images.successful_password__modal_img}
              width="226px"
              height="190px"
              alt="successful_password__modal_img"
            />
          </Flex>
          <BaseText
            ta={'center'}
            mt={'30px'}
            txtkey={props.para}
            style={typography.headings[i18nStore.getCurrentLanguage()].h6}
          />
        </Stack>
        <BaseButton
          w={'100%'}
          h={'40px'}
          mt={'40px'}
          style_variant={'filled'}
          color_variant={'blue'}
          onClick={props.onClose}
        >
          <BaseText txtkey="global.button.ok" />
        </BaseButton>
      </Flex>
    </BaseModal>
  );
};
