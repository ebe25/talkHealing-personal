import { BaseText } from "@/components/elements/BaseText/BaseText";
import { Stack, Rating, Flex, Box, Slider } from "@mantine/core";
import React from "react";
import { useStores } from "@/models";
import { typography } from "@/themes/Mantine/typography";
import UserComments from "../UserComments/UserComments";
import { Images } from "@/public";

function ProductRating() {
  const { i18nStore } = useStores();
  return (
    <Stack mt="40px">
      <Flex justify={"space-around"} align={"end"}>
        <Box>
          <BaseText
            style={typography.label[i18nStore.getCurrentLanguage()].l10}
          >
            {4.8}
          </BaseText>
          <Rating value={3}  readOnly/>
        </Box>

        <Box>
          {[...Array(5)].map((item, id) => {
            return (
              <Flex key={id} align={"center"} gap="7px">
                <Rating defaultValue={2} count={1} />
                <BaseText>{id + 1}</BaseText>
                <Slider defaultValue={68} disabled w="220px" />
                <BaseText>{8}</BaseText>
              </Flex>
            );
          })}
        </Box>
      </Flex>
      <UserComments />
      <UserComments images={[Images.product_image, Images.product_image]} />
      <UserComments />
      <UserComments images={[Images.product_image, Images.product_image]} />
    </Stack>
  );
}
export default ProductRating;
