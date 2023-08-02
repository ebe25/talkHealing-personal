import { useState } from "react";
import { Tabs, Flex, Box } from "@mantine/core";
import { useStores } from "@/models";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { typography } from "@/themes/Mantine/typography";
import { COLORS } from "@/themes/Mantine/colors";
import ProductRating from "../ProductRating/ProductRating";
import CustomerQuestions from "../CustomerQuestions/CustomerQuestions";
import { translate } from "@/i18n";
import { useMediaQuery } from "@mantine/hooks";
import AboutProduct from "../AboutProduct/AboutProduct";
function ProductTabs() {
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
    <Tabs
      defaultValue="About product"
      onTabChange={(value) => setCurrentTab(value)}
    >
      <Tabs.List
        grow
        position="apart"
        sx={{
          display: i18nStore.isRTL ? "flex" : "visible",
          flexDirection: i18nStore.isRTL ? "row-reverse" : "row"
        }}
      >
        <Tabs.Tab
          px={2}
          pb={"18px"}
          value="About product"
          c={
            currentTab == "About product"
              ? `${COLORS.blue[4]} !important`
              : COLORS.gray[6]
          }
          sx={{
            ...typography.label[i18nStore.getCurrentLanguage()].l7,
            border: "none",
            "&:hover": {
              backgroundColor: "transparent"
            }
          }}
        >
          {translate("productPage.aboutProduct")}
          {currentTab == "About product" && (
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "59px",
                borderBottom: `4px solid ${COLORS.blue[4]}`,
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
              }}
            />
          )}
        </Tabs.Tab>
        <Tabs.Tab
          pb={"18px"}
          c={
            currentTab == "Customer rating"
              ? `${COLORS.blue[4]} !important`
              : COLORS.gray[6]
          }
          value="Customer rating"
          sx={{
            ...typography.label[i18nStore.getCurrentLanguage()].l7,
            border: "none",
            "&:hover": {
              backgroundColor: "transparent"
            }
          }}
        >
          {translate("productPage.customerRating")}
          {currentTab == "Customer rating" && (
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "59px",
                borderBottom: `4px solid ${COLORS.blue[4]}`,
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
              }}
            />
          )}
        </Tabs.Tab>
        <Tabs.Tab
          pb={"18px"}
          c={
            currentTab == "Customer questions"
              ? `${COLORS.blue[4]} !important`
              : COLORS.gray[6]
          }
          value="Customer questions"
          sx={{
            ...typography.label[i18nStore.getCurrentLanguage()].l7,
            border: "none",
            "&:hover": {
              backgroundColor: "transparent"
            }
          }}
        >
          {translate("productPage.customerQuestions")}
          {currentTab == "Customer questions" && (
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "59px",
                borderBottom: `4px solid ${COLORS.blue[4]}`,
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
              }}
            />
          )}
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="About product" mt={"40px"}>
        <AboutProduct />
      </Tabs.Panel>

      <Tabs.Panel value="Customer rating">
        <ProductRating />
      </Tabs.Panel>

      <Tabs.Panel value="Customer questions">
        <CustomerQuestions />
        <CustomerQuestions />
        <CustomerQuestions />
        <CustomerQuestions />
        <CustomerQuestions />
      </Tabs.Panel>
    </Tabs>
  );
}

export default ProductTabs;
