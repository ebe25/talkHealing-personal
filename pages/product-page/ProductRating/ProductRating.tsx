import { BaseText } from "@/components/elements/BaseText/BaseText";
import { Stack, Rating, Flex, Box, Slider, useMantineTheme } from "@mantine/core";
import { useStores } from "@/models";
import { typography } from "@/themes/Mantine/typography";
import UserComments from "../UserComments/UserComments";
import { Images } from "@/public";
import useStyles from "./../ProductPage.style";
import I18NFlex from "@/components/elements/I18NFlex/I18NFlex";

function ProductRating() {
  const { i18nStore } = useStores();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Stack mt="40px">
      <I18NFlex
        className={classes.flexWrapper5}
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
              <I18NFlex key={id} align={"center"} gap="7px"
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
                  c={theme.colors.gray[6]}
                  style={
                    typography.inputFieldText[i18nStore.getCurrentLanguage()].i4
                  }
                >
                  {8}
                </BaseText>
              </I18NFlex>
            );
          })}
        </Box>
      </I18NFlex>
      <UserComments  />
      <UserComments images={[Images.product_image, Images.product_image]} />
      <UserComments />
      <UserComments images={[Images.product_image, Images.product_image]} />
    </Stack>
  );
}
export default ProductRating;
