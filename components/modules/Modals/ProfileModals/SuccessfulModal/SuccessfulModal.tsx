// react and nextb import
import React from 'react';
//Styles component
// mantine component
import { Flex, Image, Stack } from '@mantine/core';
// internals components
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '../../../../../themes/Mantine/typography';
// stores import
import { useStores } from '@/models';
// others import
import { Images } from '@/public';
import { boilerPlateStyles } from '@/utils/styles/styles';

export const SuccessfulModal = (props: { 
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
      <Flex justify={ i18nStore.isRTL?"flex-start": 'flex-end'}>
        <Image
          onClick={() => {
            props.onClose();
          }}
          src={Images.close_modal_icon}
          style={boilerPlateStyles.cursor}
          alt="close_modal_icon"
          width={'14px'}
          height={'14px'}
        />
      </Flex>
      <Flex direction={'column'} justify={'space-between'} align={'center'} w={'100%'} mt={'26px'}>
        <Stack>
          <Flex w={'100%'} justify={'center'}>
            <Image
              src={Images.successful_password_modal_img}
              width="226px"
              height="190px"
              alt="successful_password__modal_img"
            />
          </Flex>
          <BaseText
            ta={'center'}
            my={'30px'}
            txtkey={props.para}
            style={typography.headings[i18nStore.getCurrentLanguage()].h6}
          />
        </Stack>
        <BaseButton
          w={"100%"}
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
