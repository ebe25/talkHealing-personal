import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        width: '792px',
        height: '221px',
        borderRadius: '16px',
        background: theme.colors.indigo[2],
        marginTop: '8px',
        marginBottom: 'auto',
    },
    cardText:{
        width: '728px',
        height: 'auto',
    },
}));
