import { useState } from "react";
import {
  Box,
  Breadcrumbs,
  Anchor,
  Flex,
  Image,
  Card,
  Stack,
  Tooltip
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ProductTabs from "./ProductsTabs/ProductTabs";
import { COLORS } from "@/themes/Mantine/colors";
import { typography } from "@/themes/Mantine/typography";
import { useStores } from "@/models";
import { Images } from "@/public";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { BaseButton } from "@/components/elements/BaseButton/BaseButton";
import { translate } from "@/i18n";

function BadgeIcon(props: {
  logo: string;
  title: string;
  w: string;
  h: string;
}) {
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
  const [countItems, setCountItems] = useState(0);
  const matches = useMediaQuery("(max-width:660px)");
  const desktop = useMediaQuery("(max-width:1080px)");
  const mobile = useMediaQuery("(max-width:500px)");
  const small = useMediaQuery("(max-width:400px)");
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
    <Box
      // mx={"135px"}
      mx={desktop ? "20px" : "70px"}
    >
      <Breadcrumbs
        sx={{ display: "flex", flexWrap: "wrap" }}
        separator={
          <Image src={Images.right_arrow_icon} alt="arrow_icon" width={"6px"} />
        }
        mt="63px"
        color={COLORS.dark[8]}
        style={typography.label[i18nStore.getCurrentLanguage()].l5}
      >
        {items}
      </Breadcrumbs>
      <Flex mt={"40px"} gap={"50px"} wrap={desktop ? "wrap" : "nowrap"}>
        <Box>
          <Box>
            <Image
              sx={{ objectFit: "contain" }}
              width={desktop ? "98vw" : "100%"}
              height={"490px"}
              src={ItemImages[selectItemImage]}
              alt="product_image"
            />
            <Flex
              gap={desktop ? "30px" : "22px"}
              justify={desktop ? "center" : "none"}
            >
              {ItemImages.map((item, id) => {
                const uniqueKey = `image_${id}`;
                return (
                  <Box key={uniqueKey} style={{ cursor: "pointer" }}>
                    <Image
                      onClick={() => setSelectedItemImage(id)}
                      mt={"24px"}
                      width={"100%"}
                      maw={"100px"}
                      // height={"auto"}
                      src={item}
                      alt="product_image"
                    />
                  </Box>
                );
              })}
            </Flex>
          </Box>
          <Card
            mt={"50px"}
            mb={"50px"}
            bg={COLORS.dark[0]}
            maw={"470px"}
            padding={"0px"}
            style={{ borderRadius: "26px" }}
          >
            <Flex
              bg="white"
              wrap={mobile ? "wrap" : "nowrap"}
              justify={mobile ? "" : "space-around"}
              style={{
                borderRadius: "26px",
                border: `solid 1px ${COLORS.gray[2]}`
              }}
            >
              <Flex
                align={"center"}
                justify={"space-between"}
                m={mobile ? "0px" : "32px"}
                // mx= {mobile?"32px":"0px"}
              >
                <Image
                  width={"54px"}
                  height={"54px"}
                  src={Images.product_logo}
                  alt="product_log"
                />
                <Box
                  mx={"20px"}
                  sx={{
                    display: mobile ? "flex" : "visible",
                    flexDirection: small ? "column" : "row"
                  }}
                >
                  <BaseText
                    my={"10px"}
                    mr={mobile ? "13px" : "0px"}
                    color={COLORS.dark[8]}
                    style={typography.label[i18nStore.getCurrentLanguage()].l6}
                  >
                    Pebea Sneakers
                  </BaseText>
                  <Flex justify={"space-between"} align={"center"} gap={"6px"}>
                    <Image
                      width={"10.5px"}
                      height={"14px"}
                      src={Images.location_icon}
                      alt="location_icon"
                    />
                    <BaseText
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
                // bg = 'red'
                justify={"space-between"}
                align={"center"}
                mr="32px"
                gap="24px"
              >
                <BaseButton
                  ml={small || mobile ? "90px" : "0px"}
                  style_variant="outline"
                  variant="outline"
                  radius={"44px"}
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
                <Flex justify={"space-between"} key={idx} mt="16px" mx={"32px"}>
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
          <Flex gap={"22px"}>
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
            style={typography.headings[i18nStore.getCurrentLanguage()].h9}
          >
            Product name lorem ipsum dolor set amet
          </BaseText>
          <BaseText style={typography.label[i18nStore.getCurrentLanguage()].l8}>
            $78.25
          </BaseText>
          <BaseText
            style={{
              ...typography.paragraph[i18nStore.getCurrentLanguage()].p3,
              fontStyle: "bold"
            }}
          >
            {translate("productPage.colors")}
          </BaseText>
          <Flex gap="xl" wrap={"wrap"}>
            {["White", "Black", "Blue", "Red"].map((item, id) => {
              return (
                <BaseButton
                  style={{
                    ...typography.paragraph[i18nStore.getCurrentLanguage()].p3,
                    fontStyle: "bold"
                  }}
                  bg={COLORS.dark[0]}
                  c={COLORS.gray[6]}
                  key={`image_type_${id}`}
                  size="sm"
                  style_variant="filled"
                  color_variant="gray"
                >
                  {item}
                </BaseButton>
              );
            })}
          </Flex>
          <BaseText
            style={typography.paragraph[i18nStore.getCurrentLanguage()].p3}
          >
            {translate("productPage.size")}
          </BaseText>
          <Flex gap="xl" wrap={"wrap"}>
            {["38", "39", "40", "41", "42", "43", "44", "45", "46"].map(
              (item, id) => {
                return (
                  <BaseButton
                    style={
                      typography.inputFieldText[i18nStore.getCurrentLanguage()]
                        .i2
                    }
                    bg={COLORS.dark[0]}
                    c={COLORS.gray[6]}
                    key={`image_type_${id}`}
                    size="sm"
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
                bg={COLORS.dark[0]}
                c={countItems == 0 ? COLORS.gray[6] : COLORS.blue[4]}
                size="sm"
                style_variant="filled"
                color_variant="gray"
                pb={"9px"}
              >
                {"-"}
              </BaseButton>
              <BaseText c={COLORS.gray[6]} fz={"22px"}>
                {countItems}
              </BaseText>
              <BaseButton
                onClick={() => setCountItems((pre) => pre + 1)}
                style={{
                  ...typography.inputFieldText[i18nStore.getCurrentLanguage()]
                    .i2,
                  fontSize: "30px"
                }}
                bg={COLORS.dark[0]}
                c={COLORS.blue[4]}
                pb={"9px"}
                size="sm"
                style_variant="filled"
                color_variant="gray"
              >
                {"+"}
              </BaseButton>
            </Flex>
            <Flex gap="28px" wrap={"wrap"}>
              <BaseButton
                style={typography.headings[i18nStore.getCurrentLanguage()].h7}
                size="sm"
                variant="outline"
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
                bg={COLORS.dark[0]}
                c={COLORS.gray[6]}
                size="sm"
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

              <Tooltip
                // opened ={true}
                position="bottom"
                label={
                  <Flex
                    align={"center"}
                    px={"12px"}
                    gap={"12px"}
                    sx={{
                      borderRadius: "18px",
                      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.15)",
                      height: "56px"
                    }}
                  >
                    {TootTipImages.map((item, id) => {
                      return (
                        <Image
                          key={id}
                          src={item}
                          width={"32px"}
                          height={"32px"}
                          alt={`image_${id}`}
                        />
                      );
                    })}
                  </Flex>
                }
                color="white"
                withArrow
              >
                <Image
                  style={{
                    cursor: "pointer"
                  }}
                  width={"23px"}
                  height={"24px"}
                  src={Images.share_icon}
                  alt="share_icon"
                />
              </Tooltip>
            </Flex>
          </Flex>
          <ProductTabs />
        </Stack>
      </Flex>
    </Box>
  );
}

export default ProductPage;
