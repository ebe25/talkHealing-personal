import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        padding: '50px 170px',
        margin: 'auto',
        maxWidth: '100%',
        background: theme.colors.gray[9],
    },

}));
export default createStyle;
