import { createStyles } from '@mantine/core';

export const createStyle = () => createStyles((theme) => ({
    container: {
        padding: '80px 200px',
        margin: 'auto',
    },
    searchInputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '792px',
        height: '70px',
        padding: '25px 0px 26px 24px',
        borderRadius: '16px',
        background: theme.colors.red,
    },
    topicsLayout: {
        gap: '20px',
        width: '216px',
        height: '407px',
        borderRadius: '16px',
        background: theme.colors.teal,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
}

}));
export default createStyle;
