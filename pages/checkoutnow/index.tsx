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

const CheckOutNow = () => {
  // style function
  const useStyles = createStyle();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  // Hooks
  const [opened, { open, close }] = useDisclosure(false);
  const editAddressModal = useDisclosure(false);
  const [addressId, setAddressId] = useState<any>('');

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
  const [ checked , setChecked ] = useState(address[0].id)


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
                <Flex gap={'sm'}>
                  <IconMapPinFilled />
                  <BaseText txtkey="checkOutNow.addrestext" color={theme.colors.cyan[9]} />
                </Flex>
                <BaseButton onClick={open} style_variant="filled" color_variant="blue" w={'200px'}>
                  <BaseText txtkey="profile.addressButton" color={'white'} />
                </BaseButton>
              </Flex>
                  {address.map((item, index) => {
                    return (
                      <Flex
                      p={'16px'}
                      bg={theme.colors.dark[0]}
                      style={boilerPlateStyles.border_radius}
                      align={"center"}
                      gap={"md"}
                      >
                        <Radio
                          key={index}
                          value={item.id}
                          checked={ checked == item.id ?true:false }
                          onChange={(event)=>{
                            setChecked(event.target.value)
                          }}
                        />
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
                            <BaseButton
                              style_variant="filled"
                              color_variant="blue"
                              onClick={() => {
                                editAddressModal[1].open();
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
                      <BaseText txtkey="global.button.blue" color={theme.colors.cyan[9]} />
                      &middot;
                      <BaseText txtkey="global.button.large" color={theme.colors.cyan[9]} />
                    </Flex>
                  </Stack>
                </Flex>
              </Flex>
              <Flex>
                <BaseText txtkey="checkOutNow.totalPrice" color={theme.colors.cyan[9]} />
              </Flex>
            </Stack>
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={4} lg={4} xl={4} p={0}>
            <Flex direction={'column'} justify={'space-between'} className={classes.priceBox}>
              <Flex gap={'xs'}>
                <Image src={Images.coupon_icon} alt="coupon_icon" width={'38px'} height={'38px'} />
                <Input variant="filled" radius={'xl'} w={'100%'} placeholder="Voucher code" />
              </Flex>
              <Flex justify={'space-between'}>
                <BaseText color={theme.colors.cyan[9]}>{'Total price (5 items)'}</BaseText>
                <BaseText color={theme.colors.cyan[9]}>{'$394.00'}</BaseText>
              </Flex>
              <Flex justify={'space-between'}>
                <BaseText color={theme.colors.cyan[9]}>{'Delivery fee'}</BaseText>
                <BaseText color={theme.colors.cyan[9]}>{'-'}</BaseText>
              </Flex>
              <Image src={Images.dash_line} alt="dash_line" width={'100%'} />
              <Flex justify={'space-between'}>
                <BaseText color={theme.colors.cyan[9]}>{'Total payment'}</BaseText>
                <BaseText color={theme.colors.cyan[9]}>{'$394.00'}</BaseText>
              </Flex>
            </Flex>

            <BaseButton color_variant="blue" style_variant={'filled'} mt={'xl'}>
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
      <AddressModal
        opened={editAddressModal[0]}
        onClose={editAddressModal[1].close}
        isEdit
        modalHeading={'profile.editAddress'}
        setAddressId={setAddressId}
      />
    </>
  );
};

export default CheckOutNow;
