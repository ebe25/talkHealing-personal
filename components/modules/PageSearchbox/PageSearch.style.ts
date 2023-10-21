import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    searchInputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '70px',
        padding: '16px',
        borderRadius: '16px',
        background: theme.colors.white[0],
        [theme.fn.smallerThan('xs')]: {
            maxWidth: '60%',

        },
        [theme.fn.smallerThan('sm')]: {
          background: 'none',
        },
        [theme.fn.smallerThan('md')]: {
            gap: '10px',
            height: '120px',
            flexDirection: 'column',

        },
    },
}));
