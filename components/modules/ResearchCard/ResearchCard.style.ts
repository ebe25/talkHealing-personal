import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        width: '792px',
        height: '221px',
        borderRadius: '16px',
        background: theme.colors.white[0],
        marginTop: '8px',
        marginBottom: 'auto',
        padding: '35px 32px',
    },
    userPostedButton: {
        borderRadius: '64px',
        background: theme.colors.gray[9],
        color: '#595959',
        marginTop: '24px ',
    },
    datePostedtext: {
        borderRadius: '64px',
        background: theme.colors.gray[9],
        color: '#595959',
        width: '125px',
        height: '32px',
        marginTop: '24px ',
    },
}));
