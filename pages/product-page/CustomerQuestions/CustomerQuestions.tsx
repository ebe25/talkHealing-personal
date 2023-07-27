import { BaseText } from "@/components/elements/BaseText/BaseText";
import { Flex, Stack } from "@mantine/core";
import React from "react";
import { typography } from "@/themes/Mantine/typography";
import { useStores } from "@/models";
import { COLORS } from "@/themes/Mantine/colors";

interface CustomerQuestionsProps {
  question?: any;
  dateOnAsked?: any;
  answer?: any;
}

function CustomerQuestions(props: CustomerQuestionsProps) {
  const { i18nStore } = useStores();
  return (
    <Stack spacing={2} mt ={"33px"}>
      <Flex>
        <BaseText
          style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i3}
        >
          Question:
        </BaseText>
        <BaseText
          style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i3}
        >
          Is this shoes comfortable?
        </BaseText>
      </Flex>
      <BaseText
      mt = {"8px"}
        c={COLORS.gray[6]}
        style={typography.label[i18nStore.getCurrentLanguage()].l11}
      >
        June 16th, 2020
      </BaseText>
      <BaseText mt={"29px"} mb={"66px"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </BaseText>
    </Stack>
  );
}
export default CustomerQuestions;
