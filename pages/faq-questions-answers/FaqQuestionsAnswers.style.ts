import { createStyles } from '@mantine/core';
import {typography } from "@/themes/Mantine/typography";

export default createStyles((theme) => ({
    termsAndConditionBox : {
        padding: "50px",
        width: "100%",
        height: "100%"
    },
    faqQuestionsAnswersBox :{
        marginTop :'100px',
        [theme.fn.smallerThan('md')]: {
            marginTop: 50,
          },
    }
}));