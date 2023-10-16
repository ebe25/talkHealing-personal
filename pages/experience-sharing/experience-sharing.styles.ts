import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        padding: '50px 170px',
        margin: 'auto',
        maxWidth: '100%',
        background: theme.colors.gray[9],
    },
    cardContainer: {
        width: '800px',
        height: '218px',
        borderRadius: '20px',
        background: theme.colors.white[0],
    },
    forumIcons: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '8px 16px',
        background: theme.colors.gray[9],
        borderRadius: '64px',
        width: '120px',
        height: '32px',
        '&:hover': {
            background: theme.colors.gray[1],
            cursor: 'pointer',
        },
    },
}));
