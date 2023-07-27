import React, { useState } from "react";
import { Tabs, Flex, Box } from "@mantine/core";
import { useStores } from "@/models";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { typography } from "@/themes/Mantine/typography";
import { COLORS } from "@/themes/Mantine/colors";
import ProductRating from "../ProductRating/ProductRating";
import CustomerQuestions from "../CustomerQuestions/CustomerQuestions";
function ProductTabs() {
  const { i18nStore } = useStores();
  const [currentTab, setCurrentTab] = useState<any>("About product");
  const ProductValues = [
    "New",
    "> 10 items",
    "Cotton",
    "Pick up & delivery courrier"
  ];
  return (
    <Tabs
      defaultValue="About product"
      onTabChange={(value) => setCurrentTab(value)}
    >
      <Tabs.List>
        <Tabs.Tab
          pb={"18px"}
          value="About product"
          c={currentTab == "About product" ? "blue !important" : COLORS.gray[6]}
          style={{ ...typography.label[i18nStore.getCurrentLanguage()].l7 }}
        >
          About product
        </Tabs.Tab>
        <Tabs.Tab
          pb={"18px"}
          c={
            currentTab == "Customer rating" ? "blue !important" : COLORS.gray[6]
          }
          value="Customer rating"
          style={typography.label[i18nStore.getCurrentLanguage()].l7}
        >
          Customer rating
        </Tabs.Tab>
        <Tabs.Tab
          pb={"18px"}
          c={
            currentTab == "Customer questions"
              ? "blue !important"
              : COLORS.gray[6]
          }
          value="Customer questions"
          style={typography.label[i18nStore.getCurrentLanguage()].l7}
        >
          Customer questions
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="About product" mt={"40px"}>
        {["Condition", "Current quantity", "Materials", "Delivery"].map(
          (item, id) => {
            return (
              <Flex justify={"space-between"}>
                <BaseText c={COLORS.gray[6]} mb={"14px"}>
                  {item}
                </BaseText>
                <Box w="70%">
                  <BaseText
                    mb={"14px"}
                    style={typography.label[i18nStore.getCurrentLanguage()].l9}
                  >
                    {ProductValues[id]}{" "}
                  </BaseText>
                </Box>
              </Flex>
            );
          }
        )}
        <BaseText

          mt={"40px"}
          style={{...typography.paragraph[i18nStore.getCurrentLanguage()].p6, textAlign:"justify"}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </BaseText>
      </Tabs.Panel>

      <Tabs.Panel value="Customer rating">
        <ProductRating />
      </Tabs.Panel>

      <Tabs.Panel value="Customer questions">
        <CustomerQuestions/>
        <CustomerQuestions/>
        <CustomerQuestions/>
        <CustomerQuestions/>
        
      </Tabs.Panel>
    </Tabs>
  );
}

export default ProductTabs;
