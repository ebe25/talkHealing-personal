import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        padding: '50px 170px',
        margin: 'auto',
        maxWidth: '100%',
        background: theme.colors.gray[9],
    },
    badges: {
        display: 'inline-flex',
        padding: '10px 24px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '11px',
        background: theme.colors.white,
        color: theme.colors.black[3],
        '&:hover': {
            background: theme.colors.gray[1],
        },
    },

}));
export default createStyle;
