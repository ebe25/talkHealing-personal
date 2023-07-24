import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";
import { useStores } from '@/models';


export const createStyle = () => {
  const {i18nStore} =useStores()
  return createStyles((theme) => ({
    wrapper: {
    // width:"370px",
    height: "44px",
    borderRadius: "34px",
    ...typography.inputFieldText[i18nStore.getCurrentLanguage()].i1,
    color: theme.colors.gray[1],
    
  },
  rightSection: { 
    right: i18nStore.isRTL? "90%":""
  },
  innerInput: {
    textAlign: i18nStore.isRTL? "right":"left",
    padding:" 0px 0px"
  }
}))};