import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        background: theme.colors.gray[9],
        padding: '50px 170px',
        margin: '0 auto',
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
        width: '325px',
        height: '440px',
        borderRadius: '16px',
        background: theme.colors.white,
    },
}));

export default createStyle;