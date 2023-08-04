// react and next import
import React, {useEffect, useState } from 'react';
//styles
import useStyles from './Address.styles';
//mantine component
import { Box, Button, Center, Flex, Loader, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// internal component
import { AddressModal } from '../Modals/ProfileModals/AddressModals/AddressModal';
import { DeleteAddressModal } from '../Modals/ProfileModals/DeleteAddressModal/DeleteAddressModal';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { IconCirclePlus, IconMapPinFilled } from '@tabler/icons-react';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
//stores
import { useStores } from '@/models';
import { AddressPaginatedType } from '@/models/modules/user/schemas';
//external

export const Address = () => {
  const { userStore } = useStores()
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false); 
  const address = useDisclosure(false); 
  const editAddress = useDisclosure(false); 
  const [ modalHeading, setModalHeading ] = useState<any>();
  const [ addressRecall, setAddressRecall ] = useState(true);
  const [ userAddress, setUserAddress ] = useState<AddressPaginatedType>();
  const [ addressId, setAddresId ] = useState("");
  useEffect(() => {
    userStore.getLoginUserData()
    userStore.getUserAddress().then((res)=>{
      if(res.ok){
        if(userStore.address != null ) setUserAddress(userStore.address)
        setAddressRecall(false)
      }
    })
  },[addressRecall])

  return (
    <>
    {addressRecall?
      <Center h={"100vh"} >
      <Loader size="xl" />
    </Center>:
    <Box className={classes.container}>
      <Button
        className={classes.addNewAddressButton}
        variant="outline"
        rightIcon={<IconCirclePlus color={theme.colors.blue[5]} />}
        onClick={()=>{
          setAddresId("")
          setModalHeading("profile.addressButton");
          open()
        }}
      >
        <BaseText txtkey="profile.addressButton" color={theme.colors.blue[5]} />
      </Button>
      {userAddress?.results.map((item, id) => {
        return (
          <Box key={id} className={classes.addressBox}>
            <Text
              color={theme.colors.gray[5]}
            >
            {userStore.userData?.full_name}&nbsp;&middot;&nbsp;{userStore.userData?.phone}
            </Text>
            <Flex gap={"8px"} my={"10px"} >
              <IconMapPinFilled color={"blue"} />
              <Text
                color={theme.colors.dark[8]}
              >
                {item.address_line1},&nbsp;{item.address_line2},&nbsp;{item.city},&nbsp;{item.state},&nbsp;{item.country}&nbsp;{item.postal_code}
              </Text>
            </Flex>
            <Flex gap={"16px"} >
              <BaseButton
                style_variant='outline'
                color_variant='blue'
                onClick={()=>{
                  setAddresId(item.id)
                  setModalHeading("profile.addressDetails")
                  editAddress[1].open()
                }}
              >
                <BaseText
                  txtkey='profile.editAddress'
                  color={theme.colors.blue[4]}
                />
              </BaseButton>
              <BaseButton
                style_variant='outline'
                color_variant='red'
                onClick={()=>{
                  setAddresId(item.id)
                  address[1].open()
                }}
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
        setAddressRecall={setAddressRecall}
        setAddresId={setAddresId}
        opened={opened}
        onClose={close}
        modalHeading={modalHeading}
      />
      <AddressModal
        setAddressRecall={setAddressRecall}
        id={addressId}
        setAddresId={setAddresId}
        // data={JSON.stringify(userAddress?.results[userAddressid])}
        opened={editAddress[0]}
        onClose={editAddress[1].close}
        modalHeading={modalHeading}
        isEdit
      />
      <DeleteAddressModal
        id={addressId}
        opened={address[0]}
        onClose={address[1].close}
        setAddressRecall={setAddressRecall}
      />
    </Box>}
    </>
  );
};
