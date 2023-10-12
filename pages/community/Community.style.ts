import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        background: theme.colors.gray[9],
        padding: '50px 170px',
        margin: '0 auto',
    },
}));

export default createStyle;
