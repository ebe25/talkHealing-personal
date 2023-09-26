import { createStyles } from '@mantine/core';
import { typography } from "@/themes/Mantine/typography";
import { useStores } from '@/models';

export const createStyle = () => {
  const { i18nStore } = useStores();

  return createStyles((theme) => ({
    mainBox: {
      height: "34px",
      color: theme.colors.gray[6],
      ...typography.paragraph[i18nStore.getCurrentLanguage()].p2,
    },
    searchIcon: {
      marginTop: "5px",
      cursor: "pointer"
    }
  }
  ))
}