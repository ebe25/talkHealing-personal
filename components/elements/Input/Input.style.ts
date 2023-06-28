import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";
import { TextInputProps } from '@mantine/core';
import { PolymorphicComponentProps } from "@mantine/utils";

export const STYLE_VARIANTS = {
  inputText1: "inputText1",
  inputText2: "inputText2",
};
type VariantMap = Record<keyof typeof STYLE_VARIANTS, string>;

export interface BaseTextInputProps extends PolymorphicComponentProps<'TextInput', TextInputProps> {
  style_variant: keyof typeof STYLE_VARIANTS;
}

export const createStyle = (
  langCode: "en" | "ar",
  props: BaseTextInputProps
) => {

  return createStyles((theme) => ({
      [STYLE_VARIANTS.inputText1]: {
        ...typography.inputFieldText[langCode].i1,
        borderRadius : '34px',
      },
      [STYLE_VARIANTS.inputText2]: {
        ...typography.inputFieldText[langCode].i2,
        borderRadius : '34px'
      },
    }
))}