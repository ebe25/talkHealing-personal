import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        background: theme.colors.gray[9],
        margin: 'auto',
    },
    button_container: {
        display: 'inline-flex',
        padding: '10px 24px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '11px',
    },
    card_container: {
        width: '300px',
        height: '440px',
        borderRadius: '16px',
        background: theme.colors.white,
    },
}));

export default createStyle;
