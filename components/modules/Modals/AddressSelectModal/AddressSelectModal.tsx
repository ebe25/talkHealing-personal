// react and nextb import
import React, { useState } from 'react';
// mantine component
import { Flex, Radio, Stack, Text, useMantineTheme } from '@mantine/core';
// styles components
// internals components
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { BaseModal } from '@/components/elements/BaseModal/BaseModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
// stores import
import { useStores } from '@/models';
// others import
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
//external
import { boilerPlateStyles } from '@/utils/styles/styles';
import { createStyle } from '../CartAddressModal/AddressModal.styles';
import { IconMapPinFilled } from '@tabler/icons-react';
import { AddressModal } from '../CartAddressModal/AddressModal';

export const AddressSelectModal = (props: {
  opened?: any;
  onClose?: any;
  address: Array<any>;
  addressId?: any
}) => {
  const { i18nStore } = useStores();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const useStyles = createStyle();
  const isPhone = useMediaQuery("(max-width: 576px)");
  const [loader, setLoader] = useState(false);
  // const [error, setError] = useState("");
  const { classes } = useStyles();
  const [checked, setChecked] = useState(props.address[0].id);
  const [addressId, setAddressId] = useState('');

  return (
    <>
      <BaseModal
        size={ isPhone?"98%": '75%'}
        padding={ isPhone?"10px" :'30px'}
        radius={'xl'}
        opened={props.opened}
        onClose={() => {
          props.onClose();
        }}
        withCloseButton={false}
      >
        {props.address.map((item, index) => {
          return (
            <Flex
              p={'16px'}
              bg={theme.colors.dark[0]}
              style={boilerPlateStyles.border_radius}
              align={'center'}
              gap={'md'}
              mb={"10px"}
            >
              <Radio
                key={index}
                value={item.id}
                checked={checked == item.id ? true : false}
                onChange={(event) => {
                  setChecked(event.target.value);
                }}
              />
              <Stack w={'100%'}>
                <Flex>
                  <Text color={theme.colors.cyan[9]}>{item.name}</Text>
                  &nbsp;&middot;&nbsp;
                  <Text color={theme.colors.cyan[9]}>{item.phone}</Text>
                </Flex>
                <Flex gap={'sm'}>
                  <IconMapPinFilled />
                  <Text>{item.address}</Text>
                </Flex>
                <Flex gap={'md'}>
                  <BaseButton
                    style_variant="filled"
                    color_variant="blue"
                    onClick={() => {
                     open()
                    }}
                    w={'125px'}
                  >
                    <BaseText txtkey="profile.editAddress" />
                  </BaseButton>
                  {/* <BaseButton style_variant="filled" color_variant="blue" w={'160px'}>
                    <BaseText txtkey="global.button.changeAddress" />
                  </BaseButton> */}
                </Flex>
              </Stack>
            </Flex>
          );
        })}
        <BaseButton
            color_variant='blue'
            style_variant='filled'
            onClick={()=>{
                props.addressId(checked)
                props.onClose()
            }}
        >
            <BaseText txtkey="global.button.changeAddress" />
        </BaseButton>
      </BaseModal>
      <AddressModal
        opened={opened}
        onClose={close}
        isEdit
        modalHeading={'profile.editAddress'}
        setAddressId={setAddressId}
      />
    </>
  );
};
