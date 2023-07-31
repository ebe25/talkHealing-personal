import { BaseText } from "@/components/elements/BaseText/BaseText";
import { Stack, Rating, Flex, Box, Slider } from "@mantine/core";
import { useStores } from "@/models";
import { typography } from "@/themes/Mantine/typography";
import UserComments from "../UserComments/UserComments";
import { Images } from "@/public";
import { COLORS } from "@/themes/Mantine/colors";
import useStyles from "./../ProductPage.style";

function ProductRating() {
  const { i18nStore } = useStores();
  const { classes } = useStyles();
  return (
    <Stack mt="40px">
      <Flex
        className={classes.flexWrapper5}
        sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
      >
        <Box>
          <BaseText
            style={typography.label[i18nStore.getCurrentLanguage()].l10}
          >
            {4.8}
          </BaseText>
          <Rating value={5} fractions={3} readOnly />
        </Box>

        <Box>
          {[...Array(5)].map((item, id) => {
            return (
              <Flex key={id} align={"center"} gap="7px"
              sx = {{flexDirection: i18nStore.isRTL?"row-reverse":"row"}}
              >
                <Rating defaultValue={2} count={1} readOnly />
                <BaseText>{id + 1}</BaseText>
                <Slider
                  defaultValue={id * 20}
                  w="140px"
                  classNames={{
                    bar: classes.mark
                  }}
                  disabled
                />
                <BaseText
                  c={COLORS.gray[6]}
                  style={
                    typography.inputFieldText[i18nStore.getCurrentLanguage()].i4
                  }
                >
                  {8}
                </BaseText>
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
