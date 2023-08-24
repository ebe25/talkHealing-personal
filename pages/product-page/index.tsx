import I18nFlex from "@/components/elements/I18nFlex/I18nFlex";
import { useStores } from "@/models";
import { Images } from "@/public";
import { typography } from "@/themes/Mantine/typography";
import {
  Anchor,
  Box,
  Breadcrumbs, Container,
  Flex,
  Image, useMantineTheme
} from "@mantine/core";
import { useState } from "react";
import ProductImageCarousel from "./PoductImageCarousel/ProductImageCarousel";
import useStyles from "./ProductPage.style";
import ProductCard from "./ProductCard/ProductCard";
import ProductProfile from "./ProductProfile/ProductProfile";

const ItemImages = [
  Images.product_image,
  Images.product_image,
  Images.product_image,
  Images.product_image,
  Images.product_image,
  Images.product_image
];

const BreadcrumbsLabels = [
  { title: "Apparels", href: "#" },
  { title: "Tops ", href: "#" },
  { title: "T-shirt & tanks", href: "#" },
  { title: "Basic round neck Tshirt", href: "#" }
];

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

function ProductPage() {
  const { classes } = useStyles();
  const [selectItemImage, setSelectedItemImage] = useState(0);

  return (
    <Container maw="1350px">
      <Box className={classes.boxWrapper}>
        <BreadcrumbPath />
        <I18nFlex className={classes.flexWrapper2} justify={"center"}>
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
        </I18nFlex>
      </Box>
    </Container>
  );
}

export default ProductPage;
