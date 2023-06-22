import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
      mainBox: {
        width:"170px",
        height:"100px" ,
        display:"grid", 
        justifyContent:"center"
      },
      text:{
        ...typography.label.en.l1,
        color: theme.colors.dark[7]
      }
    }
))