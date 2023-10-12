import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    searchInputContainer: {
        width: '792px',
        height: '70px',
        padding: '16px',
        borderRadius: '16px',
        background: theme.colors.white[0],
    },
}));
