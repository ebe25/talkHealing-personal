import React from 'react';
import { Flex, Image } from '@mantine/core';
import { Images } from '../../../public/index';
import { useStores } from '../../../models';
import { BaseText } from '../BaseText/BaseText';
import { useRouter } from 'next/router';
import { boilerPlateStyles } from '../../../utils/styles/styles';

export const BackButton = (props: { heading?: string | null; navigationLink?: any }) => {
  const { i18nStore } = useStores();
  const router = useRouter();

  return (
    <Flex align={'center'} gap={'md'} style={boilerPlateStyles.cursor}>
      <Image
        onClick={() => {
          router.back();
        }}
        style={{
          scale: i18nStore.isRTL ? '-1' : '1',
        }}
        src={Images.back_button_icon}
        alt="icon"
        width={'24px'}
        height={'20px'}
      />
      <BaseText> {props.heading} </BaseText>
    </Flex>
  );
};
