import { BaseButton } from "@/components/elements/BaseButton/BaseButton";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import I18NFlex from "@/components/elements/I18NFlex/I18nFlex";
import { translate } from "@/i18n";
import { useStores } from "@/models";
import { Images } from "@/public";
import { typography } from "@/themes/Mantine/typography";
import {
  Anchor,
  Box,
  Breadcrumbs,
  Card,
  Container,
  Flex,
  Image,
  Popover,
  Stack,
  useMantineTheme
} from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import BadgeIcon from "./BadgeIcon/BadgeIcon";
import ProductImageCarousel from "./PoductImageCarousel/ProductImageCarousel";
import useStyles from "./ProductPage.style";
import ProductTabs from "./ProductsTabs/ProductTabs";

const ProductdetailFields = [
  translate("productPage.totalProduct"),
  translate("productPage.productSold"),
  translate("productPage.responseRate"),
  translate("productPage.joinedSince")
];
const ItemImages = [
  Images.product_image,
  Images.product_image,
  Images.product_image,
  Images.product_image,
  Images.product_image,
  Images.product_image
];
const TootTipImages = [
  Images.facebook_icon,
  Images.twitter_icon,
  Images.whatsapp_icon,
  Images.share_link_icon
];
const ProductInformation = ["230", "4321", "10 minutes", "4 years ago"];
const BreadcrumbsLabels = [
  { title: "Apparels", href: "#" },
  { title: "Tops ", href: "#" },
  { title: "T-shirt & tanks", href: "#" },
  { title: "Basic round neck Tshirt", href: "#" }
];
const ApiData= {
  productHeading: "Product name lorem ipsum dolor set amet",
  productPrice:"$78.32",
  brandName:"Pebea Sneakers",
  location:"Bangalore",
  productRating: '4.1'
}

function BreadcrumbPath() {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const items = BreadcrumbsLabels.map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      color={theme.colors.dark[9]}
      style={typography.label[i18nStore.getCurrentLanguage()].l5}
    >
      {item.title}
    </Anchor>
  ));
  return (
    <Breadcrumbs
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: i18nStore.isRTL ? "row-reverse" : "row"
      }}
      separator={
        <Image
          src={Images.right_arrow_icon}
          sx={{
            rotate: i18nStore.isRTL ? "180deg" : "0deg"
          }}
          alt="arrow_icon"
          width={"6px"}
        />
      }
      mt="63px"
      color={theme.colors.dark[8]}
      style={typography.label[i18nStore.getCurrentLanguage()].l5}
    >
      {items}
    </Breadcrumbs>
  );
}

function ProductCard() {
  const { i18nStore } = useStores();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  
  return (
    <Card
      mb={"50px"}
      bg={theme.colors.dark[0]}
      maw={"100%"}
      padding={"0px"}
      style={{ borderRadius: "26px" }}
    >
      <I18NFlex
        className={classes.flexWrapper3}
        style={{
          borderRadius: "26px",
          border: `solid 1px ${theme.colors.gray[2]}`
        }}
      >
        <I18NFlex className={classes.flexWrapper4}>
          <Image
            width={"54px"}
            height={"54px"}
            src={Images.product_logo}
            alt="product_log"
          />
          <Box className={`${classes.boxWrapper2} ${classes.boxWrapper3}`}>
            <BaseText
              className={classes.textStyle}
              color={theme.colors.dark[8]}
              style={typography.label[i18nStore.getCurrentLanguage()].l6}
            >
            
              {ApiData.brandName}
            </BaseText>
            <I18NFlex justify={"space-between"} align={"center"} gap={"6px"}>
              <Image
                width={"10.5px"}
                height={"14px"}
                src={Images.location_icon}
                alt="location_icon"
              />
              <BaseText
                color={theme.colors.dark[8]}
                style={typography.label[i18nStore.getCurrentLanguage()].l1}
              >
                {ApiData.location}
            
              </BaseText>
              <Image
                width={"1px"}
                height={"12px"}
                src={Images.vertical_line_icon}
                alt="star_icon"
              />
              <Image
                width={"16px"}
                height={"16px"}
                src={Images.star_icon}
                alt="star_icon"
              />
              <BaseText
                color={theme.colors.dark[8]}
                style={typography.label[i18nStore.getCurrentLanguage()].l1}
              >
                {ApiData.productRating}
              </BaseText>
            </I18NFlex>
          </Box>
        </I18NFlex>
        <I18NFlex
          className={classes.flexWrapper7}
          mr={"24px"}
          ml={i18nStore.isRTL ? "24px" : " 0px"}
        >
          <BaseButton
            className={classes.visitStoreBtnStyle}
            style_variant="outline"
            variant="outline"
            color_variant="blue"
            size="xs"
          >
            {" "}
            {translate("productPage.visitStore")}
          </BaseButton>
          <Image
            width={"24px"}
            height={"24px"}
            src={Images.chat_icon}
            alt="chat_icon"
          />
        </I18NFlex>
      </I18NFlex>
      <Box mt={"24px"} mb={"30px"}>
        {ProductdetailFields.map((item, idx) => (
          <I18NFlex justify={"space-between"} key={idx} mt="16px" mx={"32px"}>
            <BaseText color={theme.colors.gray[6]}>{item}</BaseText>
            <BaseText
              style={typography.paragraph[i18nStore.getCurrentLanguage()].p5}
            >
              {ProductInformation[idx]}
            </BaseText>
          </I18NFlex>
        ))}
      </Box>
    </Card>
  );
}

