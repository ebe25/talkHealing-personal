import { BaseButton } from "@/components/elements/BaseButton/BaseButton";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import I18nFlex from "@/components/elements/I18nFlex/I18nFlex";
import { translate } from "@/i18n";
import { useStores } from "@/models";
import { Images } from "@/public";
import { typography } from "@/themes/Mantine/typography";
import {
  Button,
  Flex,
  Image,
  Popover,
  Stack,
  useMantineTheme
} from "@mantine/core";
import { useState } from "react";
import BadgeIcon from "../BadgeIcon/BadgeIcon";
import useStyles from "../ProductPage.style";
import ProductTabs from "../ProductsTabs/ProductTabs";

const TootTipImages = [
  Images.facebook_icon,
  Images.twitter_icon,
  Images.whatsapp_icon,
  Images.share_link_icon
];

const ApiData = {
  productHeading: "Product name lorem ipsum dolor set amet",
  productPrice: "$78.32",
  brandName: "Pebea Sneakers",
  location: "Bangalore",
  productRating: "4.1"
};

function ProductProfile() {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  const [countItems, setCountItems] = useState(0);
  const { classes } = useStyles();
  const [isBookMarkSave, setIsBookMarkSave] = useState(false);

  return (
    <Stack miw={"50%"}>
      <I18nFlex gap={"22px"}>
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
      </I18nFlex>
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
      <I18nFlex gap="xl" wrap={"wrap"}>
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
      </I18nFlex>
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
      <I18nFlex gap="xl" wrap={"wrap"}>
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
      </I18nFlex>
      <I18nFlex
        my={"40px"}
        align={"center"}
        gap={"18px"}
        wrap={"wrap"}
        justify={"space-between"}
      >
        <Flex gap={"32px"} align={"center"} wrap={"wrap"}>
          <Button
            onClick={() => {
              setCountItems((pre) => {
                if (pre == 0) {
                  return 0;
                } else {
                  return pre - 1;
                }
              });
            }}
            className={classes.addAndremoveItemStyle}
            size="sm"
            c={countItems == 0 ? theme.colors.gray[6] : theme.colors.blue[4]}
            variant="outline"
          >
            {"-"}
          </Button> 
          <BaseText c={theme.colors.gray[6]} fz={"22px"} fw={"bold"}>
            {countItems}
          </BaseText>
          <Button
            className={classes.addAndremoveItemStyle}
            onClick={() => setCountItems((pre) => pre + 1)}
            size="sm"
            variant="outline"
          >
            {"+"}
          </Button>
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
      </I18nFlex>
      <ProductTabs />
    </Stack>
  );
}

export default ProductProfile;
