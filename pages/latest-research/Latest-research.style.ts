import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        padding: '50px 170px',
        margin: 'auto',
        maxWidth: '100%',
        background: theme.colors.gray[9],
    },
    topicsLayout: {
        gap: '20px',
        width: '216px',
        height: '100vh',
        borderRadius: '16px',
        background: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
},

}));
export default createStyle;
