import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        padding: '50px 170px',
        margin: 'auto',
        maxWidth: '100%',
        background: theme.colors.gray[9],
    },
    badges: {
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
    card: {
        width: '792px',
        height: '227px',
        borderRadius: '16px',
        background: theme.colors.white[0],
        padding: '35px',
    },
    forumIcons: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 16px',
        background: theme.colors.gray[9],
        borderRadius: '64px',
        width: '83px',
        height: '32px',
        '&:hover': {
            background: theme.colors.gray[1],
            cursor: 'pointer',
        },
    },

}));
export default createStyle;
