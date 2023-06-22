import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
      inputText1: {
        ...typography.inputFieldText.en.i1,
        borderRadius : '34px'
      },
      inputText2: {
        ...typography.inputFieldText.en.i2,
        borderRadius : '34px'
      },
    }
))