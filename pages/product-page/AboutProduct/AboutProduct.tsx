import { useState } from "react";
import { Flex, Box } from "@mantine/core";
import { useStores } from "@/models";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { typography } from "@/themes/Mantine/typography";
import { COLORS } from "@/themes/Mantine/colors";
import { translate } from "@/i18n";
import { useMediaQuery } from "@mantine/hooks";
function AboutProduct() {
  const { i18nStore } = useStores();
  const matches = useMediaQuery("(max-width: 500px)");
  const [currentTab, setCurrentTab] = useState<any>("About product");
  const ProductLabels = [
    translate("productPage.condition"),
    translate("productPage.currentQuantity"),
    translate("productPage.material"),
    translate("productPage.delivery")
  ];
  const ProductValues = [
    "New",
    "> 10 items",
    "Cotton",
    "Pick up & delivery courrier"
  ];
  return (
    <Box>
      {ProductLabels.map((item, id) => {
        return (
          <Flex
            justify={"space-between"}
            sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
          >
            <BaseText c={COLORS.gray[6]} mb={"14px"}>
              {item}
            </BaseText>
            <Box w={matches ? "50%" : "70%"}>
              <BaseText
                sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
                mb={"14px"}
                style={typography.label[i18nStore.getCurrentLanguage()].l9}
              >
                {ProductValues[id]}{" "}
              </BaseText>
            </Box>
          </Flex>
        );
      })}
      <BaseText
        sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
        mt={"40px"}
        style={{
          ...typography.paragraph[i18nStore.getCurrentLanguage()].p6
          // textAlign: "justify"
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </BaseText>
      <BaseText
        sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
        mt={"40px"}
        style={{
          ...typography.paragraph[i18nStore.getCurrentLanguage()].p6
          // textAlign: "justify"
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </BaseText>
    </Box>
  );
}

export default AboutProduct;