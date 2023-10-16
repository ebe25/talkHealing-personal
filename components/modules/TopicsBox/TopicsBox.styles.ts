import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        width: '100%',
        background: theme.colors.grape[0],

    },
    topicsLayout: {
        gap: '20px',
        width: '216px',
        height: '100vh',
        borderRadius: '16px',
        background: theme.colors.white[0],
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    topicsText: {
        '&:hover': {
            background: theme.colors.gray[0],
            borderRadius: '11px',
        },
    },
}));
