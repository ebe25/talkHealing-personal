import React from "react";
import {
  Box,
  Breadcrumbs,
  Anchor,
  Flex,
  Image,
  Card,
  Text,
  Badge,
  Button,
  Group
} from "@mantine/core";
import { COLORS } from "@/themes/Mantine/colors";
import { typography } from "@/themes/Mantine/typography";
import { i18nStore } from "@/models/modules/i18n/store";
import { useStores } from "@/models";
import { Images } from "@/public";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { BaseButton } from "@/components/elements/BaseButton/BaseButton";

interface ProductPageTypes {
  productName: string;
  // here we define all product props and its types, currently which is unknown
}

const ProductdetailFields = [
  "Total product",
  "Product sold",
  "Response rate",
  "Joined since"
];
function ProductPage(_props: ProductPageTypes) {
  const { i18nStore } = useStores();
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
    <Box mx={"135px"}>
      <Breadcrumbs
        separator=">"
        mt="63px"
        color={COLORS.dark[8]}
        style={typography.label[i18nStore.getCurrentLanguage()].l5}
      >
        {items}
      </Breadcrumbs>
      <Flex mt={"40px"} wrap={"wrap"}>
        <Box>
          <Box>
            <Image
              width={"470px"}
              height={"590px"}
              src={Images.product_image}
              alt="product_image"
            />
            <Flex gap={"22px"}>
              {[...Array(4)].map((item, id) => {
                const uniqueKey = `image_${id}`;
                return (
                  <Image
                    mt={"24px"}
                    key={uniqueKey} // Use the unique key here
                    width={"100px"}
                    height={"125px"}
                    src={Images.product_image}
                    alt="product_image"
                  />
                );
              })}
            </Flex>
          </Box>
          <Card
            mt={"50px"}
            bg={COLORS.dark[0]}
            w={"470px"}
            padding={"0px"}
            style={{ borderRadius: "26px" }}
          >
            <Flex
              bg="white"
              style={{
                borderRadius: "26px",
                border: `solid 1px ${COLORS.gray[2]}`
              }}
            >
              <Flex align={"center"} justify={"space-between"} m={"32px"} >
                <Image
                  width={"54px"}
                  height={"54px"}
                  src={Images.product_logo}
                  alt="product_log"
                />
                <Box>
                  <BaseText
                    my={"10px"}
                    color={COLORS.dark[8]}
                    style={typography.label[i18nStore.getCurrentLanguage()].l6}
                  >
                    Pebea Sneakers
                  </BaseText>
                  <Flex justify={"space-between"}>
                    <Image
                      width={"14px"}
                      height={"14px"}
                      src={Images.location_icon}
                      alt="location_icon"
                    />
                    <BaseText
                      style={
                        typography.label[i18nStore.getCurrentLanguage()].l1
                      }
                    >
                      Bangalore |
                    </BaseText>
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
              <Flex justify={"space-between"} align={"center"} > 
                  <BaseButton
                    variant="outline"
                    radius={"44px"}
                    color_variant="blue"
                    size="xs"
                  >
                    {" "}
                    view store{" "}
                  </BaseButton>
                  <Image
                    width={"24px"}
                    height={"24px"}
                    src={Images.chat_icon}
                    alt="chat_icon"
                  />
                </Flex>
            </Flex>
            <Box mt = {'24px'}>
              {ProductdetailFields.map((item, idx) => (
                <Flex justify={"space-between"}
                  key={idx} mt="16px" mx={"32px"}>
                  <BaseText
                  color = {COLORS.gray[6]}
                  >{item}</BaseText>
                  <BaseText
                   style={
                    typography.paragraph[i18nStore.getCurrentLanguage()].p5
                  }
                  >{199 + 199*idx}</BaseText>
                </Flex>
              ))}
            </Box>
          </Card>
        </Box>

        <Box >asdfasdfas</Box>
      </Flex>
    </Box>
  );
}

export default ProductPage;
