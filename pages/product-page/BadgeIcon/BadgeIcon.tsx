import React from 'react';  
import useStyles from "../ProductPage.style";

import { Box, Image, useMantineTheme } from "@mantine/core";

function BadgeIcon(props: {
  logo: string;
  title: string;
  w: string;
  h: string;
}) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Box
      className={classes.boxStyles}
      sx={{
        border: `solid 1px ${theme.colors.gray[2]}`
      }}
    >
      <Image src={props.logo} width={props.w} height={props.h} />
      {props.title}
    </Box>
  );
}

export default BadgeIcon;
