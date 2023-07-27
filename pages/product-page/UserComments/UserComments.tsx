import React from "react";
import { Box, Flex, Image, Rating } from "@mantine/core";
import { Images } from "@/public";
import { BaseText } from "@/components/elements/BaseText/BaseText";
import { useStores } from "@/models";
import { typography } from "@/themes/Mantine/typography";
import { useMediaQuery } from "@mantine/hooks";
import { COLORS } from "@/themes/Mantine/colors";
interface UserCommentsProps {
  profilePhoto?: string;
  dateOnCommented?: string;
  rating?: any;
  commentMessage?: any;
  images?: any;
}

function UserComments(props: UserCommentsProps) {
  const { i18nStore } = useStores();
  const mobile = useMediaQuery("(max-width:500px)");
  return (
    <Box mt={"50px"}>
      <Flex align={mobile? "start":"center"} justify={"space-between"}>
        <Flex gap={"20px"}>
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
        <Rating value={3} size={mobile?"sm":"lg"}  readOnly />
      </Flex>
      <BaseText mt={"29px"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </BaseText>
      <Flex gap={"20px"} mt={"20px"}>
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
