import React from "react";
import { Box, Flex, Image, Rating } from "@mantine/core";
import { Images } from "@/public";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { useStores } from "@/models";
import { typography } from "@/themes/Mantine/typography";
import { useMediaQuery } from "@mantine/hooks";
import { COLORS } from "@/themes/Mantine/colors";
import useStyles from "./../ProductPage.style";

interface UserCommentsProps {
  profilePhoto?: string;
  dateOnCommented?: string;
  rating?: any;
  commentMessage?: any;
  images?: any;
}

function UserComments(props: UserCommentsProps) {
  const { i18nStore } = useStores();
  const { classes } = useStyles();
  const mobile = useMediaQuery("(max-width:500px)");
  return (
    <Box mt={"50px"}>
      <Flex
        className={classes.flexWrapper6}
        sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
      >
        <Flex
          gap={"20px"}
          sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
        >
          <Image
            src={Images.profile_photo_image}
            width={"50px"}
            height={"50px"}
          />
          <Flex direction={"column"} gap={"8px"}>
            <BaseText
              style={typography.label[i18nStore.getCurrentLanguage()].l4}
            >
              Diane Lansdowne
            </BaseText>
            <BaseText
              c={COLORS.gray[6]}
              style={typography.label[i18nStore.getCurrentLanguage()].l11}
            >
              June 16th, 2020
            </BaseText>
          </Flex>
        </Flex>
        <Rating
          value={3}
          size={mobile ? "sm" : "lg"}
          readOnly
          fullSymbol={
            <Image
            mr = {"8px"}
              src={Images.colored_star_icon}
              width={"23px"}
              height={"23px"}
              alt={"coloured_star_icon"}
            />
          }
          emptySymbol={
            <Image
            mr = {"8px"}
              src={Images.uncolored_star_icon}
              width={"23px"}
              height={"23x"}
              alt={"uncoloured_star_icon"}
            />
          }
        />
      </Flex>
      <BaseText
        mt={"29px"}
        sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </BaseText>
      <Flex
        gap={"20px"}
        mt={"20px"}
        sx={{ flexDirection: i18nStore.isRTL ? "row-reverse" : "row" }}
      >
        {props.images?.map((item: string | null | undefined, id: any) => {
          return (
            <Image
              key={`image_${id}`}
              src={item}
              width={"120px"}
              height={"140px"}
              alt="commented_image"
            />
          );
        })}
      </Flex>
    </Box>
  );
}
export default UserComments;
