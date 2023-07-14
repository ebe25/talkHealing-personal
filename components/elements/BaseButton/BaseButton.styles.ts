import { createStyles } from '@mantine/core';
import { ButtonProps } from '@mantine/core';
import { typography } from "@/themes/Mantine/typography";
import { PolymorphicComponentProps } from "@mantine/utils";

export const STYLE_VARIANTS = {
  filled: "filled",
  outline: "outline",
  subtle: "subtle",
  disabled: "disabled"
};
//Color variant
export const COLOR_VARIANTS = {
  blue: "blue",
  red: "red",
  gray: "gray",
  green: "green"
};
type VariantMap = Record<keyof typeof STYLE_VARIANTS, React.CSSProperties>;
type ColorMap = Record<keyof typeof COLOR_VARIANTS, string>;

export interface BaseButtonProps
  extends PolymorphicComponentProps<"button", ButtonProps> {
  style_variant: keyof typeof STYLE_VARIANTS;
  color_variant: keyof typeof COLOR_VARIANTS;
}

export const createStyle = (
  langCode: "en" | "ar",
  props: BaseButtonProps
) => {

  return createStyles((theme) => ({
      [STYLE_VARIANTS.filled]: {
        ...typography.buttonText[langCode].b2,
        background : theme.colors[props.color_variant][5],
        borderRadius: '44px',
        '&:not([data-disabled]):hover': {
          background : theme.colors[props.color_variant][5],
          borderColor: "none",
        }
      },
      [STYLE_VARIANTS.subtle]: {
        ...typography.buttonText[langCode].b4,
        background : "transparent",
        borderRadius: '44px',
        '&:not([data-disabled]):hover': {
          background : "transparent",
          borderColor: "none",
        }
      },
      [STYLE_VARIANTS.disabled]: {
        ...typography.buttonText[langCode].b2,
        background : theme.colors.gray[2],
        borderRadius: '44px',
        '&:not([data-disabled]):hover': {
          background : theme.colors.gray[2],
          borderColor: "none",
        }
      },
      [STYLE_VARIANTS.outline]:{
        ...typography.buttonText[langCode].b3,
        background : "transparent",
        borderRadius: '42px',
        border:`1px solid ${theme.colors[props.color_variant][0]}`,
        '&:not([data-disabled]):hover': {
          background : "transparent",
        }
      }
}))};