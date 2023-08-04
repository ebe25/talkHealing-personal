import { BaseText } from "@/components/elements/BaseText/BaseText";
import { Flex, Stack, useMantineTheme } from "@mantine/core";
import { typography } from "@/themes/Mantine/typography";
import { useStores } from "@/models";
import { translate } from "@/i18n";
import I18NFlex from "@/components/elements/I18NFlex/I18nFlex";
interface CustomerQuestionsProps {
  question?: any;
  timestamp?: any;
  answer?: any;
}

function CustomerQuestions(props: CustomerQuestionsProps) {
  const { i18nStore } = useStores();
  const theme = useMantineTheme();
  return (
    <Stack spacing={2} mt={"23px"}>
      <I18NFlex>
        <BaseText
          mr="2px"
          style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i3}
        >
          {translate("productPage.question")}
        </BaseText>
        <BaseText
          style={typography.inputFieldText[i18nStore.getCurrentLanguage()].i3}
        >
          {props.question}
        </BaseText>
      </I18NFlex>
      <BaseText
        sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
        mt={"8px"}
        c={theme.colors.gray[6]}
        style={typography.label[i18nStore.getCurrentLanguage()].l11}
      >
        {props.timestamp}
      </BaseText>
      <BaseText
        mt={"29px"}
        mb={"26px"}
        sx={{ textAlign: i18nStore.isRTL ? "end" : "start" }}
      >
        {props.answer}
      </BaseText>
    </Stack>
  );
}
export default CustomerQuestions;
