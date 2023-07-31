import { BaseButton } from "@/components/elements/BaseButton/BaseButton";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { translate } from "@/i18n";
import { useStores } from "@/models";
import { Images } from "@/public";
import { COLORS } from "@/themes/Mantine/colors";
import { typography } from "@/themes/Mantine/typography";
import {
  Anchor,
  Box,
  Breadcrumbs, Card,
  Container,
  Flex,
  Image,
  Popover,
  Stack
} from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductImageCarousel from "./PoductImageCarousel/ProductImageCarousel";
import useStyles from "./ProductPage.style";
import ProductTabs from "./ProductsTabs/ProductTabs";

function BadgeIcon(props: {
  logo: string;
  title: string;
  w: string;
  h: string;
}) {
  const { i18nStore } = useStores();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",

        height: "34px",
        backgroundColor: "white",
        color: "black",
        width: "84px",
        borderRadius: "26px",
        border: `solid 1px ${COLORS.gray[2]}`
      }}
      // variant="outline"
    >
      <Image src={props.logo} width={props.w} height={props.h} />
      {props.title}
    </Box>
  );
}

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
function ProductPage() {
  const { i18nStore } = useStores();
  const router = useRouter();
  const { classes } = useStyles();
  const [countItems, setCountItems] = useState(0);
  const [selectItemImage, setSelectedItemImage] = useState(0);
  const [isBookMarkSave, setIsBookMarkSave] = useState(false);
  const items = [
    { title: "Apparels", href: "#" },
    { title: "Tops ", href: "#" },
    { title: "T-shirt & tanks", href: "#" },
    { title: "Basic round neck Tshirt", href: "#" }
  ].map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      color={COLORS.dark[9]}
      style={typography.label[i18nStore.getCurrentLanguage()].l5}
    >
      {item.title}
    </Anchor>
  ));
  return (
    <Container maw="1350px">
      <Box className={classes.boxWrapper}>
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
          color={COLORS.dark[8]}
          style={typography.label[i18nStore.getCurrentLanguage()].l5}
        >
          {items}
        </Breadcrumbs>
        <Flex
          className={classes.flexWrapper2}
          sx={{
            flexDirection: i18nStore.isRTL ? "row-reverse" : "row",
            justifyContent: "center"
          }}
        >
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
            <Card
              // mt={"50px"}
              mb={"50px"}
              bg={COLORS.dark[0]}
              maw={"100%"}
              padding={"0px"}
              style={{ borderRadius: "26px" }}
            >
              <Flex
                sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
                className={classes.flexWrapper3}
                style={{
                  borderRadius: "26px",
                  border: `solid 1px ${COLORS.gray[2]}`
                }}
              >
                <Flex
                  className={classes.flexWrapper4}
                  sx={{
                    flexDirection: i18nStore.isRTL ? "row-reverse" : "row"
                  }}
                >
                  <Image
                    width={"54px"}
                    height={"54px"}
                    src={Images.product_logo}
                    alt="product_log"
                  />
                  <Box
                    className={`${classes.boxWrapper2} ${classes.boxWrapper3}`}
                  >
                    <BaseText
                      className={classes.textStyle}
                      color={COLORS.dark[8]}
                      style={
                        typography.label[i18nStore.getCurrentLanguage()].l6
                      }
                    >
                      Pebea Sneakers
                    </BaseText>
                    <Flex
                      sx={{
                        flexDirection: i18nStore.isRTL ? "row-reverse" : "row"
                      }}
                      justify={"space-between"}
                      align={"center"}
                      gap={"6px"}
                    >
                      <Image
                        width={"10.5px"}
                        height={"14px"}
                        src={Images.location_icon}
                        alt="location_icon"
                      />
                      <BaseText
                        color={COLORS.dark[8]}
                        style={
                          typography.label[i18nStore.getCurrentLanguage()].l1
                        }
                      >
                        Bangalore
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
                        color={COLORS.dark[8]}
                        style={
                          typography.label[i18nStore.getCurrentLanguage()].l1
                        }
                      >
                        4.1
                      </BaseText>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  className={classes.flexWrapper7}
                  mr={"24px"}
                  ml={i18nStore.isRTL ? "24px" : " 0px"}
                  sx={{
                    flexDirection: i18nStore.isRTL ? "row-reverse" : "row"
                  }}
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
                </Flex>
              </Flex>
              <Box mt={"24px"} mb={"30px"}>
                {ProductdetailFields.map((item, idx) => (
                  <Flex
                    sx={{
                      flexDirection: i18nStore.isRTL ? "row-reverse" : "row"
                    }}
                    justify={"space-between"}
                    key={idx}
                    mt="16px"
                    mx={"32px"}
                  >
                    <BaseText color={COLORS.gray[6]}>{item}</BaseText>
                    <BaseText
                      style={
                        typography.paragraph[i18nStore.getCurrentLanguage()].p5
                      }
                    >
                      {ProductInformation[idx]}
                    </BaseText>
                  </Flex>
                ))}
              </Box>
            </Card>
          </Box>

          <Stack miw={"50%"}>
            <Flex
              gap={"22px"}
              sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
            >
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
            </Flex>
            <BaseText
              color={COLORS.cyan[9]}
              sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
              style={typography.headings[i18nStore.getCurrentLanguage()].h9}
            >
              Product name lorem ipsum dolor set amet
            </BaseText>
            <BaseText
              mt={"20px"}
              mb={"50px"}
              sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
              style={typography.label[i18nStore.getCurrentLanguage()].l8}
            >
              $78.25
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
            <Flex
              gap="xl"
              wrap={"wrap"}
              sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
            >
              {["White", "Black", "Blue", "Red"].map((item, id) => {
                return (
                  <BaseButton
                    style={{
                      ...typography.paragraph[i18nStore.getCurrentLanguage()].p3
                    }}
                    bg={COLORS.dark[0]}
                    c={COLORS.gray[6]}
                    key={`image_type_${id}`}
                    w={"98px"}
                    style_variant="filled"
                    color_variant="gray"
                  >
                    {item}
                  </BaseButton>
                );
              })}
            </Flex>
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
            <Flex
              gap="xl"
              wrap={"wrap"}
              sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
            >
              {["38", "39", "40", "41", "42", "43", "44", "45", "46"].map(
                (item, id) => {
                  return (
                    <BaseButton
                      style={
                        typography.inputFieldText[
                          i18nStore.getCurrentLanguage()
                        ].i2
                      }
                      bg={COLORS.dark[0]}
                      c={COLORS.gray[6]}
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
            </Flex>
            <Flex
              my={"40px"}
              align={"center"}
              gap={"18px"}
              wrap={"wrap"}
              justify={"space-between"}
              sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
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
                    ...typography.inputFieldText[i18nStore.getCurrentLanguage()]
                      .i2,
                    fontSize: "35px"
                  }}
                  // bg={COLORS.dark[0]}
                  c={countItems == 0 ? COLORS.gray[6] : COLORS.blue[4]}
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
                <BaseText c={COLORS.gray[6]} fz={"22px"} fw={"bold"}>
                  {countItems}
                </BaseText>
                <BaseButton
                  onClick={() => setCountItems((pre) => pre + 1)}
                  style={{
                    ...typography.inputFieldText[i18nStore.getCurrentLanguage()]
                      .i2,
                    fontSize: "30px"
                  }}
                  c={COLORS.blue[4]}
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
                  c={COLORS.dark[1]}
                >
                  {translate("productPage.addToCart")}
                </BaseButton>
                <BaseButton
                  style={{
                    ...typography.headings[i18nStore.getCurrentLanguage()].h7
                  }}
                  bg={COLORS.gray[2]}
                  c={COLORS.dark[1]}
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
                  <Popover.Dropdown
                    px={"12px"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "18px",
                      gap: "12px",
                      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.15)",
                      height: "56px"
                    }}
                  >
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
            </Flex>
            <ProductTabs />
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
}

export default ProductPage;
