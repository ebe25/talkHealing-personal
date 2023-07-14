import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    marginTop: "35px",
    border: `1px solid ${theme.colors.gray[2]} `,
    padding: "40px",
    borderRadius: "20px",
  },
  mantineInputRightSection:{
    cursor: "pointer",
    marginRight: "50px",
  },
  passwordInput:{
    borderRadius: "34px",
  }
}));
