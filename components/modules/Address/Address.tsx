// react and next import
import React from 'react';
//styles
import useStyles from './Address.styles';
//mantine component
import { Box, Button, Flex, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// internal component
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { IconCirclePlus, IconMapPinFilled } from '@tabler/icons-react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
//stores
import { AddressModal } from '../Modals/ProfileModals/AddressModals/AddressModal';
//external

export const Address = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false); 
  
  const AddresData = [
    {
      name: 'Andrew White',
      numbher: '+8562910002938',
      address:
        'Old Airport Raod, Kodihalli, Bangalore 560008, Karnataka, India, HAL Old Airport Rd, ISRO Colony, Domlur, Bengaluru, Karnataka, India',
    },
    {
      name: 'Andrew White',
      numbher: '+8562910002938',
      address:
        'Old Airport Raod, Kodihalli, Bangalore 560008, Karnataka, India, HAL Old Airport Rd, ISRO Colony, Domlur, Bengaluru, Karnataka, India',
    },
  ];

  return (
    <Box className={classes.container}>
      <Button
        className={classes.addNewAddressButton}
        variant="outline"
        rightIcon={<IconCirclePlus color={theme.colors.blue[5]} />}
        onClick={open}
      >
        <BaseText txtkey="profile.addressButton" color={theme.colors.blue[5]} />
      </Button>
      {AddresData.map((item, id) => {
        return (
          <Box key={id} className={classes.addressBox}>
            <Text
              color={theme.colors.gray[5]}
            >
            {item.name}&nbsp;&middot;&nbsp;{item.numbher}
            </Text>
            <Flex gap={"8px"} my={"10px"} >
              <IconMapPinFilled color={"blue"} />
              <Text
                color={theme.colors.dark[8]}
              >
                {item.address}
              </Text>
            </Flex>
            <Flex gap={"16px"} >
              <BaseButton
                style_variant='outline'
                color_variant='blue'
              >
                <BaseText
                  txtkey='profile.editAddress'
                  color={theme.colors.blue[4]}
                />
              </BaseButton>
              <BaseButton
                style_variant='outline'
                color_variant='red'
              >
                <BaseText
                  txtkey='profile.delete'
                  color={theme.colors.red[8]}
                />
              </BaseButton>
            </Flex>
          </Box>
        );
      })}
      <AddressModal
        opened={opened}
        onClose={close}
      />
    </Box>
  );
};