function ProductProfile() {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const [countItems, setCountItems] = useState(0);
  const { classes } = useStyles();
  const [isBookMarkSave, setIsBookMarkSave] = useState(false);
  
  return (
    <Stack miw={"50%"}>
      <I18NFlex gap={"22px"}>
        <BadgeIcon
          logo={Images.brand_icon}
          title={"Nike"}
          w={"22px"}
          h={"22px"}
        />
        <BadgeIcon
          logo={Images.star_icon}
          title={"4.1"}
          w={"17px"}
          h={"17px"}
        />
      </I18NFlex>
      <BaseText
        color={theme.colors.cyan[9]}
        sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
        style={typography.headings[i18nStore.getCurrentLanguage()].h9}
      >
        {ApiData.productHeading}
      </BaseText>
      <BaseText
        mt={"20px"}
        mb={"50px"}
        sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
        style={typography.label[i18nStore.getCurrentLanguage()].l8}
      >
        {ApiData.productPrice}
      </BaseText>
      <BaseText
        mb="16px"
        sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
        style={{
          ...typography.paragraph[i18nStore.getCurrentLanguage()].p3,
          fontWeight: "bold"
        }}
      >
        {translate("productPage.colors")}
      </BaseText>
      <I18NFlex gap="xl" wrap={"wrap"}>
        {["White", "Black", "Blue", "Red"].map((item, id) => {
          return (
            <BaseButton
              style={{
                ...typography.paragraph[i18nStore.getCurrentLanguage()].p3
              }}
              bg={theme.colors.dark[0]}
              c={theme.colors.gray[6]}
              key={`image_type_${id}`}
              w={"98px"}
              style_variant="filled"
              color_variant="gray"
            >
              {item}
            </BaseButton>
          );
        })}
      </I18NFlex>
      <BaseText
        my="16px"
        sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
        style={{
          ...typography.paragraph[i18nStore.getCurrentLanguage()].p3,
          fontWeight: "bold"
        }}
      >
        {translate("productPage.size")}
      </BaseText>
      <I18NFlex gap="xl" wrap={"wrap"}>
        {["38", "39", "40", "41", "42", "43", "44", "45", "46"].map(
          (item, id) => {
            return (
              <BaseButton
                style={
                  typography.inputFieldText[i18nStore.getCurrentLanguage()].i2
                }
                bg={theme.colors.dark[0]}
                c={theme.colors.gray[6]}
                key={`image_type_${id}`}
                w={"76px"}
                style_variant="filled"
                color_variant="gray"
              >
                {item}
              </BaseButton>
            );
          }
        )}
      </I18NFlex>
      <I18NFlex
        my={"40px"}
        align={"center"}
        gap={"18px"}
        wrap={"wrap"}
        justify={"space-between"}
      >
        <Flex gap={"32px"} align={"center"} wrap={"wrap"}>
          <BaseButton
            onClick={() => {
              setCountItems((pre) => {
                if (pre == 0) {
                  return 0;
                } else {
                  return pre - 1;
                }
              });
            }}
            style={{
              ...typography.inputFieldText[i18nStore.getCurrentLanguage()].i2,
              fontSize: "35px"
            }}
            c={countItems == 0 ? theme.colors.gray[6] : theme.colors.blue[4]}
            size="sm"
            w={"50px"}
            h={"50px"}
            fw={"bold"}
            style_variant="outline"
            color_variant="gray"
            p={"0px"}
            pb={"10px"}
          >
            {"-"}
          </BaseButton>
          <BaseText c={theme.colors.gray[6]} fz={"22px"} fw={"bold"}>
            {countItems}
          </BaseText>
          <BaseButton
            onClick={() => setCountItems((pre) => pre + 1)}
            style={{
              ...typography.inputFieldText[i18nStore.getCurrentLanguage()].i2,
              fontSize: "30px"
            }}
            c={theme.colors.blue[4]}
            p={"0px"}
            pb={"10px"}
            size="sm"
            w={"50px"}
            h={"50px"}
            fw={"bold"}
            style_variant="outline"
            color_variant="gray"
          >
            {"+"}
          </BaseButton>
        </Flex>
        <Flex gap="28px" wrap={"wrap"} align={"center"}>
          <BaseButton
            style={typography.headings[i18nStore.getCurrentLanguage()].h7}
            size="md"
            style_variant="outline"
            color_variant="gray"
            c={theme.colors.dark[1]}
          >
            {translate("productPage.addToCart")}
          </BaseButton>
          <BaseButton
            style={{
              ...typography.headings[i18nStore.getCurrentLanguage()].h7
            }}
            bg={theme.colors.gray[2]}
            c={theme.colors.dark[1]}
            size="md"
            style_variant="filled"
            color_variant="gray"
          >
            {translate("productPage.buyNow")}
          </BaseButton>
          <Image
            onClick={() => setIsBookMarkSave((pre) => !pre)}
            width={"19.11px"}
            height={"25px"}
            style={{
              cursor: "pointer"
            }}
            src={
              isBookMarkSave
                ? Images.selected_bookmark_icon
                : Images.bookmark_icon
            }
            alt="bookmark_icon"
          />

          <Popover withArrow>
            <Popover.Target>
              <Image
                style={{
                  cursor: "pointer "
                }}
                width={"23px"}
                height={"24px"}
                src={Images.share_icon}
                alt="share_icon"
              />
            </Popover.Target>
            <Popover.Dropdown className={classes.popoverStyle}>
              {TootTipImages.map((item, id) => {
                return (
                  <Image
                    style={{
                      cursor: "pointer"
                    }}
                    key={id}
                    src={item}
                    width={"32px"}
                    height={"32px"}
                    alt={`image_${id}`}
                  />
                );
              })}
            </Popover.Dropdown>
          </Popover>
        </Flex>
      </I18NFlex>
      <ProductTabs />
    </Stack>
  );
}

function ProductPage() {
  const { classes } = useStyles();
  const [selectItemImage, setSelectedItemImage] = useState(0);

  return (
    <Container maw="1350px">
      <Box className={classes.boxWrapper}>
        <BreadcrumbPath />
        <I18NFlex className={classes.flexWrapper2} justify={"center"}>
          <Box>
            <Box>
              <Image
                className={classes.productImageStyle}
                src={ItemImages[selectItemImage]}
                alt="product_image"
              />
              <Flex className={classes.flexWrapper1}>
                <ProductImageCarousel
                  images={ItemImages}
                  setSelectedItemImage={setSelectedItemImage}
                />
              </Flex>
            </Box>
            <ProductCard />
          </Box>
          <ProductProfile />
        </I18NFlex>
      </Box>
    </Container>
  );
}

export default ProductPage;
