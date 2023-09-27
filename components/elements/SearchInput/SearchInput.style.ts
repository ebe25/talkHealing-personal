import { createStyles } from '@mantine/core';
import { typography } from "@/themes/Mantine/typography";
import { useStores } from '@/models';

export const createStyle = () => {
  const { i18nStore } = useStores()

  return createStyles((theme) => ({
    mainBox: {
      // width: "631px",
      height: "34px",
      color: theme.colors.gray[6],
      ...typography.paragraph[i18nStore.getCurrentLanguage()].p2,
    },
    rightSection: {
      right: i18nStore.isRTL ? "1%" : ""
    },
    innerInput: {
      textAlign: i18nStore.isRTL ? "right" : "left",
      padding: i18nStore.isRTL ? "0px 40px" : ""
    },
    searchIcon: {
      marginTop: "5px",
      cursor: "pointer"
    }
  }
  ))
}