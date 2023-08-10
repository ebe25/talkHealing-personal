import { BaseButton } from "@/components/elements/BaseButton/BaseButton";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import I18nFlex from "@/components/elements/I18nFlex/I18nFlex";
import { translate } from "@/i18n";
import { useStores } from "@/models";
import { Images } from "@/public";
import { typography } from "@/themes/Mantine/typography";
import {
    Anchor,
    Box,
    Breadcrumbs,
    Card, Image, useMantineTheme
} from "@mantine/core";
import useStyles from '../ProductPage.style';

const ProductdetailFields = [
  translate("productPage.totalProduct"),
  translate("productPage.productSold"),
  translate("productPage.responseRate"),
  translate("productPage.joinedSince")
];

const ProductInformation = ["230", "4321", "10 minutes", "4 years ago"];

const ApiData= {
  productHeading: "Product name lorem ipsum dolor set amet",
  productPrice:"$78.32",
  brandName:"Pebea Sneakers",
  location:"Bangalore",
  productRating: '4.1'
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
      <I18nFlex
        className={classes.flexWrapper3}
        style={{
          borderRadius: "26px",
          border: `solid 1px ${theme.colors.gray[2]}`
        }}
      >
        <I18nFlex className={classes.flexWrapper4}>
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
            <I18nFlex justify={"space-between"} align={"center"} gap={"6px"}>
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
            </I18nFlex>
          </Box>
        </I18nFlex>
        <I18nFlex
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
        </I18nFlex>
      </I18nFlex>
      <Box mt={"24px"} mb={"30px"}>
        {ProductdetailFields.map((item, idx) => (
          <I18nFlex justify={"space-between"} key={idx} mt="16px" mx={"32px"}>
            <BaseText color={theme.colors.gray[6]}>{item}</BaseText>
            <BaseText
              style={typography.paragraph[i18nStore.getCurrentLanguage()].p5}
            >
              {ProductInformation[idx]}
            </BaseText>
          </I18nFlex>
        ))}
      </Box>
    </Card>
  );
}


export default ProductCard;