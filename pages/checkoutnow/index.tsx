// React and next import
import React, { useState } from 'react';
// mantine component import
import {
  Container,
  Flex,
  Grid,
  Image,
  Input,
  Radio,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
// styles file import
import { createStyle } from './CheckOutNow.styles';
// internal components import
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import { Images } from '@/public';
import { boilerPlateStyles } from '@/utils/styles/styles';
import { BackButton } from '@/components/elements/BackButton/BackButton';
import { translate } from '@/i18n';
import { IconMapPinFilled } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { AddressModal } from '@/components/modules/Modals/CartAddressModal/AddressModal';
import { AddressSelectModal } from '@/components/modules/Modals/AddressSelectModal/AddressSelectModal';
import { typography } from '@/themes/Mantine/typography';
import { useStores } from '@/models';

const CheckOutNow = () => {
  // style function
  const  { i18nStore } = useStores()
  const useStyles = createStyle();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  // Hooks
  const [opened, { open, close }] = useDisclosure(false);
  const editAddressModal = useDisclosure(false);
  const AddresSelectModal = useDisclosure(false);
  
  const address = [
    {
      id: "1",
      name: 'Andrew White',
      phone: '+8562910002938',
      address: 'Old Airport Raod, Kodihalli, Bangalore 560008, Karnataka, Indi...',
    },
    {
      id: "2",
      name: 'Sachin',
      phone: '+8562910002938',
      address: 'Old Airport Raod, Kodihalli, Bangalore 560008, Karnataka, Indi...',
    },
    {
      id: "3",
      name: 'Joe',
      phone: '+8562910002938',
      address: 'Old Airport Raod, Kodihalli, Bangalore 560008, Karnataka, Indi...',
    },
  ];
  const [addressId, setAddressId] = useState<any>(address[0].id);
  // const [ checked , setChecked ] = useState(address[0].id)


  return (
    <>
      <Container maw={'1000px'} mt={'50px'}>
        <BackButton heading={translate('checkOutNow.backButtonText')} />
        <Grid mt={'50px'} m={0}>
          <Grid.Col xs={12} sm={12} md={8} lg={8} xl={8} p={0}>
            <Stack w={'95%'} mb={'40px'}>
              <Flex
                w={'100%'}
                align={'center'}
                justify={'space-between'}
                bg={theme.colors.dark[0]}
                p={'16px'}
                style={boilerPlateStyles.border_radius}
              >
                <Flex gap={'sm'} align={"center"} >
                  <IconMapPinFilled />
                  <BaseText txtkey="checkOutNow.addrestext" style={typography.headings[i18nStore.getCurrentLanguage()].h8} color={theme.colors.dark[9]} />
                </Flex>
                <BaseButton onClick={open} style_variant="filled" color_variant="blue" w={'200px'}>
                  <BaseText txtkey="profile.addressButton" color={'white'} />
                </BaseButton>
              </Flex>
                  {address.filter((item)=> {if(item.id == addressId ) return item} ).map((item, index) => {
                    return (
                      <Flex
                      p={'16px'}
                      bg={theme.colors.dark[0]}
                      style={boilerPlateStyles.border_radius}
                      align={"center"}
                      gap={"md"}
                      >
                        {/* <Radio
                          key={index}
                          value={item.id}
                          checked={ checked == item.id ?true:false }
                          onChange={(event)=>{
                            setChecked(event.target.value)
                          }}
                        /> */}
                        <Stack
                          w={'100%'}
                        >
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
                            {/* <BaseButton
                              style_variant="filled"
                              color_variant="blue"
                              onClick={() => {
                                editAddressModal[1].open();
                              }}
                              w={'125px'}
                            >
                              <BaseText txtkey="profile.editAddress" />
                            </BaseButton> */}
                            <BaseButton style_variant="filled" color_variant="blue" w={'160px'} onClick={AddresSelectModal[1].open} >
                              <BaseText txtkey="global.button.changeAddress" />
                            </BaseButton>
                          </Flex>
                        </Stack>
                      </Flex>
                    );
                  })}
              <Flex align={'center'} gap={'lg'} mt={'xl'}>
                <Image src={Images.pebea_icon} alt="Pebea Icon" width={'34px'} height={'34px'} />
                <BaseText className={classes.subHeading} txtkey="myCart.pebeaSneakers" />
              </Flex>
              <Flex w={'100%'} gap={'lg'} mb={'sm'} className={classes.cartBox}>
                <Image
                  src={Images.cart_image}
                  alt="cart iamges"
                  width={'112px'}
                  height={'140px'}
                  radius={'12px'}
                />
                <Flex w={'100%'} h={'140px'}>
                  <Stack className={classes.itemDetailBox}>
                    <BaseText className={classes.cardProductHeading}>
                      {'Product name lorem ipsum dolor sit amet '}
                    </BaseText>
                    <BaseText className={classes.cardProductPrice}>
                      {'1 Item'}&nbsp;&middot;&nbsp;{'$78.25'}
                    </BaseText>
                    <Flex
                      gap={'5px'}
                      justify={'center'}
                      align={'center'}
                      className={classes.typeBox}
                    >
                      <BaseText style={typography.label[i18nStore.getCurrentLanguage()].l12} txtkey="global.button.blue" color={theme.colors.cyan[9]} />
                      &middot;
                      <BaseText style={typography.label[i18nStore.getCurrentLanguage()].l12} txtkey="global.button.large" color={theme.colors.cyan[9]} />
                    </Flex>
                  </Stack>
                </Flex>
              </Flex>
              <Flex>
                <BaseText txtkey="checkOutNow.totalPrice" color={theme.colors.dark[9]} style={typography.headings[i18nStore.getCurrentLanguage()].h8} />
              </Flex>
            </Stack>
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={4} lg={4} xl={4} p={0}
            className={classes.payNow}
          >
            <Flex direction={'column'} justify={'space-between'} className={classes.priceBox}>
              <Flex gap={'xs'}>
                <Image src={Images.coupon_icon} alt="coupon_icon" width={'38px'} height={'38px'} />
                <Input variant="filled" radius={'xl'} w={'100%'} placeholder="Voucher code" />
              </Flex>
              <Flex justify={'space-between'}>
                <BaseText color={theme.colors.cyan[9]}>{'Total price (5 items)'}</BaseText>
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h8} color={theme.colors.dark[9]}>{'$394.00'}</BaseText>
              </Flex>
              <Flex justify={'space-between'}>
                <BaseText color={theme.colors.cyan[9]}>{'Delivery fee'}</BaseText>
                <BaseText color={theme.colors.cyan[9]}>{'-'}</BaseText>
              </Flex>
              <Image src={Images.dash_line} alt="dash_line" width={'100%'} />
              <Flex justify={'space-between'}>
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h8} color={theme.colors.dark[9]}>{'Total payment'}</BaseText>
                <BaseText style={typography.headings[i18nStore.getCurrentLanguage()].h8} color={theme.colors.dark[9]}>{'$394.00'}</BaseText>
              </Flex>
            </Flex>

            <BaseButton color_variant="blue" style_variant={'filled'} mt={'xl'}
              
            >
              <BaseText txtkey="global.button.pay" color={'white'} />
            </BaseButton>
          </Grid.Col>
        </Grid>
      </Container>
      <AddressModal
        opened={opened}
        onClose={close}
        modalHeading={'profile.addressButton'}
        setAddressId={setAddressId}
      />
      
      <AddressSelectModal
        opened={AddresSelectModal[0]}
        onClose={AddresSelectModal[1].close}
        address={address}
        addressId={setAddressId}
      />
    </>
  );
};

export default CheckOutNow;
